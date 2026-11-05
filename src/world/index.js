// ---------------------------------------------------------------------------
// build the open world of Starfall Vale
// ---------------------------------------------------------------------------
import * as THREE from 'three';
import { texture, mat, colorMat, basicMat, box, cyl, plane } from './mats.js';
import { rng, shade } from '../art.js';
import { NPCS, NPC_ORDER } from '../data.js';
import {
  createHouse, createTree, createRock, createPlot, createFountain, createLamp, createFenceLine,
  createWell, createCampfire, createShippingBin, createMarxyNest, createBarn, createDock,
  createMineEntrance, createShrine, createLabelSprite, createSignpost, createBridge, createForageMesh,
} from './props.js';
import { createCharacter } from './characters.js';

const P = [
  [-33, 1.2, -4, 1.2, 2.6],
  [-4, 1.2, -4, -10, 2.6],
  [-4, -10, 10, -10, 3.4],
  [26, -18, 37, -18, 2.4],
  [37, -18, 37, -13, 2.2],
  [37, -13, 40, -13, 2.2],
  [40, -13, 40, -26, 2.2],
  [-4, -18, -34, -18, 2.4],
  [-34, -18, -38, -18, 2.4],
  [-38, -18, -38, -26, 2.2],
  [8, -10, 8, 24, 2.8],
  [26, -18, 33, -18, 2.4],
  [33, -18, 33, 12, 2.4],
  [33, 12, 36, 12, 2.2],
  [36, 12, 36, 28, 2.2],
  [-24.5, 1.2, -24.5, 14, 2.0],
  [-24.5, 14, -27.2, 14, 2.0],
  [-27.2, 14, -27.2, 17, 1.8],
  [1, -26, 0, -28.6, 1.8],
  [24, -23, 26, -24.6, 1.8],
  [8, 24, 8, 26, 2.4],
  [37, -13, 37, -11, 1.8],
];

const EXCLUDE = [
  // buildings
  { x: 26, z: -28, w: 10.5, d: 7.5 }, { x: 0, z: -31, w: 8.5, d: 6.5 }, { x: -5, z: -15, w: 9.5, d: 7.5 },
  { x: 37, z: -16, w: 9.5, d: 7.5 }, { x: -30, z: -2, w: 8.5, d: 6.5 }, { x: -33, z: 13, w: 9, d: 7.5 },
  { x: 16, z: -36, w: 7.5, d: 6.5 }, { x: -16, z: -36, w: 7.5, d: 6.5 }, { x: 36, z: 26, w: 7.5, d: 6.5 },
  // farm plots / props
  { x: -21, z: 5, w: 6.2, d: 6.2 }, { x: -24.5, z: 1.2, w: 3, d: 3 }, { x: -33, z: 21, w: 12, d: 10 },
  { x: -34, z: 6, w: 3, d: 3 }, { x: -27, z: 10, w: 3, d: 3 }, { x: -22, z: 1, w: 3, d: 3 },
  // village centre
  { x: 13, z: -17.5, w: 8, d: 8 }, { x: 33, z: 4, w: 5, d: 5 },
  { x: 40, z: -30, w: 13, d: 12 }, { x: -38, z: -30, w: 12, d: 12 },
  // lake & dock
  { x: 8, z: 36, w: 28, d: 20 }, { x: 8, z: 28, w: 4, d: 10 },
];

function pathDist(x, z) {
  let best = 1e9;
  for (const [x1, z1, x2, z2, w] of P) {
    const dx = x2 - x1, dz = z2 - z1;
    const l2 = dx * dx + dz * dz;
    let t = l2 ? ((x - x1) * dx + (z - z1) * dz) / l2 : 0;
    t = Math.max(0, Math.min(1, t));
    const px = x1 + dx * t, pz = z1 + dz * t;
    best = Math.min(best, Math.hypot(x - px, z - pz) - w / 2);
  }
  return best;
}
function excluded(x, z, pad = 0) {
  for (const e of EXCLUDE) {
    if (Math.abs(x - e.x) < e.w / 2 + pad && Math.abs(z - e.z) < e.d / 2 + pad) return true;
  }
  return false;
}
function blocked(x, z, pad = 0) {
  if (Math.abs(x) > 45 || Math.abs(z) > 45) return true;
  if (excluded(x, z, pad)) return true;
  if (pathDist(x, z) < 1.2 + pad) return true;
  return false;
}
function inPlaza(x, z) {
  const dx = (x - 13) / 12, dz = (z + 18) / 8;
  return dx * dx + dz * dz < 1;
}

