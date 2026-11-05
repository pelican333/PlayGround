// buildings, nature and points of interest
import * as THREE from 'three';
import { box, cyl, ball, plane, rbox, mat, colorMat, basicMat, glowMat, canvasTexture, texture } from './mats.js';
import { textureCanvas, rng, shade, iconURL } from '../art.js';

const CAST = true;

function windowMat() {
  return new THREE.MeshLambertMaterial({ color: '#ffd88a', emissive: '#ffb347', emissiveIntensity: 0.25 });
}

function signTexture(lines, color = '#f6ecd2', bg = '#2b2140', iconId = null) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 80;
  const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
  x.fillStyle = 'rgba(20,14,32,0.94)'; x.fillRect(0, 0, 256, 80);
  x.fillStyle = '#e8c170'; x.fillRect(0, 0, 256, 4); x.fillRect(0, 76, 256, 4); x.fillRect(0, 0, 4, 80); x.fillRect(252, 0, 4, 80);
  x.fillStyle = '#b98b45'; x.fillRect(4, 4, 4, 72); x.fillRect(248, 4, 4, 72);
  if (iconId) {
    const img = new Image();
    img.src = iconURL(iconId);
    try { x.drawImage(img, 12, 16, 48, 48); } catch {}
  }
  x.fillStyle = color;
  x.font = 'bold 26px "Courier New", monospace';
  x.textAlign = iconId ? 'left' : 'center';
  x.textBaseline = 'middle';
  x.fillText(lines[0], iconId ? 72 : 128, 30);
  if (lines[1]) { x.fillStyle = '#bfae8a'; x.font = 'bold 14px "Courier New", monospace'; x.fillText(lines[1], iconId ? 72 : 128, 56); }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createSign(lines, x, z, y = 2.4, scale = 2.6, iconId = null, color = '#f6ecd2') {
  const g = new THREE.Group(); g.position.set(x, y, z);
  const p = new THREE.Mesh(new THREE.PlaneGeometry(scale, scale * 0.3125), new THREE.MeshBasicMaterial({ map: signTexture(lines, color, '#2b2140', iconId), transparent: true }));
  p.position.z = 0.02; g.add(p);
  const back = box(g, scale + .12, scale * .33, .08, colorMat('#5e3a28'), 0, 0, -.04);
  g.userData.plane = p;
  return g;
}

