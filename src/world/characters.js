// voxel characters, fantasy animals and marxies
import * as THREE from 'three';
import { box, ball, cyl, colorMat, glowMat, basicMat } from './mats.js';
import { shade } from '../art.js';

const faceCache = new Map();
function faceTexture(look) {
  const key = JSON.stringify([look.skin, look.eyes, look.beard, look.accessory]);
  if (faceCache.has(key)) return faceCache.get(key);
  const c = document.createElement('canvas'); c.width = 16; c.height = 16;
  const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
  const ink = '#2a1e30';
  x.fillStyle = ink; x.fillRect(3, 6, 3, 3); x.fillRect(10, 6, 3, 3);
  x.fillStyle = '#ffffff'; x.fillRect(3, 6, 2, 2); x.fillRect(10, 6, 2, 2);
  x.fillStyle = '#3b2a27'; x.fillRect(4, 7, 1, 1); x.fillRect(11, 7, 1, 1);
  x.fillStyle = shade(look.skin || '#e8c9a8', -0.22);
  x.fillRect(7, 9, 2, 1);
  x.fillStyle = '#a8483a'; x.fillRect(6, 12, 4, 1);
  x.fillStyle = 'rgba(242,166,194,0.55)'; x.fillRect(1, 9, 2, 1); x.fillRect(13, 9, 2, 1);
  if (look.beard) { x.fillStyle = '#6a3f2a'; x.fillRect(4, 11, 8, 2); x.fillRect(5, 13, 6, 1); x.fillRect(6, 12, 4, 1); }
  if (look.accessory === 'glasses') {
    x.strokeStyle = '#e8c170'; x.strokeRect(2, 5, 5, 4); x.strokeRect(9, 5, 5, 4); x.fillStyle = '#e8c170'; x.fillRect(7, 7, 2, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  faceCache.set(key, t);
  return t;
}

function nameTexture(name, color = '#f6ecd2') {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  x.fillStyle = 'rgba(20,14,32,0.72)';
  x.fillRect(28, 14, 200, 36);
  x.fillStyle = 'rgba(20,14,32,0.9)';
  x.fillRect(28, 14, 200, 3); x.fillRect(28, 47, 200, 3); x.fillRect(28, 14, 3, 36); x.fillRect(225, 14, 3, 36);
  x.fillStyle = color;
  x.font = 'bold 24px "Courier New", monospace';
  x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(name.toUpperCase(), 128, 34);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function buildTool(id) {
  const g = new THREE.Group();
  const handle = colorMat('#7e5a3a'), metal = colorMat('#d8e6ff'), glow = basicMat('#8fe3ff');
  if (id === 'hoe') { box(g, .05, .42, .05, handle, 0, -.18, 0); box(g, .18, .05, .06, metal, 0, -.4, .05); }
  else if (id === 'wateringcan') { box(g, .18, .15, .12, colorMat('#79c7d8'), 0, -.34, 0); box(g, .06, .04, .14, colorMat('#3d7d92'), 0, -.32, .1); box(g, .04, .08, .04, colorMat('#3d7d92'), .1, -.28, 0); }
  else if (id === 'axe') { box(g, .05, .4, .05, handle, 0, -.18, 0); box(g, .16, .16, .05, metal, 0, -.38, 0); }
  else if (id === 'pickaxe') { box(g, .05, .4, .05, handle, 0, -.18, 0); box(g, .28, .05, .05, metal, 0, -.38, 0); }
  else if (id === 'fishingrod') { const m = box(g, .035, .62, .035, handle, .02, -.1, 0); m.rotation.z = -.12; box(g, .015, .015, .030, glow, .1, -.38, 0); }
  else if (id === 'sword') { box(g, .05, .2, .05, colorMat('#8a5a2a'), 0, -.3, 0); box(g, .05, .42, .02, metal, 0, -.58, 0); box(g, .16, .04, .04, colorMat('#c99b4a'), 0, -.37, 0); }
  else if (id === 'seed') { box(g, .12, .14, .1, colorMat('#ddc28a'), 0, -.4, 0); }
  return g;
}

export function createCharacter(look = {}, name = 'Farmer', opts = {}) {
  const g = new THREE.Group();
  const parts = {};
  const scale = look.small ? 0.84 : 1;
  const skin = look.skin || '#e8c9a8';
  const outfit = look.outfit || '#4f8a63';
  const trim = look.trim || '#e8d9a8';
  const hair = look.hair || '#6a3f2a';
  const hairD = shade(hair, -0.25);
  const pants = look.pants || shade(outfit, -0.3);

  const root = new THREE.Group();
  root.scale.setScalar(scale);
  g.add(root);

  // legs
  const legGeoMat = colorMat(shade(pants, -0.12));
  const legL = new THREE.Group(); legL.position.set(-0.15, 0.62, 0);
  box(legL, .22, .5, .26, legGeoMat, 0, -.25, 0);
  box(legL, .24, .1, .3, colorMat('#3b2a37'), 0, -.52, .03);
  const legR = new THREE.Group(); legR.position.set(0.15, 0.62, 0);
  box(legR, .22, .5, .26, legGeoMat, 0, -.25, 0);
  box(legR, .24, .1, .3, colorMat('#3b2a37'), 0, -.52, .03);
  root.add(legL, legR);

  // torso
  const torso = new THREE.Group(); torso.position.y = 1.12;
  box(torso, .62, .72, .4, colorMat(outfit), 0, 0, 0);
  box(torso, .64, .12, .42, colorMat(trim), 0, .3, 0);
  box(torso, .18, .5, .42, colorMat(shade(outfit, 0.1)), 0, .02, 0.01);
  box(torso, .6, .1, .42, colorMat(shade(outfit, -0.2)), 0, -.34, 0);
  if (look.cape) {
    const cape = new THREE.Group(); cape.position.set(0, .32, -.22);
    const cm = box(cape, .64, 1.05, .06, colorMat(look.cape), 0, -.55, -.04);
    cm.castShadow = true;
    parts.cape = cape; torso.add(cape);
  }
  root.add(torso);

  // arms
  const armL = new THREE.Group(); armL.position.set(-0.41, 1.38, 0);
  box(armL, .17, .6, .22, colorMat(shade(outfit, -0.05)), 0, -.28, 0);
  box(armL, .18, .16, .22, colorMat(skin), 0, -.65, .01);
  const armR = new THREE.Group(); armR.position.set(0.41, 1.38, 0);
  box(armR, .17, .6, .22, colorMat(shade(outfit, -0.05)), 0, -.28, 0);
  box(armR, .18, .16, .22, colorMat(skin), 0, -.65, .01);
  box(armR, .14, .1, .14, colorMat(trim), 0, -.53, 0);
  root.add(armL, armR);

  const hand = new THREE.Group();
  hand.position.set(0, -.68, .06);
  armR.add(hand);
  const tools = {};
  for (const id of ['hoe', 'wateringcan', 'axe', 'pickaxe', 'fishingrod', 'sword', 'seed']) {
    const t = buildTool(id); t.visible = false; t.scale.setScalar(.9); hand.add(t); tools[id] = t;
  }

  // head
  const head = new THREE.Group(); head.position.y = 1.82;
  box(head, .54, .52, .5, colorMat(skin), 0, 0, 0);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(.44, .44), new THREE.MeshBasicMaterial({ map: faceTexture(look), transparent: true, depthWrite: false }));
  face.position.set(0, -.02, .256);
  head.add(face);
  // ears
  if (look.ears === 'elf') {
    const el = box(head, .07, .16, .1, colorMat(skin), -.29, .02, -.02); el.rotation.z = .3;
    const er = box(head, .07, .16, .1, colorMat(skin), .29, .02, -.02); er.rotation.z = -.3;
  } else if (look.ears === 'gnome') {
    box(head, .08, .1, .12, colorMat(shade(skin, -0.1)), -.29, .02, 0);
    box(head, .08, .1, .12, colorMat(shade(skin, -0.1)), .29, .02, 0);
  } else {
    box(head, .06, .12, .1, colorMat(shade(skin, -0.12)), -.29, .02, -.02);
    box(head, .06, .12, .1, colorMat(shade(skin, -0.12)), .29, .02, -.02);
  }

  const hairM = colorMat(hair);
  const hairDm = colorMat(hairD);
  const style = look.hairStyle || 'short';
  box(head, .58, .14, .54, hairDm, 0, .25, -.01);
  box(head, .56, .12, .2, hairM, 0, .28, -.1);
  if (style === 'long') {
    box(head, .58, .55, .12, hairM, 0, -.04, -.28);
    box(head, .1, .42, .5, hairDm, -.3, -.02, -.02);
    box(head, .1, .42, .5, hairDm, .3, -.02, -.02);
  } else if (style === 'short') {
    box(head, .1, .18, .5, hairM, -.29, .12, -.02);
    box(head, .1, .18, .5, hairM, .29, .12, -.02);
  } else if (style === 'wild') {
    for (let i = 0; i < 4; i++) { const s = box(head, .12, .22, .12, hairM, -.2 + i * .14, .38, -.05); s.rotation.z = (i % 2 ? 1 : -1) * .35; }
    box(head, .1, .3, .5, hairM, -.3, .03, -.02);
    box(head, .1, .3, .5, hairM, .3, .03, -.02);
  } else if (style === 'bun') {
    ball(head, .19, hairM, 0, .4, -.18, 0);
    box(head, .1, .16, .5, hairM, -.29, .1, -.02);
    box(head, .1, .16, .5, hairM, .29, .1, -.02);
  }

  if (look.hat === 'witch') {
    const brim = cyl(head, .46, .46, .06, colorMat('#3b2a44'), 0, .37, 0, 8);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(.32, .6, 6), colorMat('#3b2a44'));
    cone.position.set(0, .66, -.02); cone.rotation.z = .08; cone.castShadow = true; head.add(cone);
    box(head, .34, .05, .34, colorMat('#bda6e8'), 0, .42, 0);
  } else if (look.hat === 'hood') {
    box(head, .66, .4, .62, colorMat(shade(outfit, -0.2)), 0, .18, -.03);
    box(head, .7, .1, .66, colorMat(trim), 0, .14, -.03);
    box(head, .1, .6, .6, colorMat(shade(outfit, -0.2)), -.3, -.04, -.06);
    box(head, .1, .6, .6, colorMat(shade(outfit, -0.2)), .3, -.04, -.06);
  } else if (look.hat === 'straw') {
    cyl(head, .52, .52, .05, colorMat('#e8c170'), 0, .34, 0, 8);
    cyl(head, .34, .42, .18, colorMat('#d9b45c'), 0, .43, 0, 8);
  }
  if (look.accessory === 'flower') {
    box(head, .12, .12, .06, colorMat('#f2a6c2'), .31, .2, .22, false);
    box(head, .06, .06, .06, colorMat('#ffe1e7'), .31, .24, .25, false);
  }
  root.add(head);
  parts.head = head; parts.torso = torso; parts.armL = armL; parts.armR = armR;
  parts.legL = legL; parts.legR = legR; parts.hand = hand; parts.tools = tools;
  g.userData.parts = parts;
  g.userData.look = look;
  g.userData.name = name;
  g.userData.isCharacter = true;
  if (opts.nameplate !== false && name) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: nameTexture(name, look.color || '#f6ecd2'), transparent: true, depthWrite: false }));
    sp.scale.set(2.6, .65, 1);
    sp.position.y = 2.75 * scale;
    g.add(sp);
    g.userData.nameSprite = sp;
  }
  return g;
}

