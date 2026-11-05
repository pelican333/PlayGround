// ---------------------------------------------------------------------------
// STARFALL VALE — procedural indie soundtrack + SFX (WebAudio, no assets)
// ---------------------------------------------------------------------------
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

const TRACKS = {
  title: {
    bpm: 74, root: 60, scale: [0, 2, 4, 7, 9, 11], prog: [0, 5, 3, 4], arp: [0, 2, 4, 2, 3, 2, 4, 2],
    melody: [4, null, 3, null, 2, null, null, 4, 5, null, 4, null, 2, null, null, null,
      null, 3, null, 2, null, 0, null, 2, 3, null, 4, null, 5, null, null, null],
    bass: [0, null, null, null, 3, null, null, null, 0, null, null, null, 4, null, null, null],
    pad: true, drums: false, lead: 'triangle', echo: 0.28,
  },
  farm: {
    bpm: 94, root: 57, scale: [0, 2, 3, 5, 7, 8, 10], prog: [0, 3, 4, 2], arp: [0, 2, 4, 2, 3, 4, 2, 0],
    melody: [4, null, 3, null, 2, null, 3, 4, 4, null, 5, null, 4, null, 3, null,
      null, 2, null, 3, null, 4, null, 2, null, 3, null, 4, null, 5, null, null],
    bass: [0, null, 0, null, 3, null, 3, null, 4, null, 4, null, 2, null, 2, null],
    pad: true, drums: true, lead: 'square', echo: 0.18,
  },
  village: {
    bpm: 112, root: 60, scale: [0, 2, 4, 5, 7, 9, 11], prog: [0, 3, 5, 4], arp: [0, 1, 2, 4, 3, 2, 1, 2],
    melody: [4, null, 4, 5, null, 3, null, 4, 2, null, 2, 3, null, 4, null, 2,
      4, null, 5, null, 4, 3, null, 2, 0, null, 2, null, 1, null, null, null],
    bass: [0, null, null, 3, null, null, 4, null, 0, null, null, 3, null, 4, null, null],
    pad: true, drums: true, lead: 'square', echo: 0.12,
  },
  forest: {
    bpm: 84, root: 52, scale: [0, 2, 3, 5, 7, 9, 10], prog: [0, 4, 2, 5], arp: [0, 2, 4, 2, 4, 2, 0, 2],
    melody: [4, null, null, 3, null, 2, null, null, 5, null, 4, null, 3, null, null, 2,
      null, null, 4, null, 5, null, 3, null, 2, null, null, 4, null, null, null, null],
    bass: [0, null, null, null, 3, null, null, null, 2, null, null, null, 4, null, null, null],
    pad: true, drums: false, lead: 'triangle', echo: 0.3,
  },
  mine: {
    bpm: 102, root: 45, scale: [0, 1, 3, 5, 7, 8, 10], prog: [0, 1, 0, 4], arp: [0, 3, 1, 4, 0, 3, 4, 1],
    melody: [4, null, 3, null, 4, null, 1, null, 4, null, 5, null, 4, null, 3, null,
      null, null, 2, null, null, 3, null, null, 4, null, 4, null, 3, null, 1, null],
    bass: [0, 0, null, 0, 3, null, 3, null, 0, 0, null, 0, 4, null, 4, null],
    pad: false, drums: true, lead: 'square', echo: 0.2,
  },
  night: {
    bpm: 68, root: 53, scale: [0, 2, 3, 5, 7, 8, 10], prog: [0, 5, 3, 4], arp: [0, 2, 4, 3, 2, 4, 5, 4],
    melody: [2, null, null, 3, null, null, 4, null, null, 3, null, 2, null, null, null, null,
      5, null, null, 4, null, 2, null, null, 3, null, null, 2, null, null, null, null],
    bass: [0, null, null, null, 0, null, null, null, 3, null, null, null, 4, null, null, null],
    pad: true, drums: false, lead: 'triangle', echo: 0.34,
  },
  bond: {
    bpm: 70, root: 65, scale: [0, 2, 4, 5, 7, 9, 11], prog: [0, 4, 5, 3], arp: [0, 2, 4, 2, 5, 4, 2, 4],
    melody: [4, null, 5, null, 6, null, 5, 4, 2, null, 4, null, 3, null, null, null,
      null, 4, null, 5, null, 6, null, 4, 2, null, null, 3, null, null, null, null],
    bass: [0, null, null, 4, null, null, 3, null, 5, null, null, 2, null, null, null, null],
    pad: true, drums: false, lead: 'triangle', echo: 0.3, swing: 0.06,
  },
  ending: {
    bpm: 76, root: 60, scale: [0, 2, 4, 7, 9, 11, 12], prog: [0, 5, 3, 4], arp: [0, 2, 4, 5, 4, 2, 4, 5],
    melody: [4, null, 5, null, 7, null, 6, 5, 4, null, 3, null, 4, null, 5, null,
      7, null, 5, null, 4, 5, null, 3, 2, null, 4, null, 5, null, null, null],
    bass: [0, null, null, 3, null, null, 4, null, 0, null, null, 3, null, 4, null, null],
    pad: true, drums: true, lead: 'triangle', echo: 0.25,
  },
};

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicOn = true;
    this.started = false;
    this.trackName = null;
    this.timer = null;
    this.master = null;
    this.musicBus = null;
    this.sfxBus = null;
    this.delay = null;
    this.step = 0;
    this.nextTime = 0;
    try {
      const s = JSON.parse(localStorage.getItem('starfall_audio') || '{}');
      if (s.music === false) this.musicOn = false;
      this.volume = s.volume ?? 0.6;
    } catch { this.volume = 0.6; }
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);
    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = this.musicOn ? 0.55 : 0;
    this.musicBus.connect(this.master);
    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = 0.75;
    this.sfxBus.connect(this.master);
    // shared dreamy echo
    this.delay = this.ctx.createDelay(1.0);
    this.delay.delayTime.value = 0.31;
    const fb = this.ctx.createGain(); fb.gain.value = 0.28;
    const wet = this.ctx.createGain(); wet.gain.value = 0.32;
    this.delay.connect(fb); fb.connect(this.delay);
    this.delay.connect(wet); wet.connect(this.musicBus);
    this.delayWet = wet;
    this.started = true;
    this.savePrefs();
  }
  savePrefs() {
    try { localStorage.setItem('starfall_audio', JSON.stringify({ music: this.musicOn, volume: this.volume })); } catch {}
  }
  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
    this.savePrefs();
  }
  toggleMusic() {
    this.musicOn = !this.musicOn;
    if (this.musicBus) this.musicBus.gain.setTargetAtTime(this.musicOn ? 0.55 : 0, this.ctx.currentTime, 0.15);
    this.savePrefs();
    return this.musicOn;
  }

  // -------------------------------------------------------------------------
  setScene(name) {
    if (!this.started) { this.pendingScene = name; return; }
    if (!TRACKS[name] || this.trackName === name) return;
    this.trackName = name;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.08;
    if (!this.timer) this.timer = setInterval(() => this.tick(), 90);
    this.tick();
  }
  tick() {
    if (!this.ctx || !this.trackName || !this.musicOn) return;
    const t = TRACKS[this.trackName];
    const spb = 60 / t.bpm;
    const stepDur = spb / 2;
    const horizon = this.ctx.currentTime + 0.35;
    let guard = 0;
    while (this.nextTime < horizon && guard++ < 16) {
      this.scheduleStep(t, this.step, this.nextTime, stepDur);
      this.nextTime += stepDur;
      this.step = (this.step + 1) % 64;
    }
  }
  scheduleStep(t, step, when, dur) {
    const bar = Math.floor(step / 16) % 4;
    const local = step % 16;
    const scale = t.scale;
    const root = t.root;
    const chordRoot = t.prog[bar];
    const deg = (i, oct = 0) => {
      const n = scale[((i % scale.length) + scale.length) % scale.length] + 12 * Math.floor(i / scale.length) + 12 * oct;
      return midi(root + n);
    };
    // bass
    if (t.bass[local] !== null && t.bass[local] !== undefined) {
      this.note(deg(t.bass[local] + chordRoot, -2), when, dur * 1.7, 'triangle', 0.16, 700);
    }
    // pad chord on bar start
    if (local === 0 && t.pad) {
      for (let i = 0; i < 3; i++) {
        this.note(deg(chordRoot + i * 2, -1), when, dur * 7, 'sine', 0.028, 1200);
      }
    }
    // arp (gentle 16th)
    const arpIdx = t.arp[local % t.arp.length];
    if (local % 2 === 0) {
      const oct = local % 8 === 0 ? 0 : 1;
      this.note(deg(arpIdx + chordRoot, oct), when, dur * 0.9, 'triangle', 0.035, 2600);
    }
    // melody
    if (t.melody[local] !== null && t.melody[local] !== undefined) {
      const n = t.melody[local];
      this.note(deg(n + chordRoot, 0), when, dur * 1.5, t.lead, 0.055, 2200);
      if (t.echo) this.note(deg(n + chordRoot, 0), when + dur * 3, dur * 1.2, t.lead, 0.022, 1800);
    }
    // sparse percussion
    if (t.drums) {
      if (local % 8 === 0) this.kick(when);
      if (local === 4 || local === 12) this.hat(when, 0.025);
      if (local === 10) this.hat(when, 0.02);
    }
  }
  note(freq, when, dur, type = 'square', gain = 0.05, cutoff = 2200) {
    const c = this.ctx;
    const o = c.createOscillator();
    const g = c.createGain();
    const f = c.createBiquadFilter();
    o.type = type;
    o.frequency.setValueAtTime(freq, when);
    f.type = 'lowpass';
    f.frequency.setValueAtTime(cutoff, when);
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(gain, when + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(f); f.connect(g); g.connect(this.musicBus);
    if (this.delay && gain > 0.03) g.connect(this.delay);
    o.start(when); o.stop(when + dur + 0.02);
  }
  kick(when) {
    const c = this.ctx;
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(110, when); o.frequency.exponentialRampToValueAtTime(45, when + 0.12);
    g.gain.setValueAtTime(0.09, when); g.gain.exponentialRampToValueAtTime(0.0001, when + 0.18);
    o.connect(g); g.connect(this.musicBus); o.start(when); o.stop(when + 0.2);
  }
  hat(when, gain) {
    const c = this.ctx;
    const len = Math.floor(c.sampleRate * 0.04);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(); g.gain.value = gain;
    const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 6000;
    src.connect(f); f.connect(g); g.connect(this.musicBus); src.start(when);
  }
  // -------------------------------------------------------------------------
  play(name, param = 0) {
    if (!this.ctx || !this.started) return;
    const c = this.ctx, t = c.currentTime;
    const beep = (freq, dur, type = 'square', gain = 0.06, slideTo = null, when = 0) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t + when);
      if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + when + dur);
      g.gain.setValueAtTime(0.0001, t + when);
      g.gain.exponentialRampToValueAtTime(gain, t + when + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + when + dur);
      o.connect(g); g.connect(this.sfxBus); o.start(t + when); o.stop(t + when + dur + 0.02);
    };
    const noise = (dur, gain = 0.1, filter = 1200, type = 'lowpass', when = 0) => {
      const len = Math.max(1, Math.floor(c.sampleRate * dur));
      const buf = c.createBuffer(1, len, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.7);
      const src = c.createBufferSource(); src.buffer = buf;
      const f = c.createBiquadFilter(); f.type = type; f.frequency.value = filter;
      const g = c.createGain(); g.gain.value = gain;
      src.connect(f); f.connect(g); g.connect(this.sfxBus); src.start(t + when);
    };
    switch (name) {
      case 'click': beep(880, 0.05, 'square', 0.03, 660); break;
      case 'select': beep(660, 0.05, 'triangle', 0.04, 990); break;
      case 'hoe': noise(0.13, 0.16, 900); beep(140, 0.09, 'triangle', 0.05, 90); break;
      case 'water': noise(0.3, 0.06, 3200, 'highpass'); beep(1200, 0.18, 'sine', 0.025, 800); break;
      case 'chop': noise(0.1, 0.22, 700); beep(180, 0.1, 'square', 0.05, 90); break;
      case 'mine': noise(0.12, 0.2, 500); beep(220, 0.16, 'square', 0.05, 70); break;
      case 'break': noise(0.28, 0.22, 600); beep(120, 0.25, 'triangle', 0.05, 50); break;
      case 'plant': beep(520, 0.08, 'triangle', 0.04, 700); beep(780, 0.08, 'triangle', 0.03, 900, 0.06); break;
      case 'harvest': [520, 660, 880].forEach((f, i) => beep(f, 0.12, 'triangle', 0.05, null, i * 0.06)); break;
      case 'pickup': beep(880, 0.08, 'square', 0.035, 1320); break;
      case 'coin': [1040, 1320].forEach((f, i) => beep(f, 0.12, 'square', 0.035, null, i * 0.07)); break;
      case 'cast': noise(0.25, 0.05, 2200, 'highpass'); beep(320, 0.2, 'sine', 0.04, 700); break;
      case 'bite': beep(660, 0.06, 'square', 0.05); beep(880, 0.06, 'square', 0.05, null, 0.09); break;
      case 'catch': [660, 880, 1100, 1320].forEach((f, i) => beep(f, 0.14, 'triangle', 0.055, null, i * 0.08)); break;
      case 'fail': beep(300, 0.2, 'square', 0.04, 180); break;
      case 'level': [523, 659, 784, 1046, 1318].forEach((f, i) => beep(f, 0.2, 'triangle', 0.05, null, i * 0.07)); break;
      case 'heart': [784, 988, 1175].forEach((f, i) => beep(f, 0.16, 'sine', 0.05, null, i * 0.1)); break;
      case 'bond': [523, 659, 784, 988, 784, 1046].forEach((f, i) => beep(f, 0.32, 'sine', 0.055, null, i * 0.16)); break;
      case 'door': noise(0.15, 0.05, 500); beep(180, 0.18, 'triangle', 0.04, 120); break;
      case 'error': beep(200, 0.12, 'square', 0.04, 150); beep(180, 0.14, 'square', 0.03, 120, 0.1); break;
      case 'attack': noise(0.08, 0.12, 1800, 'highpass'); beep(400, 0.08, 'sawtooth', 0.04, 180); break;
      case 'hurt': beep(160, 0.2, 'sawtooth', 0.06, 90); noise(0.12, 0.08, 700); break;
      case 'sleep': [392, 330, 262].forEach((f, i) => beep(f, 0.4, 'sine', 0.04, null, i * 0.18)); break;
      case 'save': [880, 660, 1040].forEach((f, i) => beep(f, 0.12, 'triangle', 0.04, null, i * 0.06)); break;
      case 'step': if (Math.random() < 0.5) noise(0.05, 0.012, 500); break;
      case 'pet': beep(740, 0.1, 'sine', 0.04, 980); break;
      case 'eat': noise(0.16, 0.06, 900); beep(420, 0.1, 'triangle', 0.03); break;
      case 'star': [1046, 1318, 1568, 2093].forEach((f, i) => beep(f, 0.5, 'sine', 0.035, null, i * 0.09)); break;
      default: beep(660, 0.06, 'square', 0.03);
    }
  }
}
