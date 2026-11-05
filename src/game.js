import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { World, FARM, LAYOUT } from './world.js';
import { Player } from './player.js';
import { SlimeManager } from './slimes.js';
import { UI, CROPS } from './ui.js';
import { Audio } from './audio.js';
import { clamp, damp, distToSegment, glowTexture, rand } from './util.js';

const SAVE_KEY = 'emberfall-vale-save-v1';
const isTouch = () => matchMedia('(pointer: coarse)').matches;

const QUESTS = [
  { id: 'q1', name: 'A New Beginning', desc: 'Till the soil and plant 4 seeds on your farm.', target: 4, get: (s) => s.stats.planted, reward: { gold: 60 }, rewardText: '+60 ◈' },
  { id: 'q2', name: 'First Watering', desc: 'Water 4 crops in a single day.', target: 4, get: (s) => s.stats.wateredToday, reward: { seeds: { sun: 2 } }, rewardText: '+2 Sunberry seeds' },
  { id: 'q3', name: 'Harvest Moon', desc: 'Harvest 3 grown crops.', target: 3, get: (s) => s.stats.harvested, reward: { gold: 150, essence: 2 }, rewardText: '+150 ◈ · +2 ✦' },
  { id: 'q4', name: 'Whisperwood Threat', desc: 'Clear 3 slimes from the Whisperwood.', target: 3, get: (s) => s.stats.slimes, reward: { gold: 200, essence: 2 }, rewardText: '+200 ◈ · +2 ✦' },
  { id: 'q5', name: 'Wake the Moonwell', desc: 'Offer 5 essence to awaken the Moonwell.', target: 1, get: (s) => s.blessing, reward: { gold: 200 }, rewardText: '+200 ◈' },
  { id: 'q6', name: 'The Ember Crown', desc: 'Earn 900 gold and buy the Ember Crown from Zephyr.', target: 1, get: (s) => s.flags.won, reward: {}, rewardText: 'Restore the vale' },
];

function defaultState() {
  return {
    version: 1,
    day: 1,
    hours: 8.2,
    weather: 'clear',
    season: 'Spring',
    gold: 120,
    energy: 100,
    maxEnergy: 100,
    health: 100,
    maxHealth: 100,
    essence: 0,
    wood: 0,
    stone: 0,
    seeds: { moon: 8, sun: 2, star: 0 },
    crops: { moon: 0, sun: 0, star: 0 },
    selectedSeed: 'moon',
    blessing: 0,
    sprinklerCount: 0,
    stats: { planted: 0, wateredToday: 0, harvested: 0, slimes: 0, earned: 0, dayEarned: 0 },
    quests: {},
    flags: { tutTilled: false, tutPlanted: false, tutWatered: false, tutShop: false, charm: false, won: false, healDay: 0 },
    soundOn: true,
  };
}

// ---------------- particles ----------------
class Particles {
  constructor(scene) {
    this.max = 260;
    this.pos = new Float32Array(this.max * 3);
    this.col = new Float32Array(this.max * 3);
    this.vel = new Float32Array(this.max * 3);
    this.life = new Float32Array(this.max);
    this.maxLife = new Float32Array(this.max);
    this.baseCol = [];
    for (let i = 0; i < this.max; i++) {
      this.pos[i * 3 + 1] = -999;
      this.life[i] = 0;
      this.baseCol.push(new THREE.Color());
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.26, map: glowTexture('#ffffff', 0.5), vertexColors: true,
      transparent: true, opacity: 0.95, depthWrite: false, sizeAttenuation: true,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.geo = geo;
    scene.add(this.points);
    this.cursor = 0;
  }

  emit(pos, color, count = 10, speed = 2.4, up = 2.4) {
    const c = new THREE.Color(color);
    for (let n = 0; n < count; n++) {
      const i = this.cursor++ % this.max;
      this.life[i] = this.maxLife[i] = rand(0.35, 0.85);
      this.pos[i * 3] = pos.x + rand(-0.2, 0.2);
      this.pos[i * 3 + 1] = pos.y + rand(0, 0.4);
      this.pos[i * 3 + 2] = pos.z + rand(-0.2, 0.2);
      const a = rand(0, Math.PI * 2), s = rand(0.2, speed);
      this.vel[i * 3] = Math.cos(a) * s;
      this.vel[i * 3 + 1] = rand(0.6, up);
      this.vel[i * 3 + 2] = Math.sin(a) * s;
      this.baseCol[i].copy(c);
      this.col[i * 3] = c.r; this.col[i * 3 + 1] = c.g; this.col[i * 3 + 2] = c.b;
    }
  }

  update(dt) {
    let dirty = false;
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      dirty = true;
      if (this.life[i] <= 0) {
        this.pos[i * 3 + 1] = -999;
        continue;
      }
      this.vel[i * 3 + 1] -= 7.5 * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const f = clamp(this.life[i] / this.maxLife[i], 0, 1);
      this.col[i * 3] = this.baseCol[i].r * f;
      this.col[i * 3 + 1] = this.baseCol[i].g * f;
      this.col[i * 3 + 2] = this.baseCol[i].b * f;
    }
    if (dirty) {
      this.geo.attributes.position.needsUpdate = true;
      this.geo.attributes.color.needsUpdate = true;
    }
  }
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.audio = new Audio();
    this.joystick = { x: 0, y: 0 };
    this.keys = new Set();
    this.state = defaultState();
    this.mode = 'title';
    this.paused = false;
    this.transitioning = false;
    this.sleeping = false;
    this.clock = new THREE.Clock();
    this.cameraYaw = 0.15;
    this.cameraPitch = 0.5;
    this.cameraDist = 14;
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.target = null;
    this.lastPrompt = '';
    this.lastActionKey = '';
    this.uiAccum = 0;
    this.shake = 0;
    this.invuln = 0;
    this.titleYaw = -0.5;
    this.titleTime = 0;
    this.drag = null;
    this.stepAccum = 0;
    this.ambientAccum = 0;
    this.fpsAccum = 0;
    this.frames = 0;
    this.lowFps = false;
    this.soundOn = true;
    this.rainToday = false;