// ---------------------------------------------------------------------------
// house / shop
// ---------------------------------------------------------------------------
export function createHouse(cfg) {
  const {
    x, z, w = 8, d = 6, name = '', roof = 'roof', wall = 'plaster', trim = '#6f4e31',
    doorOffset = 0, interact = null, style = 'house', awning = '#a8483a',
  } = cfg;
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const wallMat = mat(wall, cfg.wallTint || '#ffffff', w / 2.2, d / 2.2);
  const roofMat = mat(roof, cfg.roofTint || '#ffffff', w / 2.5, 1.5);
  const wood = mat('planks', '#6f4e31', 1, 1);
  const trimMat = colorMat(trim);
  const baseH = 3.0, roofH = 2.2;
  // foundation + body
  box(g, w + .4, .5, d + .4, mat('stone', '#9a948c', 4, 3), 0, .25, 0, CAST);
  box(g, w, baseH, d, wallMat, 0, .5 + baseH / 2, 0, CAST);
  // timber frame
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(g, .24, baseH, .24, wood, sx * w / 2, .5 + baseH / 2, sz * d / 2);
  box(g, w + .06, .22, .22, wood, 0, 1.25, d / 2 + .01);
  box(g, w + .06, .22, .22, wood, 0, 2.75, d / 2 + .01);
  box(g, .22, .22, d + .06, wood, -w / 2, 2.75, 0);
  box(g, .22, .22, d + .06, wood, -w / 2 + .005, 2.75, 0);
  // roof
  const rl = Math.sqrt((d / 2) ** 2 + roofH ** 2);
  const ang = Math.atan2(roofH, d / 2);
  rbox(g, w + 1.2, .22, rl + .3, roofMat, 0, .5 + baseH + roofH / 2, d / 4, ang, 0, 0);
  rbox(g, w + 1.2, .22, rl + .3, roofMat, 0, .5 + baseH + roofH / 2, -d / 4, -ang, 0, 0);
  box(g, w + 1.4, .2, .24, colorMat(shade(cfg.roofTint || '#b7564e', -0.35)), 0, .5 + baseH + roofH + .05, 0);
  // chimney
  box(g, .7, 1.6, .7, mat('stone', '#8a8078', 2, 2), w * .26, baseH + 1.1, -d * .18);
  box(g, .85, .18, .85, colorMat('#5a5058'), w * .26, baseH + 1.95, -d * .18);
  // door on front (+z)
  const dx = doorOffset;
  const doorZ = d / 2 + .06;
  box(g, 1.55, 2.3, .12, colorMat('#3b2a27'), dx, 1.65, doorZ);
  box(g, 1.3, 2.1, .14, mat('planks', '#8a5a3a', 1, 2), dx, 1.62, doorZ + .01);
  box(g, 1.45, .14, .16, trimMat, dx, 2.8, doorZ + .02);
  box(g, .06, .06, .1, basicMat('#e8c170'), dx + .42, 1.5, doorZ + .12);
  box(g, 2.2, .26, 1.0, mat('stone', '#9a948c', 2, 1), dx, .16, doorZ + .45);
  // windows
  const wins = [];
  for (const sx of [-1, 1]) {
    if (w < 6) continue;
    const wm = windowMat(); wins.push(wm);
    box(g, 1.1, 1.15, .08, colorMat('#3b2a27'), sx * (w * .3), 2.0, doorZ);
    box(g, .86, .9, .1, wm, sx * (w * .3), 2.0, doorZ + .03);
    box(g, .08, .9, .12, trimMat, sx * (w * .3), 2.0, doorZ + .05);
    box(g, .86, .08, .12, trimMat, sx * (w * .3), 2.0, doorZ + .05);
    // side windows
    const wm2 = windowMat(); wins.push(wm2);
    box(g, .08, 1.0, .9, colorMat('#3b2a27'), w / 2 + .04, 2.0, 0);
    box(g, .1, .8, .7, wm2, w / 2 + .06, 2.0, 0);
  }
  // flower boxes
  for (const sx of [-1, 1]) {
    if (w < 6) continue;
    box(g, 1.15, .22, .34, mat('planks', '#8a5a3a', 1, 1), sx * (w * .3), 1.35, doorZ + .16);
    for (let i = 0; i < 3; i++) box(g, .14, .14, .12, basicMat(['#f2a6c2', '#ffe08a', '#c9a4ff'][i]), sx * (w * .3) - .3 + i * .3, 1.52, doorZ + .16, false);
  }
  // shop awning
  if (style === 'shop') {
    const aw = box(g, w * .82, .1, 1.5, colorMat(awning), 0, 3.05, doorZ + .6);
    aw.rotation.x = .24;
    for (let i = 0; i < 5; i++) box(g, w * .82 / 10, .12, 1.52, colorMat('#f6ecd2'), -w * .36 + i * w * .18, 3.06, doorZ + .6).rotation.x = .24;
    for (const sx of [-1, 1]) box(g, .1, 1.3, .1, trimMat, sx * w * .36, 2.45, doorZ + 1.2);
    // hanging lantern
    const lant = box(g, .24, .32, .24, basicMat('#ffd88a'), 0, 2.85, doorZ + 1.35, false);
    const lg = new THREE.PointLight('#ffc46b', .55, 8); lg.position.set(0, 2.8, doorZ + 1.4); g.add(lg);
    g.userData.lights = [lg];
  }
  // sign
  if (name) {
    const sign = createSign([name, cfg.subtitle || ''], 0, doorZ + .28, 3.35, Math.min(w * .62, 5.4), cfg.signIcon || null, '#f6ecd2');
    if (style === 'shop') { sign.position.y = 3.5; sign.position.z = doorZ + .3; }
    g.add(sign);
    g.userData.sign = sign;
  }
  // barrels / crates
  if (style === 'shop' || style === 'tavern') {
    for (let i = 0; i < 2; i++) {
      cyl(g, .35, .38, .7, mat('planks', '#7e5a3a', 1, 1), w / 2 - .6, .85, doorZ + .45 - i * .7, 6);
      box(g, .12, .5, .12, colorMat('#3b2a27'), w / 2 - .6, 1.35, doorZ + .45 - i * .7);
    }
  }
  // door position & interactable
  const doorPos = { x: x + dx, z: z + doorZ + .5 };
  const interactables = [];
  if (interact) interactables.push({ ...interact, x: doorPos.x, z: doorPos.z, r: 2.0, label: interact.label || name });
  const colliders = [{ type: 'rect', minX: x - w / 2 - .35, maxX: x + w / 2 + .35, minZ: z - d / 2 - .35, maxZ: z + d / 2 + .55 }];
  g.userData.windowMats = wins;
  g.userData.lights = g.userData.lights || [];
  return { group: g, colliders, interactables, doorPos, windows: wins };
}