export function setHeldTool(char, id) {
  const tools = char?.userData?.parts?.tools;
  if (!tools) return;
  for (const k in tools) tools[k].visible = k === id;
}

export function poseCharacter(char, walkT, moving, running = false, dt = 0.016) {
  const p = char?.userData?.parts;
  if (!p) return;
  const amp = moving ? (running ? 1.0 : 0.7) : 0;
  const s = Math.sin(walkT * (running ? 13 : 9));
  p.legL.rotation.x = s * 0.7 * amp;
  p.legR.rotation.x = -s * 0.7 * amp;
  p.armL.rotation.x = -s * 0.55 * amp;
  p.armR.rotation.x = s * 0.55 * amp + (char.userData.swing || 0);
  p.torso.position.y = 1.12 + (moving ? Math.abs(Math.sin(walkT * 9)) * 0.03 : Math.sin(performance.now() / 900) * 0.012);
  p.head.rotation.y = Math.sin(performance.now() / 2100 + (char.id || 0)) * (moving ? 0.06 : 0.13);
  if (p.cape) p.cape.rotation.x = 0.08 + (moving ? 0.32 : 0.05) + Math.sin(walkT * 9) * 0.04;
  char.userData.swing = Math.max(0, (char.userData.swing || 0) - dt * 6);
  char.userData.walkT = walkT;
}