    this.setupRenderer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 500);
    this.camera.position.set(16, 15, 24);

    const lowQ = isTouch() && (navigator.hardwareConcurrency || 4) <= 4;
    this.world = new World(this.scene, this.renderer, { lowQuality: lowQ });
    this.player = new Player(this.scene);
    this.slimes = new SlimeManager(this.scene, this.world);
    this.particles = new Particles(this.scene);
    this.ui = new UI(this);
    this.setupPost();
    this.setupInput();
    this.setupResize();

    this.player.setPosition(LAYOUT.spawn.x, this.world.height(LAYOUT.spawn.x, LAYOUT.spawn.z), LAYOUT.spawn.z);
    this.player.facing = Math.PI;
    this.player.group.rotation.y = Math.PI;
    this.world.updateSky(16.7);
    this.updateCamera(0, true);
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  // ---------------- setup ----------------
  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !isTouch(),
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isTouch() ? 1.5 : 1.8));
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  setupPost() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const res = new THREE.Vector2(Math.max(1, innerWidth * 0.5), Math.max(1, innerHeight * 0.5));
    this.bloom = new UnrealBloomPass(res, isTouch() ? 0.42 : 0.5, 0.55, 0.86);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.composer.setSize(innerWidth, innerHeight);
  }

  setupResize() {
    addEventListener('resize', () => {
      this.camera.aspect = innerWidth / innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(innerWidth, innerHeight);
      this.composer.setSize(innerWidth, innerHeight);
      this.bloom.setSize(innerWidth * 0.5, innerHeight * 0.5);
    });
  }

  setupInput() {
    addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (this.ui.modalKind) this.ui.closeModal();
        return;
      }
      if (this.mode !== 'play' || this.paused) return;
      if (['Space', 'KeyE', 'Digit1', 'Digit2', 'Digit3', 'KeyM'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (e.repeat) return;
      if (e.code === 'KeyE') this.doAction();
      if (e.code === 'Space') this.doAttack();
      if (e.code === 'Digit1') this.selectSeed('moon');
      if (e.code === 'Digit2') this.selectSeed('sun');
      if (e.code === 'Digit3') this.selectSeed('star');
      if (e.code === 'KeyM') this.ui.openMenu();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());

    const cv = this.renderer.domElement;
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    cv.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play' || this.paused) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY };
      try { cv.setPointerCapture(e.pointerId); } catch {}
    });
    cv.addEventListener('pointermove', (e) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      const dx = e.clientX - this.drag.x;
      const dy = e.clientY - this.drag.y;
      this.drag.x = e.clientX; this.drag.y = e.clientY;
      this.cameraYaw -= dx * 0.0055;
      this.cameraPitch = clamp(this.cameraPitch + dy * 0.0028, 0.46, 1.02);
    });
    const dragEnd = (e) => {
      if (this.drag && e.pointerId === this.drag.id) this.drag = null;
    };
    cv.addEventListener('pointerup', dragEnd);
    cv.addEventListener('pointercancel', dragEnd);
    cv.addEventListener('wheel', (e) => {
      if (this.mode !== 'play') return;
      e.preventDefault();
      this.cameraDist = clamp(this.cameraDist + Math.sign(e.deltaY) * 1.2, 10, 26);
    }, { passive: false });

    addEventListener('beforeunload', () => { if (this.mode === 'play') this.save(); });
  }

  // ---------------- title / new game ----------------
  boot() {
    const hasSave = !!this.readSave();
    this.ui.showTitle(hasSave);
    this.mode = 'title';
    this.ui.setHudVisible(false);
    this.state.hours = 16.7;
    this.world.setWeather('clear');
    this.decorateTitleFarm();
    const note = document.getElementById('perf-note');
    note.textContent = 'The vale awaits…';
    setTimeout(() => note.classList.add('gone'), 1600);
    this.exposeDebug();
  }

  startNew() {
    localStorage.removeItem(SAVE_KEY);
    this.resetWorldState();
    this.state = defaultState();
    this.soundOn = true;
    this.audio.setMuted(false);
    this.beginPlay();
    this.ui.toast('Welcome to Emberfall Vale, farmer.', 'quest', '✦');
    setTimeout(() => this.ui.showHint('Walk onto the farm and press Use to till the soil.', 6500), 900);
    setTimeout(() => this.ui.toast('Zephyr the wizard trades to the east. The Moonwell glows to the west.', '', '🧭'), 5200);
    this.save();
  }

  continueGame() {
    const data = this.readSave();
    if (!data) { this.startNew(); return; }
    this.resetWorldState();
    this.loadState(data);
    this.beginPlay();
    this.ui.toast(`Welcome back. Day ${this.state.day} in the vale.`, 'quest', '✦');
  }

  decorateTitleFarm() {
    const picks = [
      [2, 2, 'moon', 2], [3, 2, 'moon', 2], [4, 2, 'moon', 1], [5, 2, 'sun', 1],
      [2, 3, 'sun', 3], [3, 3, 'moon', 1], [4, 3, 'sun', 2], [5, 3, 'moon', 2],
      [2, 4, 'star', 2], [3, 4, 'sun', 1], [4, 4, 'moon', 0], [5, 4, 'sun', 0],
    ];
    for (const [i, j, type, grown] of picks) {
      const p = this.world.plots[j * FARM.cols + i];
      if (!p) continue;
      p.tilled = true;
      p.watered = Math.random() < 0.5;
      p.crop = { type, grown, growDays: CROPS[type].grow, watered: p.watered };
      this.world.refreshPlot(p);
    }
    // a little trimmed path into the field, purely for the title view
    const p8 = this.world.plots[4 * FARM.cols + 1];
    if (p8) { p8.tilled = true; this.world.refreshPlot(p8); }
  }

  beginPlay() {
    this.mode = 'play';
    this.paused = false;
    this.ui.hideTitle();
    this.ui.setHudVisible(true);
    this.ui.sleepFade(false);
    this.audio.init();
    this.audio.setMuted(!this.soundOn);
    const px = this.state.playerPos?.x ?? LAYOUT.spawn.x;
    const pz = this.state.playerPos?.z ?? LAYOUT.spawn.z;
    this.player.setPosition(px, this.world.height(px, pz), pz);
    this.player.facing = this.state.playerFacing ?? Math.PI;
    this.player.group.rotation.y = this.player.facing;
    this.cameraYaw = 0.12;
    this.cameraPitch = 0.5;
    this.cameraDist = 14;
    this.updateCamera(0, true);
    this.updateTarget();
    this.ui.update(this.state);
  }

  resetWorldState() {
    for (const p of this.world.plots) {
      p.tilled = false; p.watered = false; p.crop = null;
      if (p.visual) { this.scene.remove(p.visual); p.visual = null; }
      this.world.updateSoilVisual(p);
    }
    for (const sp of this.world.sprinklers) this.scene.remove(sp.group);
    this.world.sprinklers.length = 0;
    this.world.newDay(1);
    this.world.day = 1;
    this.world.setWeather('clear');
    this.slimes.resetDay(1);
    this.invuln = 0;
    this.transitioning = false;
    this.sleeping = false;
  }

  // ---------------- save ----------------
  save() {
    if (this.mode !== 'play') return;
    const s = this.state;
    const data = {
      ...s,
      playerPos: { x: this.player.pos.x, z: this.player.pos.z },
      playerFacing: this.player.facing,
      plots: this.world.plots.map((p) => ({
        tilled: p.tilled,
        watered: p.watered,
        crop: p.crop ? { type: p.crop.type, grown: p.crop.grown } : null,
      })),
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch {}
  }

  readSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || data.version !== 1) return null;
      return data;
    } catch { return null; }
  }

  loadState(data) {
    const base = defaultState();
    this.state = {
      ...base, ...data,
      seeds: { ...base.seeds, ...(data.seeds || {}) },
      crops: { ...base.crops, ...(data.crops || {}) },
      stats: { ...base.stats, ...(data.stats || {}) },
      flags: { ...base.flags, ...(data.flags || {}) },
      quests: { ...(data.quests || {}) },
      blessing: data.blessing || 0,
      sprinklerCount: data.sprinklerCount || 0,
    };
    this.soundOn = this.state.soundOn !== false;
    this.world.setWeather(this.state.weather === 'rain' ? 'rain' : 'clear');
    this.world.day = this.state.day;
    this.world.newDay(this.state.day);
    for (let i = 0; i < (data.plots?.length || 0); i++) {
      const pd = data.plots[i];
      const p = this.world.plots[i];
      if (!pd || !p) continue;
      p.tilled = !!pd.tilled;
      p.watered = !!pd.watered;
      if (pd.crop && CROPS[pd.crop.type]) {
        p.crop = { type: pd.crop.type, grown: pd.crop.grown || 0, growDays: CROPS[pd.crop.type].grow, watered: p.watered };
      } else p.crop = null;
      this.world.refreshPlot(p);
    }
    for (let i = 0; i < this.state.sprinklerCount; i++) this.world.addSprinkler(i);
  }

  // ---------------- loop ----------------
  loop() {
    requestAnimationFrame(this.loop);
    let dt = this.clock.getDelta();
    if (dt > 0.06) dt = 0.06;
    this.update(dt);
    this.composer.render();
  }

  update(dt) {
    this.frames++;
    this.fpsAccum += dt;
    if (this.fpsAccum > 2) {
      const fps = this.frames / this.fpsAccum;
      if (fps < 26 && !this.lowFps) {
        this.lowFps = true;
        this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.1));
        this.bloom.enabled = false;
      }
      this.fpsAccum = 0; this.frames = 0;
    }

    const playing = this.mode === 'play' && !this.paused && !this.transitioning;
    if (this.mode === 'play' && playing) {
      this.state.hours += dt * 0.042;
      if (this.state.hours >= 24) {
        this.state.hours = 24;
        this.sleep(true);
      }
      this.updateMovement(dt);
      this.updateTarget();
      this.updateActionsUI();
      this.invuln = Math.max(0, this.invuln - dt);
      if (this.shake > 0) this.shake = Math.max(0, this.shake - dt * 2.2);
      this.stepAccum -= dt;
      if (this.player.moving && this.stepAccum <= 0) {
        this.stepAccum = 0.36;
        this.audio.sfx('step');
      }
    } else {
      this.player.moving = false;
      this.player.update(dt, false, 0, this.state.hours);
      this.player.faceTowards(this.player.pos.x + Math.sin(this.player.facing), this.player.pos.z + Math.cos(this.player.facing), 1);
    }

    this.player.update(dt, this.player.moving, 4.4, this.state.hours);
    this.slimes.update(playing ? dt : 0, this.player.pos, this);
    this.particles.update(dt);
    this.world.update(dt, this.state.hours, this.state.weather, this.player.pos);
    this.updateCamera(dt, false);

    if (playing) {
      this.autosaveAccum = (this.autosaveAccum || 0) + dt;
      if (this.autosaveAccum > 20) { this.autosaveAccum = 0; this.save(); }
    }
    this.uiAccum += dt;
    if (this.uiAccum > 0.12) {
      this.uiAccum = 0;
      if (this.mode === 'play') this.ui.update(this.state);
    }
    this.ambientAccum += dt;
    if (this.ambientAccum > 1) {
      this.ambientAccum = 0;
      if (this.mode === 'play') this.audio.updateAmbient(this.state.hours, this.state.hours > 19 || this.state.hours < 6);
    }

    if (playing) {
      if (!this.state.flags.tutTilled && this.state.hours > 7.4) {
        // no-op ambient hint handled contextually
      }
      if (this.state.hours > 19.5 && !this.state.flags.nightHint) {
        this.state.flags.nightHint = true;
        this.ui.showHint('Dusk falls. Slimes grow bold — or sleep at the cottage.', 5000);
      }
      if (this.state.hours > 23.2 && !this.state.flags.midnightHint) {
        this.state.flags.midnightHint = true;
        this.ui.showHint('Midnight approaches. Head home to sleep.', 5000);
      }
    }
  }

  // ---------------- movement ----------------
  updateMovement(dt) {
    let f = 0, s = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) f += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) f -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) s += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) s -= 1;
    if (Math.abs(this.joystick.y) > 0.16) f += -this.joystick.y;
    if (Math.abs(this.joystick.x) > 0.16) s += this.joystick.x;
    let len = Math.hypot(f, s);
    if (len > 1) { f /= len; s /= len; len = 1; }
    const moving = len > 0.05;
    this.player.moving = moving;
    if (!moving) return;

    const yaw = this.cameraYaw;
    const speed = 4.5;
    const vx = (-Math.sin(yaw) * f + Math.cos(yaw) * s) * speed;
    const vz = (-Math.cos(yaw) * f - Math.sin(yaw) * s) * speed;
    this.player.pos.x += vx * dt;
    this.player.pos.z += vz * dt;
    this.resolveCollisions(this.player.pos);
    const r = Math.hypot(this.player.pos.x, this.player.pos.z);
    if (r > 54) {
      this.player.pos.x *= 54 / r;
      this.player.pos.z *= 54 / r;
    }
    this.player.pos.y = this.world.height(this.player.pos.x, this.player.pos.z);
    this.player.faceDirection(vx, vz, dt);
  }

  resolveCollisions(pos) {
    const R = 0.38;
    for (const c of this.world.colliders) {
      if (c.boundary) continue;
      if (c.tree && !c.tree.active) continue;
      if (c.rock && !c.rock.active) continue;
      if (c.kind === 'stone') continue;
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const min = c.r + R;
      if (d < min && d > 0.0001) {
        pos.x = c.x + (dx / d) * min;
        pos.z = c.z + (dz / d) * min;
      }
    }
    for (const b of this.world.boxes) {
      const nx = clamp(pos.x, b.minX, b.maxX);
      const nz = clamp(pos.z, b.minZ, b.maxZ);
      const dx = pos.x - nx, dz = pos.z - nz;
      const d = Math.hypot(dx, dz);
      if (d < R) {
        if (d > 0.0001) {
          pos.x = nx + (dx / d) * R;
          pos.z = nz + (dz / d) * R;
        } else {
          // inside: push out shortest side
          const dl = pos.x - b.minX, dr = b.maxX - pos.x, dt = pos.z - b.minZ, db = b.maxZ - pos.z;
          const m = Math.min(dl, dr, dt, db);
          if (m === dl) pos.x = b.minX - R;
          else if (m === dr) pos.x = b.maxX + R;
          else if (m === dt) pos.z = b.minZ - R;
          else pos.z = b.maxZ + R;
        }
      }
    }
    for (const sg of this.world.segments) {
      const res = distToSegment(pos.x, pos.z, sg.ax, sg.az, sg.bx, sg.bz);
      const min = R + sg.r;
      if (res.dist < min && res.dist > 0.0001) {
        pos.x += (res.nx / res.dist) * (min - res.dist);
        pos.z += (res.nz / res.dist) * (min - res.dist);
      }
    }
    // keep out of the pond
    const pd = Math.hypot(pos.x - LAYOUT.pond.x, pos.z - LAYOUT.pond.z);
    if (pd < 5.6) {
      const k = 5.6 / Math.max(pd, 0.001);
      pos.x = LAYOUT.pond.x + (pos.x - LAYOUT.pond.x) * k;
      pos.z = LAYOUT.pond.z + (pos.z - LAYOUT.pond.z) * k;
    }
  }

  // ---------------- interaction targeting ----------------
  updateTarget() {
    const feet = this.world.plotAtWorld(this.player.pos.x, this.player.pos.z);
    const fwd = this.player.forward();
    const ahead = this.world.plotAtWorld(this.player.pos.x + fwd.x * 1.15, this.player.pos.z + fwd.z * 1.15);
    const plot = feet || ahead;
    let best = null;
    if (plot) {
      best = { kind: 'plot', plot, dist: 0, label: '', icon: '', enabled: true, prompt: '' };
      this.world.setTargetPlot(plot);
    } else {
      this.world.setTargetPlot(null);
    }

    const px = this.player.pos.x, pz = this.player.pos.z;
    const cands = [];
    const addCand = (kind, x, z, range, label, icon, prompt) => {
      const d = Math.hypot(px - x, pz - z);
      if (d < range) cands.push({ kind, x, z, dist: d, label, icon, prompt, enabled: true });
    };
    addCand('wizard', LAYOUT.wizard.x, LAYOUT.wizard.z, 3.0, 'Talk', '💬', 'Talk to Zephyr');
    addCand('tower', LAYOUT.towerDoor.x, LAYOUT.towerDoor.z, 2.9, 'Shop', '🛒', "Enter Zephyr's shop");
    addCand('dryad', LAYOUT.dryad.x, LAYOUT.dryad.z, 2.9, 'Talk', '💬', 'Talk to Nissa');
    addCand('home', LAYOUT.homeDoor.x, LAYOUT.homeDoor.z, 3.0, 'Sleep', '🌙', 'Sleep until dawn');
    addCand('shrine', LAYOUT.shrine.x, LAYOUT.shrine.z, 3.5, 'Moonwell', '✦', 'Touch the Moonwell');

    let treeBest = null, td = 2.8;
    for (const t of this.world.trees) {
      if (!t.active) continue;
      const d = Math.hypot(px - t.x, pz - t.z) - t.scale * 0.35;
      if (d < td) { td = d; treeBest = t; }
    }
    if (treeBest) cands.push({ kind: 'tree', dist: td, label: 'Chop', icon: '🪓', prompt: 'Chop the tree', tree: treeBest, enabled: true });
    let rockBest = null, rd = 2.7;
    for (const r of this.world.rocks) {
      if (!r.active) continue;
      const d = Math.hypot(px - r.x, pz - r.z) - r.scale * 0.4;
      if (d < rd) { rd = d; rockBest = r; }
    }
    if (rockBest) cands.push({ kind: 'rock', dist: rd, label: 'Mine', icon: '⛏', prompt: 'Mine the stone', rock: rockBest, enabled: true });

    if (!plot && cands.length) {
      cands.sort((a, b) => a.dist - b.dist);
      best = cands[0];
    }
    if (best && best.kind === 'plot') {
      this.describePlot(best);
    }
    this.target = best;
  }

  describePlot(t) {
    const p = t.plot;
    if (!p.tilled) {
      t.icon = '🪓'; t.label = 'Till'; t.prompt = 'Till the soil'; t.enabled = true;
      return;
    }
    if (!p.crop) {
      const type = this.state.selectedSeed;
      const c = CROPS[type];
      const n = this.state.seeds[type] || 0;
      t.icon = '🌱'; t.label = n > 0 ? 'Plant' : 'No seed';
      t.prompt = n > 0 ? `Plant ${c.name} (${n} left)` : `No ${c.name} seeds — visit Zephyr`;
      t.enabled = n > 0;
      return;
    }
    const c = CROPS[p.crop.type];
    if (p.crop.grown >= p.crop.growDays) {
      t.icon = '🌾'; t.label = 'Harvest'; t.prompt = `Harvest ${c.name}`; t.enabled = true;
    } else if (!p.crop.watered) {
      t.icon = '💧'; t.label = 'Water'; t.prompt = `Water ${c.name}`; t.enabled = true;
    } else {
      t.icon = '⌛'; t.label = 'Growing';
      t.prompt = `${c.name} · ${p.crop.grown}/${p.crop.growDays} nights · watered`;
      t.enabled = false;
    }
  }

  updateActionsUI() {
    const t = this.target;
    const prompt = t ? t.prompt : '';
    const actKey = t ? `${t.label}|${t.icon}|${t.enabled}` : '';
    if (prompt !== this.lastPrompt) {
      this.lastPrompt = prompt;
      this.ui.setPrompt(prompt, 'E');
    }
    if (actKey !== this.lastActionKey) {
      this.lastActionKey = actKey;
      if (t) this.ui.setAction(t.icon, t.label, t.enabled);
      else this.ui.setAction('✋', 'Use', false);
    }
  }

  selectSeed(type) {
    if (!CROPS[type]) return;
    this.state.selectedSeed = type;
    this.ui.updateSeeds(this.state);
    this.ui.update(this.state);
    this.audio.sfx('click');
    if ((this.state.seeds[type] || 0) <= 0) {
      this.ui.toast(`No ${CROPS[type].name} seeds. Zephyr sells them east of the farm.`, '', '🌱');
    }
  }

  // ---------------- actions ----------------
  doAction() {
    if (this.mode !== 'play' || this.paused || this.transitioning) return;
    this.updateTarget();
    const t = this.target;
    if (!t) {
      this.ui.toast('Nothing to use here. Walk to soil, a tree, or a friendly face.', '', '✋');
      this.audio.sfx('error');
      return;
    }
    this.audio.init();
    if (t.kind === 'plot') return this.actionPlot(t.plot);
    if (t.kind === 'tree') return this.actionChop(t.tree);
    if (t.kind === 'rock') return this.actionMine(t.rock);
    if (t.kind === 'wizard') return this.talkWizard();
    if (t.kind === 'tower') { this.state.flags.tutShop = true; this.ui.openShop(); return; }
    if (t.kind === 'dryad') return this.talkDryad();
    if (t.kind === 'home') return this.askSleep();
    if (t.kind === 'shrine') { this.ui.openShrine(); this.audio.sfx('magic'); return; }
  }

  spendEnergy(n) {
    if (this.state.energy < n) {
      this.ui.toast('Too tired. Drink a potion or sleep until dawn.', '', '⚡');
      this.audio.sfx('error');
      return false;
    }
    this.state.energy = Math.max(0, this.state.energy - n);
    return true;
  }

  actionPlot(p) {
    this.player.faceTowards(p.x, p.z, 1);
    if (!p.tilled) {
      if (!this.spendEnergy(3)) return;
      p.tilled = true;
      p.watered = false;
      p.crop = null;
      this.world.refreshPlot(p);
      this.particles.emit(new THREE.Vector3(p.x, 0.2, p.z), '#8a6a42', 12, 2.2, 2.2);
      this.ui.float('+soil', new THREE.Vector3(p.x, 0.8, p.z), '');
      this.audio.sfx('till');
      if (!this.state.flags.tutTilled) {
        this.state.flags.tutTilled = true;
        setTimeout(() => this.ui.showHint('Pick a seed from the hotbar, then press Use to plant it.', 6000), 500);
      }
      this.save();
      return;
    }
    if (!p.crop) {
      const type = this.state.selectedSeed;
      const c = CROPS[type];
      if ((this.state.seeds[type] || 0) <= 0) {
        this.ui.toast(`No ${c.name} seeds. Buy more from Zephyr.`, '', '🌱');
        this.audio.sfx('error');
        return;
      }
      if (!this.spendEnergy(1)) return;
      this.state.seeds[type]--;
      const raining = this.state.weather === 'rain';
      p.crop = { type, grown: 0, growDays: c.grow, watered: raining };
      p.watered = raining;
      this.world.refreshPlot(p);
      this.particles.emit(new THREE.Vector3(p.x, 0.3, p.z), '#a8e08a', 10, 1.8, 2.2);
      this.ui.float(`🌱 ${c.name}`, new THREE.Vector3(p.x, 1.0, p.z), 'heal');
      this.audio.sfx('plant');
      this.state.stats.planted++;
      if (!this.state.flags.tutPlanted) {
        this.state.flags.tutPlanted = true;
        setTimeout(() => this.ui.showHint('Now water it. Crops only grow overnight when watered.', 6000), 500);
      }
      this.checkQuests();
      this.save();
      return;
    }
    const c = CROPS[p.crop.type];
    if (p.crop.grown >= p.crop.growDays) {
      const type = p.crop.type;
      this.state.crops[type] = (this.state.crops[type] || 0) + 1;
      this.state.stats.harvested++;
      p.crop = null;
      p.watered = false;
      this.world.refreshPlot(p);
      this.particles.emit(new THREE.Vector3(p.x, 0.8, p.z), c.color, 22, 3.0, 3.2);
      this.particles.emit(new THREE.Vector3(p.x, 0.6, p.z), '#ffe9a0', 10, 2.0, 2.6);
      this.ui.float(`+1 ${c.name}`, new THREE.Vector3(p.x, 1.4, p.z), 'gold');
      this.audio.sfx('harvest');
      this.ui.toast(`${c.name} harvested! Sell it at Zephyr's tower for ${c.sell} ◈.`, 'quest', '🌾');
      this.checkQuests();
      this.save();
      return;
    }
    if (!p.crop.watered) {
      if (!this.spendEnergy(1)) return;
      p.crop.watered = true;
      p.watered = true;
      this.world.refreshPlot(p);
      this.state.stats.wateredToday++;
      this.particles.emit(new THREE.Vector3(p.x, 0.4, p.z), '#9fe6ff', 14, 1.8, 2.4);
      this.ui.float('💧', new THREE.Vector3(p.x, 0.9, p.z), 'ess');
      this.audio.sfx('water');
      if (!this.state.flags.tutWatered) {
        this.state.flags.tutWatered = true;
        setTimeout(() => this.ui.showHint('Sleep at the cottage door to end the day. Watered crops grow overnight.', 6500), 500);
      }
      this.checkQuests();
      this.save();
      return;
    }
    this.ui.toast(`${c.name} is watered and growing. It needs ${p.crop.growDays - p.crop.grown} more night(s).`, '', '⌛');
  }

  actionChop(tree) {
    if (!this.spendEnergy(4)) return;
    this.player.faceTowards(tree.x, tree.z, 1);
    const fell = this.world.chopTree(tree);
    this.state.wood += 1;
    this.state.stats.wood = (this.state.stats.wood || 0) + 1;
    this.particles.emit(new THREE.Vector3(tree.x, 1.2, tree.z), '#a97d4f', 14, 2.6, 2.6);
    this.particles.emit(new THREE.Vector3(tree.x, 1.5, tree.z), '#6b9e4b', 8, 2.2, 2.2);
    this.ui.float('+1 🪵', new THREE.Vector3(tree.x, 2.0, tree.z), '');
    this.audio.sfx('chop');
    this.shake = 0.05;
    if (fell) this.ui.toast('Timber! The stump will regrow in a couple of days.', '', '🪵');
    this.save();
  }

  actionMine(rock) {
    if (!this.spendEnergy(4)) return;
    this.player.faceTowards(rock.x, rock.z, 1);
    const broke = this.world.mineRock(rock);
    this.state.stone += 1;
    const gotEssence = Math.random() < 0.28;
    if (gotEssence) this.state.essence += 1;
    this.particles.emit(new THREE.Vector3(rock.x, 0.8, rock.z), '#a9adb5', 16, 2.8, 2.8);
    this.particles.emit(new THREE.Vector3(rock.x, 0.6, rock.z), gotEssence ? '#9fe6ff' : '#ffe4a0', 8, 2.0, 2.4);
    this.ui.float(gotEssence ? '+1 🪨 · +1 ✦' : '+1 🪨', new THREE.Vector3(rock.x, 1.5, rock.z), gotEssence ? 'ess' : '');
    this.audio.sfx('mine');
    this.shake = 0.06;
    if (broke) this.ui.toast('The rock splits. More will surface in a few days.', '', '🪨');
    this.save();
  }

  talkWizard() {
    this.audio.sfx('magic');
    this.ui.openDialog({
      title: 'Zephyr',
      subtitle: 'Wandering wizard · Keeper of Arcana',
      portrait: '🧙',
      text: `"Ah, the new keeper of Emberfall! I felt your boots on the old soil from three hills away."<br><br>"The vale remembers you, even if you do not remember it. Buy seeds. Grow something impossible. And if you find <em>essence</em> in the Whisperwood, bring it to the Moonwell."`,
      options: [
        { label: 'Browse wares (shop)', action: () => { this.ui.closeModal(); setTimeout(() => this.ui.openShop(), 140); } },
        { label: 'Ask about the Ember Crown', action: () => this.wizardLore() },
        { label: 'Farewell', action: () => this.ui.closeModal() },
      ],
    });
  }

  wizardLore() {
    this.ui.openDialog({
      title: 'Zephyr',
      subtitle: 'The Ember Crown',
      portrait: '🧙',
      text: `"Long ago the vale was crowned with woven starlight — a circlet that kept the seasons kind and the Moonwell bright."<br><br>"It was lost when the last farmer vanished. Earn <em>900 gold</em> by selling what you grow, and I will sell you the crown I have kept safe. Then wake the Moonwell, and Emberfall will sing again."`,
      options: [{ label: 'I will do it.', action: () => this.ui.closeModal() }],
    });
  }

  talkDryad() {
    this.audio.sfx('magic');
    const canHeal = this.state.flags.healDay !== this.state.day;
    this.ui.openDialog({
      title: 'Nissa',
      subtitle: 'Dryad of the Whisperwood',
      portrait: '🧚',
      text: `"Little sprout, the trees told me you would come."<br><br>"The Whisperwood is restless. Slimes drink the moonlight and forget their manners after dusk. Mind your blade, water your seeds, and leave a little wildness at the edges."`,
      options: [
        {
          label: canHeal ? 'Ask for a woodland blessing (restore energy)' : 'Already blessed today',
          disabled: !canHeal,
          action: () => {
            if (canHeal) {
              this.state.flags.healDay = this.state.day;
              this.state.energy = this.state.maxEnergy;
              this.state.health = this.state.maxHealth;
              this.audio.sfx('magic');
              this.particles.emit(new THREE.Vector3(this.player.pos.x, 1, this.player.pos.z), '#a8f0b8', 24, 2.4, 3);
              this.ui.float('+energy', new THREE.Vector3(this.player.pos.x, 2.2, this.player.pos.z), 'heal');
              this.ui.toast('Nissa hums, and the forest lends you strength.', 'quest', '🌿');
              this.save();
            }
            this.ui.closeModal();
          },
        },
        { label: 'Where do slimes gather?', action: () => this.ui.openDialog({ title: 'Nissa', portrait: '🧚', subtitle: 'Woodland wisdom', text: '"West and north, where the pines crowd close. They are shy at noon and bold at night. Their fallen <em>essence</em> is precious — the Moonwell drinks it gladly."', options: [{ label: 'Thank you.', action: () => this.ui.closeModal() }] }) },
        { label: 'Farewell', action: () => this.ui.closeModal() },
      ],
    });
  }

  askSleep() {
    if (this.transitioning) return;
    if (this.state.hours < 16.5) {
      this.ui.openDialog({
        title: 'Cottage Door',
        subtitle: 'Emberfall farmstead',
        portrait: '🏡',
        text: `The cottage smells of woodsmoke and dried herbs. The sun is still high — sleeping now would waste the day.<br><br>Rest until tomorrow morning?`,
        options: [
          { label: 'Rest until dawn', action: () => { this.ui.closeModal(); this.sleep(false); } },
          { label: 'Not yet', action: () => this.ui.closeModal() },
        ],
      });
    } else {
      this.sleep(false);
    }
  }

  sleep(forced) {
    if (this.sleeping || this.transitioning) return;
    this.sleeping = true;
    this.transitioning = true;
    this.ui.sleepFade(true);
    this.audio.sfx('sleep');
    setTimeout(() => {
      const data = this.advanceDay();
      if (forced) this.ui.toast('You drifted off under the stars. Someone carried you home.', '', '🌙');
      this.ui.sleepFade(false);
      setTimeout(() => {
        this.transitioning = false;
        this.sleeping = false;
        this.ui.showSummary(data);
      }, 380);
    }, 850);
  }

  advanceDay() {
    const s = this.state;
    let grown = 0;
    for (const p of this.world.plots) {
      if (!p.crop) { p.watered = false; continue; }
      if (p.crop.watered) {
        if (p.crop.grown < p.crop.growDays) {
          p.crop.grown++;
          grown++;
        }
      }
      p.crop.watered = false;
      p.watered = false;
    }
    s.day++;
    s.hours = 6.15;
    s.season = 'Spring';
    let rain = Math.random() < 0.34;
    if (s.flags.forceRain) { rain = true; s.flags.forceRain = false; }
    s.weather = rain ? 'rain' : 'clear';
    if (rain) {
      for (const p of this.world.plots) {
        if (p.crop) { p.crop.watered = true; p.watered = true; }
        else if (p.tilled) p.watered = true;
      }
    }
    // sprinklers
    let sprinklered = 0;
    for (const sp of this.world.sprinklers) {
      for (const p of this.world.plots) {
        if (!p.crop) continue;
        if (Math.hypot(p.x - sp.x, p.z - sp.z) < 3.1) {
          p.crop.watered = true;
          p.watered = true;
          sprinklered++;
        }
      }
    }
    s.energy = s.maxEnergy;
    s.health = s.maxHealth;
    const earned = s.stats.dayEarned || 0;
    s.stats.dayEarned = 0;
    s.stats.wateredToday = 0;
    this.world.setWeather(s.weather);
    this.world.newDay(s.day);
    this.world.day = s.day;
    this.slimes.resetDay(s.day);
    for (const p of this.world.plots) this.world.refreshPlot(p);
    this.invuln = 0;
    this.shake = 0;
    const flavors = rain
      ? ['Rain taps the roof like tiny knuckles. The fields drink deep.', 'The vale smells of wet earth and green things. A good day to stay in.', 'Mist curls between the fence posts. The crops are already grateful.']
      : ['Birds stitch the morning together. The vale is quiet and kind.', 'Sunlight spills over the fence like warm honey.', 'Somewhere in the Whisperwood, a slime yawns. The farm waits.', 'The Moonwell hums softly. Another day to grow something impossible.'];
    this.save();
    return {
      day: s.day, season: s.season, weather: s.weather, crops: grown,
      earned, maxEnergy: s.maxEnergy, rain, sprinklers: this.world.sprinklers.length,
      flavor: flavors[(Math.random() * flavors.length) | 0],
    };
  }

  // ---------------- combat ----------------
  doAttack() {
    if (this.mode !== 'play' || this.paused || this.transitioning) return;
    this.audio.init();
    if (!this.player.startAttack()) return;
    this.audio.sfx('attack');
    this.shake = 0.04;
    const fwd = this.player.forward();
    const hitList = [];
    for (const sl of this.slimes.slimes) {
      if (!sl.alive) continue;
      const dx = sl.x - this.player.pos.x;
      const dz = sl.z - this.player.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 3.0) continue;
      const dot = (dx / Math.max(d, 0.001)) * fwd.x + (dz / Math.max(d, 0.001)) * fwd.z;
      if (dot < -0.15) continue;
      hitList.push(sl);
    }
    if (!hitList.length) {
      setTimeout(() => this.audio.sfx('attack'), 50);
      return;
    }
    for (const sl of hitList) {
      const dirX = (sl.x - this.player.pos.x), dirZ = (sl.z - this.player.pos.z);
      const dl = Math.hypot(dirX, dirZ) || 1;
      const dead = this.slimes.hit(sl, dirX / dl, dirZ / dl);
      this.particles.emit(new THREE.Vector3(sl.x, 0.7, sl.z), '#c7ffd7', 12, 2.6, 3);
      this.audio.sfx('hit');
      this.shake = 0.12;
      if (dead) {
        this.slimes.kill(sl);
        this.state.stats.slimes++;
        const ess = 1 + (Math.random() < 0.4 ? 1 : 0);
        this.state.essence += ess;
        this.state.gold += 2;
        this.state.stats.dayEarned += 2;
        this.particles.emit(new THREE.Vector3(sl.x, 0.8, sl.z), '#7fe4ff', 24, 3.2, 3.2);
        this.particles.emit(new THREE.Vector3(sl.x, 0.8, sl.z), '#b4ffcf', 16, 2.4, 3);
        this.ui.float(`+${ess} ✦ · +2 ◈`, new THREE.Vector3(sl.x, 1.6, sl.z), 'ess');
        this.audio.sfx('slime');
        this.checkQuests();
        this.save();
      } else {
        this.ui.float('-1', new THREE.Vector3(sl.x, 1.2, sl.z), 'dmg');
      }
    }
  }

  damagePlayer(amount, sx, sz) {
    if (this.invuln > 0 || this.mode !== 'play' || this.paused) return;
    this.state.health = Math.max(0, this.state.health - amount);
    this.invuln = 1.15;
    this.shake = 0.22;
    this.audio.sfx('hurt');
    this.ui.float(`-${amount} ❤`, new THREE.Vector3(this.player.pos.x, 2.1, this.player.pos.z), 'dmg');
    const dx = this.player.pos.x - sx, dz = this.player.pos.z - sz;
    const d = Math.hypot(dx, dz) || 1;
    this.player.pos.x += (dx / d) * 0.7;
    this.player.pos.z += (dz / d) * 0.7;
    if (this.state.health <= 0) this.faint();
    this.ui.update(this.state);
  }

  faint() {
    if (this.transitioning) return;
    this.transitioning = true;
    this.ui.sleepFade(true);
    this.audio.sfx('sleep');
    const lost = Math.min(this.state.gold, 15);
    setTimeout(() => {
      this.state.gold -= lost;
      this.state.health = this.state.maxHealth;
      this.state.energy = Math.max(35, Math.floor(this.state.maxEnergy * 0.5));
      this.player.pos.set(LAYOUT.spawn.x, this.world.height(LAYOUT.spawn.x, LAYOUT.spawn.z), LAYOUT.spawn.z);
      this.player.facing = Math.PI;
      this.player.group.rotation.y = Math.PI;
      this.cameraYaw = 0.12;
      this.invuln = 2.5;
      this.ui.sleepFade(false);
      this.transitioning = false;
      this.ui.toast(`You wake at the farmhouse gate. Lost ${lost} ◈ in the confusion.`, '', '🌙');
      this.save();
    }, 900);
  }

  // ---------------- quests ----------------
  currentQuest() {
    for (const q of QUESTS) {
      if (!this.state.quests[q.id]) return { ...q, progress: q.get(this.state) };
    }
    return null;
  }

  questList() {
    return QUESTS.map((q) => {
      const done = !!this.state.quests[q.id];
      return { ...q, done, progress: done ? q.target : q.get(this.state) };
    });
  }

  checkQuests() {
    for (const q of QUESTS) {
      if (this.state.quests[q.id]) continue;
      if (q.get(this.state) >= q.target) {
        this.state.quests[q.id] = true;
        const r = q.reward || {};
        if (r.gold) this.state.gold += r.gold;
        if (r.essence) this.state.essence += r.essence;
        if (r.seeds) for (const [k, v] of Object.entries(r.seeds)) this.state.seeds[k] = (this.state.seeds[k] || 0) + v;
        if (r.maxEnergy) { this.state.maxEnergy += r.maxEnergy; this.state.energy = this.state.maxEnergy; }
        this.ui.toast(`Quest complete — ${q.name}`, 'quest', '✦');
        this.audio.sfx('quest');
        this.save();
      }
    }
  }

  // ---------------- shop ----------------
  shopItems() {
    const s = this.state;
    return [
      { id: 'moon', name: 'Moonpetal Seed', icon: '🌙', price: 20, desc: 'Grows in 2 nights · sells for 58 ◈. A pale flower that opens at dusk.' },
      { id: 'sun', name: 'Sunberry Seed', icon: '☀️', price: 45, desc: 'Grows in 3 nights · sells for 126 ◈. Warm as a pocket of summer.' },
      { id: 'star', name: 'Starcorn Seed', icon: '⭐', price: 90, desc: 'Grows in 4 nights · sells for 275 ◈. Kernels that chime in the wind.' },
      { id: 'potion', name: 'Mana Potion', icon: '🧪', price: 35, desc: 'Restore 60 energy. Tastes faintly of thunderstorms.' },
      { id: 'sprinkler', name: 'Copper Sprinkler', icon: '💧', price: 260, desc: 'Placed on the farm. Waters a 3×3 patch every dawn.', available: s.sprinklerCount < 5, limit: `${s.sprinklerCount}/5` },
      { id: 'charm', name: 'Starlight Charm', icon: '🔮', price: 180, desc: 'Permanently increases max energy by 15.', available: !s.flags.charm },
      { id: 'crown', name: 'The Ember Crown', icon: '👑', price: 1200, desc: 'Woven starlight. The final piece of the vale’s story.', available: s.stats.earned >= 900 && !s.flags.won, locked: s.stats.earned < 900 },
    ];
  }

  buy(item) {
    const s = this.state;
    if (!item) return false;
    if (item.available === false) {
      this.ui.toast(item.id === 'crown' ? 'Zephyr will part with the crown only after you have earned 900 gold from the vale.' : 'Zephyr has no more of those just now.', '', '🔒');
      this.audio.sfx('error');
      return false;
    }
    if (s.gold < item.price) {
      this.ui.toast('Not enough gold. Harvest and sell your crops.', '', '◈');
      this.audio.sfx('error');
      return false;
    }
    s.gold -= item.price;
    switch (item.id) {
      case 'moon': s.seeds.moon++; break;
      case 'sun': s.seeds.sun++; break;
      case 'star': s.seeds.star++; break;
      case 'potion': s.energy = Math.min(s.maxEnergy, s.energy + 60); this.ui.float('+60 ⚡', new THREE.Vector3(this.player.pos.x, 2.2, this.player.pos.z), 'heal'); break;
      case 'sprinkler': {
        const spot = this.world.addSprinkler(s.sprinklerCount);
        if (spot) { s.sprinklerCount++; this.particles.emit(new THREE.Vector3(spot.x, 0.8, spot.z), '#8ff0ff', 20, 2.4, 3); }
        break;
      }
      case 'charm': s.flags.charm = true; s.maxEnergy += 15; s.energy = s.maxEnergy; break;
      case 'crown': {
        s.flags.won = true;
        this.checkQuests();
        this.save();
        this.ui.toast('Zephyr places the Ember Crown in your hands. It is warm.', 'quest', '👑');
        setTimeout(() => { this.ui.closeModal(); setTimeout(() => this.ui.showWin(), 250); }, 600);
        return true;
      }
      default: break;
    }
    this.audio.sfx('coin');
    this.state.stats.earned = this.state.stats.earned; // unchanged
    this.ui.toast(`Bought ${item.name}.`, '', item.icon);
    this.checkQuests();
    this.save();
    return true;
  }

  sellAll(kind) {
    const s = this.state;
    let total = 0, count = 0;
    if (kind === 'crops') {
      for (const type of Object.keys(CROPS)) {
        const n = s.crops[type] || 0;
        if (n > 0) { total += n * CROPS[type].sell; count += n; s.crops[type] = 0; }
      }
    } else {
      total += s.wood * 4 + s.stone * 6;
      count = s.wood + s.stone;
      s.wood = 0; s.stone = 0;
    }
    if (total <= 0) {
      this.ui.toast('Nothing to sell yet. Harvest crops or gather materials.', '', '🪙');
      this.audio.sfx('error');
      return;
    }
    s.gold += total;
    s.stats.earned += total;
    s.stats.dayEarned += total;
    this.audio.sfx('coin');
    this.ui.toast(`Sold ${count} item${count === 1 ? '' : 's'} for ${total} ◈.`, 'gold', '◈');
    this.checkQuests();
    this.save();
  }

  // ---------------- shrine ----------------
  shrineRite(kind) {
    const s = this.state;
    if (kind === 'awaken') {
      if (s.blessing >= 2) { this.ui.toast('The Moonwell is already awake.', '', '✦'); return; }
      if (s.essence < 5) { this.ui.toast('The stones need 5 essence.', '', '✦'); this.audio.sfx('error'); return; }
      s.essence -= 5;
      s.blessing = 2;
      s.maxEnergy += 25;
      s.energy = s.maxEnergy;
      s.health = s.maxHealth;
      const spot = this.world.addSprinkler(s.sprinklerCount);
      if (spot) s.sprinklerCount++;
      this.particles.emit(new THREE.Vector3(LAYOUT.shrine.x, 2, LAYOUT.shrine.z), '#9fe6ff', 40, 4.5, 4.5);
      this.audio.sfx('magic');
      this.ui.toast('The Moonwell awakens. +25 max energy, and a sprinkler rises from the soil.', 'quest', '🌙');
      this.checkQuests();
      this.save();
      return;
    }
    if (s.essence < 2) { this.ui.toast('The stones need 2 essence.', '', '✦'); this.audio.sfx('error'); return; }
    s.essence -= 2;
    if (kind === 'rain') {
      for (const p of this.world.plots) {
        if (p.crop) { p.crop.watered = true; p.watered = true; this.world.refreshPlot(p); }
      }
      this.rainToday = true;
      this.state.flags.forceRain = true;
      this.ui.toast('Rain gathers over the vale. Every crop is watered.', 'quest', '🌧');
    } else if (kind === 'heal') {
      s.health = s.maxHealth;
      s.energy = s.maxEnergy;
      this.particles.emit(new THREE.Vector3(this.player.pos.x, 1, this.player.pos.z), '#a8f0b8', 30, 2.8, 3.2);
      this.ui.toast('Silver light mends your weariness.', 'quest', '💚');
    }
    this.audio.sfx('magic');
    this.save();
  }

  setSound(on) {
    this.soundOn = on;
    this.state.soundOn = on;
    this.audio.setMuted(!on);
    this.ui.toast(on ? 'Sound on.' : 'Sound muted.', '', on ? '🔔' : '🔇');
    this.save();
  }

  setPaused(p) {
    this.paused = p;
  }

  // ---------------- camera ----------------
  updateCamera(dt, immediate) {
    if (this.mode === 'title') {
      this.titleTime += dt;
      this.titleYaw = -0.5 + Math.sin(this.titleTime * 0.07) * 0.16;
      const target = new THREE.Vector3(0, 2.4, 0);
      const desired = new THREE.Vector3(
        target.x + Math.sin(this.titleYaw) * 30,
        13.2,
        target.z + Math.cos(this.titleYaw) * 30
      );
      this.camera.position.copy(desired);
      this.camera.lookAt(target);
      return;
    }
    const target = new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1.15, this.player.pos.z);
    if (immediate) {
      this.camLook.copy(target);
    } else {
      this.camLook.lerp(target, 1 - Math.exp(-9 * dt));
    }
    const cp = Math.cos(this.cameraPitch);
    const desired = new THREE.Vector3(
      this.camLook.x + Math.sin(this.cameraYaw) * this.cameraDist * cp,
      this.camLook.y + Math.sin(this.cameraPitch) * this.cameraDist + 1.8,
      this.camLook.z + Math.cos(this.cameraYaw) * this.cameraDist * cp
    );
    const ground = this.world.height(desired.x, desired.z) + 1.4;
    if (desired.y < ground) desired.y = ground;
    if (immediate) this.camera.position.copy(desired);
    else this.camera.position.lerp(desired, 1 - Math.exp(-7.5 * dt));
    const shake = this.shake;
    if (shake > 0.001) {
      this.camera.position.x += rand(-1, 1) * shake * 0.55;
      this.camera.position.y += rand(-1, 1) * shake * 0.4;
      this.camera.position.z += rand(-1, 1) * shake * 0.55;
    }
    this.camera.lookAt(this.camLook);
  }

  // ---------------- debug / testing hooks ----------------
  exposeDebug() {
    const g = this;
    window.__ember = {
      game: g,
      state: () => g.state,
      teleport: (x, z, facing = Math.PI) => {
        g.player.pos.x = x; g.player.pos.z = z;
        g.player.pos.y = g.world.height(x, z);
        g.player.facing = facing;
        g.player.group.rotation.y = facing;
        g.updateCamera(0, true);
        g.updateTarget();
      },
      face: (f) => { g.player.facing = f; g.player.group.rotation.y = f; g.updateTarget(); },
      use: () => g.doAction(),
      attack: () => g.doAttack(),
      sleep: () => g.sleep(false),
      advance: () => g.advanceDay(),
      shop: () => g.ui.openShop(),
      setHours: (h) => { g.state.hours = h; },
      setSeed: (t) => g.selectSeed(t),
      addGold: (n) => { g.state.gold += n; g.state.stats.earned += n; g.ui.update(g.state); },
      addEssence: (n) => { g.state.essence += n; g.ui.update(g.state); },
      plots: () => g.world.plots.map((p) => ({ i: p.i, j: p.j, x: p.x, z: p.z, tilled: p.tilled, watered: p.watered, crop: p.crop })),
      target: () => g.target,
      quests: () => g.questList(),
      slimes: () => g.slimes.slimes,
      hours: () => g.state.hours,
      save: () => g.save(),
      camera: () => g.camera.position.toArray(),
      setPitch: (p) => { g.cameraPitch = p; g.updateCamera(0, true); },
      setDist: (d) => { g.cameraDist = d; g.updateCamera(0, true); },
      screen: () => ({ w: innerWidth, h: innerHeight }),
    };
  }
}
