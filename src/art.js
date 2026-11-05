// ---------------------------------------------------------------------------
// STARFALL VALE — procedural pixel art
// Every icon, portrait, texture and UI glyph is drawn pixel-by-pixel here.
// ---------------------------------------------------------------------------
import { ITEMS } from './data.js';

export const PAL = {
  ink: '#191227', ink2: '#241a35', panel: '#1f1830', panel2: '#2b2140',
  gold: '#e8c170', gold2: '#b98b45', cream: '#f6ecd2', cyan: '#8fe3ff',
  pink: '#f2a6c2', green: '#8fe38f', red: '#e87878', violet: '#b79be8',
  grass: '#6fae5c', grassDark: '#4e8a45', soil: '#7c5137', soilDark: '#5e3a28',
  water: '#5fb8d8', waterDeep: '#2f7f9e', stone: '#8d8d99',
};

const _icons = new Map();
const _portraits = new Map();
let UID = 0;

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  return { c, ctx };
}

function px(ctx, x, y, w, h, color) {
  if (!color) return;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}
function dot(ctx, x, y, color) { px(ctx, x, y, 1, 1, color); }

export function shade(hex, amt = 0) {
  if (!hex || hex[0] !== '#' || hex.length < 7) return hex;
  let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  if (amt >= 0) { r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt; }
  else { r *= 1 + amt; g *= 1 + amt; b *= 1 + amt; }
  const h = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

// deterministic pseudo random -------------------------------------------------
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hashStr(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// ---------------------------------------------------------------------------
// item icons — 16 x 16 pixel art, upscaled with nearest neighbour
// ---------------------------------------------------------------------------
function toolIcon(ctx, it) {
  const a = it.art, dark = '#1b1424', wood = a.c2, metal = a.c1;
  const handle = (x0, y0, x1, y1) => {
    const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    for (let i = 0; i <= steps; i++) {
      const x = Math.round(x0 + (x1 - x0) * i / steps), y = Math.round(y0 + (y1 - y0) * i / steps);
      dot(ctx, x, y, dark); dot(ctx, x + 1, y, wood); dot(ctx, x, y + 1, shade(wood, -0.2));
    }
  };
  if (a.tool === 'hoe') {
    handle(4, 14, 12, 4);
    px(ctx, 11, 2, 4, 1, dark); px(ctx, 12, 3, 3, 3, metal); px(ctx, 13, 3, 2, 2, shade(metal, 0.4)); px(ctx, 11, 4, 2, 2, shade(metal, -0.25));
  } else if (a.tool === 'can') {
    px(ctx, 3, 6, 8, 7, dark); px(ctx, 4, 7, 6, 5, a.c1); px(ctx, 4, 7, 6, 1, shade(a.c1, 0.35)); px(ctx, 4, 11, 6, 1, a.c2);
    px(ctx, 10, 5, 3, 2, dark); px(ctx, 11, 6, 3, 1, dark); px(ctx, 13, 5, 2, 1, a.c3); px(ctx, 14, 6, 1, 1, a.c3);
    px(ctx, 5, 4, 4, 1, dark); px(ctx, 6, 3, 3, 1, a.c2); px(ctx, 4, 9, 1, 1, a.c3);
  } else if (a.tool === 'axe') {
    handle(4, 14, 10, 5);
    px(ctx, 9, 2, 6, 4, dark); px(ctx, 10, 2, 4, 3, metal); px(ctx, 9, 3, 2, 3, metal); px(ctx, 12, 2, 2, 1, a.c3); px(ctx, 10, 5, 4, 1, shade(metal, -0.3));
  } else if (a.tool === 'pick') {
    handle(4, 14, 11, 4);
    px(ctx, 5, 3, 9, 2, dark); px(ctx, 4, 4, 3, 2, metal); px(ctx, 11, 2, 4, 2, metal); px(ctx, 5, 3, 6, 1, a.c3); px(ctx, 14, 3, 1, 2, shade(metal, -0.2));
  } else if (a.tool === 'rod') {
    handle(3, 14, 12, 2);
    px(ctx, 12, 2, 2, 1, dark); px(ctx, 13, 3, 1, 4, '#e8e8f0'); px(ctx, 13, 7, 1, 1, a.c3); px(ctx, 12, 8, 2, 2, a.c3); dot(ctx, 12, 8, '#ffffff');
  } else if (a.tool === 'sword') {
    px(ctx, 9, 2, 2, 2, dark); px(ctx, 8, 4, 4, 7, dark); px(ctx, 9, 3, 2, 8, metal); px(ctx, 9, 3, 1, 7, a.c3); px(ctx, 6, 10, 7, 2, '#c99b4a'); px(ctx, 5, 11, 3, 2, '#8a5a2a'); px(ctx, 4, 13, 3, 2, '#5e3a28'); dot(ctx, 14, 2, '#fff6cc');
  }
}

function seedIcon(ctx, it) {
  const c1 = it.art.c1;
  px(ctx, 4, 3, 8, 2, '#2a1e30');
  px(ctx, 3, 5, 10, 9, '#c9ac74'); px(ctx, 4, 6, 8, 7, '#ddc28a'); px(ctx, 4, 6, 8, 1, '#f0dfb0');
  px(ctx, 6, 9, 4, 1, '#a8874f'); px(ctx, 5, 11, 6, 2, '#b6965d');
  px(ctx, 5, 2, 6, 2, '#8a6a44'); px(ctx, 7, 9, 2, 2, c1); dot(ctx, 6, 10, shade(c1, 0.35)); dot(ctx, 9, 8, shade(c1, 0.35));
  px(ctx, 9, 12, 3, 1, shade(c1, -0.1)); dot(ctx, 12, 12, c1);
}

function cropIcon(ctx, it) {
  const { shape, c1, c2, c3 } = it.art;
  const stem = '#4e8a45', dark = '#1b1424';
  if (shape === 'berry') {
    px(ctx, 7, 2, 2, 8, stem); px(ctx, 4, 5, 4, 2, '#6eae5c'); px(ctx, 9, 4, 4, 2, '#6eae5c');
    const berries = [[3, 8], [8, 7], [5, 11], [10, 10]];
    for (const [x, y] of berries) {
      px(ctx, x + 1, y, 3, 1, dark); px(ctx, x, y + 1, 5, 3, c2); px(ctx, x + 1, y + 1, 3, 2, c1); dot(ctx, x + 1, y + 1, c3); dot(ctx, x + 3, y + 3, shade(c2, -0.2));
    }
  } else if (shape === 'wheat') {
    for (let i = 0; i < 3; i++) {
      const x = 4 + i * 4;
      px(ctx, x, 5, 1, 9, '#8a6a44');
      for (let j = 0; j < 4; j++) { dot(ctx, x - 1, 4 + j * 2, c2); dot(ctx, x + 1, 4 + j * 2, c2); dot(ctx, x, 3 + j * 2, c1); }
      dot(ctx, x + 1, 3, c3);
    }
  } else if (shape === 'bloom') {
    px(ctx, 7, 8, 2, 7, stem); px(ctx, 4, 12, 4, 2, '#6eae5c'); px(ctx, 8, 13, 4, 2, '#6eae5c');
    const cx = 8, cy = 6;
    for (const [dx, dy] of [[0, -4], [-4, 0], [4, 0], [0, 3], [-3, -3], [3, -3], [-3, 3], [3, 3]]) {
      px(ctx, cx + dx - 1, cy + dy - 1, 3, 3, c2, 1); dot(ctx, cx + dx, cy + dy, c1); dot(ctx, cx + dx - 1, cy + dy - 1, c3);
    }
    px(ctx, cx - 1, cy - 1, 3, 3, '#c98a3d'); dot(ctx, cx, cy, '#ffe9a8');
  } else if (shape === 'flower') {
    px(ctx, 7, 9, 2, 6, stem); px(ctx, 4, 13, 4, 2, '#6eae5c'); px(ctx, 9, 12, 4, 2, '#6eae5c');
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const x = Math.round(8 + Math.cos(a) * 3.2), y = Math.round(6 + Math.sin(a) * 3.2);
      px(ctx, x - 1, y - 1, 3, 3, c2); dot(ctx, x, y, c1); dot(ctx, x - 1, y - 1, c3);
    }
    px(ctx, 7, 5, 3, 3, c3); dot(ctx, 8, 6, '#f0b84c');
  } else if (shape === 'root') {
    px(ctx, 7, 2, 2, 5, stem); px(ctx, 4, 3, 3, 2, '#6eae5c'); px(ctx, 9, 2, 3, 2, '#6eae5c');
    px(ctx, 6, 6, 4, 2, dark); px(ctx, 5, 8, 6, 4, c2); px(ctx, 6, 12, 4, 3, c2); px(ctx, 7, 15, 2, 1, c2);
    px(ctx, 6, 8, 3, 4, c1); px(ctx, 7, 12, 2, 2, c1); dot(ctx, 6, 9, c3); dot(ctx, 9, 12, c3);
  } else if (shape === 'melon') {
    px(ctx, 2, 4, 12, 10, dark); px(ctx, 3, 5, 10, 8, c2); px(ctx, 4, 5, 8, 2, c1); px(ctx, 4, 9, 8, 3, c1);
    px(ctx, 7, 5, 1, 8, shade(c2, -0.25)); px(ctx, 10, 6, 1, 6, shade(c2, -0.25)); px(ctx, 5, 12, 6, 1, shade(c2, -0.3));
    dot(ctx, 6, 8, c3); dot(ctx, 9, 10, c3); dot(ctx, 5, 6, c3); dot(ctx, 11, 7, c3); dot(ctx, 12, 11, c3);
    px(ctx, 8, 2, 2, 3, '#4e8a45'); px(ctx, 10, 2, 2, 1, '#6eae5c');
  } else if (shape === 'mushroom') {
    px(ctx, 5, 3, 7, 2, dark); px(ctx, 4, 5, 9, 3, c2); px(ctx, 5, 4, 7, 2, c1);
    px(ctx, 7, 8, 3, 6, '#e8dcc0'); px(ctx, 7, 8, 1, 6, '#c9b898'); dot(ctx, 6, 6, c3); dot(ctx, 10, 5, c3); dot(ctx, 9, 7, c3);
    px(ctx, 7, 14, 4, 1, c2);
  }
  dot(ctx, 14, 3, c3);
}

function fishIcon(ctx, it) {
  const { c1, c2, c3 } = it.art, dark = '#1b1424';
  px(ctx, 3, 6, 9, 5, dark); px(ctx, 2, 7, 2, 3, dark);
  px(ctx, 4, 7, 8, 3, c1); px(ctx, 3, 8, 2, 1, c1); px(ctx, 4, 7, 6, 1, c3); px(ctx, 5, 10, 5, 1, c2);
  px(ctx, 12, 6, 3, 2, c2); px(ctx, 12, 9, 3, 2, c2); px(ctx, 13, 8, 1, 1, c2);
  px(ctx, 8, 5, 2, 2, c2); px(ctx, 8, 11, 2, 2, c2);
  dot(ctx, 5, 8, dark); dot(ctx, 6, 8, '#ffffff');
  px(ctx, 9, 7, 1, 2, shade(c1, -0.18)); dot(ctx, 11, 8, c3);
  if (it.relic) { dot(ctx, 6, 4, '#fff3b0'); dot(ctx, 9, 3, '#ffe08a'); dot(ctx, 13, 4, '#ffffff'); dot(ctx, 2, 5, '#ffe08a'); }
}

function oreIcon(ctx, it) {
  const { ore, c1, c2, c3 } = it.art;
  if (ore === 'stone') {
    px(ctx, 3, 5, 10, 8, '#3a3a48'); px(ctx, 2, 7, 12, 5, '#3a3a48');
    px(ctx, 4, 6, 8, 6, c1); px(ctx, 3, 8, 10, 3, c1); px(ctx, 4, 6, 6, 2, c3); px(ctx, 5, 10, 6, 2, c2);
    dot(ctx, 11, 12, c3);
  } else if (ore === 'vein') {
    px(ctx, 3, 5, 10, 8, '#3a3a48'); px(ctx, 2, 7, 12, 5, '#3a3a48');
    px(ctx, 4, 6, 8, 6, '#7d8393'); px(ctx, 3, 8, 10, 3, '#7d8393');
    px(ctx, 6, 4, 4, 4, c2); px(ctx, 7, 3, 2, 3, c1); dot(ctx, 8, 4, c3); px(ctx, 10, 8, 2, 3, c2); dot(ctx, 10, 9, c1); dot(ctx, 4, 10, c1);
  } else {
    px(ctx, 5, 2, 6, 2, '#2a2238'); px(ctx, 3, 4, 10, 8, '#2a2238'); px(ctx, 5, 12, 6, 2, '#2a2238');
    px(ctx, 6, 3, 4, 2, c1); px(ctx, 4, 5, 8, 6, c1); px(ctx, 6, 11, 4, 2, c1);
    px(ctx, 7, 4, 2, 5, c3); px(ctx, 5, 6, 2, 3, shade(c1, 0.25)); px(ctx, 9, 8, 2, 2, c2);
    dot(ctx, 13, 3, c3); dot(ctx, 2, 5, c3);
  }
}

function materialIcon(ctx, it) {
  const { mat, c1, c2 } = it.art, dark = '#1b1424';
  if (mat === 'wood') {
    px(ctx, 2, 8, 12, 4, dark); px(ctx, 2, 9, 12, 2, c2); px(ctx, 3, 9, 9, 1, c1);
    px(ctx, 4, 4, 8, 4, dark); px(ctx, 5, 5, 6, 2, c2); px(ctx, 6, 5, 4, 1, c1); px(ctx, 11, 5, 2, 2, '#d9b07a');
    dot(ctx, 12, 6, dark);
  } else if (mat === 'fiber') {
    px(ctx, 4, 12, 8, 2, dark);
    for (let i = 0; i < 4; i++) { px(ctx, 4 + i * 2, 3 + i, 1, 9 - i, c2); px(ctx, 5 + i * 2, 3 + i, 1, 8 - i, c1); }
    dot(ctx, 5, 3, c1); dot(ctx, 11, 3, c1);
  } else if (mat === 'sap') {
    px(ctx, 6, 3, 4, 2, dark); px(ctx, 5, 5, 6, 4, dark); px(ctx, 6, 9, 4, 4, dark);
    px(ctx, 6, 4, 3, 2, c1); px(ctx, 5, 6, 5, 3, c1); px(ctx, 6, 9, 4, 3, c1); dot(ctx, 6, 5, '#fff6c0'); dot(ctx, 7, 12, c2);
  } else if (mat === 'wool') {
    px(ctx, 4, 5, 8, 7, dark); px(ctx, 3, 7, 10, 4, dark);
    px(ctx, 5, 5, 6, 6, c1); px(ctx, 4, 7, 8, 3, c1); px(ctx, 6, 4, 4, 2, c1); px(ctx, 5, 9, 6, 2, c2);
    dot(ctx, 6, 6, '#ffffff'); dot(ctx, 10, 8, '#ffffff');
  } else if (mat === 'egg') {
    px(ctx, 6, 3, 4, 2, dark); px(ctx, 5, 5, 6, 7, dark); px(ctx, 6, 12, 4, 1, dark);
    px(ctx, 6, 4, 3, 2, c1); px(ctx, 5, 6, 5, 5, c1); px(ctx, 6, 10, 4, 2, c1); px(ctx, 10, 8, 1, 3, c2); dot(ctx, 6, 5, '#fff3d6');
    if (mat === 'egg') { dot(ctx, 7, 7, c2); dot(ctx, 8, 9, c2); }
  } else if (mat === 'scale') {
    px(ctx, 8, 2, 2, 2, dark); px(ctx, 5, 4, 6, 4, dark); px(ctx, 4, 8, 8, 4, dark); px(ctx, 6, 12, 4, 2, dark);
    px(ctx, 8, 3, 1, 2, c1); px(ctx, 6, 5, 4, 3, c1); px(ctx, 5, 8, 6, 3, c1); px(ctx, 6, 11, 4, 1, c1);
    px(ctx, 7, 5, 2, 4, c2); px(ctx, 6, 8, 4, 2, shade(c1, 0.3));
  } else if (mat === 'pearl') {
    px(ctx, 5, 4, 6, 8, dark); px(ctx, 4, 6, 8, 4, dark);
    px(ctx, 6, 4, 4, 1, c1); px(ctx, 5, 5, 6, 6, c1); px(ctx, 6, 11, 4, 1, c2);
    dot(ctx, 6, 5, '#ffffff'); dot(ctx, 7, 5, '#ffffff'); px(ctx, 9, 9, 2, 2, shade(c2, 0.2));
  } else if (mat === 'feed') {
    px(ctx, 4, 4, 8, 10, dark); px(ctx, 5, 5, 6, 8, c2); px(ctx, 5, 8, 6, 4, c1); px(ctx, 6, 6, 4, 2, '#e5d9a0');
    px(ctx, 6, 3, 4, 2, '#8a6a44'); dot(ctx, 7, 9, '#f0dfb0'); dot(ctx, 9, 11, '#f0dfb0'); px(ctx, 5, 12, 6, 1, shade(c2, -0.2));
  } else if (mat === 'bait') {
    px(ctx, 5, 5, 6, 8, dark); px(ctx, 6, 6, 4, 6, 'rgba(180,240,255,0.8)'); px(ctx, 6, 4, 4, 2, '#8a6a44');
    dot(ctx, 7, 8, '#ffffff'); dot(ctx, 9, 9, c1); dot(ctx, 8, 10, c1); dot(ctx, 6, 11, c2);
    dot(ctx, 12, 4, c1); dot(ctx, 3, 6, c1);
  } else if (mat === 'twig') {
    px(ctx, 3, 11, 9, 2, dark); px(ctx, 4, 11, 6, 1, c1); px(ctx, 9, 4, 2, 7, dark); px(ctx, 10, 5, 1, 5, c2); px(ctx, 8, 6, 2, 1, c1); px(ctx, 11, 3, 2, 2, c1);
  }
}

function foodIcon(ctx, it) {
  const { food, c1, c2 } = it.art, dark = '#1b1424';
  if (food === 'ration') {
    px(ctx, 3, 7, 10, 5, dark); px(ctx, 4, 7, 8, 4, c1); px(ctx, 4, 7, 8, 1, shade(c1, 0.35)); px(ctx, 5, 10, 7, 1, c2);
    px(ctx, 6, 4, 4, 3, dark); px(ctx, 7, 4, 2, 2, '#e8d9a8'); dot(ctx, 10, 6, c2);
  } else if (food === 'tea') {
    px(ctx, 4, 7, 8, 5, dark); px(ctx, 5, 8, 6, 3, c1); px(ctx, 5, 8, 6, 1, '#ffffff');
    px(ctx, 12, 8, 2, 3, dark); px(ctx, 12, 9, 1, 1, c1); px(ctx, 3, 12, 10, 1, '#b9a88a');
    px(ctx, 6, 3, 1, 3, '#d9f7ff'); px(ctx, 9, 2, 1, 4, '#d9f7ff'); px(ctx, 11, 4, 1, 2, '#d9f7ff');
    px(ctx, 7, 6, 4, 1, c2);
  } else if (food === 'tart') {
    px(ctx, 2, 7, 12, 4, dark); px(ctx, 3, 5, 10, 5, dark);
    px(ctx, 3, 6, 10, 4, '#e8c98a'); px(ctx, 4, 5, 8, 3, c1); px(ctx, 5, 6, 6, 1, shade(c1, 0.3));
    px(ctx, 2, 10, 12, 2, '#c99b5d'); px(ctx, 4, 12, 8, 1, '#a87a44');
    dot(ctx, 6, 7, c2); dot(ctx, 9, 6, c2); dot(ctx, 11, 8, '#fff3c0'); dot(ctx, 7, 9, '#f7e6c0');
  } else if (food === 'stew') {
    px(ctx, 3, 6, 10, 2, dark); px(ctx, 2, 8, 12, 5, dark); px(ctx, 3, 8, 10, 3, c2); px(ctx, 3, 8, 10, 1, c1);
    px(ctx, 4, 9, 2, 1, '#e8c98a'); px(ctx, 8, 10, 2, 1, '#8fdc9a'); px(ctx, 10, 9, 1, 1, '#ffd76e'); px(ctx, 6, 9, 1, 1, '#f2a6c2');
    px(ctx, 4, 13, 8, 1, '#8a6a44'); px(ctx, 5, 3, 1, 2, '#e0d6c0'); px(ctx, 9, 2, 1, 3, '#e0d6c0');
  }
}

function animalIcon(ctx, it) {
  const a = it.art, dark = '#1b1424';
  if (it.id === 'fluffalo') {
    px(ctx, 3, 5, 10, 8, dark); px(ctx, 4, 6, 8, 6, a.body); px(ctx, 6, 2, 4, 4, dark); px(ctx, 7, 3, 2, 3, a.accent);
    px(ctx, 2, 4, 3, 2, a.horn); px(ctx, 11, 4, 3, 2, a.horn); px(ctx, 5, 7, 2, 2, dark); px(ctx, 9, 7, 2, 2, dark);
    px(ctx, 6, 10, 4, 2, shade(a.body, -0.2)); dot(ctx, 7, 10, '#f2a6c2');
  } else if (it.id === 'emberhen') {
    px(ctx, 5, 5, 8, 7, dark); px(ctx, 6, 6, 6, 5, a.body); px(ctx, 4, 4, 4, 4, dark); px(ctx, 5, 4, 3, 3, a.body);
    px(ctx, 8, 2, 2, 2, a.horn); px(ctx, 3, 6, 2, 4, a.accent); px(ctx, 5, 4, 1, 1, dark); px(ctx, 11, 8, 2, 3, a.accent);
    px(ctx, 9, 13, 1, 2, '#e8a36b'); px(ctx, 6, 13, 1, 2, '#e8a36b');
  } else if (it.id === 'moonbun') {
    px(ctx, 4, 6, 8, 7, dark); px(ctx, 5, 7, 6, 5, a.body); px(ctx, 7, 8, 2, 2, dark); px(ctx, 6, 8, 1, 1, '#ffffff');
    px(ctx, 5, 1, 2, 6, dark); px(ctx, 5, 2, 1, 4, a.body); px(ctx, 9, 1, 2, 6, dark); px(ctx, 10, 2, 1, 4, a.body);
    dot(ctx, 5, 3, a.horn); px(ctx, 8, 10, 2, 2, a.accent); dot(ctx, 6, 12, '#ffffff');
  } else if (it.id === 'dracokit') {
    px(ctx, 4, 6, 8, 6, dark); px(ctx, 5, 7, 6, 4, a.body); px(ctx, 3, 3, 4, 4, dark); px(ctx, 4, 4, 3, 3, a.body);
    px(ctx, 8, 1, 3, 3, a.horn); px(ctx, 3, 8, 2, 3, a.accent); px(ctx, 11, 7, 2, 2, a.accent);
    px(ctx, 12, 5, 3, 2, a.body); px(ctx, 13, 6, 1, 2, a.accent); dot(ctx, 5, 5, '#ffe08a'); px(ctx, 6, 11, 4, 1, a.accent);
    dot(ctx, 13, 4, a.horn);
  } else if (it.id === 'starlotl') {
    px(ctx, 4, 6, 9, 5, dark); px(ctx, 5, 7, 7, 3, a.body); px(ctx, 2, 8, 3, 2, a.accent); px(ctx, 4, 4, 4, 3, a.body);
    px(ctx, 3, 2, 2, 3, a.horn); px(ctx, 6, 2, 2, 3, a.horn); dot(ctx, 5, 5, dark); px(ctx, 12, 7, 2, 2, a.accent);
    px(ctx, 5, 9, 6, 1, shade(a.body, -0.1));
  }
}

function relicIcon(ctx, it) {
  const r = it.art.relic, { c1, c2 } = it.art;
  if (r === 'dust') {
    for (const [x, y, s] of [[8, 6, 2], [4, 9, 1], [11, 10, 1], [6, 12, 1], [12, 4, 1], [3, 5, 1]]) {
      dot(ctx, x, y, '#ffffff'); dot(ctx, x + 1, y, c1); dot(ctx, x, y + 1, c1); if (s > 1) { dot(ctx, x + 2, y + 1, c2); dot(ctx, x + 1, y + 2, c2); }
    }
  } else if (r === 'shard') {
    px(ctx, 8, 1, 2, 3, '#1b1424'); px(ctx, 6, 4, 4, 3, '#1b1424'); px(ctx, 5, 7, 5, 5, '#1b1424'); px(ctx, 7, 12, 2, 2, '#1b1424');
    px(ctx, 8, 2, 1, 3, c1); px(ctx, 7, 4, 2, 4, c1); px(ctx, 6, 6, 2, 5, c1); px(ctx, 8, 9, 1, 3, c1);
    px(ctx, 9, 5, 1, 4, '#ffffff'); dot(ctx, 7, 4, '#ffffff'); px(ctx, 4, 6, 1, 1, c1); dot(ctx, 12, 4, c1);
  } else {
    px(ctx, 5, 2, 6, 2, '#1b1424'); px(ctx, 3, 4, 10, 8, '#1b1424'); px(ctx, 5, 12, 6, 2, '#1b1424');
    px(ctx, 6, 3, 4, 1, c1); px(ctx, 4, 5, 8, 6, c2); px(ctx, 6, 5, 4, 4, c1); px(ctx, 7, 4, 2, 2, '#fff6c0');
    px(ctx, 5, 11, 6, 1, c2); dot(ctx, 8, 8, '#fff3b0'); dot(ctx, 3, 3, c1); dot(ctx, 13, 3, c1);
  }
}

function drawItem(ctx, id) {
  const it = ITEMS[id];
  if (!it) return;
  // soft shadow
  const r = rng(hashStr(id));
  px(ctx, 2, 14, 12, 1, 'rgba(15,10,25,0.28)');
  const k = it.art?.kind;
  if (k === 'tool') toolIcon(ctx, it);
  else if (k === 'seed') seedIcon(ctx, it);
  else if (k === 'crop') cropIcon(ctx, it);
  else if (k === 'fish') fishIcon(ctx, it);
  else if (k === 'ore') oreIcon(ctx, it);
  else if (k === 'material') materialIcon(ctx, it);
  else if (k === 'food') foodIcon(ctx, it);
  else if (k === 'relic') relicIcon(ctx, it);
  else if (it.cat === 'animal') animalIcon(ctx, it);
  // a couple of stray sparkles for magic items
  if (it.cat === 'crop' || it.cat === 'fish' || it.relic || it.cat === 'relic') {
    dot(ctx, 13 + Math.floor(r() * 2), 2 + Math.floor(r() * 3), 'rgba(255,255,255,0.85)');
    dot(ctx, 2, 4 + Math.floor(r() * 5), 'rgba(255,255,255,0.45)');
  }
}

export function iconURL(id, scale = 3) {
  const key = id + ':' + scale;
  if (_icons.has(key)) return _icons.get(key);
  const { c, ctx } = makeCanvas(16 * scale, 16 * scale);
  drawItem(ctx, id);
  if (scale > 1) {
    // re-draw onto a scaled grid so pixels stay chunky
    const tmp = makeCanvas(16, 16);
    drawItem(tmp.ctx, id);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tmp.c, 0, 0, 16, 16, 0, 0, 16 * scale, 16 * scale);
  }
  const url = c.toDataURL();
  _icons.set(key, url);
  return url;
}

