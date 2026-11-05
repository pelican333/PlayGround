// shared material + primitive helpers for the 3D world
import * as THREE from 'three';
import { textureCanvas } from '../art.js';

const texCache = new Map();
export function texture(name, rx = 1, ry = 1) {
  const key = `${name}:${rx}:${ry}`;
  if (texCache.has(key)) return texCache.get(key);
  const t = new THREE.CanvasTexture(textureCanvas(name));
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 1;
  texCache.set(key, t);
  return t;
}

const matCache = new Map();
export function mat(name, color = '#ffffff', rx = 1, ry = 1, opts = {}) {
  const key = `${name}:${color}:${rx}:${ry}:${JSON.stringify(opts)}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshLambertMaterial({ map: texture(name, rx, ry), color, ...opts });
  matCache.set(key, m);
  return m;
}
export function colorMat(color, opts = {}) {
  const key = `c:${color}:${JSON.stringify(opts)}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshLambertMaterial({ color, ...opts });
  matCache.set(key, m);
  return m;
}
export function basicMat(color, opts = {}) {
  const key = `b:${color}:${JSON.stringify(opts)}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshBasicMaterial({ color, ...opts });
  matCache.set(key, m);
  return m;
}
export function glowMat(color, opacity = 1) {
  const key = `g:${color}:${opacity}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity });
  matCache.set(key, m);
  return m;
}

export const BOX = new THREE.BoxGeometry(1, 1, 1);
export const CYL = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
export const CONE = new THREE.ConeGeometry(0.5, 1, 6);
export const BALL = new THREE.IcosahedronGeometry(0.5, 1);

export function box(parent, w, h, d, material, x = 0, y = 0, z = 0, cast = true, receive = true) {
  const m = new THREE.Mesh(BOX, material);
  m.scale.set(w, h, d);
  m.position.set(x, y, z);
  m.castShadow = cast; m.receiveShadow = receive;
  parent.add(m);
  return m;
}
export function cyl(parent, rTop, rBot, h, material, x = 0, y = 0, z = 0, seg = 8) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), material);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function ball(parent, radius, material, x = 0, y = 0, z = 0, detail = 1) {
  const m = new THREE.Mesh(new THREE.IcosahedronGeometry(radius, detail), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  parent.add(m);
  return m;
}
export function plane(parent, w, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), material);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, y, z);
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function rbox(parent, w, h, d, material, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = box(parent, w, h, d, material, x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}
export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
export function disposeGroup(g) {
  if (!g) return;
  g.traverse((o) => {
    if (o.geometry && o.geometry !== BOX && o.geometry !== CYL && o.geometry !== CONE && o.geometry !== BALL) o.geometry.dispose();
  });
  if (g.parent) g.parent.remove(g);
}
