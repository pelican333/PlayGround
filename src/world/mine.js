// ---------------------------------------------------------------------------
// Glimmerdeep Mine — procedurally arranged cave floors
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { texture, colorMat, basicMat, box, cyl, ball, plane, mat } from './mats.js';
import { rng, shade } from '../art.js';
import { createRock } from './props.js';

const ORE_TABLE = [
  ['stone', 'stone', 'coal', 'copper'],
  ['stone', 'coal', 'copper', 'iron'],
  ['coal', 'copper', 'iron', 'gold', 'amethyst'],
  ['iron', 'gold', 'amethyst', 'moonstone', 'voidcrystal'],
  ['gold', 'amethyst', 'moonstone', 'voidcrystal', 'astral'],
];
const ORE_HP = { stone: 2, coal: 2, copper: 3, iron: 3, gold: 4, amethyst: 4, moonstone: 4, voidcrystal: 5, astral: 5 };

export function mineFloorName(level) {
  const names = ['Mossy Threshold', 'Copper Gallery', 'Crystal Hollow', 'Sunken Vault', 'Starfall Deep'];
  return names[Math.min(level - 1, names.length - 1)] || 'Glimmerdeep';
}

function createSlime(x, z, level) {
  const g = new THREE.Group(); g.position.set(x, .55, z);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(.5, 0), new THREE.MeshLambertMaterial({ color: level > 2 ? '#8f7bd8' : '#6fae5c', transparent: true, opacity: .88 }));
  body.castShadow = true; g.add(body);
  box(g, .12, .12, .04, basicMat('#2a1e30'), -.16, .1, .43, false);
  box(g, .12, .12, .04, basicMat('#2a1e30'), .16, .1, .43, false);
  box(g, .2, .05, .03, basicMat('#f2a6c2'), 0, -.08, .44, false);
  g.userData = { kind: 'enemy', enemy: 'slime', hp: 22 + level * 8, maxHp: 22 + level * 8, damage: 5 + level, speed: .8 + level * .07, body, baseY: .55, x, z, phase: Math.random() * 6, alive: true };
  return g;
}
function createBat(x, z, level) {
  const g = new THREE.Group(); g.position.set(x, 1.3, z);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(.34, 0), colorMat('#5a4a72')); body.castShadow = true; g.add(body);
  const wingL = new THREE.Group(); wingL.position.set(-.3, 0, 0); g.add(wingL);
  const wingR = new THREE.Group(); wingR.position.set(.3, 0, 0); g.add(wingR);
  box(wingL, .55, .05, .4, colorMat('#3f3266'), -.25, 0, -.02); wingL.rotation.z = .2;
  box(wingR, .55, .05, .4, colorMat('#3f3266'), .25, 0, -.02); wingR.rotation.z = -.2;
  box(g, .1, .07, .03, basicMat('#ffe08a'), -.11, .04, .31, false);
  box(g, .1, .07, .03, basicMat('#ffe08a'), .11, .04, .31, false);
  g.userData = { kind: 'enemy', enemy: 'bat', hp: 16 + level * 7, maxHp: 16 + level * 7, damage: 7 + level, speed: 1.2 + level * .08, body, wingL, wingR, baseY: 1.3, x, z, phase: Math.random() * 6, alive: true };
  return g;
}