export function iconHTML(id, size = 32, cls = '') {
  return `<img class="pixel ${cls}" src="${iconURL(id)}" width="${size}" height="${size}" alt="" draggable="false">`;
}

// ---------------------------------------------------------------------------
// UI glyphs
// ---------------------------------------------------------------------------
const _glyphs = new Map();
export function glyphURL(name) {
  if (_glyphs.has(name)) return _glyphs.get(name);
  const { c, ctx } = makeCanvas(16, 16);
  const ink = '#1b1424';
  if (name === 'heart') {
    px(ctx, 3, 4, 3, 2, ink); px(ctx, 10, 4, 3, 2, ink); px(ctx, 2, 5, 12, 3, ink); px(ctx, 3, 8, 10, 2, ink); px(ctx, 4, 10, 8, 2, ink); px(ctx, 6, 12, 4, 1, ink);
    px(ctx, 4, 5, 2, 2, '#ff7b9c'); px(ctx, 10, 5, 2, 2, '#ff7b9c'); px(ctx, 3, 6, 10, 2, '#f2456e'); px(ctx, 4, 8, 8, 2, '#f2456e'); px(ctx, 6, 10, 4, 2, '#c92c53');
    dot(ctx, 4, 5, '#ffd0dd'); dot(ctx, 11, 9, '#ff9fb4');
  } else if (name === 'coin') {
    px(ctx, 4, 2, 8, 2, ink); px(ctx, 2, 4, 12, 8, ink); px(ctx, 4, 12, 8, 2, ink);
    px(ctx, 5, 3, 6, 2, '#ffe9a8'); px(ctx, 3, 5, 10, 6, '#f2c14e'); px(ctx, 4, 11, 8, 2, '#c9922f');
    px(ctx, 6, 5, 4, 5, '#c9922f'); px(ctx, 7, 6, 2, 3, '#ffe9a8'); dot(ctx, 5, 5, '#fff6cc');
  } else if (name === 'energy') {
    px(ctx, 7, 1, 4, 2, ink); px(ctx, 5, 3, 5, 3, ink); px(ctx, 4, 5, 5, 3, ink); px(ctx, 4, 8, 4, 3, ink); px(ctx, 4, 11, 2, 2, ink);
    px(ctx, 8, 2, 3, 2, '#ffe08a'); px(ctx, 6, 4, 4, 3, '#8fe3ff'); px(ctx, 5, 6, 3, 3, '#8fe3ff'); px(ctx, 5, 9, 2, 2, '#5fb8d8'); dot(ctx, 6, 4, '#ffffff');
  } else if (name === 'clock') {
    px(ctx, 3, 2, 10, 1, ink); px(ctx, 2, 3, 12, 10, ink); px(ctx, 3, 13, 10, 1, ink);
    px(ctx, 4, 3, 8, 10, '#f6ecd2'); px(ctx, 3, 4, 10, 8, '#d9cfae'); px(ctx, 4, 4, 8, 8, '#f6ecd2');
    px(ctx, 8, 5, 1, 4, '#3b2a27'); px(ctx, 8, 8, 3, 1, '#3b2a27'); dot(ctx, 8, 8, '#c9922f');
  } else if (name === 'sun') {
    px(ctx, 6, 6, 4, 4, '#ffe08a'); px(ctx, 5, 5, 6, 1, '#f2c14e'); px(ctx, 5, 10, 6, 1, '#f2c14e'); px(ctx, 5, 5, 1, 6, '#f2c14e'); px(ctx, 10, 5, 1, 6, '#f2c14e');
    px(ctx, 2, 7, 2, 2, '#ffe08a'); px(ctx, 12, 7, 2, 2, '#ffe08a'); px(ctx, 7, 2, 2, 2, '#ffe08a'); px(ctx, 7, 12, 2, 2, '#ffe08a');
    dot(ctx, 6, 6, '#fff6cc');
  } else if (name === 'rain') {
    px(ctx, 3, 4, 9, 3, '#8fa4c4'); px(ctx, 4, 3, 6, 2, '#b7c6dd'); px(ctx, 12, 4, 2, 2, '#8fa4c4');
    for (let i = 0; i < 4; i++) px(ctx, 3 + i * 3, 9, 1, 4, '#5fb8d8'); px(ctx, 2, 10, 1, 2, '#8fe3ff');
  } else if (name === 'storm') {
    px(ctx, 3, 3, 9, 3, '#6f7f9e'); px(ctx, 4, 2, 6, 2, '#9aabc4');
    px(ctx, 8, 7, 3, 2, '#ffe08a'); px(ctx, 6, 9, 4, 2, '#f2c14e'); px(ctx, 8, 11, 3, 2, '#ffe08a'); px(ctx, 3, 9, 1, 3, '#5fb8d8'); px(ctx, 12, 9, 1, 3, '#5fb8d8');
  } else if (name === 'snow') {
    for (const [x, y] of [[8, 2], [8, 12], [2, 7], [12, 7], [4, 3], [12, 3], [4, 11], [12, 11], [8, 7]]) { px(ctx, x - 1, y, 3, 1, '#d9f7ff'); px(ctx, x, y - 1, 1, 3, '#d9f7ff'); }
  } else if (name === 'star') {
    px(ctx, 7, 1, 2, 3, '#ffe08a'); px(ctx, 6, 4, 4, 2, '#ffe08a'); px(ctx, 2, 6, 12, 2, '#ffe08a'); px(ctx, 4, 8, 3, 3, '#f2c14e'); px(ctx, 9, 8, 3, 3, '#f2c14e'); px(ctx, 2, 11, 3, 3, '#e8c170'); px(ctx, 11, 11, 3, 3, '#e8c170');
    dot(ctx, 7, 4, '#ffffff');
  } else if (name === 'leaf' || name === 'blossom') {
    px(ctx, 3, 3, 4, 5, '#8fe38f'); px(ctx, 8, 2, 5, 6, '#5fb86a'); px(ctx, 2, 9, 6, 4, '#6fae5c'); px(ctx, 8, 9, 6, 4, '#4e8a45');
    px(ctx, 8, 5, 4, 1, '#d9f7c0');
  } else if (name === 'snow2') {
    for (const [x, y] of [[8, 2], [8, 12], [2, 7], [12, 7], [4, 3], [12, 3], [4, 11], [12, 11], [8, 7]]) px(ctx, x, y, 2, 2, '#ffffff');
  } else if (name === 'menu') {
    for (let i = 0; i < 3; i++) px(ctx, 3, 3 + i * 4, 10, 2, '#f6ecd2');
  } else if (name === 'bag') {
    px(ctx, 4, 5, 8, 9, ink); px(ctx, 5, 6, 6, 7, '#c99b5d'); px(ctx, 5, 6, 6, 2, '#e8c170'); px(ctx, 6, 3, 4, 2, '#8a6a44'); px(ctx, 7, 9, 2, 2, '#f6ecd2');
  } else if (name === 'book') {
    px(ctx, 2, 2, 12, 12, ink); px(ctx, 3, 3, 10, 10, '#d9c28a'); px(ctx, 4, 3, 1, 10, '#8a6a44'); px(ctx, 5, 5, 7, 1, '#8a6a44'); px(ctx, 5, 7, 6, 1, '#8a6a44'); px(ctx, 5, 9, 7, 1, '#8a6a44');
    px(ctx, 12, 3, 1, 10, '#b9a06a');
  } else if (name === 'map') {
    px(ctx, 2, 3, 12, 10, ink); px(ctx, 3, 4, 10, 8, '#d9d2a8'); px(ctx, 2, 4, 3, 8, '#b9c98a'); px(ctx, 10, 4, 3, 8, '#8fc2c9');
    px(ctx, 6, 5, 3, 1, '#a8483a'); px(ctx, 8, 6, 1, 3, '#a8483a'); dot(ctx, 7, 8, '#a8483a'); dot(ctx, 7, 10, '#e8c170');
  } else if (name === 'gear') {
    px(ctx, 6, 2, 4, 3, '#d9d2c0'); px(ctx, 3, 3, 3, 3, '#d9d2c0'); px(ctx, 10, 3, 3, 3, '#d9d2c0'); px(ctx, 2, 6, 3, 4, '#d9d2c0'); px(ctx, 11, 6, 3, 4, '#d9d2c0'); px(ctx, 4, 10, 3, 3, '#d9d2c0'); px(ctx, 9, 10, 3, 3, '#d9d2c0'); px(ctx, 6, 11, 4, 3, '#d9d2c0');
    px(ctx, 6, 6, 4, 4, '#3b2a27');
  } else if (name === 'close') {
    px(ctx, 4, 4, 2, 2, '#f6ecd2'); px(ctx, 10, 4, 2, 2, '#f6ecd2'); px(ctx, 5, 6, 6, 4, '#f6ecd2'); px(ctx, 4, 10, 2, 2, '#f6ecd2'); px(ctx, 10, 10, 2, 2, '#f6ecd2');
    px(ctx, 7, 7, 2, 2, 'rgba(0,0,0,0)');
  } else if (name === 'sound') {
    px(ctx, 3, 6, 3, 4, '#f6ecd2'); px(ctx, 6, 4, 2, 8, '#f6ecd2'); px(ctx, 8, 3, 1, 10, '#f6ecd2'); px(ctx, 11, 5, 1, 2, '#8fe3ff'); px(ctx, 12, 8, 1, 2, '#8fe3ff'); px(ctx, 10, 10, 3, 1, '#8fe3ff');
  } else if (name === 'mute') {
    px(ctx, 3, 6, 3, 4, '#f6ecd2'); px(ctx, 6, 4, 2, 8, '#f6ecd2'); px(ctx, 8, 3, 1, 10, '#f6ecd2'); px(ctx, 11, 5, 1, 1, '#e87878'); px(ctx, 12, 6, 1, 1, '#e87878'); px(ctx, 11, 9, 1, 1, '#e87878'); px(ctx, 12, 10, 1, 1, '#e87878'); px(ctx, 12, 7, 1, 2, '#e87878'); px(ctx, 11, 8, 1, 1, '#e87878');
  } else if (name === 'arrow') {
    px(ctx, 8, 3, 2, 8, '#f6ecd2'); px(ctx, 5, 8, 8, 2, '#f6ecd2'); px(ctx, 6, 10, 2, 2, '#f6ecd2'); px(ctx, 4, 12, 2, 2, '#f6ecd2');
  } else if (name === 'paw') {
    px(ctx, 5, 5, 6, 6, '#f6ecd2'); px(ctx, 3, 2, 2, 3, '#f6ecd2'); px(ctx, 7, 1, 2, 3, '#f6ecd2'); px(ctx, 11, 2, 2, 3, '#f6ecd2'); px(ctx, 3, 10, 3, 2, '#f6ecd2'); px(ctx, 10, 10, 3, 2, '#f6ecd2');
  } else if (name === 'hammer') {
    px(ctx, 3, 3, 7, 4, '#c9d6e6'); px(ctx, 8, 2, 3, 6, '#8d8d99'); px(ctx, 7, 7, 3, 3, '#7e5a3a'); px(ctx, 5, 9, 3, 3, '#7e5a3a'); px(ctx, 3, 11, 3, 3, '#7e5a3a');
  }
  const url = c.toDataURL();
  _glyphs.set(name, url);
  return url;
}
export function glyphHTML(name, size = 20, cls = '') {
  return `<img class="pixel ${cls}" src="${glyphURL(name)}" width="${size}" height="${size}" alt="" draggable="false">`;
}

