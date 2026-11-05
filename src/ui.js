import * as THREE from 'three';

const $ = (id) => document.getElementById(id);

export const CROPS = {
  moon: { name: 'Moonpetal', icon: '🌙', color: '#bfe9ff', sell: 58, grow: 2, seedName: 'Moonpetal Seed' },
  sun: { name: 'Sunberry', icon: '☀️', color: '#ffd166', sell: 126, grow: 3, seedName: 'Sunberry Seed' },
  star: { name: 'Starcorn', icon: '⭐', color: '#ffe9a3', sell: 275, grow: 4, seedName: 'Starcorn Seed' },
};

export class UI {
  constructor(game) {
    this.game = game;
    this.toastEl = $('toasts');
    this.floatEl = $('floats');
    this.modal = $('modal-root');
    this.hintTimer = null;
    this.modalKind = null;
    this.questTab = 'quests';
    this.shopTab = 'buy';
    this.bind();
    this.buildSeedSlots();
  }

  bind() {
    const tap = (id, fn) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener('click', (e) => { e.preventDefault(); this.game.audio.init(); this.game.audio.sfx('click'); fn(e); });
    };
    tap('btn-menu', () => this.game.openMenu());
    tap('btn-action', () => this.game.doAction());
    tap('btn-attack', () => this.game.doAttack());
    tap('btn-new', () => this.game.startNew());
    tap('btn-continue', () => this.game.continueGame());
    tap('btn-how', () => this.openHelp());
    tap('btn-attack', () => this.game.doAttack());

