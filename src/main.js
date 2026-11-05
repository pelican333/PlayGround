import './style.css';
import { Game } from './game.js';

const canvas = document.getElementById('scene');
const note = document.getElementById('perf-note');

try {
  const game = new Game(canvas);
  game.boot();
  window.__game = game;
} catch (err) {
  console.error(err);
  note.classList.remove('gone');
  note.style.fontSize = '13px';
  note.style.maxWidth = '70vw';
  note.style.color = '#ffb3a8';
  note.textContent = 'Emberfall Vale could not start in this browser. WebGL 2 is required. (' + (err && err.message ? err.message : err) + ')';
}
