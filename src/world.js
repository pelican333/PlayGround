import * as THREE from 'three';
import {
  clamp, lerp, smoothstep, rand, fbm, rectMask, distToSegment,
  colorize, xf, mergeColored, stdMat, vcMat, glowSprite, glowTexture, noise2,
} from './util.js';

export const FARM = { cols: 8, rows: 8, tile: 1.75, ox: -7, oz: -7 };
export const LAYOUT = {
  home: { x: -11.5, z: -13.5 },
  homeDoor: { x: -11.5, z: -10.9 },
  tower: { x: 15.5, z: 6.5 },
  towerDoor: { x: 15.5, z: 9.0 },
  shrine: { x: -16.5, z: 5.5 },
  pond: { x: 16, z: -14, r: 6.0 },
  spawn: { x: 0, z: 8.2 },
  fence: 9.4,
  wizard: { x: 18.6, z: 8.4 },
  dryad: { x: -20.5, z: 11.5 },
};

const TREE_GREENS = ['#3f7a44', '#4d8f4c', '#356b3e', '#5a9a4f'];
const PINE_GREENS = ['#2c5c43', '#25523b', '#356a4b'];

function makeSignTexture(text, sub) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#5a4128'); grad.addColorStop(1, '#3a281a');
  g.fillStyle = grad; g.fillRect(0, 0, 512, 256);
  g.strokeStyle = '#c9a86c'; g.lineWidth = 9; g.strokeRect(12, 12, 488, 232);
  g.fillStyle = '#f2dfae';
  g.font = '600 58px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 256, sub ? 108 : 128);
  if (sub) {
    g.fillStyle = '#cbb98e'; g.font = 'italic 34px Georgia, serif';
    g.fillText(sub, 256, 180);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeRuneTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 128, 128);
  g.strokeStyle = '#bdf6ff'; g.lineWidth = 5; g.lineCap = 'round';
  g.shadowColor = '#7fe6ff'; g.shadowBlur = 12;
  g.beginPath();
  g.moveTo(64, 18); g.lineTo(64, 110);
  g.moveTo(64, 32); g.lineTo(92, 58); g.lineTo(64, 76); g.lineTo(36, 58); g.closePath();
  g.moveTo(44, 96); g.lineTo(84, 96);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeGlowDiscTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(150,240,255,0.9)');
  grad.addColorStop(0.5, 'rgba(90,190,230,0.25)');
  grad.addColorStop(1, 'rgba(60,140,200,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class World {
  constructor(scene, renderer, options = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.lowQuality = !!options.lowQuality;
    this.time = 0;
    this.hours = 6;
    this.weather = 'clear';
    this.day = 1;
    this.colliders = [];
    this.boxes = [];
    this.segments = [];
    this.trees = [];
    this.rocks = [];
    this.plotStates = [];
    this.targetPlot = -1;
    this.sprites = [];
    this.lights = {};
    this.pathSamples = [];
    this.gateLights = [];

    this.buildSky();
    this.buildLights();
    this.buildTerrain();
    this.buildPaths();
    this.buildFarm();
    this.buildFence();
    this.buildCottage();
    this.buildTower();
    this.buildShrine();
    this.buildPond();
    this.buildNature();
    this.buildNPCs();
    this.buildAtmosphere();
    this.buildBounds();

    this.sprinklerSpots = [
      [-0.875, -0.875], [-4.375, -4.375], [2.625, 2.625], [-4.375, 2.625], [2.625, -4.375],
    ].map(([x, z]) => ({ x, z }));
    this.sprinklers = [];
  }

  // =========================================================== terrain
  height(x, z) {
    let h = (fbm(x * 0.026 + 3.1, z * 0.026 + 7.7) - 0.5) * 7.2;
    h += (fbm(x * 0.085 + 11.3, z * 0.085 + 2.4) - 0.5) * 0.85;
    const farmMask = rectMask(x, z, 0, 0, 8.6, 8.6, 7.5);
    h = lerp(h, 0, farmMask);
    const homeD = Math.hypot(x - LAYOUT.home.x, z - LAYOUT.home.z);
    h = lerp(h, 0.05, 1 - smoothstep(4.2, 10, homeD));
    const shopD = Math.hypot(x - LAYOUT.tower.x, z - LAYOUT.tower.z);
    h = lerp(h, 0.25, 1 - smoothstep(3.4, 8.5, shopD));
    const shrineD = Math.hypot(x - LAYOUT.shrine.x, z - LAYOUT.shrine.z);
    h = lerp(h, 0.55, 1 - smoothstep(3.4, 8.5, shrineD));
    const pondD = Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z);
    h = lerp(h, -2.7, 1 - smoothstep(4.0, 8.8, pondD));
    const r = Math.hypot(x, z);
    h += smoothstep(52, 90, r) * (4 + fbm(x * 0.021, z * 0.021) * 10);
    return h;
  }

  normalAt(x, z) {
    const e = 0.25;
    const hL = this.height(x - e, z), hR = this.height(x + e, z);
    const hD = this.height(x, z - e), hU = this.height(x, z + e);
    return new THREE.Vector3(hL - hR, 2 * e, hD - hU).normalize();
  }

  buildTerrain() {
    const seg = this.lowQuality ? 100 : 150;
    const size = 190;
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const cGrass = new THREE.Color('#6f9f52');
    const cGrass2 = new THREE.Color('#88b15d');
    const cDark = new THREE.Color('#527f43');
    const cDirt = new THREE.Color('#8a6f4b');
    const cRock = new THREE.Color('#776f62');
    const cSand = new THREE.Color('#b0a170');
    const cMoss = new THREE.Color('#5f8a4b');
    const tmp = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = this.height(x, z);
      pos.setY(i, y);
      const n = fbm(x * 0.11 + 4, z * 0.11 + 9);
      const n2 = fbm(x * 0.35, z * 0.35);
      tmp.copy(cGrass).lerp(cGrass2, n2);
      if (n > 0.56) tmp.lerp(cDark, (n - 0.56) * 2.4);
      if (n < 0.36) tmp.lerp(cDark, (0.36 - n) * 0.9);
      const dPond = Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z);
      if (dPond < 9.2) tmp.lerp(cSand, 1 - smoothstep(5.2, 9.2, dPond) * 0.75);
      const slope = Math.abs(this.height(x + 0.8, z) - y) + Math.abs(this.height(x, z + 0.8) - y);
      if (slope > 1.5) tmp.lerp(cRock, clamp((slope - 1.5) * 0.5, 0, 0.7));
      if (n2 > 0.72 && slope < 1.2) tmp.lerp(cMoss, 0.35);
      const farmD = Math.max(Math.abs(x) - 8, Math.abs(z) - 8);
      if (farmD < 1.2) tmp.lerp(cDirt, 0.22 * (1 - Math.max(farmD, 0) / 1.2));
      if (Math.abs(x) < 8.1 && Math.abs(z) < 8.1) tmp.lerp(new THREE.Color('#7c9b52'), 0.32);
      const rr = Math.hypot(x, z);
      if (rr > 44) tmp.lerp(new THREE.Color('#7f8d84'), smoothstep(44, 82, rr) * 0.5);
      const jitter = (n2 - 0.5) * 0.07;
      colors[i * 3] = clamp(tmp.r + jitter, 0, 1);
      colors[i * 3 + 1] = clamp(tmp.g + jitter, 0, 1);
      colors[i * 3 + 2] = clamp(tmp.b + jitter * 0.6, 0, 1);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = vcMat({ roughness: 1 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    mesh.name = 'terrain';
    this.scene.add(mesh);
    this.terrain = mesh;
  }

  // =========================================================== paths
  buildPaths() {
    const curves = [
      [[-11.5, -10.2], [-10.1, -7.6], [-8.4, -3.8], [-8.4, 5.4], [-6.3, 8.6], [-2.0, 11.1], [0, 11.7], [5.2, 11.5], [10.2, 9.8], [13.2, 8.2], [15.5, 8.0]],
      [[0, 11.7], [-5.2, 11.4], [-10.5, 10.5], [-14.2, 8.9], [-16.2, 7.3]],
      [[15.5, 8.0], [19.4, 8.5], [22.5, 10.5]],
    ];
    for (const pts of curves) {
      const curve = new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)));
      const N = 60;
      const half = 1.35;
      const positions = [];
      const colors = [];
      const indices = [];
      const up = new THREE.Vector3(0, 1, 0);
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const p = curve.getPoint(t);
        const tan = curve.getTangent(t);
        const side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        for (const s of [-1, 1]) {
          const px = p.x + side.x * half * s;
          const pz = p.z + side.z * half * s;
          const y = this.height(px, pz) + 0.035;
          positions.push(px, y, pz);
          const n = noise2(px * 1.7, pz * 1.7);
          const c = new THREE.Color('#8d7550').lerp(new THREE.Color('#a58c62'), n);
          colors.push(c.r, c.g, c.b);
        }
        if (i < N) {
          const a = i * 2;
          indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
        this.pathSamples.push({ x: p.x, z: p.z });
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      const mat = vcMat({ roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
  }

  nearPath(x, z, r = 2.2) {
    for (const p of this.pathSamples) {
      if (Math.abs(p.x - x) < r && Math.abs(p.z - z) < r && distToSegment(x, z, p.x, p.z, p.x, p.z).dist < r) return true;
    }
    return false;
  }

  // =========================================================== lights & sky
  buildSky() {
    const skyGeo = new THREE.SphereGeometry(340, 32, 20);
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color('#63b6e2') },
        horizon: { value: new THREE.Color('#d9ecf0') },
        bottom: { value: new THREE.Color('#9db592') },
      },
      vertexShader: `
        varying vec3 vDir;
        void main(){
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vDir;
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
        void main(){
          float h = vDir.y;
          vec3 c = mix(horizon, top, smoothstep(0.02, 0.62, h));
          c = mix(bottom, c, smoothstep(-0.28, 0.02, h));
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });
    this.sky = new THREE.Mesh(skyGeo, this.skyMat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);
    this.scene.fog = new THREE.FogExp2(0xcfe3e2, 0.0052);

    // stars
    const starPos = [];
    const starCol = [];
    for (let i = 0; i < 420; i++) {
      const a = Math.random() * Math.PI * 2;
      const e = rand(0.06, 1.35);
      const r = 300;
      starPos.push(Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r, Math.sin(a) * Math.cos(e) * r);
      const c = new THREE.Color().setHSL(rand(0.52, 0.65), rand(0.1, 0.5), rand(0.75, 1));
      starCol.push(c.r, c.g, c.b);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    sg.setAttribute('color', new THREE.Float32BufferAttribute(starCol, 3));
    this.starMat = new THREE.PointsMaterial({
      size: 1.6, vertexColors: true, transparent: true, opacity: 0,
      depthWrite: false, sizeAttenuation: true, fog: false, toneMapped: false,
    });
    this.stars = new THREE.Points(sg, this.starMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);

    // sun & moon sprites
    this.sunSprite = glowSprite('#ffe2a0', 34, 0.95);
    this.sunSprite.material.depthWrite = false;
    this.moonSprite = glowSprite('#bcd6ff', 16, 0.8);
    this.moonSprite.material.depthWrite = false;
    this.scene.add(this.sunSprite, this.moonSprite);

    // clouds
    this.clouds = new THREE.Group();
    const cloudMat = stdMat({ color: '#f2f6f7', roughness: 1, transparent: true, opacity: 0.82, flatShading: true });
    for (let i = 0; i < 11; i++) {
      const parts = [];
      const n = 3 + ((Math.random() * 3) | 0);
      for (let j = 0; j < n; j++) {
        const r = rand(2.4, 4.6);
        const g = new THREE.IcosahedronGeometry(r, 0);
        g.scale(1.5, 0.55, 1);
        g.translate(rand(-6, 6), rand(-0.6, 0.8), rand(-2.4, 2.4));
        parts.push({ geo: g, color: j % 2 ? '#e8f1f4' : '#f7fbfc' });
      }
      const mesh = new THREE.Mesh(mergeColored(parts), cloudMat);
      mesh.position.set(rand(-95, 95), rand(30, 48), rand(-95, 95));
      mesh.userData.speed = rand(0.4, 1.1);
      this.clouds.add(mesh);
    }
    this.scene.add(this.clouds);

    // distant mountains
    const mparts = [];
    const mCount = 24;
    for (let i = 0; i < mCount; i++) {
      const a = (i / mCount) * Math.PI * 2 + rand(-0.06, 0.06);
      const dist = rand(72, 104);
      const h = rand(16, 34);
      const r = rand(7, 15);
      const g = new THREE.ConeGeometry(r, h, 5, 1);
      g.translate(Math.cos(a) * dist, h / 2 - 4, Math.sin(a) * dist);
      mparts.push({ geo: g, color: i % 3 ? '#6a7b94' : '#586a86', jitter: 0.04 });
      if (h > 24) {
        const s = new THREE.ConeGeometry(r * 0.38, h * 0.28, 5, 1);
        s.translate(Math.cos(a) * dist, h * 0.87 - 4, Math.sin(a) * dist);
        mparts.push({ geo: s, color: '#e8eef4', jitter: 0.02 });
      }
    }
    this.mountains = new THREE.Mesh(mergeColored(mparts), vcMat({ fog: true }));
    this.scene.add(this.mountains);
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0xbfe0ff, 0x5c7a4a, 1.0);
    this.scene.add(hemi);
    this.hemi = hemi;

    const sun = new THREE.DirectionalLight(0xfff2d8, 2.6);
    sun.position.set(30, 50, 20);
    sun.castShadow = true;
    const size = this.lowQuality ? 1024 : 2048;
    sun.shadow.mapSize.set(size, size);
    sun.shadow.camera.left = -46;
    sun.shadow.camera.right = 46;
    sun.shadow.camera.top = 46;
    sun.shadow.camera.bottom = -46;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 190;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.035;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;

    this.moonLight = new THREE.DirectionalLight(0x8ba9e8, 0.0);
    this.scene.add(this.moonLight);
  }

  updateSky(hours) {
    this.hours = hours;
    const ang = ((hours - 6) / 24) * Math.PI * 2;
    const elev = Math.sin(ang);
    const dayW = smoothstep(-0.01, 0.22, elev);
    const duskW = smoothstep(-0.24, 0.04, elev) * (1 - dayW);

    const nightTop = new THREE.Color('#071021');
    const nightHor = new THREE.Color('#182b46');
    const nightBot = new THREE.Color('#0d1827');
    const duskTop = new THREE.Color('#4f4a80');
    const duskHor = new THREE.Color('#f19a68');
    const duskBot = new THREE.Color('#5b5260');
    const dayTop = new THREE.Color('#5db3e3');
    const dayHor = new THREE.Color('#dceef0');
    const dayBot = new THREE.Color('#9fb992');

    const top = nightTop.clone().lerp(duskTop, duskW).lerp(dayTop, dayW);
    const hor = nightHor.clone().lerp(duskHor, duskW).lerp(dayHor, dayW);
    const bot = nightBot.clone().lerp(duskBot, duskW).lerp(dayBot, dayW);

    this.skyMat.uniforms.top.value.copy(top);
    this.skyMat.uniforms.horizon.value.copy(hor);
    this.skyMat.uniforms.bottom.value.copy(bot);
    this.scene.fog.color.copy(hor).multiplyScalar(0.88);
    this.starMat.opacity = clamp(1 - smoothstep(-0.16, 0.12, elev), 0, 1) * 0.95;

    const dir = new THREE.Vector3(Math.cos(ang) * 0.92, Math.sin(ang), 0.34).normalize();
    this.sunSprite.position.copy(dir).multiplyScalar(270);
    this.moonSprite.position.copy(dir).multiplyScalar(-270);
    this.sunSprite.material.opacity = clamp(elev * 6, 0, 0.95);
    this.moonSprite.material.opacity = clamp(-elev * 5, 0, 0.85);
    const sunScale = 30 + (1 - clamp(elev, 0, 1)) * 16;
    this.sunSprite.scale.setScalar(sunScale);
    this.sunSprite.material.color.set(dayW > 0.4 ? 0xfff0c0 : 0xffb27a);

    const ldir = dir.clone().multiplyScalar(80);
    this.sun.position.set(ldir.x, Math.max(ldir.y, 4), ldir.z + 20);
    this.sun.target.position.set(0, 0, 0);
    this.sun.intensity = 0.12 + dayW * 2.5 + duskW * 0.9;
    this.sun.color.copy(new THREE.Color('#ff9d6a')).lerp(new THREE.Color('#fff2d8'), dayW);
    this.sun.castShadow = elev > -0.05;
    this.moonLight.position.copy(dir).multiplyScalar(-70);
    this.moonLight.intensity = (1 - dayW) * 0.42;
    this.hemi.intensity = 0.22 + dayW * 0.72 + duskW * 0.24;
    this.hemi.color.copy(new THREE.Color('#7591c7')).lerp(new THREE.Color('#cfe8ff'), dayW);
    this.hemi.groundColor.copy(new THREE.Color('#24301f')).lerp(new THREE.Color('#69874f'), dayW);

    return { elev, dayW, duskW };
  }

  // =========================================================== farm
  buildFarm() {
    const { cols, rows, tile, ox, oz } = FARM;
    const soilGeo = new THREE.BoxGeometry(tile * 0.94, 0.16, tile * 0.94);
    const soilMat = stdMat({ color: 0xffffff, roughness: 1 });
    this.soilMesh = new THREE.InstancedMesh(soilGeo, soilMat, cols * rows);
    this.soilMesh.receiveShadow = true;
    this.soilMesh.frustumCulled = false;
    const zero = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
    for (let i = 0; i < cols * rows; i++) {
      this.soilMesh.setMatrixAt(i, zero);
      this.soilMesh.setColorAt(i, new THREE.Color('#6b4a2e'));
    }
    this.soilMesh.instanceMatrix.needsUpdate = true;
    if (this.soilMesh.instanceColor) this.soilMesh.instanceColor.needsUpdate = true;
    this.scene.add(this.soilMesh);

    this.plots = [];
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const x = ox + (i + 0.5) * tile;
        const z = oz + (j + 0.5) * tile;
        this.plots.push({
          index: j * cols + i, i, j, x, z,
          tilled: false, watered: false, crop: null,
          visual: null,
        });
        this.plotStates.push({ tilled: false });
      }
    }

    // crop geometries
    const stem = new THREE.CylinderGeometry(0.05, 0.075, 0.92, 4, 1);
    stem.translate(0, 0.46, 0);
    const leafParts = [{ geo: stem, color: '#4c9a4a' }];
    for (let i = 0; i < 4; i++) {
      const leaf = new THREE.ConeGeometry(0.2, 0.58, 4, 1);
      leaf.scale(1, 0.5, 1);
      leaf.rotateZ(Math.PI / 2.4);
      leaf.rotateY((i / 4) * Math.PI * 2);
      leaf.translate(Math.cos((i / 4) * Math.PI * 2) * 0.19, 0.32 + i * 0.16, Math.sin((i / 4) * Math.PI * 2) * 0.19);
      leafParts.push({ geo: leaf, color: i % 2 ? '#5ea94e' : '#438a43' });
    }
    this.cropPlantGeo = mergeColored(leafParts);
    this.cropPlantMat = vcMat();

    this.cropFruitGeo = new THREE.IcosahedronGeometry(0.23, 0);
    this.cropMats = {
      moon: stdMat({ color: '#d8f3ff', emissive: '#7fd4ff', emissiveIntensity: 1.7, roughness: 0.35 }),
      sun: stdMat({ color: '#ffd166', emissive: '#ff9a20', emissiveIntensity: 1.5, roughness: 0.4 }),
      star: stdMat({ color: '#ffe9a3', emissive: '#ffcf4d', emissiveIntensity: 1.8, roughness: 0.3 }),
    };

    // target highlight
    const hlGeo = new THREE.PlaneGeometry(tile * 0.98, tile * 0.98);
    hlGeo.rotateX(-Math.PI / 2);
    this.highlight = new THREE.Group();
    const fill = new THREE.Mesh(hlGeo, new THREE.MeshBasicMaterial({
      color: 0xffe4a1, transparent: true, opacity: 0.17, depthWrite: false, toneMapped: false,
    }));
    fill.position.y = 0.13;
    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(hlGeo),
      new THREE.LineBasicMaterial({ color: 0xffe6a8, transparent: true, opacity: 0.85, toneMapped: false })
    );
    edge.position.y = 0.14;
    this.highlight.add(fill, edge);
    this.highlight.visible = false;
    this.scene.add(this.highlight);

    // faint field grid so the plot reads as a tended field before tilling
    const gridPts = [];
    const gx0 = ox, gz0 = oz, gx1 = ox + cols * tile, gz1 = oz + rows * tile;
    const gy = 0.045;
    for (let i = 0; i <= cols; i++) {
      const gx = gx0 + i * tile;
      gridPts.push(gx, gy, gz0, gx, gy, gz1);
    }
    for (let j = 0; j <= rows; j++) {
      const gz = gz0 + j * tile;
      gridPts.push(gx0, gy, gz, gx1, gy, gz);
    }
    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(gridPts, 3));
    const grid = new THREE.LineSegments(gg, new THREE.LineBasicMaterial({
      color: 0x466335, transparent: true, opacity: 0.42, depthWrite: false,
    }));
    this.scene.add(grid);

    // corner stakes
    const stakeMat = stdMat({ color: '#7b5a36' });
    for (const [sx, sz] of [[gx0, gz0], [gx1, gz0], [gx0, gz1], [gx1, gz1]]) {
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.55, 5), stakeMat);
      st.position.set(sx, 0.22, sz);
      st.castShadow = true;
      this.scene.add(st);
    }

    this.buildFarmProps(gx0, gz0, gx1, gz1);

    // scarecrow
    this.buildScarecrow(7.4, -7.9);
  }

  plotAtWorld(x, z) {
    const { tile, ox, oz, cols, rows } = FARM;
    const i = Math.floor((x - ox) / tile);
    const j = Math.floor((z - oz) / tile);
    if (i < 0 || j < 0 || i >= cols || j >= rows) return null;
    return this.plots[j * cols + i];
  }

  worldOf(i, j) {
    const { tile, ox, oz } = FARM;
    return { x: ox + (i + 0.5) * tile, z: oz + (j + 0.5) * tile };
  }

  setTargetPlot(plot) {
    if (!plot || plot.index === this.targetPlot) {
      if (!plot) {
        this.highlight.visible = false;
        this.targetPlot = -1;
      }
      return;
    }
    this.targetPlot = plot.index;
    this.highlight.visible = true;
    this.highlight.position.set(plot.x, 0, plot.z);
  }

  updateSoilVisual(plot) {
    const m = new THREE.Matrix4();
    if (!plot.tilled) {
      m.makeScale(0.0001, 0.0001, 0.0001);
      this.soilMesh.setMatrixAt(plot.index, m);
    } else {
      m.makeTranslation(plot.x, 0.02, plot.z);
      this.soilMesh.setMatrixAt(plot.index, m);
      const c = new THREE.Color(plot.watered ? '#67482c' : '#8a6138');
      this.soilMesh.setColorAt(plot.index, c);
    }
    this.soilMesh.instanceMatrix.needsUpdate = true;
    if (this.soilMesh.instanceColor) this.soilMesh.instanceColor.needsUpdate = true;
  }

  updateCropVisual(plot) {
    if (!plot.crop) {
      if (plot.visual) {
        this.scene.remove(plot.visual);
        plot.visual = null;
      }
      return;
    }
    if (!plot.visual) {
      const g = new THREE.Group();
      g.position.set(plot.x, 0.1, plot.z);
      const plant = new THREE.Mesh(this.cropPlantGeo, this.cropPlantMat);
      plant.castShadow = true;
      const fruit = new THREE.Mesh(this.cropFruitGeo, this.cropMats[plot.crop.type]);
      fruit.position.y = 1.1;
      fruit.castShadow = true;
      g.add(plant, fruit);
      this.scene.add(g);
      plot.visual = g;
      plot.plantMesh = plant;
      plot.fruitMesh = fruit;
    }
    const ratio = clamp(plot.crop.grown / plot.crop.growDays, 0, 1);
    const s = 0.5 + ratio * 0.72;
    plot.visual.scale.set(s, s, s);
    plot.visual.rotation.y = (plot.index % 7) * 0.8;
    const fruitScale = ratio >= 0.98 ? 1 + Math.sin(this.time * 2.4 + plot.index) * 0.08 : ratio > 0.55 ? 0.5 : 0.001;
    plot.fruitMesh.scale.setScalar(fruitScale);
    plot.fruitMesh.visible = ratio > 0.55;
  }

  refreshPlot(plot) {
    this.updateSoilVisual(plot);
    this.updateCropVisual(plot);
  }

  // =========================================================== fence
  buildFence() {
    const H = LAYOUT.fence;
    const parts = [];
    const postGeo = () => {
      const g = new THREE.BoxGeometry(0.18, 1.06, 0.18);
      g.translate(0, 0.53, 0);
      return g;
    };
    const rail = (x1, z1, x2, z2, y) => {
      const dx = x2 - x1, dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      const g = new THREE.BoxGeometry(len, 0.11, 0.09);
      g.rotateY(-Math.atan2(dz, dx));
      g.translate((x1 + x2) / 2, y, (z1 + z2) / 2);
      return g;
    };
    const addRun = (x1, z1, x2, z2) => {
      const len = Math.hypot(x2 - x1, z2 - z1);
      const n = Math.max(1, Math.round(len / 1.55));
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const px = lerp(x1, x2, t), pz = lerp(z1, z2, t);
        const y = this.height(px, pz);
        if (i > 0) {
          parts.push({ geo: xf(postGeo(), px, y - 0.05, pz), color: '#8a6542', jitter: 0.05 });
        }
      }
      const segs = 4;
      for (let s = 0; s < segs; s++) {
        const t0 = s / segs, t1 = (s + 1) / segs;
        const ax = lerp(x1, x2, t0), az = lerp(z1, z2, t0);
        const bx = lerp(x1, x2, t1), bz = lerp(z1, z2, t1);
        const yA = this.height(ax, az), yB = this.height(bx, bz);
        parts.push({ geo: xf(rail(ax, az, bx, bz, 0.42 + (yA + yB) / 2), 0, 0, 0), color: '#9b7550', jitter: 0.04 });
        parts.push({ geo: xf(rail(ax, az, bx, bz, 0.8 + (yA + yB) / 2), 0, 0, 0), color: '#8f6a47', jitter: 0.04 });
      }
      this.segments.push({ ax: x1, az: z1, bx: x2, bz: z2, r: 0.22 });
    };
    addRun(-H, -H, -H, H);
    addRun(H, -H, H, H);
    addRun(-H, -H, -1.4, -H);
    addRun(1.4, -H, H, -H);
    addRun(-H, H, -1.4, H);
    addRun(1.4, H, H, H);
    // corner posts
    for (const [x, z] of [[-H, -H], [H, -H], [-H, H], [H, H], [-1.4, -H], [1.4, -H], [-1.4, H], [1.4, H]]) {
      parts.push({ geo: xf(postGeo(), x, this.height(x, z) - 0.02, z, 0, 0, 0, 1.35), color: '#755435', jitter: 0.04 });
    }
    const mesh = new THREE.Mesh(mergeColored(parts), vcMat());
    mesh.castShadow = true; mesh.receiveShadow = true;
    this.scene.add(mesh);

    // gate lanterns
    for (const [x, z] of [[-1.6, H], [1.6, H], [-1.6, -H], [1.6, -H]]) {
      const y = this.height(x, z);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 1.9, 6), stdMat({ color: '#6a4c30' }));
      post.position.set(x, y + 0.95, z);
      const lamp = glowSprite('#ffc978', 1.05, 0.32);
      lamp.position.set(x, y + 2.0, z);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), new THREE.MeshStandardMaterial({ color: '#ffd49a', emissive: '#ffb45e', emissiveIntensity: 0.12 }));
      bulb.position.copy(lamp.position);
      this.scene.add(post, lamp, bulb);
      this.gateLights.push({ lamp, bulb });
    }
  }

  // =========================================================== cottage
  buildCottage() {
    const g = new THREE.Group();
    const { x, z } = LAYOUT.home;
    const y = this.height(x, z);
    g.position.set(x, y, z);
    this.scene.add(g);
    this.homeGroup = g;

    const wood = stdMat({ color: '#6b4a2f' });
    const woodDark = stdMat({ color: '#4a3321' });
    const plaster = stdMat({ color: '#e6d5ae' });
    const stone = stdMat({ color: '#8a8478' });
    const thatch = stdMat({ color: '#b5623e', roughness: 1 });
    const glass = new THREE.MeshStandardMaterial({
      color: '#ffdca0', emissive: '#ffb45e', emissiveIntensity: 1.15, roughness: 0.4,
    });

    const add = (geo, mat, px, py, pz, rx = 0, ry = 0, rz = 0, cast = true) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz);
      m.rotation.set(rx, ry, rz);
      m.castShadow = cast; m.receiveShadow = true;
      g.add(m);
      return m;
    };

    add(new THREE.BoxGeometry(6.4, 0.7, 5.2), stone, 0, 0.35, 0);
    add(new THREE.BoxGeometry(6, 3.0, 4.8), plaster, 0, 2.05, 0);
    // timber frame
    for (const px of [-2.9, 2.9]) {
      for (const pz of [-2.3, 2.3]) add(new THREE.BoxGeometry(0.22, 3.0, 0.22), woodDark, px, 2.05, pz);
    }
    add(new THREE.BoxGeometry(6.15, 0.2, 0.22), woodDark, 0, 3.45, 2.32);
    add(new THREE.BoxGeometry(6.15, 0.2, 0.22), woodDark, 0, 3.45, -2.32);
    add(new THREE.BoxGeometry(0.22, 0.2, 4.85), woodDark, 2.42, 2.6, 0, 0, 0, 0.5);
    add(new THREE.BoxGeometry(0.22, 0.2, 4.85), woodDark, -2.42, 2.6, 0, 0, 0, -0.5);
    add(new THREE.BoxGeometry(0.22, 3.0, 4.85), woodDark, 3.0, 2.05, 0);
    add(new THREE.BoxGeometry(0.22, 3.0, 4.85), woodDark, -3.0, 2.05, 0);

    // roof
    const roof = new THREE.Mesh(new THREE.ConeGeometry(4.65, 2.5, 4, 1), thatch);
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 4.7;
    roof.castShadow = true; roof.receiveShadow = true;
    g.add(roof);
    add(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 5), woodDark, 0, 6.2, 0);
    add(new THREE.SphereGeometry(0.12, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffd98a, toneMapped: false }), 0, 6.5, 0);

    // door
    add(new THREE.BoxGeometry(1.15, 2.0, 0.14), wood, 0, 1.72, 2.42);
    add(new THREE.BoxGeometry(1.4, 0.18, 0.2), woodDark, 0, 2.8, 2.42);
    const knob = add(new THREE.SphereGeometry(0.055, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffd37e }), 0.38, 1.7, 2.5);
    // step
    add(new THREE.BoxGeometry(1.9, 0.18, 0.9), stone, 0, 0.13, 3.0);

    // windows
    for (const wx of [-1.9, 1.9]) {
      add(new THREE.BoxGeometry(0.95, 0.85, 0.08), glass, wx, 2.35, 2.44, 0, 0, 0, false);
      add(new THREE.BoxGeometry(1.1, 0.1, 0.12), woodDark, wx, 2.81, 2.47);
      add(new THREE.BoxGeometry(1.1, 0.1, 0.12), woodDark, wx, 1.9, 2.47);
      add(new THREE.BoxGeometry(0.08, 0.95, 0.12), woodDark, wx, 2.35, 2.47);
    }
    // flower boxes
    for (const wx of [-1.9, 1.9]) {
      add(new THREE.BoxGeometry(1.1, 0.22, 0.34), wood, wx, 1.78, 2.6);
      for (let i = 0; i < 5; i++) {
        const fl = add(new THREE.IcosahedronGeometry(0.09, 0), stdMat({ color: i % 2 ? '#ef8fb0' : '#ffd076' }), wx - 0.4 + i * 0.2, 1.94, 2.62, 0, 0, 0, false);
      }
    }

    // chimney + smoke
    add(new THREE.BoxGeometry(0.75, 2.1, 0.75), stone, -1.9, 5.0, -1.0);
    add(new THREE.BoxGeometry(0.9, 0.18, 0.9), stdMat({ color: '#6e695f' }), -1.9, 6.1, -1.0);
    this.smokeOrigin = new THREE.Vector3(x - 1.9, y + 6.3, z - 1.0);

    // porch lantern
    const lanternPost = add(new THREE.CylinderGeometry(0.06, 0.08, 1.2, 6), woodDark, 1.15, 0.6 + 1.0, 2.85);
    lanternPost.rotation.z = 0.1;
    const lg = glowSprite('#ffc76d', 2.6, 0.75);
    lg.position.set(1.2, 2.05, 2.85);
    g.add(lg);
    const lb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe1a3, toneMapped: false }));
    lb.position.copy(lg.position);
    g.add(lb);
    this.homeLight = new THREE.PointLight(0xffb56a, 1.3, 9, 2);
    this.homeLight.position.set(0, 2.3, 3.4);
    g.add(this.homeLight);

    // sign by the path
    const sign = new THREE.Group();
    sign.position.set(x + 2.2, this.height(x + 2.2, z + 3.8), z + 3.8);
    const postM = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.3, 0.12), woodDark);
    postM.position.y = 0.65;
    const board = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.75), new THREE.MeshStandardMaterial({ map: makeSignTexture('EMBERFALL', 'farmstead'), roughness: 0.85 }));
    board.position.set(0, 1.35, 0.08);
    sign.add(postM, board);
    this.scene.add(sign);

    // collision box
    this.boxes.push({ minX: x - 3.25, maxX: x + 3.25, minZ: z - 2.55, maxZ: z + 2.55 });
  }

  buildFarmProps(gx0, gz0, gx1, gz1) {
    // water barrel
    const bx = gx0 - 1.15, bz = gz1 + 0.9;
    const by = this.height(bx, bz);
    const barrel = new THREE.Group();
    barrel.position.set(bx, by, bz);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.34, 0.85, 10), stdMat({ color: '#7a5736' }));
    body.position.y = 0.43;
    for (const y of [0.16, 0.7]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 4, 12), stdMat({ color: '#4b4a48' }));
      band.rotation.x = Math.PI / 2; band.position.y = y;
      barrel.add(band);
    }
    const water = new THREE.Mesh(new THREE.CircleGeometry(0.33, 12), new THREE.MeshBasicMaterial({ color: 0x6fd3d9, transparent: true, opacity: 0.8 }));
    water.rotation.x = -Math.PI / 2; water.position.y = 0.84;
    barrel.add(body, water);
    body.castShadow = true;
    this.scene.add(barrel);
    this.colliders.push({ x: bx, z: bz, r: 0.42 });

    // hay bales
    const hayMat = stdMat({ color: '#d5b360' });
    for (const [hx, hz, ry] of [[gx0 - 1.4, gz0 + 0.9, 0.2], [gx0 - 0.9, gz0 - 0.2, 1.1]]) {
      const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.95, 9), hayMat);
      const hy = this.height(hx, hz);
      hb.position.set(hx, hy + 0.55, hz);
      hb.rotation.z = Math.PI / 2; hb.rotation.y = ry;
      hb.castShadow = true;
      this.scene.add(hb);
      this.colliders.push({ x: hx, z: hz, r: 0.6 });
    }

    // crate by the gate
    const cx = 2.3, cz = gz1 + 0.6;
    const crate = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.62, 0.72), stdMat({ color: '#8a6842' }));
    crate.position.set(cx, this.height(cx, cz) + 0.31, cz);
    crate.rotation.y = 0.3;
    crate.castShadow = true;
    this.scene.add(crate);
    this.colliders.push({ x: cx, z: cz, r: 0.5 });

    // little lantern post inside the field
    const lx = gx1 + 1.0, lz = gz0 + 1.2;
    const ly = this.height(lx, lz);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 1.7, 6), stdMat({ color: '#5b4128' }));
    post.position.set(lx, ly + 0.85, lz);
    const lampMat = new THREE.MeshStandardMaterial({ color: '#ffddab', emissive: '#ffb85e', emissiveIntensity: 0.15 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), lampMat);
    bulb.position.set(lx, ly + 1.78, lz);
    const glow = glowSprite('#ffc978', 1.4, 0.3);
    glow.position.copy(bulb.position);
    this.scene.add(post, bulb, glow);
    this.gateLights.push({ lamp: glow, bulb });
  }

  buildScarecrow(x, z) {
    const y = this.height(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.4, 6), stdMat({ color: '#6b4a2f' }));
    pole.position.y = 1.2;
    const arms = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.09, 0.09), stdMat({ color: '#6b4a2f' }));
    arms.position.y = 1.75;
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.1, 6), stdMat({ color: '#8e6a3f' }));
    body.position.y = 1.15;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.29, 8, 7), stdMat({ color: '#d7bc7c' }));
    head.position.y = 2.0;
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.5, 7), stdMat({ color: '#9a6b3c' }));
    hat.position.y = 2.35;
    hat.rotation.z = 0.12;
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 5, 4), new THREE.MeshBasicMaterial({ color: 0xffdb7d, toneMapped: false }));
      eye.position.set(0.1 * s, 2.04, 0.26);
      g.add(eye);
    }
    [pole, arms, body, head, hat].forEach((m) => { m.castShadow = true; g.add(m); });
    this.scene.add(g);
    this.colliders.push({ x, z, r: 0.4 });
  }

  // =========================================================== tower
  buildTower() {
    const { x, z } = LAYOUT.tower;
    const y = this.height(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    this.scene.add(g);
    this.towerGroup = g;

    const stone = stdMat({ color: '#8d8b86' });
    const stoneDark = stdMat({ color: '#6b6a68' });
    const purple = stdMat({ color: '#5a4a92', roughness: 0.8 });
    const trim = stdMat({ color: '#c8a95e' });
    const glowMat = new THREE.MeshStandardMaterial({ color: '#a9ecff', emissive: '#49c8ff', emissiveIntensity: 1.8, roughness: 0.3 });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.85, 1.0, 9), stoneDark);
    base.position.y = 0.5;
    const body = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.4, 6.2, 9), stone);
    body.position.y = 4.0;
    const balcony = new THREE.Mesh(new THREE.CylinderGeometry(2.65, 2.35, 0.3, 9), stoneDark);
    balcony.position.y = 6.95;
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.9, 1.6, 9), stone);
    upper.position.y = 7.9;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(2.5, 4.2, 9), purple);
    roof.position.y = 10.7;
    roof.rotation.y = 0.2;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.7, 5), trim);
    tip.position.y = 13.1;
    [base, body, balcony, upper, roof, tip].forEach((m) => { m.castShadow = true; m.receiveShadow = true; g.add(m); });

    // door
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.15, 2.0, 0.16), stdMat({ color: '#3c2f52' }));
    door.position.set(0, 1.55, 2.34);
    door.rotation.x = -0.13;
    g.add(door);
    const arch = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.09, 6, 12, Math.PI), trim);
    arch.position.set(0, 2.55, 2.4);
    g.add(arch);

    // windows
    for (const [wy, wyaw, wr] of [[4.2, 0.5, 1.1], [5.4, 2.3, 1.1], [7.9, 0.8, 0.8]]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.1), glowMat);
      const rad = wy === 7.9 ? 1.7 : 2.15;
      win.position.set(Math.sin(wyaw) * rad, wy, Math.cos(wyaw) * rad);
      win.rotation.y = wyaw;
      g.add(win);
    }

    // banners
    for (const yaw of [1.4, -1.6]) {
      const ban = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.7), new THREE.MeshStandardMaterial({ color: '#7d5fb8', side: THREE.DoubleSide, roughness: 0.9 }));
      ban.position.set(Math.sin(yaw) * 2.1, 8.5, Math.cos(yaw) * 2.1);
      ban.rotation.y = yaw;
      g.add(ban);
    }

    // floating orb
    this.towerOrb = new THREE.Group();
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), glowMat);
    const orbGlow = glowSprite('#7fdcff', 4.2, 0.8);
    this.towerOrb.add(orb, orbGlow);
    this.towerOrb.position.set(0, 13.6, 0);
    g.add(this.towerOrb);
    this.towerLight = new THREE.PointLight(0x76d6ff, 1.6, 14, 2);
    this.towerLight.position.set(0, 9.5, 0);
    g.add(this.towerLight);

    // sign
    const sign = new THREE.Group();
    const sx = x - 2.4, sz = z + 3.1;
    sign.position.set(sx, this.height(sx, sz), sz);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.0, 0.12), stdMat({ color: '#4d3b27' }));
    post.position.y = 1.0;
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.0), new THREE.MeshStandardMaterial({ map: makeSignTexture("ZEPHYR'S", 'arcane goods'), roughness: 0.85 }));
    board.position.set(0, 1.65, 0.08);
    sign.add(post, board);
    sign.rotation.y = 0.5;
    this.scene.add(sign);

    // cauldron
    const cauldron = new THREE.Group();
    const cx = x + 3.1, cz = z + 2.4;
    cauldron.position.set(cx, this.height(cx, cz), cz);
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.4, 0.65, 9), stdMat({ color: '#2c2b30' }));
    pot.position.y = 0.45;
    const brew = new THREE.Mesh(new THREE.CircleGeometry(0.43, 12), new THREE.MeshBasicMaterial({ color: 0x6ef2b4, toneMapped: false }));
    brew.rotation.x = -Math.PI / 2;
    brew.position.y = 0.78;
    this.brewGlow = glowSprite('#6ef2b4', 2.2, 0.55);
    this.brewGlow.position.y = 1.0;
    cauldron.add(pot, brew, this.brewGlow);
    this.scene.add(cauldron);

    // crates
    for (let i = 0; i < 3; i++) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), stdMat({ color: '#8b6a43' }));
      const px = x - 3.1 + (i % 2) * 0.8, pz = z + 1.2 + Math.floor(i / 2) * 0.8;
      crate.position.set(px, this.height(px, pz) + 0.36, pz);
      crate.rotation.y = rand(-0.4, 0.4);
      crate.castShadow = true;
      this.scene.add(crate);
    }

    this.colliders.push({ x, z, r: 2.6 });
    this.boxes.push({ minX: x - 3.8, maxX: x - 2.4, minZ: z + 0.4, maxZ: z + 2.2 });
  }

  // =========================================================== shrine
  buildShrine() {
    const { x, z } = LAYOUT.shrine;
    const y = this.height(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    this.scene.add(g);
    this.shrineGroup = g;

    const stoneMat = stdMat({ color: '#7b8290' });
    const runeTex = makeRuneTexture();
    const runeMat = new THREE.MeshBasicMaterial({ map: runeTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });

    const disc = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 4.7, 0.3, 18), stdMat({ color: '#5f6a63' }));
    disc.position.y = 0.1;
    disc.receiveShadow = true;
    g.add(disc);
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 0.34, 18), stdMat({ color: '#7d8674' }));
    inner.position.y = 0.15;
    inner.receiveShadow = true;
    g.add(inner);

    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.2;
      const sx = Math.cos(a) * 3.7, sz = Math.sin(a) * 3.7;
      const h = 2.0 + (i % 3) * 0.42;
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.88, 0), stoneMat);
      stone.scale.set(0.75, h / 1.55, 0.55);
      stone.position.set(sx, h * 0.64, sz);
      stone.rotation.set(rand(-0.12, 0.12), rand(0, 3), rand(-0.14, 0.14));
      stone.castShadow = true; stone.receiveShadow = true;
      g.add(stone);
      const rune = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.62), runeMat);
      rune.position.set(sx * 0.86, h * 0.62, sz * 0.86);
      rune.lookAt(new THREE.Vector3(0, h * 0.62, 0));
      g.add(rune);
      this.colliders.push({ x: x + sx, z: z + sz, r: 0.62 });
    }

    this.shrineCrystal = new THREE.Group();
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.72, 0),
      new THREE.MeshStandardMaterial({ color: '#bff4ff', emissive: '#45d4ff', emissiveIntensity: 2.2, roughness: 0.2 })
    );
    const cglow = glowSprite('#7fe4ff', 6.5, 0.75);
    this.shrineCrystal.add(crystal, cglow);
    this.shrineCrystal.position.y = 2.2;
    g.add(this.shrineCrystal);

    this.shrineBeam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 2.3, 16, 10, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x8ee9ff, transparent: true, opacity: 0.07, side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
      })
    );
    this.shrineBeam.position.y = 8.5;
    g.add(this.shrineBeam);

    this.shrineLight = new THREE.PointLight(0x7fe4ff, 1.8, 16, 2);
    this.shrineLight.position.y = 2.5;
    g.add(this.shrineLight);
    this.shrineDiscGlow = glowSprite('#75ddff', 9, 0.3);
    this.shrineDiscGlow.rotation.x = -Math.PI / 2;
    this.shrineDiscGlow.position.y = 0.4;
    g.add(this.shrineDiscGlow);

    // floating islands backdrop & rune stones done in nature
    this.colliders.push({ x, z: z, r: 0.7 });
  }

  // =========================================================== pond
  buildPond() {
    const { x, z, r } = LAYOUT.pond;
    const y = -1.18;
    const geo = new THREE.CircleGeometry(r + 0.7, 48);
    geo.rotateX(-Math.PI / 2);
    this.waterMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec2 vUv; varying vec3 vWorld;
        void main(){
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        varying vec2 vUv; varying vec3 vWorld;
        uniform float uTime;
        void main(){
          vec2 p = vWorld.xz;
          float w1 = sin(p.x*1.3 + uTime*0.9) * cos(p.y*1.1 - uTime*0.7);
          float w2 = sin((p.x+p.y)*2.1 - uTime*1.4) * 0.5;
          float ripple = w1*0.5 + w2*0.5;
          vec3 deep = vec3(0.055, 0.25, 0.30);
          vec3 shallow = vec3(0.20, 0.62, 0.58);
          float edge = smoothstep(0.0, 1.0, vUv.y);
          vec3 col = mix(shallow, deep, 0.55 + ripple*0.18);
          col += vec3(0.25,0.5,0.45) * pow(max(0.0,ripple),3.0) * 0.6;
          float sparkle = smoothstep(0.93, 1.0, sin(p.x*6.0 + uTime*2.0)*sin(p.y*5.0 - uTime*1.6));
          col += vec3(0.8,0.95,0.9) * sparkle * 0.5;
          gl_FragColor = vec4(col, 0.88);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });
    const water = new THREE.Mesh(geo, this.waterMat);
    water.position.set(x, y, z);
    this.scene.add(water);
    this.water = water;

    this.pondGlow = glowSprite('#63d6cd', 15, 0.16);
    this.pondGlow.rotation.x = -Math.PI / 2;
    this.pondGlow.position.set(x, y + 0.2, z);
    this.scene.add(this.pondGlow);

    // lily pads
    const padGeo = new THREE.CircleGeometry(0.4, 8);
    padGeo.rotateX(-Math.PI / 2);
    const padMat = stdMat({ color: '#4f8f4b', side: THREE.DoubleSide });
    for (let i = 0; i < 12; i++) {
      const a = rand(0, Math.PI * 2), rr = rand(1.0, r - 0.9);
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.position.set(x + Math.cos(a) * rr, y + 0.05, z + Math.sin(a) * rr);
      pad.scale.setScalar(rand(0.7, 1.3));
      pad.rotation.y = rand(0, 3);
      this.scene.add(pad);
      if (Math.random() < 0.4) {
        const fl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0), stdMat({ color: '#ffc8e0', emissive: '#ff8fc2', emissiveIntensity: 0.5 }));
        fl.position.set(pad.position.x, y + 0.12, pad.position.z);
        this.scene.add(fl);
      }
    }

    // reeds
    const reedGeo = new THREE.ConeGeometry(0.05, 1.0, 4);
    reedGeo.translate(0, 0.5, 0);
    const reeds = new THREE.InstancedMesh(reedGeo, stdMat({ color: '#6b8a45' }), 60);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    for (let i = 0; i < 60; i++) {
      const a = rand(0, Math.PI * 2);
      const rr = r + rand(-0.6, 1.4);
      p.set(x + Math.cos(a) * rr, this.height(x + Math.cos(a) * rr, z + Math.sin(a) * rr) - 0.1, z + Math.sin(a) * rr);
      q.setFromEuler(new THREE.Euler(rand(-0.12, 0.12), rand(0, 3), rand(-0.12, 0.12)));
      s.set(rand(0.7, 1.4), rand(0.7, 1.6), rand(0.7, 1.4));
      m.compose(p, q, s);
      reeds.setMatrixAt(i, m);
    }
    reeds.castShadow = false;
    this.scene.add(reeds);

    // big shore rocks
    this.colliders.push({ x, z, r: 5.45 });
  }

  // =========================================================== nature
  buildNature() {
    const broadParts = [
      { geo: xf(new THREE.CylinderGeometry(0.16, 0.26, 2.0, 6), 0, 1.0, 0), color: '#6d5138' },
    ];
    for (const [px, py, pz, r, c] of [
      [0, 2.7, 0, 1.55, TREE_GREENS[0]],
      [0.8, 2.3, 0.5, 1.05, TREE_GREENS[1]],
      [-0.85, 2.4, 0.25, 1.0, TREE_GREENS[2]],
      [0.1, 3.4, -0.4, 1.0, TREE_GREENS[3]],
      [0.5, 3.1, 0.7, 0.8, TREE_GREENS[1]],
    ]) {
      const geo = new THREE.IcosahedronGeometry(r, 0);
      geo.scale(1, 0.86, 1);
      geo.translate(px, py, pz);
      broadParts.push({ geo, color: c, jitter: 0.06 });
    }
    const broadGeo = mergeColored(broadParts);
    const broadMat = vcMat();

    const pineParts = [{ geo: xf(new THREE.CylinderGeometry(0.14, 0.24, 1.6, 6), 0, 0.8, 0), color: '#5a4632' }];
    for (let i = 0; i < 4; i++) {
      const r = 1.55 - i * 0.32;
      const cone = new THREE.ConeGeometry(r, 1.85, 7, 1);
      cone.translate(0, 1.5 + i * 0.95, 0);
      pineParts.push({ geo: cone, color: PINE_GREENS[i % 3], jitter: 0.05 });
    }
    const pineGeo = mergeColored(pineParts);

    const magicParts = [
      { geo: xf(new THREE.CylinderGeometry(0.14, 0.3, 2.2, 6), 0, 1.1, 0), color: '#b9a4c9' },
    ];
    for (const [px, py, pz, r, c] of [
      [0, 2.9, 0, 1.6, '#8e6cc0'], [0.9, 2.3, 0.3, 1.1, '#c477c9'],
      [-0.9, 2.4, -0.2, 1.05, '#7957ad'], [0.1, 3.7, 0.2, 1.0, '#d490d8'],
    ]) {
      const geo = new THREE.IcosahedronGeometry(r, 0);
      geo.translate(px, py, pz);
      magicParts.push({ geo, color: c, jitter: 0.05 });
    }
    const magicGeo = mergeColored(magicParts);

    const placements = { broad: [], pine: [], magic: [] };
    const pts = [];
    let guard = 0;
    while (pts.length < 150 && guard++ < 5000) {
      const a = rand(0, Math.PI * 2);
      const rr = rand(13, 58);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 11.5 && Math.abs(z) < 11.5) continue;
      if (Math.hypot(x - LAYOUT.home.x, z - LAYOUT.home.z) < 9) continue;
      if (Math.hypot(x - LAYOUT.tower.x, z - LAYOUT.tower.z) < 7.5) continue;
      if (Math.hypot(x - LAYOUT.shrine.x, z - LAYOUT.shrine.z) < 7.4) continue;
      if (Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z) < 9.5) continue;
      if (Math.hypot(x - LAYOUT.spawn.x, z - LAYOUT.spawn.z) < 5) continue;
      if (Math.hypot(x + 14, z - 26) < 12) continue;
      if (x > -14 && x < 18 && z > 10.5 && z < 31) continue;
      if (this.nearPath(x, z, 3.1)) continue;
      if (this.height(x, z) < -0.35) continue;
      if (pts.some((p) => Math.hypot(p.x - x, p.z - z) < 3.2)) continue;
      pts.push({ x, z });
    }

    for (const p of pts) {
      const dShrine = Math.hypot(p.x - LAYOUT.shrine.x, p.z - LAYOUT.shrine.z);
      const west = p.x < -13, north = p.z < -15, east = p.x > 20;
      let kind = 'broad';
      const r = Math.random();
      if (dShrine < 13 && r < 0.55) kind = 'magic';
      else if ((west || north || east) && r < 0.55) kind = 'pine';
      else if (r < 0.32) kind = 'pine';
      else if (r < 0.42) kind = 'magic';
      placements[kind].push(p);
    }

    const makeTreeInstances = (geo, mat, list, kind) => {
      const mesh = new THREE.InstancedMesh(geo, mat, Math.max(list.length, 1));
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.count = list.length;
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
      list.forEach((pt, idx) => {
        const sc = rand(0.85, 1.35);
        p.set(pt.x, this.height(pt.x, pt.z) - 0.05, pt.z);
        q.setFromEuler(new THREE.Euler(0, rand(0, Math.PI * 2), 0));
        s.set(sc, sc * rand(0.9, 1.15), sc);
        m.compose(p, q, s);
        mesh.setMatrixAt(idx, m);
        const tree = {
          kind, x: pt.x, z: pt.z, scale: sc, active: true, hits: 3, maxHits: 3,
          respawnDay: 0, mesh, idx, base: m.clone(), ref: null,
        };
        tree.ref = tree;
        this.trees.push(tree);
        this.colliders.push({ x: pt.x, z: pt.z, r: 0.55 * sc, tree });
      });
      mesh.instanceMatrix.needsUpdate = true;
      this.scene.add(mesh);
      return mesh;
    };

    makeTreeInstances(broadGeo, broadMat, placements.broad, 'broad');
    makeTreeInstances(pineGeo, broadMat, placements.pine, 'pine');
    makeTreeInstances(magicGeo, broadMat, placements.magic, 'magic');

    // magic tree glow motes
    const motes = [];
    for (const t of this.trees) {
      if (t.kind !== 'magic') continue;
      for (let i = 0; i < 2; i++) motes.push(t.x + rand(-1, 1), this.height(t.x, t.z) + rand(2.2, 4.2), t.z + rand(-1, 1));
    }
    const mg = new THREE.BufferGeometry();
    mg.setAttribute('position', new THREE.Float32BufferAttribute(motes, 3));
    this.moteMat = new THREE.PointsMaterial({
      size: 0.3, map: glowTexture('#d9a4ff'), transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending, depthWrite: false, color: 0xd6a4ff, toneMapped: false,
    });
    this.motes = new THREE.Points(mg, this.moteMat);
    this.moteBase = motes.slice();
    this.scene.add(this.motes);

    // rocks
    const rockParts = [];
    const shape = new THREE.DodecahedronGeometry(1, 0);
    rockParts.push({ geo: xf(shape.clone(), 0, 0.42, 0, 0.2, 0.4, 0, 1.0), color: '#7d7d78', jitter: 0.07 });
    rockParts.push({ geo: xf(new THREE.DodecahedronGeometry(0.55, 0), 0.62, 0.24, 0.3, 0.4, 0.2, 0.3), color: '#8f8d84', jitter: 0.06 });
    const rockGeo = mergeColored(rockParts);
    const rockMat = vcMat({ roughness: 1 });
    const rockPts = [];
    guard = 0;
    while (rockPts.length < 46 && guard++ < 3000) {
      const a = rand(0, Math.PI * 2), rr = rand(11, 50);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 11 && Math.abs(z) < 11) continue;
      if (Math.hypot(x - LAYOUT.home.x, z - LAYOUT.home.z) < 7) continue;
      if (Math.hypot(x - LAYOUT.tower.x, z - LAYOUT.tower.z) < 6) continue;
      if (Math.hypot(x - LAYOUT.shrine.x, z - LAYOUT.shrine.z) < 6) continue;
      if (Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z) < 7.5) continue;
      if (this.nearPath(x, z, 2.6)) continue;
      if (rockPts.some((p) => Math.hypot(p.x - x, p.z - z) < 3)) continue;
      rockPts.push({ x, z });
    }
    const rockMesh = new THREE.InstancedMesh(rockGeo, rockMat, rockPts.length);
    rockMesh.castShadow = true; rockMesh.receiveShadow = true;
    rockPts.forEach((pt, idx) => {
      const sc = rand(0.55, 1.25);
      const p = new THREE.Vector3(pt.x, this.height(pt.x, pt.z), pt.z);
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand(0, 6), rand(-0.1, 0.1)));
      const s = new THREE.Vector3(sc, sc * rand(0.7, 1), sc);
      const m = new THREE.Matrix4().compose(p, q, s);
      rockMesh.setMatrixAt(idx, m);
      const rock = {
        x: pt.x, z: pt.z, scale: sc, active: true, hits: 3, maxHits: 3,
        respawnDay: 0, mesh: rockMesh, idx, base: m.clone(),
      };
      rock.ref = rock;
      this.rocks.push(rock);
      this.colliders.push({ x: pt.x, z: pt.z, r: 0.7 * sc, rock });
    });
    rockMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(rockMesh);

    // crystals
    const crystalGeo = new THREE.OctahedronGeometry(0.6, 0);
    crystalGeo.scale(0.7, 1.7, 0.7);
    const crystalMat = new THREE.MeshStandardMaterial({ color: '#bff2ff', emissive: '#4fd8ff', emissiveIntensity: 1.6, roughness: 0.25, flatShading: true });
    const crystalSpots = [];
    for (let i = 0; i < 16; i++) {
      const a = rand(0, Math.PI * 2), rr = rand(20, 46);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 12 && Math.abs(z) < 12) continue;
      crystalSpots.push({ x, z, s: rand(0.6, 1.6) });
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.5;
      crystalSpots.push({ x: LAYOUT.shrine.x + Math.cos(a) * 6.4, z: LAYOUT.shrine.z + Math.sin(a) * 6.4, s: rand(0.5, 0.9) });
    }
    this.crystals = [];
    for (const c of crystalSpots) {
      const mesh = new THREE.Mesh(crystalGeo, crystalMat);
      const cy = this.height(c.x, c.z);
      mesh.position.set(c.x, cy + c.s * 0.55, c.z);
      mesh.scale.setScalar(c.s);
      mesh.rotation.set(rand(-0.15, 0.15), rand(0, 3), rand(-0.15, 0.15));
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.crystals.push(mesh);
    }

    // grass tufts
    const bladeParts = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.ConeGeometry(0.055, 0.5, 3);
      g.translate(0, 0.25, 0);
      g.rotateZ(rand(-0.35, 0.35));
      g.rotateY((i / 3) * Math.PI * 2);
      bladeParts.push({ geo: g, color: i % 2 ? '#79a84e' : '#5f9145' });
    }
    const grassGeo = mergeColored(bladeParts);
    const grassMat = vcMat({ side: THREE.DoubleSide });
    const grassCount = this.lowQuality ? 500 : 1000;
    const grass = new THREE.InstancedMesh(grassGeo, grassMat, grassCount);
    const gm = new THREE.Matrix4(), gq = new THREE.Quaternion(), gs = new THREE.Vector3(), gp = new THREE.Vector3();
    let placed = 0, tries = 0;
    while (placed < grassCount && tries++ < grassCount * 8) {
      const a = rand(0, Math.PI * 2), rr = rand(9.5, 55);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 9.6 && Math.abs(z) < 9.6) continue;
      if (Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z) < 6.8) continue;
      if (this.nearPath(x, z, 1.7)) continue;
      const y = this.height(x, z);
      gp.set(x, y, z);
      gq.setFromEuler(new THREE.Euler(0, rand(0, 3.14), 0));
      const sc = rand(0.6, 1.5);
      gs.set(sc, rand(0.7, 1.6), sc);
      gm.compose(gp, gq, gs);
      grass.setMatrixAt(placed, gm);
      placed++;
    }
    grass.count = placed;
    grass.instanceMatrix.needsUpdate = true;
    grass.castShadow = false;
    this.scene.add(grass);

    // wildflowers (instanced with per-instance color)
    const flowerParts = [
      { geo: xf(new THREE.CylinderGeometry(0.02, 0.02, 0.28, 3), 0, 0.14, 0), color: '#4f7f3e' },
      { geo: xf(new THREE.IcosahedronGeometry(0.11, 0), 0, 0.34, 0), color: '#ffffff' },
    ];
    const flowerGeo = mergeColored(flowerParts);
    const flowerMat = stdMat({ vertexColors: true, emissive: 0x222222, emissiveIntensity: 0.15 });
    const fCount = 220;
    const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, fCount);
    const palette = ['#ffd8e6', '#fff0b0', '#cfe6ff', '#ffc4a0', '#e3c6ff', '#ffffff'];
    const fc = new THREE.Color();
    let fp = 0, ft = 0;
    while (fp < fCount && ft++ < fCount * 10) {
      const a = rand(0, Math.PI * 2), rr = rand(9.6, 42);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 9.5 && Math.abs(z) < 9.5) continue;
      if (this.nearPath(x, z, 1.6)) continue;
      if (Math.hypot(x - LAYOUT.pond.x, z - LAYOUT.pond.z) < 7) continue;
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(x, this.height(x, z), z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand(0, 6), 0)),
        new THREE.Vector3().setScalar(rand(0.7, 1.3))
      );
      flowers.setMatrixAt(fp, m);
      fc.set(palette[(Math.random() * palette.length) | 0]);
      flowers.setColorAt(fp, fc);
      fp++;
    }
    flowers.count = fp;
    flowers.instanceMatrix.needsUpdate = true;
    if (flowers.instanceColor) flowers.instanceColor.needsUpdate = true;
    this.scene.add(flowers);

    // mushrooms
    const shroomParts = [
      { geo: xf(new THREE.CylinderGeometry(0.06, 0.09, 0.26, 5), 0, 0.13, 0), color: '#e8d8bf' },
      { geo: xf(new THREE.SphereGeometry(0.2, 7, 5, 0, Math.PI * 2, 0, Math.PI / 2), 0, 0.26, 0), color: '#b85a4d' },
    ];
    const shroomGeo = mergeColored(shroomParts);
    const shroomMat = stdMat({ vertexColors: true, emissive: 0x2a0d0a, emissiveIntensity: 0.2 });
    const shrooms = new THREE.InstancedMesh(shroomGeo, shroomMat, 70);
    let sp = 0;
    tries = 0;
    while (sp < 70 && tries++ < 1000) {
      const a = rand(0, Math.PI * 2), rr = rand(12, 45);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      if (Math.abs(x) < 10 && Math.abs(z) < 10) continue;
      if (this.nearPath(x, z, 2.2)) continue;
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(x, this.height(x, z), z),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rand(0, 6), 0)),
        new THREE.Vector3().setScalar(rand(0.6, 1.5))
      );
      shrooms.setMatrixAt(sp++, m);
    }
    shrooms.count = sp;
    shrooms.instanceMatrix.needsUpdate = true;
    this.scene.add(shrooms);

    // floating islands
    this.islands = [];
    const islandSpots = [
      { x: -56, y: 30, z: -52, s: 2.0 }, { x: 52, y: 34, z: -62, s: 2.4 },
      { x: 64, y: 26, z: 40, s: 1.7 }, { x: -48, y: 40, z: 50, s: 2.0 },
    ];
    for (const spot of islandSpots) {
      const ig = new THREE.Group();
      const rock = new THREE.Mesh(
        new THREE.ConeGeometry(5.4 * spot.s, 9 * spot.s, 6, 1),
        new THREE.MeshStandardMaterial({ color: '#867d96', emissive: '#2a1d44', emissiveIntensity: 0.35, flatShading: true })
      );
      rock.rotation.x = Math.PI;
      rock.position.y = -4.5 * spot.s;
      const top = new THREE.Mesh(new THREE.CylinderGeometry(5.3 * spot.s, 5.6 * spot.s, 1.0 * spot.s, 7), stdMat({ color: '#6d9a56' }));
      top.position.y = 0.2;
      const t = new THREE.Mesh(new THREE.ConeGeometry(1.4 * spot.s, 4 * spot.s, 7), stdMat({ color: '#3c7247' }));
      t.position.set(1.6 * spot.s, 2.4 * spot.s, 0.6 * spot.s);
      const t2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4 * spot.s, 0.5 * spot.s, 1.8 * spot.s, 5), stdMat({ color: '#6b5138' }));
      t2.position.set(1.6 * spot.s, 0.6 * spot.s, 0.6 * spot.s);
      const cr = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.0 * spot.s, 0),
        new THREE.MeshStandardMaterial({ color: '#bff2ff', emissive: '#57d9ff', emissiveIntensity: 1.8, flatShading: true })
      );
      cr.position.set(-1.8 * spot.s, 2.2 * spot.s, -0.8 * spot.s);
      ig.add(rock, top, t, t2, cr);
      ig.position.set(spot.x, spot.y, spot.z);
      ig.userData.baseY = spot.y;
      ig.userData.phase = rand(0, 6);
      this.scene.add(ig);
      this.islands.push(ig);
    }

    this.buildForestDetails(pts);
  }

  buildForestDetails(treePts) {
    // fallen log and a few stumps near the forest edge
    const logMat = stdMat({ color: '#6a5137' });
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 3.6, 7), logMat);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = 0.5;
    const lx = -22, lz = -11;
    log.position.set(lx, this.height(lx, lz) + 0.4, lz);
    log.castShadow = true;
    this.scene.add(log);

    for (let i = 0; i < 4; i++) {
      const sx = -25 + i * 1.6, sz = -13 - i * 0.7;
      const st = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.45, 7), logMat);
      st.position.set(sx, this.height(sx, sz) + 0.2, sz);
      st.castShadow = true;
      this.scene.add(st);
    }
  }

  // =========================================================== NPCs
  buildNPCs() {
    // Zephyr the wizard
    const wz = LAYOUT.wizard;
    const g = new THREE.Group();
    g.position.set(wz.x, this.height(wz.x, wz.z), wz.z);
    const robe = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.75, 7), stdMat({ color: '#4b3d86' }));
    robe.position.y = 0.9;
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 0.8, 7), stdMat({ color: '#5a4a9e' }));
    torso.position.y = 1.6;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 9, 8), stdMat({ color: '#e8c7a2' }));
    head.position.y = 2.18;
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.55, 6), stdMat({ color: '#dfe6ef' }));
    beard.position.set(0, 1.95, 0.2);
    beard.rotation.x = 0.15;
    const hat = new THREE.Mesh(new THREE.ConeGeometry(0.46, 1.0, 7), stdMat({ color: '#3f3470' }));
    hat.position.y = 2.72;
    hat.rotation.z = 0.12;
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.08, 9), stdMat({ color: '#3f3470' }));
    brim.position.y = 2.3;
    brim.rotation.z = 0.12;
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 2.3, 5), stdMat({ color: '#6d5138' }));
    staff.position.set(0.68, 1.15, 0.1);
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 0), new THREE.MeshStandardMaterial({ color: '#a8ecff', emissive: '#4fd7ff', emissiveIntensity: 2.2 }));
    orb.position.set(0.68, 2.35, 0.1);
    const orbGlow = glowSprite('#71ddff', 2.0, 0.65);
    orbGlow.position.copy(orb.position);
    [robe, torso, head, beard, hat, brim, staff].forEach((m) => { m.castShadow = true; g.add(m); });
    g.add(orb, orbGlow);
    this.scene.add(g);
    this.wizard = { group: g, orb, orbGlow, baseY: g.position.y };
    this.colliders.push({ x: wz.x, z: wz.z, r: 0.5 });

    // Nissa the dryad
    const dz = LAYOUT.dryad;
    const d = new THREE.Group();
    d.position.set(dz.x, this.height(dz.x, dz.z), dz.z);
    const dress = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.35, 7), stdMat({ color: '#4f7d4b' }));
    dress.position.y = 0.68;
    const dtorso = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.37, 0.7, 7), stdMat({ color: '#67975a' }));
    dtorso.position.y = 1.35;
    const dhead = new THREE.Mesh(new THREE.SphereGeometry(0.27, 9, 8), stdMat({ color: '#e3c6a2' }));
    dhead.position.y = 1.86;
    const hair = new THREE.Mesh(new THREE.IcosahedronGeometry(0.34, 0), stdMat({ color: '#5c8a45' }));
    hair.position.set(0, 2.02, -0.06);
    hair.scale.set(1, 0.85, 1);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const fl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0), stdMat({ color: i % 2 ? '#ffc7df' : '#ffe8a8' }));
      fl.position.set(Math.cos(a) * 0.28, 2.14, Math.sin(a) * 0.28);
      d.add(fl);
    }
    for (const s of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.5, 4), stdMat({ color: '#c9b083' }));
      horn.position.set(0.18 * s, 2.3, 0);
      horn.rotation.z = -0.35 * s;
      d.add(horn);
    }
    [dress, dtorso, dhead, hair].forEach((m) => { m.castShadow = true; d.add(m); });
    const dryadGlow = glowSprite('#a8f0b8', 2.6, 0.35);
    dryadGlow.position.y = 1.4;
    d.add(dryadGlow);
    this.scene.add(d);
    this.dryad = { group: d, baseY: d.position.y };
    this.colliders.push({ x: dz.x, z: dz.z, r: 0.45 });
  }

  // =========================================================== atmosphere
  buildAtmosphere() {
    // fireflies
    const count = this.lowQuality ? 50 : 110;
    const pos = new Float32Array(count * 3);
    this.fireflyData = [];
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2), rr = rand(8, 48);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      const y = this.height(x, z) + rand(0.5, 4.0);
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      this.fireflyData.push({ x, y, z, phase: rand(0, 6.28), speed: rand(0.4, 1.4), amp: rand(0.4, 1.4) });
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.fireflyMat = new THREE.PointsMaterial({
      size: 0.34, map: glowTexture('#d8ffb0'), color: 0xd6ff9e, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true, toneMapped: false,
    });
    this.fireflies = new THREE.Points(fg, this.fireflyMat);
    this.scene.add(this.fireflies);

    // chimney smoke
    const smokeCount = 26;
    const sp = new Float32Array(smokeCount * 3);
    this.smokeData = [];
    for (let i = 0; i < smokeCount; i++) {
      const t = i / smokeCount;
      sp[i * 3] = this.smokeOrigin.x + rand(-0.15, 0.15);
      sp[i * 3 + 1] = this.smokeOrigin.y + t * 4.0;
      sp[i * 3 + 2] = this.smokeOrigin.z + rand(-0.15, 0.15);
      this.smokeData.push({ t, drift: rand(-0.5, 0.5) });
    }
    const smg = new THREE.BufferGeometry();
    smg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    this.smokeMat = new THREE.PointsMaterial({
      size: 1.0, map: glowTexture('#c8c8c8', 0.35), color: 0xc9c9c9, transparent: true, opacity: 0.32,
      depthWrite: false, sizeAttenuation: true, toneMapped: true,
    });
    this.smoke = new THREE.Points(smg, this.smokeMat);
    this.scene.add(this.smoke);

    // rain
    const drops = this.lowQuality ? 380 : 700;
    const rp = new Float32Array(drops * 6);
    this.rainDrops = [];
    for (let i = 0; i < drops; i++) {
      this.resetDrop(rp, i, true);
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
    this.rainMat = new THREE.LineBasicMaterial({ color: 0xbcd8e8, transparent: true, opacity: 0.42, depthWrite: false });
    this.rain = new THREE.LineSegments(rg, this.rainMat);
    this.rain.visible = false;
    this.rain.frustumCulled = false;
    this.scene.add(this.rain);
    this.rainGeo = rg;
    this.rainCount = drops;

    // ambient floating sparkles around the farm during day
    const sparkCount = 40;
    const sparkPos = new Float32Array(sparkCount * 3);
    this.sparkData = [];
    for (let i = 0; i < sparkCount; i++) {
      const x = rand(-30, 30), z = rand(-30, 30);
      sparkPos[i * 3] = x; sparkPos[i * 3 + 1] = this.height(x, z) + rand(1, 6); sparkPos[i * 3 + 2] = z;
      this.sparkData.push({ phase: rand(0, 6), amp: rand(0.3, 1.4) });
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    this.sparkMat = new THREE.PointsMaterial({
      size: 0.22, map: glowTexture('#fff3c7'), color: 0xfff0c0, transparent: true, opacity: 0.3,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
    });
    this.sparks = new THREE.Points(sg, this.sparkMat);
    this.scene.add(this.sparks);
  }

  resetDrop(arr, i, initial = false) {
    const x = rand(-24, 24), z = rand(-24, 24);
    const y = initial ? rand(0, 18) : rand(12, 18);
    arr[i * 6] = x; arr[i * 6 + 1] = y; arr[i * 6 + 2] = z;
    arr[i * 6 + 3] = x + 0.08; arr[i * 6 + 4] = y - 0.75; arr[i * 6 + 5] = z;
  }

  setWeather(w) {
    this.weather = w;
    this.rain.visible = w === 'rain';
    if (w === 'rain') this.rainMat.opacity = 0.42;
  }

  buildBounds() {
    this.colliders.push({ x: 0, z: 0, r: 0, boundary: true });
  }

  // =========================================================== target helpers
  nearestCollider(x, z, maxDist, filter) {
    let best = null, bd = maxDist;
    for (const c of this.colliders) {
      if (c.boundary) continue;
      if (c.tree && !c.tree.active) continue;
      if (c.rock && !c.rock.active) continue;
      if (filter && !filter(c)) continue;
      const d = Math.hypot(c.x - x, c.z - z);
      if (d < bd) { bd = d; best = { ...c, dist: d }; }
    }
    return best;
  }

  // =========================================================== day reset
  newDay(day) {
    this.day = day;
    for (const t of this.trees) {
      if (!t.active && day >= t.respawnDay) {
        t.active = true;
        t.hits = t.maxHits;
        t.mesh.setMatrixAt(t.idx, t.base);
        t.mesh.instanceMatrix.needsUpdate = true;
      }
    }
    for (const r of this.rocks) {
      if (!r.active && day >= r.respawnDay) {
        r.active = true;
        r.hits = r.maxHits;
        r.mesh.setMatrixAt(r.idx, r.base);
        r.mesh.instanceMatrix.needsUpdate = true;
      }
    }
  }

  chopTree(tree) {
    tree.hits--;
    if (tree.hits <= 0) {
      tree.active = false;
      tree.respawnDay = this.day + 2;
      const m = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
      tree.mesh.setMatrixAt(tree.idx, m);
      tree.mesh.instanceMatrix.needsUpdate = true;
      return true;
    }
    return false;
  }

  mineRock(rock) {
    rock.hits--;
    if (rock.hits <= 0) {
      rock.active = false;
      rock.respawnDay = this.day + 3;
      const m = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
      rock.mesh.setMatrixAt(rock.idx, m);
      rock.mesh.instanceMatrix.needsUpdate = true;
      return true;
    }
    return false;
  }

  addSprinkler(spotIndex) {
    const spot = this.sprinklerSpots[spotIndex];
    if (!spot) return null;
    const g = new THREE.Group();
    g.position.set(spot.x, 0.16, spot.z);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.32, 0.14, 8), stdMat({ color: '#a97b45' }));
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4, 5), stdMat({ color: '#c9a45f' }));
    stem.position.y = 0.26;
    const top = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.045, 5, 10), stdMat({ color: '#8fd8c9', metalness: 0.4, roughness: 0.4 }));
    top.position.y = 0.47;
    top.rotation.x = Math.PI / 2;
    const drop = new THREE.Mesh(new THREE.IcosahedronGeometry(0.07, 0), new THREE.MeshBasicMaterial({ color: 0x9ef0ff, toneMapped: false }));
    drop.position.y = 0.6;
    g.add(base, stem, top, drop);
    const gl = glowSprite('#7fe7d7', 1.5, 0.4);
    gl.position.y = 0.5;
    g.add(gl);
    this.scene.add(g);
    this.sprinklers.push({ group: g, top, x: spot.x, z: spot.z });
    this.wateredSpots = true;
    return { x: spot.x, z: spot.z };
  }

  // =========================================================== update
  update(dt, hours, weather, playerPos) {
    this.time += dt;
    const t = this.time;
    this.updateSky(hours);

    if (this.waterMat) this.waterMat.uniforms.uTime.value = t;

    // sun glare
    const dayW = smoothstep(0.02, 0.4, Math.sin(((hours - 6) / 24) * Math.PI * 2));
    this.pondGlow.material.opacity = 0.08 + dayW * 0.1;

    // stars twinkle
    this.starMat.size = 1.5 + Math.sin(t * 0.6) * 0.15;
    this.stars.rotation.y = t * 0.0025;

    // fireflies
    const nightW = 1 - dayW;
    this.fireflyMat.opacity = nightW * 0.95;
    if (nightW > 0.02) {
      const pos = this.fireflies.geometry.attributes.position;
      for (let i = 0; i < this.fireflyData.length; i++) {
        const f = this.fireflyData[i];
        pos.setXYZ(i,
          f.x + Math.sin(t * f.speed + f.phase) * f.amp,
          f.y + Math.sin(t * f.speed * 1.7 + f.phase * 2) * 0.4,
          f.z + Math.cos(t * f.speed * 0.8 + f.phase) * f.amp);
      }
      pos.needsUpdate = true;
    }
    this.sparkMat.opacity = 0.06 + dayW * 0.24;
    if (dayW > 0.05) {
      const pos = this.sparks.geometry.attributes.position;
      for (let i = 0; i < this.sparkData.length; i++) {
        const s = this.sparkData[i];
        pos.setY(i, pos.getY(i) + Math.sin(t * 0.5 + s.phase) * 0.0015);
      }
      pos.needsUpdate = true;
    }

    // motes around magic trees
    if (this.motes) {
      const pos = this.motes.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        pos.setY(i, this.moteBase[i * 3 + 1] + Math.sin(t * 0.7 + i) * 0.3);
        pos.setX(i, this.moteBase[i * 3] + Math.cos(t * 0.4 + i) * 0.25);
      }
      pos.needsUpdate = true;
      this.moteMat.opacity = 0.35 + nightW * 0.6;
      this.moteMat.size = 0.3 + Math.sin(t * 1.3) * 0.06;
    }

    // crystals pulse
    for (const c of this.crystals) {
      c.material.emissiveIntensity = 1.4 + Math.sin(t * 1.2 + c.position.x) * 0.2;
    }

    // shrine
    this.shrineCrystal.rotation.y = t * 0.45;
    this.shrineCrystal.position.y = 2.2 + Math.sin(t * 0.9) * 0.18;
    this.shrineBeam.material.opacity = 0.03 + nightW * 0.09;
    this.shrineDiscGlow.material.opacity = 0.12 + nightW * 0.24;
    this.shrineLight.intensity = 1.0 + nightW * 1.0;

    // tower orb
    this.towerOrb.rotation.y = t * 0.8;
    this.towerOrb.position.y = 13.6 + Math.sin(t * 1.1) * 0.18;
    this.towerOrb.children[1].material.opacity = 0.55 + nightW * 0.35;
    this.brewGlow.material.opacity = 0.35 + Math.sin(t * 2) * 0.12 + nightW * 0.2;

    // wizard / dryad idle
    this.wizard.group.position.y = this.wizard.baseY + Math.sin(t * 1.1) * 0.05;
    this.wizard.orb.position.y = 2.35 + Math.sin(t * 1.7) * 0.07;
    this.wizard.orb.rotation.y = t;
    this.wizard.orbGlow.material.opacity = 0.5 + Math.sin(t * 1.6) * 0.15;
    this.dryad.group.position.y = this.dryad.baseY + Math.sin(t * 0.9 + 1) * 0.03;
    this.dryad.group.rotation.y = Math.sin(t * 0.3) * 0.18;

    // gate lanterns
    for (const gl of this.gateLights) {
      gl.lamp.material.opacity = 0.02 + nightW * 0.3;
      if (gl.bulb.material.emissiveIntensity !== undefined) gl.bulb.material.emissiveIntensity = 0.08 + nightW * 1.1;
    }
    this.homeLight.intensity = 0.5 + nightW * 1.5;

    // clouds drift
    for (const c of this.clouds.children) {
      c.position.x += dt * c.userData.speed * 0.5;
      if (c.position.x > 105) c.position.x = -105;
    }
    // islands bob
    for (const isl of this.islands) {
      isl.position.y = isl.userData.baseY + Math.sin(t * 0.35 + isl.userData.phase) * 0.7;
      isl.rotation.y += dt * 0.01;
    }
    // smoke
    if (this.smokeData) {
      const pos = this.smoke.geometry.attributes.position;
      for (let i = 0; i < this.smokeData.length; i++) {
        const s = this.smokeData[i];
        s.t += dt * 0.055;
        if (s.t > 1) s.t -= 1;
        pos.setXYZ(i,
          this.smokeOrigin.x + Math.sin(t * 0.6 + i) * 0.35 + s.t * (1.1 + s.drift),
          this.smokeOrigin.y + s.t * 4.5,
          this.smokeOrigin.z + Math.cos(t * 0.4 + i) * 0.3 + s.t * 0.5);
      }
      pos.needsUpdate = true;
      this.smokeMat.opacity = 0.2 + nightW * 0.08;
    }

    // sprinklers
    for (const sp of this.sprinklers) {
      sp.top.rotation.z = t * 2.2;
      sp.group.position.y = 0.16 + Math.sin(t * 1.4) * 0.035;
    }

    // rain
    if (weather === 'rain') {
      const arr = this.rainGeo.attributes.position.array;
      for (let i = 0; i < this.rainCount; i++) {
        arr[i * 6 + 1] -= dt * 16;
        arr[i * 6 + 4] -= dt * 16;
        if (arr[i * 6 + 4] < 0) {
          this.resetDrop(arr, i, false);
        }
      }
      this.rainGeo.attributes.position.needsUpdate = true;
      this.rain.position.set(playerPos.x, this.height(playerPos.x, playerPos.z), playerPos.z);
      this.rainMat.opacity = 0.34 + Math.sin(t * 0.7) * 0.04;
    }

    // shadows / light follow general area
    this.sun.target.position.set(clamp(playerPos.x, -20, 20) * 0.4, 0, clamp(playerPos.z, -20, 20) * 0.4);

    // crop fruit bob + glow
    for (const plot of this.plots) {
      if (plot.fruitMesh && plot.fruitMesh.visible) {
        plot.fruitMesh.position.y = 1.1 + Math.sin(t * 2.2 + plot.index) * 0.04;
        plot.fruitMesh.rotation.y = t * 0.6 + plot.index;
      }
    }
  }
}