export function swingCharacter(char) { char.userData.swing = -1.6; }

// ---------------------------------------------------------------------------
function addEye(parent, x, y, z, size = .08, color = '#2a1e30') {
  box(parent, size, size, .03, basicMat(color), x, y, z, false);
  box(parent, size * .45, size * .45, .035, basicMat('#ffffff'), x - size * .2, y + size * .18, z + .01, false);
}

export function createAnimalMesh(type, look = {}) {
  const g = new THREE.Group();
  const bodyC = look.body || '#f4f1ea';
  const accent = look.accent || '#c8b8a0';
  const horn = look.horn || '#e8c170';
  const parts = {};
  const mBody = colorMat(bodyC), mAccent = colorMat(accent), mHorn = colorMat(horn), mDark = colorMat(shade(bodyC, -0.22));
  if (type === 'fluffalo') {
    box(g, 1.15, .8, .95, mBody, 0, .92, 0);
    box(g, 1.22, .26, .78, colorMat('#fbfaff'), 0, 1.34, -.03, true);
    ball(g, .28, colorMat('#fbfaff'), -.35, 1.45, 0, 0);
    ball(g, .24, colorMat('#fbfaff'), .1, 1.5, .1, 0);
    const head = new THREE.Group(); head.position.set(0, 1.3, .58); g.add(head);
    box(head, .55, .55, .5, mBody, 0, .08, 0);
    box(head, .42, .16, .26, mAccent, 0, -.1, .24);
    const h1 = new THREE.Mesh(new THREE.ConeGeometry(.09, .35, 5), mHorn); h1.position.set(-.26, .38, -.02); h1.rotation.z = .7; head.add(h1);
    const h2 = new THREE.Mesh(new THREE.ConeGeometry(.09, .35, 5), mHorn); h2.position.set(.26, .38, -.02); h2.rotation.z = -.7; head.add(h2);
    addEye(head, -.14, .15, .262, .09); addEye(head, .14, .15, .262, .09);
    box(head, .22, .08, .05, basicMat('#f2a6c2'), 0, -.02, .27, false);
    parts.head = head;
    for (const [x, z] of [[-.38, .3], [.38, .3], [-.38, -.3], [.38, -.3]]) box(g, .18, .55, .2, mDark, x, .28, z);
    const tail = new THREE.Group(); tail.position.set(0, 1.0, -.5); g.add(tail);
    box(tail, .08, .4, .08, mAccent, 0, -.1, -.04); ball(tail, .12, colorMat('#fbfaff'), 0, -.32, -.06, 0);
    parts.tail = tail;
  } else if (type === 'emberhen') {
    box(g, .62, .55, .6, mBody, 0, .62, 0);
    box(g, .35, .28, .3, mAccent, -.28, .72, -.02);
    const head = new THREE.Group(); head.position.set(0, 1.02, .22); g.add(head);
    box(head, .38, .38, .36, mBody, 0, .05, 0);
    box(head, .16, .16, .18, basicMat('#ffd76e'), 0, -.03, .24, false);
    box(head, .1, .22, .12, mAccent, -.12, .27, -.02);
    addEye(head, -.1, .1, .19, .07); addEye(head, .1, .1, .19, .07);
    const comb = new THREE.Mesh(new THREE.ConeGeometry(.1, .2, 4), basicMat('#ffd76e')); comb.position.set(0, .34, .02); head.add(comb);
    parts.head = head;
    const tail = new THREE.Group(); tail.position.set(0, .68, -.3); g.add(tail);
    for (let i = 0; i < 3; i++) { const f = box(tail, .08, .05, .4, colorMat(shade(accent, i * .08)), (i - 1) * .09, .08 + i * .05, -.2); f.rotation.x = -.5 - i * .15; }
    parts.tail = tail;
    for (const x of [-.18, .18]) box(g, .07, .32, .07, basicMat('#e8a36b'), x, .16, 0);
  } else if (type === 'moonbun') {
    const b = ball(g, .38, mBody, 0, .58, 0, 1); b.scale.set(1, .95, 1.15);
    const head = new THREE.Group(); head.position.set(0, .98, .28); g.add(head);
    ball(head, .28, mBody, 0, 0, 0, 1);
    box(head, .12, .45, .12, mBody, -.14, .42, -.02); box(head, .12, .45, .12, mBody, .14, .42, -.02);
    box(head, .06, .3, .04, basicMat('#f2a6c2'), -.14, .42, .04, false); box(head, .06, .3, .04, basicMat('#f2a6c2'), .14, .42, .04, false);
    addEye(head, -.1, .03, .27, .07); addEye(head, .1, .03, .27, .07);
    box(head, .1, .07, .04, basicMat('#f2a6c2'), 0, -.12, .27, false);
    parts.head = head;
    ball(g, .14, colorMat('#ffffff'), 0, .55, -.42, 0);
    for (const x of [-.18, .18]) box(g, .12, .28, .2, mBody, x, .15, .05);
  } else if (type === 'dracokit') {
    box(g, .6, .5, .8, mBody, 0, .68, 0);
    const head = new THREE.Group(); head.position.set(0, 1.0, .45); g.add(head);
    box(head, .45, .4, .42, mBody, 0, .05, 0);
    box(head, .3, .16, .2, mAccent, 0, -.08, .25);
    const horn1 = new THREE.Mesh(new THREE.ConeGeometry(.07, .3, 4), mHorn); horn1.position.set(-.12, .3, -.08); horn1.rotation.x = -.3; head.add(horn1);
    const horn2 = new THREE.Mesh(new THREE.ConeGeometry(.07, .3, 4), mHorn); horn2.position.set(.12, .3, -.08); horn2.rotation.x = -.3; head.add(horn2);
    addEye(head, -.12, .1, .22, .08, '#ffe08a'); addEye(head, .12, .1, .22, .08, '#ffe08a');
    parts.head = head;
    const wingL = new THREE.Group(); wingL.position.set(-.34, .9, .05);
    box(wingL, .55, .06, .55, colorMat(shade(accent, .1)), -.25, 0, -.05); wingL.rotation.z = .15; g.add(wingL);
    const wingR = new THREE.Group(); wingR.position.set(.34, .9, .05);
    box(wingR, .55, .06, .55, colorMat(shade(accent, .1)), .25, 0, -.05); wingR.rotation.z = -.15; g.add(wingR);
    parts.wingL = wingL; parts.wingR = wingR;
    const tail = box(g, .16, .16, .6, mAccent, 0, .68, -.55); tail.rotation.x = .2;
    for (const x of [-.18, .18]) box(g, .14, .32, .16, mBody, x, .16, .15);
  } else if (type === 'starlotl') {
    const b = ball(g, .35, mBody, 0, .52, 0, 1); b.scale.set(1.3, .7, 1);
    const head = new THREE.Group(); head.position.set(0, .86, .38); g.add(head);
    ball(head, .27, mBody, 0, .05, 0, 1);
    for (let i = -1; i <= 1; i++) {
      box(head, .28, .06, .06, colorMat('#ffd9f0'), -.22, .06 + i * .08, -.02);
      box(head, .28, .06, .06, colorMat('#ffd9f0'), .22, .06 + i * .08, -.02);
    }
    addEye(head, -.1, .1, .25, .07); addEye(head, .1, .1, .25, .07);
    box(head, .12, .06, .04, basicMat('#f2a6c2'), 0, -.05, .25, false);
    parts.head = head;
    const tail = box(g, .2, .18, .5, colorMat('#ffd9f0'), 0, .52, -.55); tail.rotation.x = .2;
    for (const x of [-.24, .24]) box(g, .12, .24, .2, mBody, x, .14, .1);
  } else {
    ball(g, .4, mBody, 0, .55, 0, 1);
    ball(g, .26, mBody, 0, .9, .2, 1);
    addEye(g, -.09, .92, .42, .06); addEye(g, .09, .92, .42, .06);
  }
  if (parts.head) parts.head.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.userData.parts = parts;
  g.userData.animalType = type;
  g.userData.anim = Math.random() * 10;
  return g;
}