    // joystick
    const joy = $('joystick');
    const stick = $('stick');
    let active = false, pid = null;
    const center = () => {
      const r = joy.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, rad: r.width * 0.33 };
    };
    const move = (e) => {
      if (!active || e.pointerId !== pid) return;
      const c = center();
      let dx = e.clientX - c.x, dy = e.clientY - c.y;
      const len = Math.hypot(dx, dy);
      const max = c.rad;
      if (len > max) { dx = (dx / len) * max; dy = (dy / len) * max; }
      stick.style.transform = `translate(${dx}px, ${dy}px)`;
      this.game.joystick.x = dx / max;
      this.game.joystick.y = dy / max;
    };
    joy.addEventListener('pointerdown', (e) => {
      active = true; pid = e.pointerId;
      joy.setPointerCapture(e.pointerId);
      this.game.audio.init();
      move(e);
    });
    joy.addEventListener('pointermove', move);
    const end = (e) => {
      if (e.pointerId !== pid) return;
      active = false; pid = null;
      stick.style.transform = 'translate(0px, 0px)';
      this.game.joystick.x = 0; this.game.joystick.y = 0;
    };
    joy.addEventListener('pointerup', end);
    joy.addEventListener('pointercancel', end);
    joy.addEventListener('lostpointercapture', end);

    // modal close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal && this.modalKind !== 'win' && this.modalKind !== 'summary') this.closeModal();
    });
    this.modal.addEventListener('click', (e) => {
      const close = e.target.closest('[data-close]');
      if (close) this.closeModal();
    });
    this.modal.addEventListener('click', (e) => {
      const tab = e.target.closest('[data-tab]');
      if (tab) {
        this.shopTab = tab.dataset.tab;
        this.renderShop();
      }
      const qtab = e.target.closest('[data-qtab]');
      if (qtab) {
        this.questTab = qtab.dataset.qtab;
        this.renderMenu();
      }
    });
  }

  buildSeedSlots() {
    const wrap = $('seed-slots');
    wrap.innerHTML = '';
    const order = ['moon', 'sun', 'star'];
    order.forEach((type, i) => {
      const c = CROPS[type];
      const el = document.createElement('button');
      el.className = 'slot';
      el.dataset.seed = type;
      el.innerHTML = `<span class="key">${i + 1}</span><span class="seed">${c.icon}</span><span class="qty">0</span><span class="nm">${c.name}</span>`;
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.game.audio.init();
        this.game.selectSeed(type);
      });
      wrap.appendChild(el);
    });
  }

  // ---------------- HUD ----------------
  setHudVisible(v) {
    const hud = $('hud');
    hud.classList.toggle('hidden', !v);
    hud.setAttribute('aria-hidden', v ? 'false' : 'true');
  }

  hideTitle() {
    const t = $('screen-title');
    t.classList.add('gone');
    setTimeout(() => t.classList.add('hidden'), 900);
  }

  showTitle(hasSave) {
    const t = $('screen-title');
    t.classList.remove('hidden', 'gone');
    $('btn-continue').classList.toggle('hidden', !hasSave);
    $('btn-new').textContent = hasSave ? 'New Journey' : 'Begin Anew';
  }

  update(state) {
    const s = state;
    $('hud-date').textContent = `${s.season} · Day ${s.day}`;
    $('hud-weather').textContent = s.weather === 'rain' ? '🌧 Rain' : s.hours > 19 || s.hours < 6 ? '🌙 Clear' : '☀ Clear';
    const h = Math.floor(s.hours) % 24;
    const m = Math.floor((s.hours % 1) * 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    $('hud-clock').textContent = `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
    $('daytrack').style.width = `${Math.min(100, Math.max(0, ((s.hours - 6) / 18) * 100))}%`;
    $('hud-gold').textContent = Math.floor(s.gold);
    $('hud-essence').textContent = Math.floor(s.essence);
    $('hud-wood').textContent = Math.floor(s.wood);
    $('hud-stone').textContent = Math.floor(s.stone);
    $('bar-health').style.width = `${Math.max(0, (s.health / s.maxHealth) * 100)}%`;
    $('bar-energy').style.width = `${Math.max(0, (s.energy / s.maxEnergy) * 100)}%`;
    $('bar-health').parentElement.classList.toggle('low', s.health / s.maxHealth < 0.3);
    $('bar-energy').parentElement.classList.toggle('low', s.energy / s.maxEnergy < 0.25);
    this.updateSeeds(s);
    this.updateQuestChip(s);
    // compass: point at wizard tower
    const dx = 15.5 - this.game.player.pos.x, dz = 6.5 - this.game.player.pos.z;
    const ang = Math.atan2(dx, dz) - this.game.cameraYaw;
    const needle = $('needle');
    if (needle) needle.style.transform = `rotate(${ang}rad)`;
  }

  updateSeeds(s) {
    document.querySelectorAll('.slot').forEach((el) => {
      const type = el.dataset.seed;
      const qty = s.seeds[type] || 0;
      el.querySelector('.qty').textContent = qty;
      el.classList.toggle('sel', s.selectedSeed === type);
      el.classList.toggle('empty', qty <= 0);
    });
  }

  updateQuestChip(s) {
    const q = this.game.currentQuest();
    if (!q) {
      $('qt-title').textContent = 'The Vale Thrives';
      $('qt-desc').textContent = 'Free play — grow, explore, and prosper.';
      return;
    }
    $('qt-title').textContent = q.name;
    $('qt-desc').textContent = q.desc;
  }

  setPrompt(text, key = 'E') {
    const p = $('prompt');
    if (!text) { p.classList.add('hidden'); return; }
    p.classList.remove('hidden');
    $('prompt-key').textContent = key;
    $('prompt-text').textContent = text;
  }

  setAction(icon, label, enabled) {
    $('action-icon').textContent = icon;
    $('action-label').textContent = label;
    $('btn-action').classList.toggle('disabled', !enabled);
  }

  showHint(text, ms = 4200) {
    const h = $('hint');
    h.textContent = text;
    h.classList.add('show');
    clearTimeout(this.hintTimer);
    this.hintTimer = setTimeout(() => h.classList.remove('show'), ms);
  }

  // ---------------- toasts / floats ----------------
  toast(text, kind = '', icon = '') {
    const el = document.createElement('div');
    el.className = `toast ${kind}`;
    el.innerHTML = `${icon ? `<span class="ti">${icon}</span>` : ''}<span>${text}</span>`;
    this.toastEl.appendChild(el);
    setTimeout(() => {
      el.classList.add('out');
      setTimeout(() => el.remove(), 380);
    }, 3000);
    while (this.toastEl.children.length > 4) this.toastEl.firstElementChild.remove();
  }

  float(text, worldPos, cls = '') {
    const v = worldPos.clone().project(this.game.camera);
    if (v.z > 1) return;
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    const el = document.createElement('div');
    el.className = `float ${cls}`;
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    this.floatEl.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // ---------------- modal core ----------------
  openSheet(html, kind, extraClass = '') {
    this.modalKind = kind;
    this.modal.classList.remove('hidden');
    this.modal.innerHTML = `<div class="sheet ${extraClass}" role="dialog" aria-modal="true">${html}</div>`;
    this.game.setPaused(true);
  }

  closeModal() {
    this.modal.classList.add('hidden');
    this.modal.innerHTML = '';
    this.modalKind = null;
    this.game.setPaused(false);
    this.game.audio.sfx('click');
  }

  header(icon, title, subtitle) {
    return `<div class="sheet-head">
      <div class="sigil">${icon}</div>
      <div><h2>${title}</h2><p>${subtitle}</p></div>
      <button class="close-x" data-close aria-label="Close">✕</button>
    </div>`;
  }

  // ---------------- shop ----------------
  openShop() {
    this.shopTab = 'buy';
    this.renderShop();
    this.game.audio.sfx('magic');
  }

  renderShop() {
    const g = this.game;
    const s = g.state;
    const items = g.shopItems();
    let body;
    if (this.shopTab === 'buy') {
      body = `<div class="shop-grid">${items.map((it, idx) => {
        const afford = s.gold >= it.price && it.available !== false;
        return `<div class="shop-item">
          <div class="si-ico">${it.icon}</div>
          <div class="si-main">
            <div class="si-name">${it.name}</div>
            <div class="si-desc">${it.desc}</div>
          </div>
          <button class="si-buy" data-buy="${idx}" ${afford ? '' : 'disabled'}>${it.locked ? 'Locked' : it.available === false ? 'Sold out' : `${it.price} ◈`}</button>
        </div>`;
      }).join('')}</div>`;
    } else {
      const rows = Object.entries(CROPS).map(([type, c]) => {
        const n = s.crops[type] || 0;
        return `<div class="sell-row">
          <span class="si-ico" style="width:32px;height:32px;font-size:18px;display:grid;place-items:center">${c.icon}</span>
          <span class="n">${c.name}</span><span class="c">× ${n}</span><span class="v">${c.sell} ◈ each</span>
        </div>`;
      }).join('');
      const mats = `<div class="sell-row"><span class="n">🪵 Wood</span><span class="c">× ${s.wood}</span><span class="v">4 ◈ each</span></div>
        <div class="sell-row"><span class="n">🪨 Stone</span><span class="c">× ${s.stone}</span><span class="v">6 ◈ each</span></div>`;
      body = `${rows}${mats}
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn ghost" style="min-width:0;flex:1;padding:9px;font-size:12.5px" data-sell="crops">Sell All Crops</button>
          <button class="btn ghost" style="min-width:0;flex:1;padding:9px;font-size:12.5px" data-sell="mats">Sell Materials</button>
        </div>
        <p style="font-size:10.5px;color:#8fa0b1;margin:10px 2px 0;line-height:1.5">Zephyr pays a fair price. Moonpetal 58◈ · Sunberry 126◈ · Starcorn 275◈.</p>`;
    }
    const html = `${this.header('🪄', "Zephyr's Arcane Goods", 'Seeds, charms & curious things')}
      <div class="sheet-body">
        <div class="tabs">
          <button class="tab ${this.shopTab === 'buy' ? 'active' : ''}" data-tab="buy">Buy</button>
          <button class="tab ${this.shopTab === 'sell' ? 'active' : ''}" data-tab="sell">Sell</button>
        </div>
        ${body}
      </div>
      <div class="sheet-foot">
        <span style="font-size:11px;color:#9fb0c2;letter-spacing:.06em">YOUR PURSE</span>
        <div class="purse"><span class="gold"><span class="gem">◈</span> <b>${Math.floor(s.gold)}</b></span><span class="essence"><span class="star">✦</span> <b>${s.essence}</b></span></div>
      </div>`;
    this.openSheet(html, 'shop');

    this.modal.querySelectorAll('[data-buy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const it = g.shopItems()[Number(btn.dataset.buy)];
        if (g.buy(it)) { this.renderShop(); this.update(g.state); }
      });
    });
    this.modal.querySelectorAll('[data-sell]').forEach((btn) => {
      btn.addEventListener('click', () => {
        g.sellAll(btn.dataset.sell);
        this.renderShop();
        this.update(g.state);
      });
    });
  }

  // ---------------- menu ----------------
  openMenu() {
    this.questTab = 'quests';
    this.renderMenu();
  }

  renderMenu() {
    const g = this.game;
    const s = g.state;
    let content = '';
    if (this.questTab === 'quests') {
      content = g.questList().map((q) => {
        const p = Math.min(1, q.progress / q.target);
        return `<div class="quest-item ${q.done ? 'done' : ''}">
          <div class="qi-top"><span class="qi-name">${q.name}</span><span class="qi-reward">${q.rewardText || ''}</span></div>
          <div class="qi-desc">${q.desc}</div>
          <div class="qi-bar"><i style="width:${q.done ? 100 : p * 100}%"></i></div>
          <div class="qi-status">${q.done ? '✦ Completed' : `${Math.min(q.progress, q.target)} / ${q.target}`}</div>
        </div>`;
      }).join('');
    } else if (this.questTab === 'guide') {
      content = `<div class="help-grid">
        <div class="help-card"><h4>Move</h4><p>Joystick on touch, <span class="keyrow">W</span><span class="keyrow">A</span><span class="keyrow">S</span><span class="keyrow">D</span> on keyboard. Drag the world to orbit the camera, scroll to zoom.</p></div>
        <div class="help-card"><h4>Use &amp; Attack</h4><p><span class="keyrow">E</span> or the green button interacts with soil, trees, rocks, people and the cottage. <span class="keyrow">Space</span> or the sword button swings your blade.</p></div>
        <div class="help-card"><h4>Farming</h4><p>Till soil, pick a seed from the hotbar, plant, then water. Crops grow overnight <em>only if watered</em>. Rain waters everything for free.</p></div>
        <div class="help-card"><h4>Energy</h4><p>Every chore costs energy. Drink a Mana Potion, or sleep at the cottage door to start a new day with full energy.</p></div>
        <div class="help-card"><h4>The Vale</h4><p>Chop trees for wood, mine rocks for stone, and clear slimes in the Whisperwood for arcane essence. Zephyr's tower lies east.</p></div>
        <div class="help-card"><h4>Magic</h4><p>Offer essence at the Moonwell west of the farm for rain, vitality, or a permanent blessing. Buy sprinklers to water a 3×3 patch each dawn.</p></div>
      </div>
      <p style="font-size:11px;color:#8fa0b1;margin-top:10px;line-height:1.55">Phone tip: landscape gives the widest view. All progress saves automatically each morning and when you close a shop.</p>`;
    } else {
      content = `
        <div class="setting-row"><div><div class="sl">Sound</div><div class="sd">Procedural ambience, birds &amp; chimes</div></div><button class="toggle ${g.soundOn ? 'on' : ''}" data-setting="sound"></button></div>
        <div class="setting-row"><div><div class="sl">Save game</div><div class="sd">Stored locally in this browser</div></div><button class="btn ghost" style="min-width:0;padding:8px 12px;font-size:12px" data-save>Save now</button></div>
        <div class="setting-row"><div><div class="sl">New journey</div><div class="sd">Erase this save and start over</div></div><button class="danger-btn" data-newgame>Start over</button></div>
        <div class="setting-row" style="border-bottom:none"><div><div class="sl">Your story</div><div class="sd">Day ${s.day} · ${Math.floor(s.gold)} gold · ${s.stats.harvested} crops harvested · ${s.stats.slimes} slimes cleared</div></div></div>`;
    }
    const html = `${this.header('✦', 'Emberfall Vale', `Day ${s.day} · ${s.season} · ${s.weather === 'rain' ? 'Rainy' : 'Clear skies'}`)}
      <div class="sheet-body">
        <div class="tabs">
          <button class="tab ${this.questTab === 'quests' ? 'active' : ''}" data-qtab="quests">Quests</button>
          <button class="tab ${this.questTab === 'guide' ? 'active' : ''}" data-qtab="guide">Guide</button>
          <button class="tab ${this.questTab === 'settings' ? 'active' : ''}" data-qtab="settings">Options</button>
        </div>
        ${content}
      </div>
      <div class="sheet-foot">
        <span style="font-size:10.5px;color:#8fa0b1;letter-spacing:.06em">✦ ${s.essence} ESSENCE · 🪵 ${s.wood} · 🪨 ${s.stone}</span>
        <button class="btn primary" style="min-width:0;padding:9px 18px;font-size:13px" data-close>Resume</button>
      </div>`;
    this.openSheet(html, 'menu');
    const toggle = this.modal.querySelector('[data-setting="sound"]');
    if (toggle) toggle.addEventListener('click', () => {
      g.setSound(!g.soundOn);
      toggle.classList.toggle('on', g.soundOn);
    });
    const save = this.modal.querySelector('[data-save]');
    if (save) save.addEventListener('click', () => { g.save(); this.toast('Journey saved.', '', '💾'); });
    const ng = this.modal.querySelector('[data-newgame]');
    if (ng) ng.addEventListener('click', () => {
      if (confirm('Erase this save and begin a new journey?')) {
        this.closeModal();
        g.startNew();
      }
    });
  }

  openHelp() {
    this.questTab = 'guide';
    this.renderMenu();
  }

  // ---------------- dialog ----------------
  openDialog(opts) {
    const { title, portrait, text, options } = opts;
    const html = `<div class="sheet-head">
        <div class="sigil">${portrait}</div>
        <div><h2>${title}</h2><p>${opts.subtitle || ''}</p></div>
        <button class="close-x" data-close aria-label="Close">✕</button>
      </div>
      <div class="sheet-body">
        <div class="dialog-body">
          <div class="portrait">${portrait}</div>
          <div class="dialog-text">${text}</div>
        </div>
        <div class="dialog-options">${options.map((o, i) => `<button class="dialog-opt" data-opt="${i}" ${o.disabled ? 'disabled' : ''}>${o.label}</button>`).join('')}</div>
      </div>`;
    this.openSheet(html, 'dialog', 'dialog-sheet');
    this.modal.querySelectorAll('[data-opt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const o = options[Number(btn.dataset.opt)];
        if (o.action) o.action();
        else this.closeModal();
      });
    });
  }

  // ---------------- shrine ----------------
  openShrine() {
    const g = this.game;
    const s = g.state;
    const awake = s.blessing >= 2;
    const html = `${this.header('✦', 'The Moonwell', 'An old magic sleeps beneath the stones')}
      <div class="sheet-body">
        <div class="dialog-body" style="margin-bottom:14px">
          <div class="portrait">🌙</div>
          <div class="dialog-text">The standing stones hum with a low, silver song. Offerings of <em>essence</em> are drawn into the floating crystal.
          <br /><br />You carry <em>${s.essence} essence</em>.</div>
        </div>
        <div class="shop-grid">
          <div class="shop-item">
            <div class="si-ico">🌧</div>
            <div class="si-main"><div class="si-name">Rite of Rain</div><div class="si-desc">Water every planted crop, and bring rain tomorrow morning.</div></div>
            <button class="si-buy" data-rite="rain" ${s.essence >= 2 ? '' : 'disabled'}>2 ✦</button>
          </div>
          <div class="shop-item">
            <div class="si-ico">💚</div>
            <div class="si-main"><div class="si-name">Vitality Offering</div><div class="si-desc">Restore your health and energy to full.</div></div>
            <button class="si-buy" data-rite="heal" ${s.essence >= 2 ? '' : 'disabled'}>2 ✦</button>
          </div>
          <div class="shop-item">
            <div class="si-ico">🌙</div>
            <div class="si-main"><div class="si-name">Awaken the Moonwell</div><div class="si-desc">A permanent blessing: +25 max energy and a sprinkler for your farm.${awake ? ' (Already awakened)' : ''}</div></div>
            <button class="si-buy" data-rite="awaken" ${!awake && s.essence >= 5 ? '' : 'disabled'}>${awake ? 'Done' : '5 ✦'}</button>
          </div>
        </div>
        <p style="font-size:10.5px;color:#8fa0b1;margin:11px 2px 0;line-height:1.5">Slimes in the Whisperwood drop essence. They grow bolder after dusk.</p>
      </div>`;
    this.openSheet(html, 'shrine');
    this.modal.querySelectorAll('[data-rite]').forEach((btn) => {
      btn.addEventListener('click', () => {
        g.shrineRite(btn.dataset.rite);
        this.openShrine();
        this.update(g.state);
      });
    });
  }

  // ---------------- sleep / summary ----------------
  sleepFade(on) {
    const f = $('screen-fade');
    f.classList.toggle('on', on);
  }

  showSummary(data, onClose) {
    const html = `<div class="sheet-body" style="padding-top:22px">
        <div class="weather-line">${data.weather === 'rain' ? '🌧 Rainy morning' : '☀ Clear morning'}</div>
        <div class="big-day">Day ${data.day}</div>
        <div style="font-family:var(--serif);font-size:13px;color:#a9bccd;margin-top:2px">${data.season} · Emberfall Vale</div>
        <div class="summary-list">
          ${data.crops ? `<div class="summary-line"><span>Crops grown</span><b>+${data.crops}</b></div>` : ''}
          <div class="summary-line"><span>Gold earned yesterday</span><b>${data.earned} ◈</b></div>
          <div class="summary-line"><span>Energy restored</span><b>${data.maxEnergy} ⚡</b></div>
          ${data.rain ? '<div class="summary-line"><span>The rain watered your crops</span><b>✓</b></div>' : ''}
          ${data.sprinklers ? `<div class="summary-line"><span>Sprinklers murmured to life</span><b>${data.sprinklers}×</b></div>` : ''}
        </div>
        <p class="summary-flavor">${data.flavor}</p>
        <button class="btn primary" id="btn-rise" style="width:100%;margin-top:6px">Rise and shine</button>
      </div>`;
    this.openSheet(html, 'summary', 'summary-sheet');
    const btn = this.modal.querySelector('#btn-rise');
    if (btn) btn.addEventListener('click', () => {
      this.closeModal();
      if (onClose) onClose();
    });
  }

  showWin() {
    const html = `<div class="sheet-body" style="padding:24px 22px">
        <div class="win-crown">👑</div>
        <h2>The Ember Crown</h2>
        <p>You gathered the crown of woven starlight and set it upon the Moonwell. Magic spills back into Emberfall Vale — the fields glow, the Whisperwood sings, and the little farm that time forgot is forgotten no longer.</p>
        <p style="color:#ffdf9b;font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-top:16px">Vale restored · Day ${this.game.state.day}</p>
        <button class="btn primary" id="btn-keep-playing" style="width:100%;margin-top:18px">Keep tending the vale</button>
      </div>`;
    this.openSheet(html, 'win', 'win-sheet');
    const btn = this.modal.querySelector('#btn-keep-playing');
    if (btn) btn.addEventListener('click', () => this.closeModal());
  }
}