// ---------------------------------------------------------------------------
// nature
// ---------------------------------------------------------------------------
export function createTree(x, z, seed, magical = false, variant = 0) {
  const r = rng(seed);
  const scale = .85 + r() * .55;
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const trunkMat = colorMat(magical ? '#4b3a5e' : variant === 1 ? '#6b4a2f' : '#7a5536');
  const trunkH = 2.2 * scale;
  box(g, .48 * scale, trunkH, .48 * scale, trunkMat, 0, trunkH / 2, 0);
  // roots
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + .4; box(g, .5 * scale, .18, .18, trunkMat, Math.cos(a) * .45, .12, Math.sin(a) * .45).rotation.y = a; }
  const leafTex = magical ? 'magicleaf' : variant === 2 ? 'leavesGold' : 'leaves';
  const leafMat = new THREE.MeshLambertMaterial({ map: texture(leafTex), color: magical ? '#b9a4ff' : '#ffffff' });
  const leafMat2 = new THREE.MeshLambertMaterial({ map: texture(leafTex), color: magical ? '#8f7bd8' : '#c9d6b0' });
  const canopy = new THREE.Group(); g.add(canopy);
  const leafMats = [leafMat, leafMat2];
  const blobs = 3 + Math.floor(r() * 2);
  for (let i = 0; i < blobs; i++) {
    const s = (1.1 + r() * .9) * scale;
    const b = box(canopy, s, s * (.75 + r() * .3), s, i % 2 ? leafMat2 : leafMat, (r() - .5) * 1.7 * scale, trunkH + .3 + r() * 1.6 * scale, (r() - .5) * 1.6 * scale);
    b.rotation.y = r() * 1.5; b.rotation.z = (r() - .5) * .2;
  }
  // leaf clusters
  for (let i = 0; i < 3; i++) {
    const s = (1.4 + r()) * scale;
    const b = box(canopy, s, .8 * scale, s, i % 2 ? leafMat2 : leafMat, (r() - .5) * 1.6 * scale, trunkH + 1.1 + r() * 1.1 * scale, (r() - .5) * 1.5 * scale);
    b.rotation.y = r() * 1.5;
  }
  if (magical) {
    for (let i = 0; i < 7; i++) {
      ball(canopy, .1 + r() * .08, basicMat(i % 2 ? '#8fe3ff' : '#e3d6ff'), (r() - .5) * 3.2 * scale, trunkH + .4 + r() * 2.2 * scale, (r() - .5) * 3.0 * scale, 0);
    }
    const lg = new THREE.PointLight('#8fe3ff', .35, 7); lg.position.y = trunkH + 1; g.add(lg);
  } else {
    // fruit / blossom details
    if (r() > .55) for (let i = 0; i < 3; i++) ball(canopy, .11, basicMat(r() > .5 ? '#ff9bab' : '#ffe08a'), (r() - .5) * 2.4, trunkH + 1 + r() * 1.4, (r() - .5) * 2.2, 0);
  }
  // stump
  const stump = new THREE.Group(); stump.visible = false; stump.position.y = .25;
  cyl(stump, .32, .42, .5, trunkMat, 0, 0, 0, 7);
  box(stump, .5, .06, .5, colorMat('#d9b07a'), 0, .26, 0);
  g.add(stump);
  g.userData = { ...g.userData, kind: 'tree', seed, scale, canopy, stump, trunkH, magical, x, z, blobs, leafMat, leafMat2, leafMats, variant };
  return g;
}

export function chopTreeVisual(tree) {
  if (tree.userData.chopped) return;
  tree.userData.chopped = true;
  tree.userData.canopy.visible = false;
  tree.userData.stump.visible = true;
  tree.userData.nameSprite && (tree.userData.nameSprite.visible = false);
}

export function regrowTreeVisual(tree) {
  tree.userData.chopped = false;
  tree.userData.canopy.visible = true;
  tree.userData.stump.visible = false;
}

