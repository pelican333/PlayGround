import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt));
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

export function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

// ---------- deterministic value noise ----------
function hash2(x, z) {
  const h = Math.sin(x * 127.1 + z * 311.7 + 13.7) * 43758.5453;
  return h - Math.floor(h);
}
export function noise2(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi), b = hash2(xi + 1, zi);
  const c = hash2(xi, zi + 1), d = hash2(xi + 1, zi + 1);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}
export function fbm(x, z) {
  return noise2(x, z) * 0.58 + noise2(x * 2.07 + 5.2, z * 2.07 + 1.3) * 0.27 + noise2(x * 4.1 + 9, z * 4.1 + 3) * 0.15;
}

// ---------- geometry helpers ----------
export function colorize(geo, color, jitter = 0) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const j = jitter ? (Math.random() - 0.5) * jitter : 0;
    arr[i * 3] = clamp(c.r + j, 0, 1);
    arr[i * 3 + 1] = clamp(c.g + j, 0, 1);
    arr[i * 3 + 2] = clamp(c.b + j, 0, 1);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

export function xf(geo, px = 0, py = 0, pz = 0, rx = 0, ry = 0, rz = 0, s = 1) {
  if (s !== 1) geo.scale(s, s, s);
  if (rx) geo.rotateX(rx);
  if (ry) geo.rotateY(ry);
  if (rz) geo.rotateZ(rz);
  geo.translate(px, py, pz);
  return geo;
}

export function mergeColored(parts) {
  // parts: [{ geo, color, jitter }]
  // Normalize to non-indexed so polyhedra (non-indexed) and boxes/cylinders can mix.
  const geos = parts.map(({ geo, color, jitter }) => {
    let g = geo;
    if (g.index) {
      const ni = g.toNonIndexed();
      g.dispose();
      g = ni;
    }
    return colorize(g, color, jitter || 0);
  });
  const merged = mergeGeometries(geos, false);
  if (!merged) throw new Error('mergeColored failed: incompatible geometries');
  geos.forEach((g) => g.dispose());
  merged.computeVertexNormals();
  return merged;
}

export function stdMat(opts = {}) {
  return new THREE.MeshStandardMaterial({
    roughness: 0.92,
    metalness: 0,
    flatShading: true,
    ...opts,
  });
}
export function vcMat(opts = {}) {
  return stdMat({ vertexColors: true, ...opts });
}

const glowCache = new Map();
export function glowTexture(color = '#ffffff', softness = 0.55) {
  const key = color + softness;
  if (glowCache.has(key)) return glowCache.get(key);
  const size = 128;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(softness * 0.5, color);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  glowCache.set(key, tex);
  return tex;
}

export function glowSprite(color, size, opacity = 1) {
  const mat = new THREE.SpriteMaterial({
    map: glowTexture(color),
    color: 0xffffff,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const s = new THREE.Sprite(mat);
  s.scale.setScalar(size);
  return s;
}

// smooth rectangle mask: 1 inside rect, 0 outside falloff
export function rectMask(x, z, cx, cz, halfW, halfH, falloff) {
  const dx = Math.max(Math.abs(x - cx) - halfW, 0);
  const dz = Math.max(Math.abs(z - cz) - halfH, 0);
  const d = Math.hypot(dx, dz);
  return 1 - smoothstep(0, falloff, d);
}

// point-to-segment distance in 2D
export function distToSegment(px, pz, ax, az, bx, bz) {
  const vx = bx - ax, vz = bz - az;
  const wx = px - ax, wz = pz - az;
  const len2 = vx * vx + vz * vz;
  let t = len2 > 0 ? (wx * vx + wz * vz) / len2 : 0;
  t = clamp(t, 0, 1);
  const dx = px - (ax + vx * t), dz = pz - (az + vz * t);
  return { dist: Math.hypot(dx, dz), nx: dx, nz: dz, t };
}
