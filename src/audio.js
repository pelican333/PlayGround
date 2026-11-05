// Tiny procedural sound engine — no external assets.
export class Audio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.noiseBuffer = null;
    this.ambient = null;
    this.lastChirp = 0;
  }

  init() {
    if (this.ctx) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.32;
    this.master.connect(this.ctx.destination);
    this.makeNoise();
    this.startAmbient();
  }

  makeNoise() {
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buf;
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : 0.32, this.ctx.currentTime, 0.05);
  }

  startAmbient() {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 340;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.055;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.ambient = { src, filter, gain };

    // soft sustained pad
    const padGain = this.ctx.createGain();
    padGain.gain.value = 0.018;
    padGain.connect(this.master);
    for (const f of [110, 164.81, 220]) {
      const o = this.ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const g = this.ctx.createGain();
      g.gain.value = 0.33;
      o.connect(g).connect(padGain);
      o.start();
    }
    this.pad = padGain;
  }

  updateAmbient(hours, night) {
    if (!this.ctx || this.muted) return;
    if (this.ambient) {
      const target = night ? 200 : 380;
      this.ambient.filter.frequency.setTargetAtTime(target, this.ctx.currentTime, 2);
      this.ambient.gain.gain.setTargetAtTime(night ? 0.04 : 0.06, this.ctx.currentTime, 2);
    }
    const now = this.ctx.currentTime;
    if (now - this.lastChirp > (night ? 2.4 : 4.2)) {
      this.lastChirp = now + Math.random() * 2;
      if (Math.random() < 0.7) {
        if (night) this.cricket();
        else this.bird();
      }
    }
  }

  bird() {
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine';
    const base = 1700 + Math.random() * 900;
    o.frequency.setValueAtTime(base, t);
    o.frequency.exponentialRampToValueAtTime(base * 1.5, t + 0.07);
    o.frequency.exponentialRampToValueAtTime(base * 1.1, t + 0.16);
    g.gain.setValueAtTime(0.0, t);
    g.gain.linearRampToValueAtTime(0.035, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.25);
  }

  cricket() {
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = 3200 + Math.random() * 300;
      const st = t + i * 0.08;
      g.gain.setValueAtTime(0, st);
      g.gain.linearRampToValueAtTime(0.013, st + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, st + 0.06);
      o.connect(g).connect(this.master);
      o.start(st); o.stop(st + 0.08);
    }
  }

  noise(duration, freq, q, gain = 0.2, type = 'bandpass', sweepTo = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + duration);
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + duration + 0.02);
  }

  tone(freq, duration, type = 'sine', gain = 0.12, delay = 0, slideTo = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + duration);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + duration + 0.02);
  }

  sfx(name) {
    if (!this.ctx || this.muted) return;
    switch (name) {
      case 'step':
        this.noise(0.09, 220, 0.7, 0.05, 'lowpass');
        break;
      case 'till':
        this.noise(0.2, 420, 0.8, 0.16, 'lowpass');
        this.tone(90, 0.12, 'sine', 0.05);
        break;
      case 'plant':
        this.tone(520, 0.1, 'sine', 0.07, 0, 700);
        this.noise(0.12, 900, 1, 0.05);
        break;
      case 'water':
        this.noise(0.45, 1800, 0.6, 0.12, 'bandpass', 700);
        break;
      case 'harvest':
        this.tone(660, 0.18, 'sine', 0.09);
        this.tone(880, 0.22, 'sine', 0.08, 0.07);
        this.tone(1320, 0.3, 'triangle', 0.06, 0.14);
        break;
      case 'chop':
        this.noise(0.14, 260, 0.7, 0.2, 'lowpass');
        this.tone(110, 0.12, 'square', 0.05);
        break;
      case 'mine':
        this.tone(880, 0.08, 'square', 0.04, 0, 400);
        this.noise(0.12, 2400, 1.4, 0.13);
        break;
      case 'attack':
        this.noise(0.18, 900, 0.7, 0.14, 'bandpass', 2600);
        break;
      case 'hit':
        this.tone(150, 0.14, 'square', 0.08, 0, 70);
        this.noise(0.1, 400, 0.8, 0.12);
        break;
      case 'slime':
        this.tone(300, 0.16, 'sine', 0.08, 0, 520);
        this.tone(200, 0.2, 'triangle', 0.05, 0.04);
        break;
      case 'coin':
        this.tone(1046, 0.1, 'triangle', 0.07);
        this.tone(1568, 0.16, 'triangle', 0.06, 0.06);
        break;
      case 'click':
        this.tone(520, 0.05, 'sine', 0.05);
        break;
      case 'quest':
        [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.35, 'triangle', 0.06, i * 0.1));
        break;
      case 'magic':
        [392, 523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.8, 'sine', 0.045, i * 0.07));
        break;
      case 'sleep':
        [523, 392, 330, 262].forEach((f, i) => this.tone(f, 0.7, 'sine', 0.06, i * 0.18));
        break;
      case 'hurt':
        this.tone(220, 0.2, 'sawtooth', 0.07, 0, 110);
        this.noise(0.14, 500, 0.8, 0.1);
        break;
      case 'error':
        this.tone(180, 0.12, 'square', 0.04);
        break;
      default:
        break;
    }
  }
}