export function createRock(x, z, seed, ore = 'stone') {
  const r = rng(seed);
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const s = .55 + r() * .35;
  const matRock = new THREE.MeshLambertMaterial({ color: ore === 'astral' ? '#596a8a' : '#8d8d99', flatShading: true });
  const m = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), matRock);
  m.position.y = s * .75; m.rotation.set(r(), r() * 3, r()); m.castShadow = true; m.receiveShadow = true;
  g.add(m);
  const oreColors = {
    stone: null, coal: '#3a3a48', copper: '#d08050', iron: '#c9d6e6', gold: '#ffd76b',
    amethyst: '#c9a4ff', moonstone: '#d8f2ff', voidcrystal: '#9a7bff', astral: '#8fe3ff',
  };
  const oc = oreColors[ore];
  if (oc) {
    for (let i = 0; i < (ore === 'astral' ? 7 : 4); i++) {
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(.12 + r() * .1, 0), basicMat(oc));
      c.position.set((r() - .5) * s * 1.4, s * .6 + r() * s * .7, (r() - .5) * s * 1.2);
      c.rotation.set(r(), r(), r()); c.castShadow = true; g.add(c);
    }
    if (ore === 'astral' || ore === 'moonstone' || ore === 'voidcrystal') {
      const lg = new THREE.PointLight(oc, .5, 4); lg.position.y = s; g.add(lg);
    }
  }
  g.userData = { ...g.userData, kind: 'rock', ore, x, z, seed, scale: s };
  return g;
}

export function createForageMesh(type, x, z, seed) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const r = rng(seed);
  if (type === 'glimmercap') {
    box(g, .1, .35, .1, colorMat('#e8dcc0'), 0, .17, 0);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(.32, .3, 7), colorMat('#9ff0c7'));
    cap.position.y = .4; cap.castShadow = true; g.add(cap);
    for (let i = 0; i < 3; i++) ball(g, .04, basicMat('#ecfff7'), (r() - .5) * .35, .45 + r() * .1, (r() - .5) * .35, 0);
    const lg = new THREE.PointLight('#9ff0c7', .3, 2.5); lg.position.y = .5; g.add(lg);
  } else if (type === 'moonpetal') {
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; box(g, .3, .04, .12, colorMat('#e7e2ff'), Math.cos(a) * .13, .2, Math.sin(a) * .13).rotation.y = a; }
    box(g, .1, .3, .1, colorMat('#6eae5c'), 0, .12, 0);
    ball(g, .07, basicMat('#fffbe8'), 0, .24, 0, 0);
    const lg = new THREE.PointLight('#e7e2ff', .25, 2.2); lg.position.y = .35; g.add(lg);
  } else if (type === 'dewdrop') {
    box(g, .06, .3, .06, colorMat('#6eae5c'), 0, .15, 0);
    for (let i = 0; i < 4; i++) ball(g, .08, basicMat('#ff9bab'), (r() - .5) * .3, .28 + r() * .15, (r() - .5) * .3, 0);
  } else {
    const t = box(g, .5, .08, .08, colorMat('#9a7752'), 0, .12, 0); t.rotation.y = r() * 3;
    box(g, .1, .3, .08, colorMat('#6f4e31'), .1, .25, .05).rotation.z = .5;
    ball(g, .06, basicMat('#8fe3ff'), .15, .42, .05, 0);
  }
  g.userData = { ...g.userData, kind: 'forage', forage: type, x, z, seed };
  return g;
}

export function createPlot(id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const soilMat = new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(textureCanvas('soil')) });
  soilMat.map.magFilter = THREE.NearestFilter; soilMat.map.minFilter = THREE.NearestFilter;
  soilMat.map.wrapS = soilMat.map.wrapT = THREE.RepeatWrapping; soilMat.map.repeat.set(1, 1);
  const soil = new THREE.Mesh(new THREE.BoxGeometry(.94, .14, .94), soilMat);
  soil.position.y = .05; soil.receiveShadow = true; g.add(soil);
  const cropGroup = new THREE.Group(); cropGroup.position.y = .12; g.add(cropGroup);
  // corner pegs
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) box(g, .06, .16, .06, colorMat('#6f4e31'), sx * .46, .08, sz * .46, false);
  g.userData = { kind: 'plot', id, x, z, soil, soilMat, cropGroup, tilled: false, watered: false };
  return g;
}