// ---------------------------------------------------------------------------
// portraits
// ---------------------------------------------------------------------------
function drawPortrait(ctx, look, name, mood = 'normal') {
  const bg = look.bg || '#2b2140';
  px(ctx, 0, 0, 32, 32, bg);
  // dithered glow
  const r = rng(hashStr(name || 'player'));
  px(ctx, 6, 4, 20, 24, shade(bg, 0.08));
  px(ctx, 4, 10, 24, 14, shade(bg, 0.05));
  for (let i = 0; i < 40; i++) {
    dot(ctx, Math.floor(r() * 32), Math.floor(r() * 32), r() > 0.5 ? shade(bg, 0.16) : shade(bg, -0.1));
  }
  // stars in bg
  for (let i = 0; i < 5; i++) dot(ctx, Math.floor(r() * 30) + 1, Math.floor(r() * 10) + 1, '#ffe9a8');

  const skin = look.skin || '#e8c9a8';
  const skinD = shade(skin, -0.2), skinL = shade(skin, 0.25);
  const hair = look.hair || '#6a3f2a';
  const hairD = shade(hair, -0.28), hairL = shade(hair, 0.22);
  const outfit = look.outfit || '#4f8a63';
  const trim = look.trim || '#e8d9a8';
  const style = look.hairStyle || 'short';
  const small = look.small;

  // shoulders
  px(ctx, 3, 24, 26, 8, shade(outfit, -0.25));
  px(ctx, 4, 23, 24, 6, outfit);
  px(ctx, 4, 23, 24, 1, shade(outfit, 0.25));
  px(ctx, 12, 22, 8, 5, trim);
  px(ctx, 13, 23, 6, 3, shade(trim, -0.12));
  px(ctx, 4, 27, 24, 1, shade(outfit, -0.3));
  // neck
  px(ctx, 13, 19, 6, 4, skinD);
  px(ctx, 14, 19, 4, 3, skin);
  // head
  px(ctx, 9, 7, 14, 13, shade(skin, -0.28));
  px(ctx, 10, 8, 12, 11, skin);
  px(ctx, 10, 8, 12, 3, skinL);
  px(ctx, 20, 10, 2, 7, skinD);
  // ears
  px(ctx, 8, 12, 2, 3, skinD); px(ctx, 22, 12, 2, 3, skinD);
  if (look.ears === 'elf') { px(ctx, 7, 11, 2, 4, skin); px(ctx, 23, 11, 2, 4, skin); dot(ctx, 7, 11, skinL); }
  if (look.ears === 'gnome') { px(ctx, 7, 12, 2, 3, skin); px(ctx, 23, 12, 2, 3, skin); }
  // hair cap
  px(ctx, 9, 4, 14, 5, hairD);
  px(ctx, 10, 4, 12, 4, hair);
  px(ctx, 10, 4, 8, 2, hairL);
  px(ctx, 9, 8, 2, 3, hairD); px(ctx, 21, 8, 2, 3, hairD);
  if (style === 'long') {
    px(ctx, 8, 8, 2, 14, hairD); px(ctx, 22, 8, 2, 14, hairD);
    px(ctx, 9, 9, 1, 12, hair); px(ctx, 22, 9, 1, 12, hair);
    px(ctx, 8, 18, 2, 2, hair); px(ctx, 22, 18, 2, 2, hair);
  } else if (style === 'wild') {
    px(ctx, 8, 9, 2, 8, hair); px(ctx, 22, 9, 2, 8, hair);
    for (let i = 0; i < 5; i++) { dot(ctx, 8 + i * 4, 3 - (i % 2), hair); dot(ctx, 9 + i * 4, 2 - (i % 2), hairL); }
  } else if (style === 'bun') {
    px(ctx, 13, 1, 6, 4, hairD); px(ctx, 14, 1, 4, 3, hair); dot(ctx, 15, 1, hairL);
    px(ctx, 8, 8, 2, 4, hair); px(ctx, 22, 8, 2, 4, hair);
  } else if (style === 'short') {
    px(ctx, 9, 8, 2, 2, hair); px(ctx, 21, 8, 2, 2, hair);
  }
  // hat
  if (look.hat === 'witch') {
    px(ctx, 5, 7, 22, 2, hairD); px(ctx, 6, 7, 20, 1, '#3b2a44');
    px(ctx, 9, 1, 3, 6, '#3b2a44'); px(ctx, 12, 1, 3, 3, '#3b2a44'); px(ctx, 14, 2, 2, 2, '#3b2a44');
    dot(ctx, 10, 3, '#bda6e8'); px(ctx, 7, 8, 2, 1, '#bda6e8');
  } else if (look.hat === 'hood') {
    px(ctx, 7, 3, 18, 8, shade(outfit, -0.2)); px(ctx, 8, 4, 16, 4, shade(outfit, 0.1));
    px(ctx, 7, 8, 2, 8, shade(outfit, -0.2)); px(ctx, 23, 8, 2, 8, shade(outfit, -0.2));
    px(ctx, 9, 4, 14, 2, trim);
  }
  // face details
  const eyeY = 13;
  px(ctx, 12, eyeY, 2, 2, '#2a1e30'); px(ctx, 18, eyeY, 2, 2, '#2a1e30');
  dot(ctx, 12, eyeY, '#ffffff'); dot(ctx, 18, eyeY, '#ffffff');
  px(ctx, 11, eyeY - 2, 3, 1, hairD); px(ctx, 18, eyeY - 2, 3, 1, hairD);
  dot(ctx, 15, 15, skinD); dot(ctx, 16, 15, skinD);
  if (mood === 'happy') { px(ctx, 14, 17, 4, 1, '#a8483a'); dot(ctx, 13, 16, skinD); dot(ctx, 18, 16, skinD); }
  else { px(ctx, 15, 17, 2, 1, '#a8483a'); }
  px(ctx, 11, 16, 2, 1, shade('#f2a6c2', 0.15));
  px(ctx, 19, 16, 2, 1, shade('#f2a6c2', 0.15));
  // beard
  if (look.beard) { px(ctx, 11, 18, 10, 2, hairD); px(ctx, 13, 20, 6, 1, hair); px(ctx, 14, 18, 4, 1, hair); }
  // accessory
  if (look.accessory === 'flower') { px(ctx, 23, 8, 2, 2, '#f2a6c2'); dot(ctx, 23, 8, '#ffe1e7'); dot(ctx, 24, 10, '#8fe38f'); }
  if (look.accessory === 'lute') { px(ctx, 2, 25, 2, 6, '#8a5a2a'); px(ctx, 1, 27, 4, 4, '#c99b5d'); px(ctx, 2, 28, 2, 2, '#5e3a28'); }
  if (look.accessory === 'glasses') { px(ctx, 11, 12, 4, 3, '#e8c170'); px(ctx, 17, 12, 4, 3, '#e8c170'); px(ctx, 15, 13, 2, 1, '#e8c170'); dot(ctx, 12, 13, '#ffffff'); dot(ctx, 18, 13, '#ffffff'); }
  // outline hints
  px(ctx, 9, 6, 14, 1, 'rgba(20,12,30,0.25)');
}

