// ---------------------------------------------------------------------------
// Save slots — local storage, three independent farms
// ---------------------------------------------------------------------------
const KEY = 'starfall_vale_saves_v1';
export const SLOT_COUNT = 3;
export const SAVE_VERSION = 1;

function readAll() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!d || typeof d !== 'object') return {};
    return d;
  } catch { return {}; }
}
function writeAll(d) {
  try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch (e) { console.error(e); return false; }
}

export function listSlots() {
  const all = readAll();
  return Array.from({ length: SLOT_COUNT }, (_, i) => {
    const s = all[i];
    if (!s || !s.state) return { slot: i, empty: true };
    const st = s.state;
    return {
      slot: i, empty: false,
      name: st.player?.name || 'Farmer',
      farmName: st.player?.farmName || 'Starfall Farm',
      season: st.calendar?.season || 'spring',
      day: st.calendar?.day || 1,
      year: st.calendar?.year || 1,
      money: st.player?.money || 0,
      playtime: st.stats?.playtime || 0,
      hearts: st.stats?.hearts || 0,
      savedAt: s.savedAt,
      portrait: st.player?.look || null,
      endingSeen: Boolean(st.flags?.endingSeen),
      counts: { days: st.stats?.daysPlayed || 0, crops: st.stats?.cropsHarvested || 0, fish: st.stats?.fishCaught || 0 },
    };
  });
}

export function slotExists(i) {
  const all = readAll();
  return Boolean(all[i]?.state);
}

export function saveGame(state, slot) {
  const all = readAll();
  all[slot] = {
    savedAt: Date.now(), version: SAVE_VERSION,
    state: JSON.parse(JSON.stringify(state)),
  };
  return writeAll(all);
}

export function loadGame(slot) {
  const all = readAll();
  const entry = all[slot];
  if (!entry || !entry.state) return null;
  return entry.state;
}

export function deleteSave(slot) {
  const all = readAll();
  delete all[slot];
  return writeAll(all);
}

export function hasAnySave() {
  return listSlots().some(s => !s.empty);
}