// ---------------------------------------------------------------------------
// village props
// ---------------------------------------------------------------------------
export function createFountain(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  cyl(g, 2.5, 2.7, .6, mat('stone', '#a9a5b4', 4, 4), 0, .3, 0, 12);
  cyl(g, 2.25, 2.25, .12, colorMat('#4fa8c9'), 0, .62, 0, 16);
  const waterMat = new THREE.MeshLambertMaterial({ map: null, color: '#6fd0e8', transparent: true, opacity: .85 });
  const water = cyl(g, 2.1, 2.1, .06, waterMat, 0, .68, 0, 16);
  cyl(g, .5, .7, 1.6, mat('stone', '#a9a5b4', 2, 2), 0, 1.1, 0, 8);
  const crys = new THREE.Mesh(new THREE.OctahedronGeometry(.55, 0), new THREE.MeshLambertMaterial({ color: '#8fe3ff', emissive: '#3a9dc9', emissiveIntensity: .7 }));
  crys.position.y = 2.5; g.add(crys);
  const lg = new THREE.PointLight('#8fe3ff', .8, 9); lg.position.y = 2.6; g.add(lg);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; box(g, .25, .5, .25, mat('stone', '#a9a5b4', 1, 1), Math.cos(a) * 2.5, .75, Math.sin(a) * 2.5); }
  g.userData = { ...g.userData, kind: 'fountain', water, crys, x, z };
  return { group: g, colliders: [{ type: 'circle', x, z, r: 2.9 }] };
}

export function createLamp(x, z, color = '#ffc46b') {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  box(g, .16, 2.8, .16, colorMat('#3b2a37'), 0, 1.4, 0);
  box(g, .5, .12, .5, colorMat('#3b2a37'), 0, 2.8, 0);
  box(g, .34, .4, .34, basicMat(color), 0, 3.0, 0, false);
  box(g, .4, .08, .4, colorMat('#3b2a37'), 0, 3.22, 0);
  const lg = new THREE.PointLight(color, .7, 8); lg.position.y = 3.0; g.add(lg);
  g.userData = { ...g.userData, kind: 'lamp', light: lg };
  return g;
}

export function createFenceLine(x1, z1, x2, z2, opts = {}) {
  const g = new THREE.Group();
  const dx = x2 - x1, dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  const ang = Math.atan2(dx, dz);
  const posts = Math.max(2, Math.ceil(len / 1.4) + 1);
  const wood = mat('planks', '#8a5a3a', 1, 1);
  const railMat = colorMat('#a97a4c');
  for (let i = 0; i < posts; i++) {
    const t = i / (posts - 1);
    const px = x1 + dx * t, pz = z1 + dz * t;
    box(g, .16, 1.05, .16, wood, px, .52, pz);
    box(g, .22, .08, .22, railMat, px, 1.06, pz);
  }
  for (const y of [.42, .85]) {
    const m = box(g, .09, .12, len, railMat, (x1 + x2) / 2, y, (z1 + z2) / 2);
    m.rotation.y = ang;
  }
  const colliders = [{ type: 'rect', minX: Math.min(x1, x2) - .2, maxX: Math.max(x1, x2) + .2, minZ: Math.min(z1, z2) - .2, maxZ: Math.max(z1, z2) + .2 }];
  return { group: g, colliders };
}

export function createWell(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  cyl(g, 1.0, 1.1, .8, mat('stone', '#a9a5b4', 3, 2), 0, .4, 0, 10);
  cyl(g, .74, .74, .1, colorMat('#2f7f9e'), 0, .82, 0, 10);
  for (const sx of [-1, 1]) box(g, .14, 2.2, .14, colorMat('#6f4e31'), sx * .85, 1.1, 0);
  box(g, 2.2, .18, .5, mat('planks', '#8a5a3a', 2, 1), 0, 2.25, 0);
  box(g, 1.9, .16, .16, colorMat('#3b2a27'), .1, 2.42, 0);
  box(g, .08, .7, .08, colorMat('#c9b898'), .1, 2.05, 0);
  box(g, .36, .4, .3, mat('planks', '#7e5a3a', 1, 1), .1, 1.6, 0);
  // little roof
  rbox(g, 1.5, .1, 1.8, mat('roof', '#f2e8d0', 2, 1), -.4, 2.55, 0, .6, 0, 0);
  const glow = basicMat('#8fe3ff');
  ball(g, .09, glow, .1, 1.55, .18, 0);
  return { group: g, colliders: [{ type: 'circle', x, z, r: 1.25 }] };
}

