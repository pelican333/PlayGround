// ---------------------------------------------------------------------------
// STARFALL VALE — interface controller
// ---------------------------------------------------------------------------
import { iconURL, glyphURL, iconHTML, glyphHTML, portraitURL } from './art.js';
import { ITEMS, SEASON_LABEL, SEASON_ICON } from './data.js';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const imgCache = new Map();
function imageFor(url) {
  if (imgCache.has(url)) return imgCache.get(url);
  const img = new Image();
  img.src = url;
  imgCache.set(url, img);
  return img;
}

const WEATHER_LABEL = { clear: 'Clear skies', rain: 'Soft rain', storm: 'Starstorm', snow: 'Snowfall' };
const WEATHER_ICON = { clear: 'sun', rain: 'rain', storm: 'storm', snow: 'snow' };

function fmtTime(minutes) {
  let h = Math.floor(minutes / 60), m = Math.floor(minutes % 60);
  const ampm = h >= 24 || h < 12 ? 'AM' : 'PM';
  let hh = h % 24; hh = hh % 12; if (hh === 0) hh = 12;
  return `${hh}:${String(m).padStart(2, '0')} ${ampm}`;
}
export function formatPlaytime(sec) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export class UI {
  constructor(audio) {
    this.audio = audio;
    this.modalOpen = false;
    this.dialogueOpen = false;
    this.bondOpen = false;
    this.fishingOpen = false;
    this.onModalClose = null;
    this.onDialogueClose = null;
    this.typeTimer = null;
    this.typeDone = true;
    this.dialogueFull = '';
    this.fishingHandlers = null;
    this.bondAnim = null;
    this.endingAnim = null;
    this.locationTimer = null;
    this.handlers = {};
    this._decorate();
    this._bindGeneric();
    window.addEventListener('resize', () => this._updateTouchClass());
    this._updateTouchClass();
  }

  _decorate() {
    $('#boot-star').style.backgroundImage = `url(${glyphURL('star')})`;
    $('#title-emblem').style.backgroundImage = `url(${glyphURL('star')})`;
    for (const el of $$('[data-glyph]')) el.innerHTML = glyphHTML(el.dataset.glyph, 20);
    for (const el of $$('[data-glyph-img]')) el.src = glyphURL(el.dataset.glyphImg);
    $('#clock-icon').src = glyphURL('clock');
    $('#season-icon').src = glyphURL('blossom');
    $('#music-icon').src = glyphURL('sound');
  }
  _updateTouchClass() {
    const touch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window || window.innerWidth < 900;
    document.body.classList.toggle('touch', touch);
  }
  _bindGeneric() {
    $('#modal-close').addEventListener('click', () => this.closeModal());
    $('.modal-back').addEventListener('click', () => this.closeModal());
    $('#dialogue-text').addEventListener('click', () => this._finishTyping());
    $('#fish-hold').addEventListener('pointerdown', (e) => { e.preventDefault(); this.fishingHandlers?.down(); });
    $('#fish-hold').addEventListener('pointerup', (e) => { e.preventDefault(); this.fishingHandlers?.up(); });
    $('#fish-hold').addEventListener('pointerleave', (e) => { this.fishingHandlers?.up(); });
    $('#fish-hold').addEventListener('contextmenu', (e) => e.preventDefault());
    $('#bond-next').addEventListener('click', () => this._advanceBond());
  }
  _updateTouchClass() {
    const touch = navigator.maxTouchPoints > 0 || 'ontouchstart' in window || window.innerWidth < 900;
    document.body.classList.toggle('touch', touch);
    document.body.classList.toggle('mobile-ui', window.innerWidth < 900);
  }

  setHandlers(h) { this.handlers = h; }

  // -------------------------------------------------------------------------
  // screens & loading
  // -------------------------------------------------------------------------
  screen(id) {
    for (const s of ['boot', 'title', 'slots', 'create', 'intro', 'game']) {
      const el = document.getElementById(s);
      if (el) el.classList.toggle('hidden', s !== id);
    }
    if (id !== 'game') {
      this.closeModal(); this.closeDialogue(); this.hideBond(); this.hideFishing(); this.hideEnding(); this.setPrompt(null);
    }
  }
  loading(p, text) {
    $('#load-fill').style.width = `${Math.round(Math.max(0, Math.min(1, p)) * 100)}%`;
    if (text) $('#load-text').textContent = text;
  }
  fade(on, ms = 550) {
    const f = $('#fade');
    if (on) { f.style.transition = `opacity ${ms}ms ease`; f.classList.add('on'); }
    else { f.style.transition = `opacity ${ms}ms ease`; f.classList.remove('on'); }
  }

  // -------------------------------------------------------------------------
  // title & slots
  // -------------------------------------------------------------------------
  renderSlots(slots, mode, handlers) {
    const list = $('#slots-list');
    list.innerHTML = '';
    $('#slots-title').textContent = mode === 'new' ? 'CHOOSE A FARMSTEAD' : 'LOAD A FARM';
    $('#slots-note').textContent = mode === 'new'
      ? 'Choose an empty farm to begin a new story. Busy farms must be deleted first.'
      : 'Three farms can live in the vale at once. Your progress saves every morning.';
    slots.forEach((s) => {
      const card = document.createElement('div');
      card.className = 'slot-card pixel-panel' + (s.empty ? ' empty' : '');
      if (s.empty) {
        card.innerHTML = `
          <div class="slot-portrait">${glyphHTML('star', 34)}</div>
          <div class="slot-main"><h3>Empty Farmstead</h3><p>Untilled soil, waiting for a name.</p></div>
          <div class="slot-actions"><button class="pixel-btn primary" data-act="new">Create Farm</button></div>`;
      } else {
        const hearts = s.hearts || 0;
        card.innerHTML = `
          <div class="slot-portrait"><img src="${portraitURL(s.portrait || {}, s.name)}" alt=""></div>
          <div class="slot-main">
            <span class="slot-farm">${escapeHTML(s.farmName)}</span>
            <h3>${escapeHTML(s.name)} · Year ${s.year}, ${SEASON_LABEL[s.season]} ${s.day}</h3>
            <p>${formatPlaytime(s.playtime)} played · ${s.money.toLocaleString()}g earned · ${s.counts.days} days</p>
            <div class="slot-badges">
              <span class="badge">${s.counts.crops} crops</span>
              <span class="badge">${s.counts.fish} fish</span>
              <span class="badge">${hearts} hearts</span>
              ${s.endingSeen ? '<span class="badge gold">Shrine awakened</span>' : ''}
            </div>
          </div>
          <div class="slot-actions">
            <button class="pixel-btn primary" data-act="${mode === 'new' ? 'overwrite' : 'load'}">${mode === 'new' ? 'Overwrite' : 'Load'}</button>
            <button class="pixel-btn" data-act="delete">Delete</button>
          </div>`;
      }
      card.querySelector('[data-act]')?.addEventListener('click', (e) => {
        const act = e.currentTarget.dataset.act;
        this.audio.play('select');
        if (act === 'new') handlers.new(s.slot);
        if (act === 'overwrite') handlers.overwrite(s.slot);
        if (act === 'load') handlers.load(s.slot);
        if (act === 'delete') handlers.delete(s.slot);
      });
      list.appendChild(card);
    });
  }
  setContinueLabel(text, enabled = true) {
    $('#continue-label').textContent = text;
    $('#btn-continue').disabled = !enabled;
  }

  // -------------------------------------------------------------------------
  // HUD
  // -------------------------------------------------------------------------
  updateHUD(d) {
    if (d.date) $('#date-text').textContent = d.date;
    if (d.season) $('#season-icon').src = glyphURL(SEASON_ICON[d.season]);
    if (d.weather) { $('#weather-text').textContent = WEATHER_LABEL[d.weather] || 'Clear skies'; }
    if (d.weather) $('#weather-text').dataset.icon = d.weather;
    if (d.time !== undefined) $('#time-text').textContent = typeof d.time === 'string' ? d.time : fmtTime(d.time);
    if (d.money !== undefined) $('#money-text').textContent = d.money.toLocaleString();
    if (d.energy !== undefined) {
      const pct = Math.max(0, Math.min(100, d.energy / Math.max(1, d.maxEnergy) * 100));
      $('#energy-fill').style.width = pct + '%';
      $('#energy-text').textContent = Math.round(d.energy);
    }
    if (d.health !== undefined) {
      const pct = Math.max(0, Math.min(100, d.health / Math.max(1, d.maxHealth) * 100));
      $('#health-fill').style.width = pct + '%';
      $('#health-text').textContent = Math.round(d.health);
    }
    $('#health-bar').classList.toggle('hidden', !d.inMine);
    if (d.quest) {
      $('#quest-track').style.display = '';
      $('#quest-title').textContent = d.quest.title || 'Journal';
      $('#quest-desc').textContent = d.quest.desc || '';
      $('#quest-fill').style.width = `${Math.round((d.quest.progress || 0) * 100)}%`;
    } else $('#quest-track').style.display = 'none';
    $('#festival-note').classList.toggle('hidden', !d.festival);
    if (d.festival) $('#festival-note').textContent = d.festival;
    this.updateMusicIcon(d.musicOn !== false);
  }
  updateMusicIcon(on) { $('#music-icon').src = glyphURL(on ? 'sound' : 'mute'); }
  setPrompt(p) {
    const el = $('#prompt');
    if (!p) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    $('#prompt-icon').src = p.icon ? (ITEMS[p.icon] ? iconURL(p.icon) : glyphURL(p.icon)) : glyphURL('star');
    $('#prompt-label').textContent = p.label || '';
    $('#prompt-key').textContent = document.body.classList.contains('touch') ? 'TAP ACTION' : (p.key || 'E / SPACE');
  }
  setActionLabel(text) { $('#action-label').textContent = text || 'USE'; }
  setHotbar(inventory, selected, maxSlots, onSelect) {
    const bar = $('#hotbar');
    bar.innerHTML = '';
    for (let i = 0; i < Math.min(12, maxSlots); i++) {
      const it = inventory[i];
      const b = document.createElement('button');
      b.className = 'slot' + (i === selected ? ' active' : '') + (!it ? ' empty' : '');
      b.dataset.index = i;
      b.innerHTML = `${it ? iconHTML(it.id, 40) : ''}<span class="key">${i === 9 ? 0 : i < 9 ? i + 1 : ''}</span>${it && it.qty > 1 ? `<span class="count">${it.qty}</span>` : ''}`;
      b.addEventListener('click', () => { this.audio.play('click'); onSelect(i); });
      bar.appendChild(b);
    }
    const it = inventory[selected];
    $('#hotbar-name').textContent = it ? ITEMS[it.id]?.name || it.id : 'Empty';
    $('#hotbar-hint').textContent = it ? (ITEMS[it.id]?.cat === 'seed' ? 'PLANT' : ITEMS[it.id]?.cat === 'tool' ? 'USE' : 'SELECTED') : '';
  }
  updateHotbarSelection(inventory, selected) {
    $$('#hotbar .slot').forEach((el, i) => el.classList.toggle('active', i === selected));
    const it = inventory[selected];
    $('#hotbar-name').textContent = it ? ITEMS[it.id]?.name || it.id : 'Empty';
  }
  banner(name, sub = '') {
    const b = $('#location-banner');
    $('#location-name').textContent = name;
    $('#location-sub').textContent = sub;
    b.classList.add('on');
    clearTimeout(this.locationTimer);
    this.locationTimer = setTimeout(() => b.classList.remove('on'), 3200);
  }
  toast(text, icon = 'star', ms = 3300) {
    const t = document.createElement('div');
    t.className = 'toast';
    const src = ITEMS[icon] ? iconURL(icon) : glyphURL(icon);
    t.innerHTML = `<img src="${src}" alt=""><span>${escapeHTML(text)}</span>`;
    const holder = $('#toasts');
    holder.appendChild(t);
    while (holder.children.length > 4) holder.firstElementChild.remove();
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, ms);
  }

  // -------------------------------------------------------------------------
  // modal
  // -------------------------------------------------------------------------
  openModal(title, body, foot = '') {
    this.modalOpen = true;
    $('#modal-title').textContent = title;
    $('#modal-body').innerHTML = body;
    $('#modal-foot').innerHTML = foot;
    $('#modal-layer').classList.remove('hidden');
    this.audio.play('click');
    return $('#modal-body');
  }
  setModal(title, body, foot = '') {
    if (!this.modalOpen) return this.openModal(title, body, foot);
    $('#modal-title').textContent = title;
    $('#modal-body').innerHTML = body;
    $('#modal-foot').innerHTML = foot;
    return $('#modal-body');
  }
  closeModal() {
    if (!this.modalOpen) return;
    this.modalOpen = false;
    $('#modal-layer').classList.add('hidden');
    this.onModalClose?.();
  }
  confirm(title, text, onYes) {
    $('#confirm-title').textContent = title;
    $('#confirm-text').textContent = text;
    $('#confirm-layer').classList.remove('hidden');
    const yes = $('#confirm-yes'), no = $('#confirm-no');
    const done = (ok) => {
      $('#confirm-layer').classList.add('hidden');
      yes.onclick = null; no.onclick = null;
      if (ok) onYes?.();
    };
    yes.onclick = () => { this.audio.play('select'); done(true); };
    no.onclick = () => { this.audio.play('click'); done(false); };
  }

  // -------------------------------------------------------------------------
  // dialogue
  // -------------------------------------------------------------------------
  openDialogue({ name, title, portrait, text, hearts = 0, maxHearts = 10, options = [], onClose = null }) {
    this.dialogueOpen = true;
    this.onDialogueClose = onClose;
    $('#dialogue-layer').classList.remove('hidden');
    $('#dialogue-name').textContent = name;
    $('#dialogue-title').textContent = title || '';
    $('#dialogue-portrait').src = portrait;
    $('#dialogue-hearts').innerHTML = this.heartsHTML(hearts, maxHearts);
    this._setDialogueText(text);
    const box = $('#dialogue-buttons');
    box.innerHTML = '';
    options.forEach((o) => {
      const b = document.createElement('button');
      b.className = 'pixel-btn' + (o.primary ? ' primary' : '');
      b.innerHTML = `${o.icon ? (ITEMS[o.icon] ? iconHTML(o.icon, 18) : glyphHTML(o.icon, 16)) : ''}${escapeHTML(o.label)}`;
      if (o.disabled) b.disabled = true;
      b.addEventListener('click', () => {
        this._finishTyping();
        this.audio.play('select');
        if (o.onClick) o.onClick();
        else this.closeDialogue();
      });
      box.appendChild(b);
    });
    this.audio.play('heart');
  }
  _setDialogueText(text) {
    this.dialogueFull = text || '';
    const el = $('#dialogue-text');
    el.textContent = '';
    this.typeDone = false;
    clearInterval(this.typeTimer);
    let i = 0;
    this.typeTimer = setInterval(() => {
      i += 2;
      el.textContent = this.dialogueFull.slice(0, i);
      if (i >= this.dialogueFull.length) this._finishTyping();
    }, 18);
    $('#dialogue-portrait').animate(
      [{ filter: 'brightness(1.35)' }, { filter: 'brightness(1)' }], { duration: 260, iterations: 1 }
    );
  }
  _finishTyping() {
    if (this.typeDone) return;
    this.typeDone = true;
    clearInterval(this.typeTimer);
    $('#dialogue-text').textContent = this.dialogueFull;
  }
  closeDialogue() {
    if (!this.dialogueOpen) return;
    this.dialogueOpen = false;
    clearInterval(this.typeTimer);
    $('#dialogue-layer').classList.add('hidden');
    const cb = this.onDialogueClose;
    this.onDialogueClose = null;
    cb?.();
  }
  heartsHTML(n, max = 10) {
    let h = '';
    const full = Math.floor(n);
    for (let i = 0; i < max; i++) h += `<img class="pixel ${i < full ? '' : 'empty-heart'}" src="${glyphURL('heart')}" alt="">`;
    return h;
  }

  // -------------------------------------------------------------------------
  // bond cinematic
  // -------------------------------------------------------------------------
  openBond({ name, portrait, heartCount, lines, onDone }) {
    this.bondOpen = true;
    this.bondLines = lines;
    this.bondIndex = 0;
    this.bondDone = onDone;
    $('#bond-layer').classList.remove('hidden');
    $('#bond-portrait').src = portrait;
    $('#bond-name').textContent = name;
    $('#bond-heart-row').innerHTML = this.heartsHTML(heartCount, 10);
    $('#bond-text').textContent = lines[0];
    const b = $('#bond-next');
    b.textContent = lines.length > 1 ? 'Continue' : 'Keep this moment';
    this.audio.play('bond');
    this.startBondHearts();
  }
  _advanceBond() {
    this.bondIndex++;
    if (this.bondIndex >= this.bondLines.length) {
      this.hideBond();
      this.bondDone?.();
      return;
    }
    $('#bond-text').textContent = this.bondLines[this.bondIndex];
    $('#bond-next').textContent = this.bondIndex >= this.bondLines.length - 1 ? 'Keep this moment' : 'Continue';
    this.audio.play('heart');
  }
  hideBond() {
    if (!this.bondOpen && !this.bondAnim) return;
    this.bondOpen = false;
    cancelAnimationFrame(this.bondAnim);
    this.bondAnim = null;
    $('#bond-layer').classList.add('hidden');
  }
  startBondHearts() {
    cancelAnimationFrame(this.bondAnim);
    const canvas = $('#bond-hearts');
    const ctx = canvas.getContext('2d');
    const hearts = [];
    const hImg = imageFor(glyphURL('heart'));
    for (let i = 0; i < 34; i++) {
      hearts.push({
        x: Math.random() * canvas.width, y: canvas.height + Math.random() * 300,
        s: 8 + Math.random() * 18, vy: .3 + Math.random() * .8, vx: (Math.random() - .5) * .25,
        a: .3 + Math.random() * .7, ph: Math.random() * 6,
      });
    }
    const draw = (t) => {
      if (!this.bondOpen) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const tt = performance.now() / 1000;
      for (const h of hearts) {
        h.y -= h.vy; h.x += Math.sin(tt + h.ph) * .3 + h.vx;
        if (h.y < -30) { h.y = canvas.height + 20; h.x = Math.random() * canvas.width; }
        ctx.globalAlpha = h.a * (.65 + Math.sin(tt * 2 + h.ph) * .35);
        if (hImg.complete && hImg.naturalWidth) ctx.drawImage(hImg, h.x, h.y, h.s, h.s);
      }
      ctx.globalAlpha = 1;
      this.bondAnim = requestAnimationFrame(draw);
    };
    this.bondAnim = requestAnimationFrame(draw);
  }

  // -------------------------------------------------------------------------
  // fishing
  // -------------------------------------------------------------------------
  openFishing(handlers) {
    this.fishingOpen = true;
    this.fishingHandlers = handlers || {};
    $('#fishing-layer').classList.remove('hidden');
    $('#fish-catch').classList.add('hidden');
    $('#fish-hold').classList.remove('hidden');
    this.fishCatchShown = false;
  }
  hideFishing() {
    this.fishingOpen = false;
    this.fishingHandlers = null;
    $('#fishing-layer').classList.add('hidden');
  }
  showFishCatch(id, size) {
    const it = ITEMS[id];
    if (!it) return;
    $('#fish-catch').classList.remove('hidden');
    $('#fish-img').src = iconURL(id);
    $('#fish-name').textContent = it.name;
    $('#fish-size').textContent = size || '';
    $('#fish-hold').classList.add('hidden');
    this.fishCatchShown = true;
  }
  drawFishing(mg) {
    const canvas = $('#fish-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.imageSmoothingEnabled = false;
    // sky/water gradient
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#142744'); g.addColorStop(.45, '#123a52'); g.addColorStop(1, '#0a2233');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // pixel stars / moon
    ctx.fillStyle = 'rgba(255,243,192,0.65)';
    for (let i = 0; i < 26; i++) {
      const x = (i * 73) % W, y = (i * 41) % 120;
      const tw = Math.sin(performance.now() / 500 + i) > 0 ? 2 : 1;
      ctx.fillRect(x, y, tw, tw);
    }
    ctx.fillStyle = '#f6ecd2'; ctx.beginPath(); ctx.arc(340, 74, 30, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#123a52'; ctx.beginPath(); ctx.arc(352, 66, 27, 0, Math.PI * 2); ctx.fill();
    // water waves
    ctx.fillStyle = 'rgba(143,227,255,0.12)';
    for (let i = 0; i < 14; i++) {
      const y = 140 + i * 24;
      for (let x = 0; x < W; x += 24) ctx.fillRect(x + ((i % 2) * 12), y + Math.sin(performance.now() / 900 + i + x) * 2, 14, 2);
    }
    // kelp
    ctx.fillStyle = '#2f7f6a';
    for (let i = 0; i < 5; i++) {
      const x = 30 + i * 82;
      for (let k = 0; k < 7; k++) ctx.fillRect(x + Math.sin(performance.now() / 1200 + k + i) * 6, H - 40 - k * 24, 6, 22);
    }
    // meter frame
    const mx = 150, my = 100, mw = 120, mh = 300;
    ctx.fillStyle = '#0b1420'; ctx.fillRect(mx - 8, my - 8, mw + 16, mh + 16);
    ctx.fillStyle = '#1d3a4a'; ctx.fillRect(mx, my, mw, mh);
    ctx.strokeStyle = '#e8c170'; ctx.lineWidth = 3; ctx.strokeRect(mx - 8, my - 8, mw + 16, mh + 16);
    // zone
    const zy = my + (1 - mg.zone) * (mh - 54);
    ctx.fillStyle = mg.zoneActive ? 'rgba(143,227,255,0.45)' : 'rgba(143,227,255,0.25)';
    ctx.fillRect(mx + 6, zy, mw - 12, 54);
    ctx.strokeStyle = '#8fe3ff'; ctx.strokeRect(mx + 6, zy, mw - 12, 54);
    // fish silhouette
    const fishY = my + (1 - mg.fish) * (mh - 30);
    const fi = imageFor(iconURL(mg.fishId || 'silverminnow'));
    if (fi.complete && fi.naturalWidth) {
      ctx.globalAlpha = .9;
      ctx.drawImage(fi, mx + 28, fishY - 14, 28, 28);
      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = '#8fe3ff'; ctx.fillRect(mx + 34, fishY - 8, 22, 14);
    }
    // progress bar
    ctx.fillStyle = '#0b1420'; ctx.fillRect(mx, my + mh + 22, mw, 16);
    ctx.fillStyle = '#e8c170'; ctx.fillRect(mx, my + mh + 22, mw * Math.max(0, Math.min(1, mg.progress)), 16);
    ctx.strokeStyle = '#e8c170'; ctx.strokeRect(mx, my + mh + 22, mw, 16);
    ctx.fillStyle = '#f6ecd2'; ctx.font = 'bold 15px "Courier New", monospace'; ctx.textAlign = 'center';
    ctx.fillText('CATCH', mx + mw / 2, my + mh + 56);
    // labels
    ctx.textAlign = 'left';
    ctx.fillStyle = '#bcaecb'; ctx.font = 'bold 14px "Courier New", monospace';
    ctx.fillText(mg.weatherLabel || 'The lake is listening...', 24, 46);
    if (mg.bite) {
      ctx.fillStyle = '#ffe08a'; ctx.font = 'bold 20px "Courier New", monospace'; ctx.textAlign = 'center';
      ctx.fillText('A BITE!', W / 2, 60);
      ctx.textAlign = 'left';
    }
    // bubbles
    ctx.fillStyle = 'rgba(143,227,255,0.4)';
    for (let i = 0; i < 8; i++) {
      const y = (H - (performance.now() / 30 + i * 90) % 340);
      ctx.fillRect(40 + (i * 47) % 330, y, 3, 3);
    }
  }

  // -------------------------------------------------------------------------
  // ending
  // -------------------------------------------------------------------------
  openEnding({ title, text, stats, onContinue, onTitle }) {
    this.closeModal();
    $('#ending-layer').classList.remove('hidden');
    $('#ending-title').textContent = title;
    $('#ending-text').textContent = text;
    $('#ending-stats').innerHTML = stats.map(s => `<div class="stat"><strong>${escapeHTML(s.label)}</strong>${escapeHTML(String(s.value))}</div>`).join('');
    $('#ending-continue').onclick = () => { this.hideEnding(); onContinue?.(); };
    $('#ending-title-btn').onclick = () => { this.hideEnding(); onTitle?.(); };
    this.audio.play('star');
    this.startEnding();
  }
  hideEnding() {
    cancelAnimationFrame(this.endingAnim);
    this.endingAnim = null;
    $('#ending-layer').classList.add('hidden');
  }
  startEnding() {
    cancelAnimationFrame(this.endingAnim);
    const canvas = $('#ending-canvas');
    const ctx = canvas.getContext('2d');
    const stars = [];
    for (let i = 0; i < 160; i++) stars.push({ x: Math.random(), y: Math.random(), s: Math.random() * 2 + .5, ph: Math.random() * 6, sp: .2 + Math.random() * 1.2 });
    const shoot = [];
    const draw = () => {
      const W = canvas.width = Math.max(640, Math.min(1400, window.innerWidth));
      const H = canvas.height = Math.max(360, Math.min(900, window.innerHeight));
      const t = performance.now() / 1000;
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#0a081c'); g.addColorStop(.55, '#171233'); g.addColorStop(1, '#0e1a2a');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      // shrine hill silhouette
      ctx.fillStyle = '#0d0a18';
      ctx.beginPath(); ctx.moveTo(W * .18, H); ctx.quadraticCurveTo(W * .42, H * .52, W * .62, H); ctx.fill();
      // shrine silhouette
      ctx.fillStyle = '#171226';
      const sx = W * .46, sy = H * .57;
      ctx.fillRect(sx - 70, sy + 60, 140, 22);
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * Math.PI * 2;
        ctx.fillRect(sx + Math.cos(a) * 56 - 5, sy + 30 + Math.sin(a) * 18, 10, 42);
        ctx.fillStyle = `rgba(255,232,168,${.5 + Math.sin(t * 2 + i) * .35})`;
        ctx.fillRect(sx + Math.cos(a) * 56 - 4, sy + 20 + Math.sin(a) * 18, 8, 8);
        ctx.fillStyle = '#171226';
      }
      // crystal
      const pulse = .5 + Math.sin(t * 2) * .25;
      ctx.fillStyle = `rgba(143,227,255,${.35 + pulse * .3})`;
      ctx.fillRect(sx - 5, sy - 34, 10, 34);
      ctx.fillRect(sx - 15, sy - 20, 30, 8);
      // stars
      for (const s of stars) {
        const x = (s.x * W + t * s.sp * 5) % W;
        const alpha = .35 + Math.sin(t * 1.7 + s.ph) * .35;
        ctx.fillStyle = `rgba(255,243,192,${alpha})`;
        ctx.fillRect(x, s.y * H * .72, s.s, s.s);
      }
      // shooting stars
      if (Math.random() < .012) shoot.push({ x: Math.random() * W * .7, y: Math.random() * H * .25, life: 1 });
      for (let i = shoot.length - 1; i >= 0; i--) {
        const s = shoot[i]; s.x += 7; s.y += 3; s.life -= .02;
        ctx.strokeStyle = `rgba(255,243,192,${Math.max(0, s.life)})`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - 30, s.y - 12); ctx.stroke();
        if (s.life <= 0) shoot.splice(i, 1);
      }
      // drifting light motes
      for (let i = 0; i < 30; i++) {
        const x = (i * 137 + Math.sin(t + i) * 40) % W;
        const y = (H - ((t * 12 + i * 53) % (H * .9)));
        ctx.fillStyle = i % 3 ? 'rgba(143,227,255,0.25)' : 'rgba(255,232,168,0.35)';
        ctx.fillRect(x, y, 2, 2);
      }
      this.endingAnim = requestAnimationFrame(draw);
    };
    this.endingAnim = requestAnimationFrame(draw);
  }

  // -------------------------------------------------------------------------
  // map
  // -------------------------------------------------------------------------
  openMap(player, locations, season) {
    const canvas = document.createElement('canvas');
    canvas.width = 760; canvas.height = 620;
    canvas.id = 'map-canvas';
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    // parchment background
    ctx.fillStyle = '#171226'; ctx.fillRect(0, 0, 760, 620);
    const W = 620, H = 620, ox = 70, oy = 0;
    const px = (x) => ox + (x + 48) / 96 * W;
    const pz = (z) => oy + (z + 48) / 96 * H;
    // grass
    const seasonCol = { spring: '#3d6b43', summer: '#456f3c', fall: '#6d5c35', winter: '#45616e' }[season] || '#3d6b43';
    ctx.fillStyle = seasonCol; ctx.fillRect(ox, 0, W, H);
    // subtle grid
    ctx.strokeStyle = 'rgba(255,255,255,0.035)';
    for (let i = 0; i <= 12; i++) { ctx.beginPath(); ctx.moveTo(ox + i / 12 * W, 0); ctx.lineTo(ox + i / 12 * W, H); ctx.stroke(); }
    for (let i = 0; i <= 12; i++) { ctx.beginPath(); ctx.moveTo(ox, i / 12 * H); ctx.lineTo(ox + W, i / 12 * H); ctx.stroke(); }
    // lake
    ctx.fillStyle = '#2f7f9e'; ctx.beginPath();
    ctx.ellipse(px(8), pz(36), W * .15, H * .1, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3f97b6'; ctx.beginPath();
    ctx.ellipse(px(8), pz(36), W * .13, H * .085, 0, 0, Math.PI * 2); ctx.fill();
    // forest
    ctx.fillStyle = '#274d33';
    for (let i = 0; i < 90; i++) {
      const x = 27 + (i * 37) % 17, z = 5 + (i * 53) % 34;
      ctx.fillRect(px(x), pz(z), 4, 4);
    }
    // paths
    ctx.strokeStyle = '#b09268'; ctx.lineWidth = 5; ctx.lineCap = 'square';
    const paths = [
      [-33, 1.2, -4, 1.2], [-4, 1.2, -4, -10], [-4, -10, 10, -10], [26, -18, 37, -18],
      [37, -18, 37, -13], [37, -13, 40, -13], [40, -13, 40, -26], [-4, -18, -34, -18],
      [-34, -18, -38, -18], [-38, -18, -38, -26], [8, -10, 8, 24], [26, -18, 33, -18],
      [33, -18, 33, 12], [33, 12, 36, 12], [36, 12, 36, 28], [-24.5, 1.2, -24.5, 14], [-24.5, 14, -27.2, 14],
    ];
    for (const [x1, z1, x2, z2] of paths) { ctx.beginPath(); ctx.moveTo(px(x1), pz(z1)); ctx.lineTo(px(x2), pz(z2)); ctx.stroke(); }
    // plaza
    ctx.fillStyle = '#8d8d99'; ctx.beginPath(); ctx.ellipse(px(13), pz(-18), W * .13, H * .085, 0, 0, Math.PI * 2); ctx.fill();
    // farm plots
    ctx.fillStyle = '#7c5137';
    ctx.fillRect(px(-23.5), pz(2.5), W * 6 / 96, H * 6 / 96);
    // buildings
    const buildings = [
      [26, -28, 'Market'], [0, -31, 'Apothecary'], [-5, -15, 'Tavern'], [37, -16, 'Forge'],
      [-30, -2, 'Home'], [-33, 13, 'Barn'], [36, 26, 'Hut'], [16, -36, 'Cottage'], [-16, -36, 'Cottage'],
    ];
    for (const [x, z, name] of buildings) {
      ctx.fillStyle = '#c9836f'; ctx.fillRect(px(x) - 8, pz(z) - 6, 16, 12);
      ctx.fillStyle = '#3b2a27'; ctx.fillRect(px(x) - 6, pz(z) - 4, 12, 8);
      ctx.fillStyle = '#f2e8d8'; ctx.font = 'bold 10px "Courier New", monospace'; ctx.textAlign = 'center';
      ctx.fillText(name, px(x), pz(z) + 22);
    }
    // lake label
    ctx.fillStyle = '#c9f7ff'; ctx.font = 'bold 11px "Courier New", monospace'; ctx.textAlign = 'center';
    ctx.fillText('STARFALL LAKE', px(8), pz(36) + 5);
    // forest label
    ctx.fillStyle = '#9fd6a8'; ctx.font = 'bold 11px "Courier New", monospace';
    ctx.fillText('WHISPERWOOD', px(35), pz(17));
    // markers
    for (const loc of locations) {
      const x = px(loc.x), y = pz(loc.z);
      const ico = imageFor(ITEMS[loc.icon] ? iconURL(loc.icon) : glyphURL(loc.icon));
      ctx.fillStyle = 'rgba(20,14,32,.75)'; ctx.fillRect(x - 11, y - 22, 22, 22);
      ctx.strokeStyle = '#e8c170'; ctx.strokeRect(x - 11, y - 22, 22, 22);
      if (ico.complete && ico.naturalWidth) ctx.drawImage(ico, x - 9, y - 20, 18, 18);
      ctx.fillStyle = '#f6ecd2'; ctx.font = 'bold 10px "Courier New", monospace'; ctx.textAlign = 'center';
      ctx.fillText(loc.name.toUpperCase(), x, y - 27);
    }
    // player
    const ppx = px(player.x), ppy = pz(player.z);
    ctx.fillStyle = '#ffe08a'; ctx.beginPath(); ctx.arc(ppx, ppy, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#8fe3ff'; ctx.beginPath(); ctx.arc(ppx, ppy, 4, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.beginPath(); ctx.arc(ppx, ppy, 12, 0, Math.PI * 2); ctx.stroke();
    // compass
    ctx.fillStyle = '#e8c170'; ctx.font = 'bold 14px "Courier New", monospace'; ctx.textAlign = 'center';
    ctx.fillText('N', 716, 30); ctx.beginPath(); ctx.moveTo(716, 38); ctx.lineTo(708, 58); ctx.lineTo(724, 58); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#f6ecd2'; ctx.font = 'bold 16px "Courier New", monospace'; ctx.fillText('STARFALL VALE', 380, 606);
    const wrap = this.openModal('THE VALE', `<div id="map-wrap"></div>`);
    wrap.querySelector('#map-wrap').appendChild(canvas);
    wrap.insertAdjacentHTML('beforeend', `<div class="map-legend">
      <span>${glyphHTML('star', 18)} you are here</span>
      <span>${iconHTML('pickaxe', 18)} mine</span>
      <span>${iconHTML('fishingrod', 18)} lake</span>
      <span>${iconHTML('bag', 18)} village</span>
    </div>`);
  }
}

export function escapeHTML(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