export function buildWorld(scene) {
  const root = new THREE.Group();
  root.name = 'StarfallVale';
  scene.add(root);
  const colliders = [];
  const interactables = [];
  const addCol = (c) => { colliders.push(c); return c; };

  // ---------------- ground & water ----------------
  const groundMat = new THREE.MeshLambertMaterial({ map: texture('grass', 48, 48), color: '#ffffff' });
  const ground = plane(root, 100, 100, groundMat, 0, 0, 0);
  // farm darker grass patch
  const farmGround = plane(root, 40, 38, new THREE.MeshLambertMaterial({ map: texture('grassDark', 18, 18), color: '#ffffff', transparent: true, opacity: .55 }), -24, .015, 12);

  // sand ring around lake
  const sandMat = new THREE.MeshLambertMaterial({ map: texture('path', 14, 9), color: '#e4d3a8' });
  const sand = plane(root, 30, 22, sandMat, 8, .01, 34);
  // water
  const waterMat = new THREE.MeshLambertMaterial({ map: texture('water', 10, 7), color: '#ffffff', transparent: true, opacity: .92 });
  const water = plane(root, 27, 18, waterMat, 8, .06, 36);
  water.renderOrder = 1;
  // split lake colliders around the dock
  addCol({ type: 'rect', minX: -7, maxX: 6, minZ: 27, maxZ: 45 });
  addCol({ type: 'rect', minX: 10, maxX: 23, minZ: 27, maxZ: 45 });
  addCol({ type: 'rect', minX: 6, maxX: 10, minZ: 35, maxZ: 45 });
  const dock = createDock(8, 25.5, 9); root.add(dock.group);
  // reeds and lily pads
  for (let i = 0; i < 18; i++) {
    const r = rng(330 + i);
    const side = i % 3;
    let x, z;
    if (side === 0) { x = -5 + r() * 24; z = 27 + r() * 1.2; }
    else if (side === 1) { x = -5 + r() * 1.2; z = 28 + r() * 15; }
    else { x = 20 + r() * 1.2; z = 28 + r() * 15; }
    if (Math.abs(x - 8) < 2.2 && z < 35) continue;
    if (r() > .45) {
      cyl(root, .12, .12, .3, colorMat('#6fae5c'), x, .12, z, 5);
      for (let k = 0; k < 3; k++) box(root, .16, .025, .5, colorMat('#4e8a45'), x + (r() - .5) * .4, .1 + k * .02, z).rotation.y = r() * 3;
    } else {
      const l = new THREE.Mesh(new THREE.CircleGeometry(.32, 7), colorMat('#5fbf7a'));
      l.rotation.x = -Math.PI / 2; l.position.set(x, .11, z); l.scale.x = .8 + r() * .8; root.add(l);
    }
  }
  // sparkle rings on water
  const waterSparkles = new THREE.Group(); root.add(waterSparkles);
  for (let i = 0; i < 16; i++) {
    const r = rng(500 + i);
    box(root, .18, .02, .18, basicMat('#c9f7ff'), -4 + r() * 24, .12, 28 + r() * 16).userData.sparkle = r() * 6;
  }

  // village plaza
  const plazaMat = new THREE.MeshLambertMaterial({ map: texture('stone', 5, 4), color: '#d9d2c4' });
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(1, 40), plazaMat);
  plaza.rotation.x = -Math.PI / 2; plaza.scale.set(12.5, 8.2, 1); plaza.position.set(13, .045, -18); plaza.receiveShadow = true; root.add(plaza);
  const ring = new THREE.Mesh(new THREE.RingGeometry(.93, 1, 40), colorMat('#8d8d99'));
  ring.rotation.x = -Math.PI / 2; ring.scale.set(12.5, 8.2, 1); ring.position.set(13, .05, -18); root.add(ring);

  // paths
  const pathMat = new THREE.MeshLambertMaterial({ map: texture('path', 2, 6), color: '#ffffff' });
  for (const [x1, z1, x2, z2, w] of P) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const p = box(root, w, .05, len + .4, pathMat, (x1 + x2) / 2, .035, (z1 + z2) / 2, false, true);
    p.rotation.y = Math.atan2(x2 - x1, z2 - z1);
  }

  // ---------------- lighting & sky ----------------
  const hemi = new THREE.HemisphereLight('#bcd8ff', '#4e6a3a', .75);
  scene.add(hemi);
  const ambient = new THREE.AmbientLight('#6a5a8a', .28);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight('#fff0d0', 1.25);
  sun.position.set(28, 42, 18);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 120;
  sun.shadow.camera.left = -42; sun.shadow.camera.right = 42;
  sun.shadow.camera.top = 42; sun.shadow.camera.bottom = -42;
  sun.shadow.bias = -0.0006;
  scene.add(sun);
  const sunTarget = new THREE.Object3D(); scene.add(sunTarget); sun.target = sunTarget;

  // ---------------- buildings ----------------
  const houses = [];
  const windows = [];
  const lights = [];
  const pushHouse = (h) => {
    root.add(h.group); houses.push(h);
    for (const c of h.colliders) addCol(c);
    for (const it of h.interactables) interactables.push(it);
    windows.push(...h.windows);
    lights.push(...(h.group.userData.lights || []));
    return h;
  };

  const farmhouse = pushHouse(createHouse({
    x: -30, z: -2, w: 7, d: 5, name: 'MOONLIT FARM', subtitle: 'home', roof: 'roof', roofTint: '#c9836f',
    interact: { type: 'sleep', id: 'home', label: 'Sleep / Rest', icon: 'heart' }, signIcon: 'heart',
  }));
  farmhouse.group.userData.kind = 'home';

  const market = pushHouse(createHouse({
    x: 26, z: -28, w: 9, d: 6, name: 'LANTERN MARKET', subtitle: 'seeds · supplies · livestock',
    roof: 'roof', roofTint: '#7f9ac9', style: 'shop', awning: '#4a5f8a',
    interact: { type: 'shop', id: 'market', label: 'Lantern Market', icon: 'bag' }, signIcon: 'bag',
  }));
  const apothecary = pushHouse(createHouse({
    x: 0, z: -31, w: 7, d: 5, name: "ELOWEN'S APOTHECARY", subtitle: 'herbs & remedies',
    roof: 'roofBlue', roofTint: '#9ac9b0', style: 'shop', awning: '#4f8a63',
    interact: { type: 'apothecary', id: 'apothecary', label: 'Apothecary', icon: 'heart' }, signIcon: 'moonpetal',
  }));
  const tavern = pushHouse(createHouse({
    x: -5, z: -15, w: 8, d: 6, name: 'THE GILDED GRIFFIN', subtitle: 'warm hearth · cold ale',
    roof: 'roof', roofTint: '#b98b45', style: 'tavern', awning: '#a8483a',
    interact: { type: 'tavern', id: 'tavern', label: 'The Gilded Griffin', icon: 'startea' }, signIcon: 'startea',
  }));
  const forge = pushHouse(createHouse({
    x: 37, z: -16, w: 8, d: 6, name: "BRAM'S FORGE", subtitle: 'tools · upgrades',
    roof: 'roofBlue', roofTint: '#8a6a6a', style: 'shop', awning: '#8c4a34',
    interact: { type: 'forge', id: 'forge', label: 'Bram\'s Forge', icon: 'hammer' }, signIcon: 'pickaxe',
  }));
  const mirelleHut = pushHouse(createHouse({
    x: 36, z: 26, w: 6, d: 5, name: "MIRELLE'S HUT", subtitle: 'mind the cat',
    roof: 'roofBlue', roofTint: '#8f7bd8', wall: 'planks', wallTint: '#b9a4d9',
    interact: { type: 'witchhut', id: 'witchhut', label: 'Whisperwood Hut', icon: 'glimmercap' }, signIcon: 'glimmercap',
  }));
  // decorative cottages
  pushHouse(createHouse({ x: 16, z: -36, w: 7, d: 5, name: 'HOLLY COTTAGE', roof: 'roof', roofTint: '#c9836f', wallTint: '#f2e8d8' }));
  pushHouse(createHouse({ x: -16, z: -36, w: 7, d: 5, name: 'STARLING HOUSE', roof: 'roofBlue', roofTint: '#9ab0c9', wallTint: '#f2e8d8' }));

  // barn & pen
  const barn = createBarn(-33, 13); root.add(barn.group);
  for (const c of barn.colliders) addCol(c);
  for (const i of barn.interactables) interactables.push(i);
  const penGround = plane(root, 11.5, 9, new THREE.MeshLambertMaterial({ map: texture('path', 6, 5), color: '#b8aa86' }), -29.5, .02, 20);
  const penFences = [
    createFenceLine(-35, 16.2, -28.6, 16.2), createFenceLine(-25.4, 16.2, -24, 16.2),
    createFenceLine(-35, 24, -24, 24), createFenceLine(-35, 16.2, -35, 24), createFenceLine(-24, 16.2, -24, 24),
  ];
  for (const f of penFences) { root.add(f.group); for (const c of f.colliders) addCol(c); }
  const nest = createMarxyNest(-26.2, 21.4); root.add(nest.group);
  for (const c of nest.colliders) addCol(c);
  for (const i of nest.interactables) interactables.push(i);
  const barnSign = createSignpost(-27, 17.8, ['MOONLIT BARN', 'animals & marxies'], 'paw'); root.add(barnSign);

  // farm props
  const shipping = createShippingBin(-22.2, .4); root.add(shipping.group);
  for (const c of shipping.colliders) addCol(c); for (const i of shipping.interactables) interactables.push(i);
  const well = createWell(-34.5, 6); root.add(well.group); for (const c of well.colliders) addCol(c);
  const camp = createCampfire(-27.5, 10.5); root.add(camp.group); for (const c of camp.colliders) addCol(c);
  interactables.push({ type: 'cook', x: -27.5, z: 11.6, r: 2.2, label: 'Cook at the Campfire', icon: 'moonberrytart' });

  // plots
  const plots = [];
  const plotGroup = new THREE.Group(); root.add(plotGroup);
  for (let ix = 0; ix < 5; ix++) for (let iz = 0; iz < 5; iz++) {
    const x = -23 + ix, z = 3 + iz;
    const pg = createPlot(ix * 5 + iz, x, z); plotGroup.add(pg);
    plots.push(pg);
  }
  // field border stones
  for (let i = 0; i < 6; i++) {
    box(root, .32, .22, .32, mat('stone', '#a9a5b4', 1, 1), -23.8 + i, .11, 2.35).rotation.y = i;
    box(root, .32, .22, .32, mat('stone', '#a9a5b4', 1, 1), -23.8 + i, .11, 7.65).rotation.y = i;
  }
  const fieldSign = createSignpost(-24.6, 8.2, ['MOONLIT FIELD', 'hoe · seed · water', 'grow'], 'moonberry'); fieldSign.rotation.y = .5; root.add(fieldSign);
  interactables.push({ type: 'sign', x: -24.6, z: 8.2, r: 1.6, label: 'Read the field sign', icon: 'moonberry', text: 'Grandmother Sable\'s field. The soil remembers every seed. Hoe a plot, plant a seed, and water it each day.' });

  // village props
  const fountain = createFountain(13, -17.5); root.add(fountain.group); for (const c of fountain.colliders) addCol(c);
  interactables.push({ type: 'fountain', x: 13, z: -14.2, r: 2.2, label: 'Wish at the fountain', icon: 'star' });
  for (const [lx, lz] of [[3, -10], [23, -10], [3, -26], [23, -26], [13, -8], [8, -28], [26, -20]]) {
    const lamp = createLamp(lx, lz); root.add(lamp); lights.push(lamp.userData.light);
  }
  // benches
  for (const [bx, bz, rot] of [[7, -13, 0], [19, -22, Math.PI], [16, -10, 0]]) {
    box(root, 2.2, .18, .6, mat('planks', '#8a5a3a', 2, 1), bx, .55, bz).rotation.y = rot;
    for (const sx of [-.9, .9]) box(root, .15, .5, .45, colorMat('#5e3a28'), bx + sx, .3, bz);
  }
  const plazaSign = createSignpost(-3, -8.5, ['EMBERFALL VILLAGE', 'population: 63 + 1'], 'star'); root.add(plazaSign);
  const lakeSign = createSignpost(10, 24, ['STARFALL LAKE', 'the fish dream here'], 'starlightkoi'); root.add(lakeSign);
  const forestSign = createSignpost(31, 8, ['WHISPERWOOD', 'do not follow the lights'], 'glimmercap'); forestSign.rotation.y = -.3; root.add(forestSign);

  // windmill
  const wind = new THREE.Group(); wind.position.set(33, 0, 4);
  cyl(wind, 1.5, 2.0, 6.5, mat('plaster', '#f2e8d8', 3, 3), 0, 3.25, 0, 10);
  cyl(wind, .2, .2, .4, colorMat('#3b2a27'), 0, 6.7, 0, 6);
  const wRoof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.8, 8), mat('roof', '#4a5f8a', 2, 1)); wRoof.position.y = 7.2; wRoof.castShadow = true; wind.add(wRoof);
  box(wind, 1.2, 2.0, .12, colorMat('#5e3a28'), 0, 1.6, 1.75);
  const blades = new THREE.Group(); blades.position.set(0, 6.4, 2.0); wind.add(blades);
  for (let i = 0; i < 4; i++) {
    const b = new THREE.Group(); b.rotation.z = i * Math.PI / 2; blades.add(b);
    box(b, .22, 3.0, .1, colorMat('#e8d9a8'), 0, 1.5, 0);
    box(b, .9, .5, .12, colorMat('#8a5a3a'), .35, 2.7, 0);
  }
  root.add(wind); addCol({ type: 'circle', x: 33, z: 4, r: 2.3 });
  // grain sacks
  for (let i = 0; i < 3; i++) box(root, .6, .6, .5, colorMat('#d9c28a'), 34.5 + i * .7, .3, 2.5 + (i % 2) * .7).rotation.y = i;

  // ---------------- landmarks ----------------
  const mine = createMineEntrance(40, -30); root.add(mine.group);
  for (const c of mine.colliders) addCol(c); for (const i of mine.interactables) interactables.push(i);
  lights.push(mine.group.userData.light);
  const shrine = createShrine(-38, -30); root.add(shrine.group);
  for (const c of shrine.colliders) addCol(c); for (const i of shrine.interactables) interactables.push(i);
  lights.push(shrine.group.userData.light);
  // shrine path candles
  for (let i = 0; i < 5; i++) {
    const cx = -34 - i * 1.2, cz = -26 + (i % 2) * .8;
    box(root, .14, .5, .14, colorMat('#e8dcc0'), cx, .25, cz);
    box(root, .16, .12, .16, basicMat('#ffcf6e'), cx, .56, cz, false);
  }

  // ---------------- trees & rocks ----------------
  const trees = [];
  const rocks = [];
  const r = rng(20261105);
  let attempts = 0;
  while (trees.length < 105 && attempts++ < 1600) {
    const x = -44 + r() * 88, z = -44 + r() * 88;
    if (blocked(x, z, trees.length > 80 ? .2 : 1.4)) continue;
    if (Math.abs(x - (-30)) < 5 && Math.abs(z - 2) < 5) continue;
    let ok = true;
    for (const t of trees) if (Math.hypot(t.position.x - x, t.position.z - z) < 2.1) { ok = false; break; }
    if (!ok) continue;
    const magical = (x > 26 && z > 4 && z < 40 && r() > .58) || (x < -34 && z < -22 && r() > .7) || inPlaza(x, z) === false && false;
    let variant = 0;
    if (x > 26) variant = r() > .55 ? 1 : 0;
    if (x < -30 || z < -22) variant = r() > .5 ? 1 : 0;
    const t = createTree(x, z, 1000 + trees.length, magical, variant);
    root.add(t); trees.push(t);
    const col = addCol({ type: 'circle', x, z, r: .55 });
    t.userData.collider = col;
  }
  // border wall of trees
  for (let i = 0; i < 38; i++) {
    const a = i / 38 * Math.PI * 2;
    const x = Math.cos(a) * 46, z = Math.sin(a) * 46;
    if (blocked(x, z, 0)) continue;
    const t = createTree(x, z, 4000 + i, i % 7 === 0, 1);
    root.add(t); trees.push(t); t.userData.collider = addCol({ type: 'circle', x, z, r: .6 });
  }
  // hand-placed sacred trees
  for (const [x, z, magical] of [[-38, -23, true], [-41, -30, true], [30, 30, true], [42, 16, true], [-14, 20, false], [-2, 12, false], [21, -33, false], [-42, 12, false]]) {
    const t = createTree(x, z, 8000 + trees.length, magical, magical ? 0 : 2);
    root.add(t); trees.push(t); t.userData.collider = addCol({ type: 'circle', x, z, r: .6 });
  }
  attempts = 0;
  while (rocks.length < 34 && attempts++ < 500) {
    const x = -43 + r() * 86, z = -43 + r() * 86;
    if (blocked(x, z, .6)) continue;
    if (rocks.some(o => Math.hypot(o.position.x - x, o.position.z - z) < 2)) continue;
    const ores = ['stone', 'stone', 'stone', 'copper', 'coal', 'iron'];
    const ore = ores[Math.floor(r() * ores.length)];
    const rk = createRock(x, z, 2000 + rocks.length, ore);
    root.add(rk); rocks.push(rk);
    rk.userData.collider = addCol({ type: 'circle', x, z, r: .6 });
  }
  // guaranteed mining nodes near mine & shrine
  for (const [x, z, ore] of [[33, -27, 'copper'], [45, -22, 'iron'], [44, -35, 'gold'], [-42, -35, 'moonstone'], [-33, -34, 'amethyst']]) {
    const rk = createRock(x, z, 9000 + rocks.length, ore);
    root.add(rk); rocks.push(rk); rk.userData.collider = addCol({ type: 'circle', x, z, r: .6 });
  }

  // flowers / ground cover
  for (let i = 0; i < 120; i++) {
    const x = -44 + r() * 88, z = -44 + r() * 88;
    if (excluded(x, z, 1.2) || pathDist(x, z) < .8 || Math.abs(x) > 45 || Math.abs(z) > 45) continue;
    if (Math.abs(x - 8) < 14 && z > 25 && z < 45) continue;
    const flower = new THREE.Group(); flower.position.set(x, 0, z);
    const colors = ['#f2a6c2', '#ffe08a', '#c9a4ff', '#8fe3ff', '#ff9bab'];
    const c = colors[Math.floor(r() * colors.length)];
    box(flower, .04, .28, .04, colorMat('#5e8a45'), 0, .14, 0);
    box(flower, .14, .12, .14, colorMat(c), 0, .3, 0, false);
    box(flower, .06, .06, .06, basicMat('#fff3c0'), 0, .33, 0, false);
    if (r() > .6) { box(flower, .12, .1, .12, colorMat(c), .18, .24, .1, false); box(flower, .035, .2, .035, colorMat('#5e8a45'), .18, .1, .1); }
    root.add(flower);
  }

  // forage positions (game spawns a subset each day)
  const forageNodes = [
    { x: 29, z: 17, type: 'glimmercap' }, { x: 34, z: 20, type: 'glimmercap' }, { x: 41, z: 10, type: 'glimmercap' },
    { x: 30, z: 31, type: 'moonpetal' }, { x: 42, z: 33, type: 'moonpetal' }, { x: 28, z: 9, type: 'moonpetal' },
    { x: 39, z: 37, type: 'dewdrop' }, { x: 26, z: 22, type: 'dewdrop' },
    { x: -38, z: 2, type: 'dewdrop' }, { x: -39, z: 20, type: 'moonpetal' }, { x: -14, z: 11, type: 'dewdrop' },
    { x: -8, z: 21, type: 'ancienttwig' }, { x: -28, z: 29, type: 'ancienttwig' },
    { x: -43, z: -24, type: 'moonpetal' }, { x: -33, z: -36, type: 'glimmercap' },
    { x: -2, z: 24, type: 'dewdrop' }, { x: 22, z: 31, type: 'moonpetal' },
  ];
  const forageMeshes = new Map();

  // ---------------- NPCs ----------------
  const npcHomes = {
    elowen: { x: 2.5, z: -26.2 }, bram: { x: 31, z: -10 }, orika: { x: 22, z: -23 },
    seraphine: { x: 4, z: -8 }, mirelle: { x: 31, z: 22 }, pip: { x: 16, z: -22 },
  };
  const npcPlaza = {
    elowen: { x: 8, z: -14 }, bram: { x: 18, z: -14 }, orika: { x: 20, z: -21 },
    seraphine: { x: 8, z: -22 }, mirelle: { x: 23, z: -16 }, pip: { x: 7, z: -19 },
  };
  const npcs = [];
  for (const id of NPC_ORDER) {
    const d = NPCS[id];
    const look = { ...d.look, color: d.color };
    const mesh = createCharacter(look, d.name);
    const home = npcHomes[id];
    mesh.position.set(home.x, 0, home.z);
    mesh.rotation.y = Math.PI;
    root.add(mesh);
    npcs.push({
      id, mesh, name: d.name, title: d.title, data: d,
      home, plaza: npcPlaza[id], wander: d.wander,
      x: home.x, z: home.z, target: null, wait: Math.random() * 3, speed: .9 + Math.random() * .25,
      walkT: 0, moving: false, mood: 'idle', heartT: 0,
    });
  }

  // ---------------- labels ----------------
  const labels = [];
  const labelDefs = [
    ['Moonlit Farm', 'your inheritance', -14, 5.2, 6, '#8fe38f'],
    ['Emberfall Village', 'lanterns always lit', 13, 6.4, -18, '#f6ecd2'],
    ['Whisperwood', 'it remembers you', 35, 5.8, 16, '#b79be8'],
    ['Starfall Lake', 'fish of dreaming', 8, 4.4, 35, '#8fd6e8'],
    ['Glimmerdeep Mine', 'do not go alone', 40, 6.4, -24, '#8fe3ff'],
    ['Starfall Shrine', 'five lights wake the vale', -38, 6.8, -24, '#ffe08a'],
  ];
  for (const [t, s, x, y, z, c] of labelDefs) { const sp = createLabelSprite(t, s, x, y, z, c); root.add(sp); labels.push(sp); }

  // ---------------- sky décor ----------------
  const clouds = new THREE.Group(); root.add(clouds);
  for (let i = 0; i < 9; i++) {
    const rr = rng(6100 + i);
    const cl = new THREE.Group();
    cl.position.set(-55 + rr() * 110, 27 + rr() * 9, -55 + rr() * 110);
    for (let k = 0; k < 4; k++) {
      const w = 5 + rr() * 7;
      box(cl, w, 1.2 + rr() * 1.2, 3 + rr() * 3, new THREE.MeshBasicMaterial({ color: '#f4f2ff', transparent: true, opacity: .5 }), (rr() - .5) * 8, rr() * 1.2, (rr() - .5) * 6, false);
    }
    cl.userData.speed = .18 + rr() * .25;
    clouds.add(cl);
  }
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 420; i++) {
    const rr = rng(7200 + i);
    const th = rr() * Math.PI * 2, ph = rr() * Math.PI * .42;
    starPos.push(Math.cos(th) * Math.cos(ph) * 80, 12 + Math.sin(ph) * 70, Math.sin(th) * Math.cos(ph) * 80);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#fff3c0', size: .55, transparent: true, opacity: 0, depthWrite: false }));
  root.add(stars);
  const moon = new THREE.Mesh(new THREE.SphereGeometry(2.6, 12, 12), basicMat('#f6ecd2'));
  moon.position.set(-44, 42, -50); moon.visible = false; root.add(moon);
  const moonGlow = new THREE.Mesh(new THREE.SphereGeometry(3.4, 12, 12), new THREE.MeshBasicMaterial({ color: '#fff3c0', transparent: true, opacity: .18 }));
  moonGlow.position.copy(moon.position); moonGlow.visible = false; root.add(moonGlow);

  // ---------------- fishing / forage data ----------------
  const fishingSpots = [
    { x: 8, z: 34.4, r: 2.4, label: 'Fish from the dock' },
    { x: 2.5, z: 26.2, r: 2.2, label: 'Fish the shallows' },
    { x: 15, z: 26.2, r: 2.2, label: 'Fish the reeds' },
    { x: 21.6, z: 34, r: 2.4, label: 'Fish the east bank' },
    { x: -5.6, z: 35, r: 2.4, label: 'Fish the west bank' },
  ];
  for (const sp of fishingSpots) interactables.push({ type: 'fish', x: sp.x, z: sp.z, r: sp.r, label: sp.label, icon: 'fishingrod', spot: sp });

  const locations = [
    { name: 'Moonlit Farm', x: -24, z: 8, icon: 'hoe' },
    { name: 'Emberfall Village', x: 13, z: -18, icon: 'star' },
    { name: 'Lantern Market', x: 26, z: -24, icon: 'bag' },
    { name: "Bram's Forge", x: 37, z: -12, icon: 'hammer' },
    { name: 'Whisperwood', x: 35, z: 18, icon: 'glimmercap' },
    { name: 'Starfall Lake', x: 8, z: 32, icon: 'fishingrod' },
    { name: 'Glimmerdeep Mine', x: 40, z: -26, icon: 'pickaxe' },
    { name: 'Starfall Shrine', x: -38, z: -26, icon: 'star' },
    { name: 'Moonlit Barn', x: -33, z: 18, icon: 'paw' },
  ];

  const world = {
    root, colliders, interactables, houses, windows, lights, trees, rocks, plots, plotGroup,
    npcs, labels, clouds, stars, moon, moonGlow, water, waterMat, ground, groundMat, farmGround, sand,
    fountain, camp, well, shipping, barn, nest, mine, shrine, windmill: blades, wind,
    fishingSpots, forageNodes, forageMeshes, locations,
    spawn: { x: -30, z: 2.4 },
    npcHomes, npcPlaza, plaza,
    sun, hemi, ambient, sunTarget,
    waterSparkles,
  };
  applySeason(world, 'spring');
  return world;
}