export function poseAnimal(mesh, dt, moving) {
  const p = mesh.userData.parts;
  const t = performance.now() / 1000 + (mesh.userData.anim || 0);
  mesh.userData.anim = (mesh.userData.anim || 0) + dt;
  if (p?.head) p.head.position.y = (p.head.userData.baseY ?? p.head.position.y) + Math.sin(t * 2) * .018;
  if (p?.tail) p.tail.rotation.z = Math.sin(t * 3) * .18;
  if (p?.wingL) { p.wingL.rotation.z = .15 + Math.sin(t * 6) * .35; p.wingR.rotation.z = -.15 - Math.sin(t * 6) * .35; }
}

export function createMarxyMesh(seed = 0) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.28, 0), basicMat('#ffe08a'));
  core.position.y = .45; g.add(core);
  const ring = new THREE.Group(); ring.position.y = .45; g.add(ring);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const s = new THREE.Mesh(new THREE.OctahedronGeometry(.1, 0), basicMat(i % 2 ? '#fff3b0' : '#ffcf6e'));
    s.position.set(Math.cos(a) * .32, Math.sin(a) * .32, 0); ring.add(s);
  }
  box(core, .06, .06, .03, basicMat('#2a1e30'), -.1, .06, .235, false);
  box(core, .06, .06, .03, basicMat('#2a1e30'), .1, .06, .235, false);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(.46, .025, 4, 12), new THREE.MeshBasicMaterial({ color: '#fff3b0', transparent: true, opacity: .6 }));
  halo.rotation.x = Math.PI / 2; halo.position.y = .44; g.add(halo);
  const light = new THREE.PointLight('#ffe9a8', 0.6, 4);
  light.position.y = .5; g.add(light);
  g.userData.ring = ring; g.userData.core = core; g.userData.halo = halo; g.userData.seed = seed;
  g.userData.isMarxy = true;
  return g;
}