export function portraitURL(look, name = 'player', size = 3) {
  const key = (name || 'p') + JSON.stringify(look) + ':' + size;
  if (_portraits.has(key)) return _portraits.get(key);
  const { c, ctx } = makeCanvas(32 * size, 32 * size);
  const tmp = makeCanvas(32, 32);
  drawPortrait(tmp.ctx, look, name);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(tmp.c, 0, 0, 32, 32, 0, 0, 32 * size, 32 * size);
  const url = c.toDataURL();
  _portraits.set(key, url);
  return url;
}

// ---------------------------------------------------------------------------
// world textures
// ---------------------------------------------------------------------------
const _tex = new Map();
export function textureCanvas(name) {
  if (_tex.has(name)) return _tex.get(name);
  const size = name === 'water' ? 32 : 16;
  const { c, ctx } = makeCanvas(size, size);
  const r = rng(hashStr(name));
  if (name === 'grass') {
    px(ctx, 0, 0, 16, 16, '#6fae5c');
    for (let i = 0; i < 26; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1 + Math.floor(r() * 2), 1, r() > 0.5 ? '#649f52' : '#7cba66');
    for (let i = 0; i < 7; i++) { const x = Math.floor(r() * 15), y = Math.floor(r() * 14); px(ctx, x, y, 1, 2, '#4e8a45'); dot(ctx, x + 1, y + 1, '#8bc773'); }
    if (r() > 0.5) dot(ctx, 3, 12, '#f2e8a0');
  } else if (name === 'grassDark') {
    px(ctx, 0, 0, 16, 16, '#5a9a50');
    for (let i = 0; i < 22; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#4e8a45' : '#6aab5b');
  } else if (name === 'snow') {
    px(ctx, 0, 0, 16, 16, '#dfeef5');
    for (let i = 0; i < 20; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#cfe3ee' : '#f4fbff');
    for (let i = 0; i < 5; i++) { const x = Math.floor(r() * 15), y = Math.floor(r() * 14); px(ctx, x, y, 1, 2, '#b8d4e4'); dot(ctx, x + 1, y + 1, '#ffffff'); }
  } else if (name === 'path') {
    px(ctx, 0, 0, 16, 16, '#b09268');
    for (let i = 0; i < 28; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#9d7f58' : '#c4a67a');
    for (let i = 0; i < 5; i++) { const x = Math.floor(r() * 13), y = Math.floor(r() * 13); px(ctx, x, y, 2, 1, '#8d6d4a'); }
    px(ctx, 3, 3, 2, 1, '#d4b88c'); px(ctx, 11, 9, 2, 1, '#d4b88c');
  } else if (name === 'soil') {
    px(ctx, 0, 0, 16, 16, '#7c5137');
    for (let i = 0; i < 22; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#6b442d' : '#8d5f41');
    for (let y = 2; y < 16; y += 5) px(ctx, 0, y, 16, 1, '#68412b');
  } else if (name === 'tilled') {
    px(ctx, 0, 0, 16, 16, '#5e3a28');
    for (let y = 2; y < 16; y += 4) { px(ctx, 0, y, 16, 2, '#71482f'); px(ctx, 0, y + 2, 16, 1, '#4d2f22'); }
    for (let i = 0; i < 14; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, '#8a5a3b');
  } else if (name === 'wetsoil') {
    px(ctx, 0, 0, 16, 16, '#45301f');
    for (let y = 2; y < 16; y += 4) { px(ctx, 0, y, 16, 2, '#543a26'); px(ctx, 0, y + 2, 16, 1, '#39281a'); }
    for (let i = 0; i < 8; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, '#6b4a31');
  } else if (name === 'water') {
    px(ctx, 0, 0, 32, 32, '#4fa8c9');
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) {
      const v = Math.sin((x + y * 0.6) * 0.55) + Math.cos((x * 0.4 - y) * 0.4);
      if (v > 1.25) dot(ctx, x, y, '#6fc9e0');
      else if (v < -1.1) dot(ctx, x, y, '#3a8cac');
    }
    px(ctx, 4, 6, 5, 1, '#9fe3ef'); px(ctx, 18, 20, 4, 1, '#9fe3ef'); px(ctx, 9, 25, 3, 1, '#8fd6e8'); px(ctx, 24, 9, 3, 1, '#8fd6e8');
    dot(ctx, 12, 14, '#c9f7ff'); dot(ctx, 27, 27, '#c9f7ff');
  } else if (name === 'stone') {
    px(ctx, 0, 0, 16, 16, '#8d8d99');
    for (let y = 0; y < 16; y += 5) px(ctx, 0, y, 16, 1, '#767684');
    for (let i = 0; i < 10; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 2, 1, r() > 0.5 ? '#9d9da8' : '#7c7c8a');
    px(ctx, 3, 7, 2, 2, '#a9a9b4');
  } else if (name === 'cave') {
    px(ctx, 0, 0, 16, 16, '#3a3448');
    for (let i = 0; i < 18; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#453e55' : '#2c2838');
    for (let i = 0; i < 3; i++) { const x = Math.floor(r() * 13), y = Math.floor(r() * 13); px(ctx, x, y, 2, 1, '#564d6a'); }
  } else if (name === 'planks') {
    px(ctx, 0, 0, 16, 16, '#9a6f45');
    for (let y = 0; y < 16; y += 4) { px(ctx, 0, y, 16, 1, '#6f4e31'); px(ctx, 0, y + 1, 16, 1, '#b5875a'); }
    px(ctx, 7, 0, 1, 16, '#7d5a3a'); px(ctx, 0, 8, 16, 1, '#7d5a3a');
    for (let i = 0; i < 6; i++) dot(ctx, Math.floor(r() * 16), Math.floor(r() * 16), '#8a653f');
  } else if (name === 'plaster') {
    px(ctx, 0, 0, 16, 16, '#e8dcc0');
    for (let i = 0; i < 18; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#ddd0b2' : '#f2e8d0');
    px(ctx, 1, 1, 2, 1, '#d9ccae');
  } else if (name === 'roof') {
    px(ctx, 0, 0, 16, 16, '#b7564e');
    for (let y = 0; y < 16; y += 4) { px(ctx, 0, y, 16, 1, '#8a3b3a'); px(ctx, 0, y + 1, 16, 1, '#c96a5d'); }
    for (let y = 0; y < 16; y += 4) for (let x = (y / 4) % 2 ? 0 : 4; x < 16; x += 8) px(ctx, x, y + 1, 1, 3, '#a34a45');
  } else if (name === 'roofBlue') {
    px(ctx, 0, 0, 16, 16, '#4a5f8a');
    for (let y = 0; y < 16; y += 4) { px(ctx, 0, y, 16, 1, '#354567'); px(ctx, 0, y + 1, 16, 1, '#6079a8'); }
    for (let y = 0; y < 16; y += 4) for (let x = (y / 4) % 2 ? 0 : 4; x < 16; x += 8) px(ctx, x, y + 1, 1, 3, '#43567e');
  } else if (name === 'leaves') {
    px(ctx, 0, 0, 16, 16, '#4e8a45');
    for (let i = 0; i < 30; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1 + Math.floor(r() * 2), 1, r() > 0.5 ? '#3f7a3a' : '#64a557');
    for (let i = 0; i < 8; i++) dot(ctx, Math.floor(r() * 16), Math.floor(r() * 16), '#8bc773');
  } else if (name === 'leavesGold') {
    px(ctx, 0, 0, 16, 16, '#b8863f');
    for (let i = 0; i < 30; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#d9a84c' : '#8a632f');
    for (let i = 0; i < 6; i++) dot(ctx, Math.floor(r() * 16), Math.floor(r() * 16), '#f2d178');
  } else if (name === 'snowleaves') {
    px(ctx, 0, 0, 16, 16, '#cfe3ee');
    for (let i = 0; i < 20; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 1, r() > 0.5 ? '#b8d4e4' : '#eef8ff');
  } else if (name === 'magicleaf') {
    px(ctx, 0, 0, 16, 16, '#5a4a8a');
    for (let i = 0; i < 24; i++) px(ctx, Math.floor(r() * 16), Math.floor(r() * 16), 1, 2, r() > 0.5 ? '#6f5aa8' : '#3f3266');
    for (let i = 0; i < 6; i++) dot(ctx, Math.floor(r() * 16), Math.floor(r() * 16), '#8fe3ff');
  } else if (name === 'metalgrid') {
    px(ctx, 0, 0, 16, 16, '#5a5568');
    px(ctx, 0, 0, 16, 1, '#7a7488'); px(ctx, 0, 15, 16, 1, '#3a3548'); px(ctx, 0, 0, 1, 16, '#7a7488'); px(ctx, 15, 0, 1, 16, '#3a3548');
  } else if (name === 'crystal') {
    px(ctx, 0, 0, 16, 16, '#8fe3ff');
    px(ctx, 3, 3, 10, 10, '#bdf2ff'); px(ctx, 5, 1, 6, 14, '#9fe3ff'); px(ctx, 1, 5, 14, 6, '#9fe3ff');
    px(ctx, 5, 5, 5, 5, '#ffffff');
  } else if (name === 'starfield') {
    px(ctx, 0, 0, 16, 16, '#141026');
    for (let i = 0; i < 12; i++) dot(ctx, Math.floor(r() * 16), Math.floor(r() * 16), r() > 0.7 ? '#ffe9a8' : '#8fa4c4');
  } else {
    px(ctx, 0, 0, 16, 16, '#ff00ff');
  }
  _tex.set(name, c);
  return c;
}

export function portraitSVG(look) { return portraitURL(look); }