export function createCampfire(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    box(g, .34, .2, .24, mat('stone', '#7d7d8a', 1, 1), Math.cos(a) * .75, .1, Math.sin(a) * .75).rotation.y = a;
  }
  for (let i = 0; i < 3; i++) { const l = box(g, .2, .2, 1.1, colorMat('#6f4e31'), 0, .22, 0); l.rotation.y = i * Math.PI / 3; }
  const flameMat = new THREE.MeshBasicMaterial({ color: '#ffb347', transparent: true, opacity: .9 });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.34, .9, 5), flameMat); flame.position.y = .8; g.add(flame);
  const flame2 = new THREE.Mesh(new THREE.ConeGeometry(.18, .55, 5), basicMat('#ffe08a')); flame2.position.y = .9; g.add(flame2);
  const lg = new THREE.PointLight('#ffb347', 1.0, 9); lg.position.y = 1.1; g.add(lg);
  // cooking pot
  cyl(g, .3, .36, .35, colorMat('#3b2a37'), .8, .5, .2, 8);
  box(g, .06, .45, .06, colorMat('#3b2a37'), .8, .85, .2);
  g.userData = { ...g.userData, kind: 'campfire', flame, flame2, light: lg, x, z };
  return { group: g, colliders: [{ type: 'circle', x, z, r: 1.05 }] };
}

export function createShippingBin(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  box(g, 1.8, 1.0, 1.2, mat('planks', '#8a5a3a', 2, 1), 0, .5, 0);
  const lid = box(g, 1.9, .16, 1.3, mat('planks', '#a97a4c', 2, 1), 0, 1.08, -.55);
  lid.rotation.x = -.45;
  box(g, 1.9, .14, .16, colorMat('#6f4e31'), 0, 1.18, .62);
  const sign = createSign(['SHIPPING', 'sell your goods'], 0, .05, 2.15, 2.4, 'bag', '#f6ecd2');
  sign.position.set(0, 2.1, .8);
  g.add(sign);
  const glow = basicMat('#8fe3ff'); ball(g, .08, glow, .6, 1.2, .45, 0);
  return { group: g, colliders: [{ type: 'rect', minX: x - 1.1, maxX: x + 1.1, minZ: z - .8, maxZ: z + .9 }], interactables: [{ type: 'shipping', x, z, r: 2.0, label: 'Shipping Bin', icon: 'bag' }] };
}

export function createMarxyNest(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  cyl(g, 1.0, .8, .3, colorMat('#8a6a44'), 0, .15, 0, 10);
  cyl(g, .86, .74, .16, colorMat('#5e3a28'), 0, .28, 0, 10);
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2;
    box(g, .1, .5, .1, colorMat('#a97a4c'), Math.cos(a) * .9, .5, Math.sin(a) * .9).rotation.z = Math.cos(a) * .5;
  }
  for (let i = 0; i < 5; i++) ball(g, .07, basicMat('#ffe08a'), Math.cos(i) * .35, .55 + i * .05, Math.sin(i) * .35, 0);
  const lg = new THREE.PointLight('#ffe08a', .4, 4); lg.position.y = .7; g.add(lg);
  const sign = createSign(['MARXY NEST', 'tiny star-sprites'], 0, .9, 1.7, 2.2, 'stardust', '#ffe9a8');
  g.add(sign);
  g.userData = { ...g.userData, kind: 'nest', x, z, light: lg };
  return { group: g, colliders: [{ type: 'circle', x, z, r: 1.25 }], interactables: [{ type: 'marxynest', x, z, r: 2.1, label: 'Marxy Nest', icon: 'star' }] };
}

export function createBarn(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const w = 8, d = 6, baseH = 3.2;
  box(g, w, .5, d, mat('stone', '#8a8078', 4, 2), 0, .25, 0);
  box(g, w, baseH, d, mat('planks', '#8a5a3a', 4, 1.5), 0, .5 + baseH / 2, 0);
  const roof = mat('roofBlue', '#ffffff', 3, 1.4);
  const rl = Math.sqrt((d / 2) ** 2 + 2.2 ** 2), ang = Math.atan2(2.2, d / 2);
  rbox(g, w + 1, .22, rl + .3, roof, 0, .5 + baseH + 1.1, d / 4, ang, 0, 0);
  rbox(g, w + 1, .22, rl + .3, roof, 0, .5 + baseH + 1.1, -d / 4, -ang, 0, 0);
  // big door
  box(g, 2.6, 2.5, .1, colorMat('#5e3a28'), 0, 1.75, d / 2 + .06);
  box(g, 2.3, 2.2, .12, mat('planks', '#9a6f45', 2, 2), 0, 1.7, d / 2 + .08);
  box(g, .14, 2.2, .14, colorMat('#e8c170'), 0, 1.7, d / 2 + .15);
  box(g, 2.3, .14, .14, colorMat('#e8c170'), 0, 2.1, d / 2 + .15);
  // hayloft
  box(g, 1.2, .8, 1.2, colorMat('#e5c779'), w * .28, baseH + 1.2, .2);
  const sign = createSign(['MOONLIT BARN', 'fantasy livestock'], 0, d / 2 + .3, 3.45, 4.6, 'paw', '#f6ecd2');
  g.add(sign);
  g.userData = { ...g.userData, kind: 'barn' };
  return {
    group: g,
    colliders: [{ type: 'rect', minX: x - w / 2 - .3, maxX: x + w / 2 + .3, minZ: z - d / 2 - .3, maxZ: z + d / 2 + .2 }],
    interactables: [{ type: 'barn', x, z: z + d / 2 + 1.2, r: 2.3, label: 'Moonlit Barn', icon: 'paw' }],
  };
}