export function createMineLevel(scene, level, seed) {
  const r = rng(seed);
  const group = new THREE.Group();
  const colliders = [];
  const rocks = [];
  const enemies = [];
  const interactables = [];
  const torches = [];
  const crystals = [];

  // floor
  const floor = plane(group, 23, 23, new THREE.MeshLambertMaterial({ map: texture('cave', 12, 11) }), 0, 0, 0);
  // walls
  const wallMat = new THREE.MeshLambertMaterial({ map: texture('cave', 3, 3), color: '#75707f' });
  for (const [x, z, w, d] of [[0, -11.8, 24, 1.2], [0, 11.8, 24, 1.2], [-11.8, 0, 1.2, 24], [11.8, 0, 1.2, 24]]) {
    box(group, w, 3.4, d, wallMat, x, 1.7, z);
    colliders.push({ type: 'rect', minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  }
  // rocky interior pillars
  for (let i = 0; i < 4; i++) {
    const px = (r() - .5) * 14, pz = (r() - .5) * 14;
    if (Math.hypot(px - -8.5, pz - -8.5) < 3 || Math.hypot(px - 8.5, pz - 8.5) < 3) continue;
    const s = 1.2 + r() * 1.2;
    const m = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), new THREE.MeshLambertMaterial({ color: '#4a4458', flatShading: true }));
    m.position.set(px, s * .9, pz); m.rotation.set(r(), r(), r()); m.castShadow = true; m.receiveShadow = true; group.add(m);
    colliders.push({ type: 'circle', x: px, z: pz, r: s * .8 });
  }
  // decorations: mushrooms, glowing crystals, stalagmites
  for (let i = 0; i < 16; i++) {
    const x = (r() - .5) * 19, z = (r() - .5) * 19;
    if (Math.hypot(x - -8.5, z - -8.5) < 2.2 || Math.hypot(x - 8.5, z - 8.5) < 2.2) continue;
    if (i % 4 === 0) {
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(.16 + r() * .16, 0), basicMat(r() > .5 ? '#8fe3ff' : '#b79be8'));
      c.position.set(x, .2, z); group.add(c); crystals.push(c);
    } else if (i % 3 === 0) {
      cyl(group, .12, .18, .35, colorMat('#6fae5c'), x, .18, z, 5);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(.28, .22, 6), colorMat('#9ff0c7')); cap.position.set(x, .42, z); group.add(cap);
    } else {
      const c = new THREE.Mesh(new THREE.ConeGeometry(.18, .6 + r() * .7, 5), colorMat('#5a5568'));
      c.position.set(x, .3, z); group.add(c);
    }
  }
  // torches
  for (const [x, z] of [[-10.8, -3], [10.8, 3], [-3, -10.8], [3, 10.8], [10.5, -9], [-10.5, 9]]) {
    box(group, .18, 1.6, .18, colorMat('#5e3a28'), x, .8, z);
    box(group, .3, .3, .3, basicMat('#ffb347'), x, 1.7, z, false);
    const lg = new THREE.PointLight('#ffb347', .9, 9); lg.position.set(x, 2.0, z); group.add(lg);
    torches.push({ light: lg, mesh: null, phase: r() * 6 });
  }
  // ladders
  const up = { x: -8.8, z: -8.8 };
  const down = { x: 8.8, z: 8.8 };
  function ladder(x, z, dir) {
    const g = new THREE.Group(); g.position.set(x, 0, z);
    for (const sx of [-.5, .5]) box(g, .12, 2.4, .12, colorMat('#8a5a3a'), sx, 1.2, 0);
    for (let i = 0; i < 5; i++) box(g, 1.1, .1, .14, colorMat('#c99b5d'), 0, .35 + i * .45, 0);
    const hole = new THREE.Mesh(new THREE.CircleGeometry(.65, 12), new THREE.MeshBasicMaterial({ color: '#08060e' }));
    hole.rotation.x = -Math.PI / 2; hole.position.y = .02; g.add(hole);
    const glow = new THREE.PointLight(dir > 0 ? '#8fe3ff' : '#ffe08a', .6, 4); glow.position.y = 1.8; g.add(glow);
    group.add(g);
    return g;
  }
  ladder(up.x, up.z, -1); ladder(down.x, down.z, 1);
  interactables.push({ type: 'mineup', x: up.x, z: up.z, r: 1.8, label: 'Return to the surface', icon: 'arrow' });
  interactables.push({ type: 'minedown', x: down.x, z: down.z, r: 1.8, label: level >= 5 ? 'Descend deeper' : `Descend to Depth ${level + 1}`, icon: 'arrow' });

  // ore rocks
  const table = ORE_TABLE[Math.min(level - 1, ORE_TABLE.length - 1)];
  const count = 12 + level;
  let tries = 0;
  while (rocks.length < count && tries++ < 200) {
    const x = (r() - .5) * 18.5, z = (r() - .5) * 18.5;
    if (Math.hypot(x - up.x, z - up.z) < 3.0 || Math.hypot(x - down.x, z - down.z) < 3.2) continue;
    if (rocks.some(o => Math.hypot(o.position.x - x, o.position.z - z) < 2.0)) continue;
    if (colliders.some(c => c.type === 'circle' && Math.hypot(c.x - x, c.z - z) < c.r + 1)) continue;
    const ore = table[Math.floor(r() * table.length)];
    const rk = createRock(x, z, seed + rocks.length * 13, ore);
    rk.userData.hp = ORE_HP[ore]; rk.userData.maxHp = ORE_HP[ore]; rk.userData.mineLevel = level;
    group.add(rk); rocks.push(rk);
    const col = { type: 'circle', x, z, r: .55 };
    rk.userData.collider = col; colliders.push(col);
  }
  // guaranteed astral node on depth 3+
  if (level >= 3) {
    const x = 5.3, z = -5.4;
    if (!rocks.some(o => Math.hypot(o.position.x - x, o.position.z - z) < 2)) {
      const rk = createRock(x, z, seed + 777, 'astral');
      rk.userData.hp = 5; rk.userData.maxHp = 5; rk.userData.mineLevel = level;
      group.add(rk); rocks.push(rk);
      rk.userData.collider = { type: 'circle', x, z, r: .55 }; colliders.push(rk.userData.collider);
      const lg = new THREE.PointLight('#8fe3ff', 1.1, 7); lg.position.set(x, 1.4, z); group.add(lg);
    }
  }
  // enemies
  const enemyCount = level === 1 ? 1 : level + 1;
  for (let i = 0; i < enemyCount; i++) {
    const x = (r() - .5) * 15, z = (r() - .5) * 15;
    if (Math.hypot(x - up.x, z - up.z) < 4) continue;
    const e = (level > 1 && r() > .55) ? createBat(x, z, level) : createSlime(x, z, level);
    group.add(e); enemies.push(e);
    e.userData.collider = { type: 'circle', x, z, r: .45, disabled: true };
  }
  // entrance glow
  const lg = new THREE.PointLight('#8fe3ff', .8, 10); lg.position.set(0, 3, 0); group.add(lg);

  group.userData = { kind: 'mine', level, torches, crystals };
  scene.add(group);
  return {
    group, colliders, rocks, enemies, interactables, torches, crystals, level,
    spawn: { x: -7.2, z: -7.2 }, up, down, floorMat: floor.material,
  };
}

export function disposeMine(levelObj) {
  if (!levelObj?.group) return;
  levelObj.group.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
  });
  if (levelObj.group.parent) levelObj.group.parent.remove(levelObj.group);
}