const SEASON_GROUND = {
  spring: { tex: 'grass', color: '#ffffff' }, summer: { tex: 'grass', color: '#f2f0c8' },
  fall: { tex: 'grass', color: '#e8cf9a' }, winter: { tex: 'snow', color: '#eaf6ff' },
};
const SEASON_LEAF = {
  spring: { tex: 'leaves', c1: '#ffffff', c2: '#d9f0b0' },
  summer: { tex: 'leaves', c1: '#f2f0c0', c2: '#c9d6a0' },
  fall: { tex: 'leavesGold', c1: '#ffffff', c2: '#ffe1a0' },
  winter: { tex: 'snowleaves', c1: '#ffffff', c2: '#dfeef5' },
};

export function applySeason(world, season) {
  const g = SEASON_GROUND[season];
  world.groundMat.map = texture(g.tex, 48, 48);
  world.groundMat.color.set(g.color);
  world.groundMat.needsUpdate = true;
  const lf = SEASON_LEAF[season];
  for (const t of world.trees) {
    if (t.userData.magical) continue;
    if (!t.userData.leafMat) continue;
    t.userData.leafMat.map = texture(lf.tex);
    t.userData.leafMat.color.set(lf.c1);
    t.userData.leafMat.needsUpdate = true;
    t.userData.leafMat2.map = texture(lf.tex);
    t.userData.leafMat2.color.set(lf.c2);
    t.userData.leafMat2.needsUpdate = true;
  }
  world.season = season;
}