export function createDock(x, z, len = 7) {
  const g = new THREE.Group();
  for (let i = 0; i < len; i++) {
    box(g, 3.2, .14, .9, mat('planks', '#9a6f45', 2, 1), x, .34, z + i * 1.0);
  }
  for (const sx of [-1.4, 1.4]) for (let i = 0; i < len; i += 2) box(g, .16, 1.2, .16, colorMat('#5e3a28'), x + sx, .1, z + i);
  box(g, 3.2, .35, .35, colorMat('#5e3a28'), x, .5, z + len * 1.0);
  for (const sx of [-1.4, 1.4]) box(g, .14, 1.0, .14, colorMat('#5e3a28'), x + sx, .5, z + len * 1.0);
  return { group: g, colliders: [] };
}

export function createMineEntrance(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  // rocky hill
  for (let i = 0; i < 9; i++) {
    const r = rng(700 + i);
    const m = new THREE.Mesh(new THREE.DodecahedronGeometry(2.5 + r() * 2, 0), new THREE.MeshLambertMaterial({ color: i % 2 ? '#6f6f7e' : '#7f7f8e', flatShading: true }));
    m.position.set((r() - .5) * 9, 1 + r() * 2.2, -2 - r() * 3.5); m.rotation.set(r(), r(), r()); m.castShadow = true; m.receiveShadow = true; g.add(m);
  }
  // arch
  const stone = new THREE.MeshLambertMaterial({ color: '#767684', flatShading: true });
  box(g, 1.3, 4.6, 1.3, stone, -2.4, 2.3, 0);
  box(g, 1.3, 4.6, 1.3, stone, 2.4, 2.3, 0);
  box(g, 6.2, 1.2, 1.4, stone, 0, 4.9, 0);
  // opening
  const dark = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 4.1), new THREE.MeshBasicMaterial({ color: '#0c0a14' }));
  dark.position.set(0, 2.1, .1); g.add(dark);
  // glowing crystal veins
  for (let i = 0; i < 8; i++) {
    const r = rng(900 + i);
    const c = new THREE.Mesh(new THREE.OctahedronGeometry(.22 + r() * .2, 0), basicMat(r() > .5 ? '#8fe3ff' : '#b79be8'));
    c.position.set((r() - .5) * 5.5, .8 + r() * 3.8, .75); g.add(c);
  }
  const lg = new THREE.PointLight('#8fe3ff', .9, 10); lg.position.set(0, 2.6, 1.6); g.add(lg);
  const sign = createSign(['GLIMMERDEEP MINE', 'bring a pick'], 0, 1.2, 5.8, 4.7, 'pickaxe', '#8fe3ff');
  g.add(sign);
  g.userData = { ...g.userData, kind: 'mineEntrance', light: lg };
  return {
    group: g,
    colliders: [
      { type: 'circle', x: x - 2.8, z, r: 2.0 }, { type: 'circle', x: x + 2.8, z, r: 2.0 },
      { type: 'rect', minX: x - 5.5, maxX: x + 5.5, minZ: z - 7, maxZ: z - 1.2 },
    ],
    interactables: [{ type: 'mine', x, z: z + 1.6, r: 2.4, label: 'Enter Glimmerdeep Mine', icon: 'pickaxe' }],
  };
}

export function createShrine(x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  const stone = mat('stone', '#b9b4c4', 3, 3);
  cyl(g, 4.8, 5.1, .5, stone, 0, .25, 0, 12);
  cyl(g, 3.9, 4.0, .35, mat('stone', '#a9a5b4', 3, 2), 0, .6, 0, 12);
  // 5 pillars
  const pillars = [];
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + i / 5 * Math.PI * 2;
    const px = Math.cos(a) * 3.35, pz = Math.sin(a) * 3.35;
    const p = new THREE.Group(); p.position.set(px, .7, pz);
    cyl(p, .3, .38, 3.0, stone, 0, 1.5, 0, 6);
    cyl(p, .45, .45, .22, stone, 0, 3.0, 0, 6);
    // socket
    const sock = new THREE.Mesh(new THREE.OctahedronGeometry(.22, 0), new THREE.MeshBasicMaterial({ color: '#3b3a4a' }));
    sock.position.y = 3.3; p.add(sock);
    const light = new THREE.PointLight('#ffe08a', 0, 4); light.position.y = 3.4; p.add(light);
    p.userData = { socket: sock, light, index: i };
    pillars.push(p); g.add(p);
  }
  // altar
  box(g, 2.2, 1.1, 2.2, stone, 0, 1.25, 0);
  box(g, 2.6, .18, 2.6, mat('stone', '#c9c4d4', 2, 2), 0, 1.85, 0);
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(.6, 0), new THREE.MeshLambertMaterial({ color: '#5a6a8a', emissive: '#1b2a4a', emissiveIntensity: .4 }));
  crystal.position.y = 2.85; g.add(crystal);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.15, .035, 4, 24), basicMat('#8fe3ff'));
  halo.rotation.x = Math.PI / 2; halo.position.y = 2.6; halo.visible = false; g.add(halo);
  const lg = new THREE.PointLight('#8fe3ff', .4, 14); lg.position.y = 3.0; g.add(lg);
  // candles
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    box(g, .12, .5 + (i % 3) * .15, .12, colorMat('#e8dcc0'), Math.cos(a) * 4.1, .5, Math.sin(a) * 4.1);
    ball(g, .08, basicMat('#ffcf6e'), Math.cos(a) * 4.1, .8 + (i % 3) * .15, Math.sin(a) * 4.1, 0);
  }
  const sign = createSign(['THE STARFALL SHRINE', 'five lights wake the vale'], 0, 5.2, 5.4, 5.6, 'star', '#8fe3ff');
  g.add(sign);
  g.userData = { ...g.userData, kind: 'shrine', pillars, crystal, halo, light: lg };
  return {
    group: g,
    colliders: [
      { type: 'circle', x, z, r: 5.2 },
    ],
    interactables: [{ type: 'shrine', x, z: z + 2.7, r: 3.0, label: 'Starfall Shrine', icon: 'star' }],
  };
}

export function createLabelSprite(text, sub, x, y, z, color = '#f6ecd2') {
  const c = document.createElement('canvas'); c.width = 512; c.height = 144;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = 'rgba(20,14,32,0.5)'; ctx.fillRect(26, 22, 460, 100);
  ctx.fillStyle = color; ctx.font = 'bold 46px "Courier New", monospace'; ctx.textAlign = 'center';
  ctx.fillText(text.toUpperCase(), 256, 72);
  if (sub) { ctx.fillStyle = 'rgba(246,236,210,0.75)'; ctx.font = 'bold 22px "Courier New", monospace'; ctx.fillText(sub, 256, 108); }
  ctx.fillStyle = '#e8c170'; ctx.fillRect(26, 22, 460, 4); ctx.fillRect(26, 118, 460, 4);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, opacity: 0 }));
  sp.scale.set(10, 2.8, 1); sp.position.set(x, y, z);
  sp.userData = { baseY: y, text };
  return sp;
}

export function createSignpost(x, z, lines, icon = null) {
  const g = new THREE.Group(); g.position.set(x, 0, z);
  box(g, .18, 2.2, .18, colorMat('#6f4e31'), 0, 1.1, 0);
  const sign = createSign(lines, 0, .06, 2.1, 2.6, icon, '#f6ecd2');
  sign.position.z = .14; g.add(sign);
  g.rotation.y = .1;
  return g;
}

export function createBridge(x, z, w = 3, d = 7, rot = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot;
  for (let i = 0; i < d; i++) box(g, w, .14, .9, mat('planks', '#9a6f45', 2, 1), 0, .3, -d / 2 + i + .5);
  for (const sx of [-w / 2, w / 2]) box(g, .14, .7, d, colorMat('#5e3a28'), sx, .55, 0);
  return g;
}
