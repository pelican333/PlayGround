import * as THREE from 'three';
import { rand, stdMat, clamp, glowSprite } from './util.js';

const SPAWNS = [
  { x: -22, z: -17 },
  { x: -25, z: 3 },
  { x: 25, z: -18 },
  { x: 27, z: 15 },
  { x: -14, z: 26 },
  { x: 9, z: -25 },
  { x: -30, z: -4 },
  { x: 32, z: 2 },
];

const PALETTES = [
  { body: '#5fbf8f', glow: '#7dffb8', eye: '#1d3a2b' },
  { body: '#7f8fe8', glow: '#b4c4ff', eye: '#232546' },
  { body: '#c67fd8', glow: '#f2a8ff', eye: '#3a1f45' },
  { body: '#d8b35f', glow: '#ffe28a', eye: '#3d2d12' },
];

export class SlimeManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.slimes = [];
    this.time = 0;
    SPAWNS.forEach((s, i) => {
      this.slimes.push(this.makeSlime(s.x, s.z, i));
    });
  }

  makeSlime(x, z, i) {
    const pal = PALETTES[i % PALETTES.length];
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: pal.body, emissive: pal.glow, emissiveIntensity: 0.32,
      roughness: 0.55, flatShading: true,
    });
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), bodyMat);
    body.scale.set(1.05, 0.82, 1.05);
    body.position.y = 0.4;
    body.castShadow = true;
    const belly = new THREE.Mesh(
      new THREE.SphereGeometry(0.36, 9, 7),
      new THREE.MeshStandardMaterial({ color: '#e8fff2', emissive: pal.glow, emissiveIntensity: 0.18, roughness: 0.7 })
    );
    belly.scale.set(1, 0.38, 1);
    belly.position.y = 0.14;
    const eyes = [];
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      eye.position.set(0.16 * s, 0.5, 0.4);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), new THREE.MeshBasicMaterial({ color: pal.eye }));
      pupil.position.set(0.16 * s, 0.5, 0.47);
      g.add(eye, pupil);
      eyes.push(eye);
    }
    const glow = glowSprite(pal.glow, 2.0, 0.35);
    glow.position.y = 0.4;
    g.add(body, belly, glow);

    const y = this.world.height(x, z);
    g.position.set(x, y, z);
    this.scene.add(g);

    return {
      group: g, body, belly, bodyMat, glow, x, z, homeX: x, homeZ: z,
      y, hp: 3, maxHp: 3, alive: true, hop: rand(0, 6.28), phase: 'wander',
      wander: { x, z }, timer: rand(1, 4), hurt: 0, cooldown: 0,
      speed: rand(1.5, 2.1), size: 1, knockX: 0, knockZ: 0,
    };
  }

  resetDay(day) {
    for (const s of this.slimes) {
      s.alive = true;
      s.hp = s.maxHp;
      s.group.visible = true;
      s.group.scale.setScalar(1);
      s.x = s.homeX;
      s.z = s.homeZ;
      s.hurt = 0;
      s.cooldown = 0;
      s.phase = 'wander';
      s.timer = rand(0.5, 2);
    }
  }

  hit(slime, dirX, dirZ) {
    if (!slime.alive) return false;
    slime.hp -= 1;
    slime.hurt = 0.18;
    slime.knockX = dirX * 3.2;
    slime.knockZ = dirZ * 3.2;
    slime.phase = 'chase';
    return slime.hp <= 0;
  }

  kill(slime) {
    slime.alive = false;
    slime.group.visible = false;
  }

  update(dt, playerPos, game) {
    this.time += dt;
    const t = this.time;
    for (const s of this.slimes) {
      if (!s.alive) continue;
      const dx = playerPos.x - s.x, dz = playerPos.z - s.z;
      const dist = Math.hypot(dx, dz);
      s.timer -= dt;
      if (s.cooldown > 0) s.cooldown -= dt;
      if (s.hurt > 0) s.hurt -= dt;

      // knockback
      if (Math.abs(s.knockX) + Math.abs(s.knockZ) > 0.01) {
        s.x += s.knockX * dt;
        s.z += s.knockZ * dt;
        s.knockX *= Math.pow(0.02, dt);
        s.knockZ *= Math.pow(0.02, dt);
      }

      let moving = false;
      if (dist < 7.2 && game.state.hours > 17.5) s.phase = 'chase';
      if (dist < 5.2) s.phase = 'chase';
      if (s.phase === 'chase' && dist > 11) s.phase = 'wander';

      if (s.phase === 'chase' && dist > 0.01) {
        const sp = s.speed * (dist < 2 ? 0.8 : 1);
        s.x += (dx / dist) * sp * dt;
        s.z += (dz / dist) * sp * dt;
        moving = true;
        // contact damage
        if (dist < 1.15 && s.cooldown <= 0) {
          s.cooldown = 1.15;
          game.damagePlayer(8 + (s.maxHp - 3) * 2, s.x, s.z);
          game.audio.sfx('hit');
        }
      } else if (s.timer <= 0) {
        s.timer = rand(2.2, 5.2);
        const a = rand(0, Math.PI * 2), r = rand(2, 8);
        s.wander.x = s.homeX + Math.cos(a) * r;
        s.wander.z = s.homeZ + Math.sin(a) * r;
      } else {
        const wdx = s.wander.x - s.x, wdz = s.wander.z - s.z;
        const wd = Math.hypot(wdx, wdz);
        if (wd > 0.4) {
          s.x += (wdx / wd) * s.speed * 0.42 * dt;
          s.z += (wdz / wd) * s.speed * 0.42 * dt;
          moving = true;
        }
      }

      // keep in bounds
      const rr = Math.hypot(s.x, s.z);
      if (rr > 54) { s.x *= 54 / rr; s.z *= 54 / rr; }

      s.y = this.world.height(s.x, s.z);
      s.hop += dt * (moving ? 6.2 : 2.6);
      const hop = moving ? Math.abs(Math.sin(s.hop)) * 0.34 : 0;
      const squash = moving ? Math.sin(s.hop * 2) * 0.06 : Math.sin(t * 1.5 + s.homeX) * 0.025;
      s.group.position.set(s.x, s.y + hop + 0.02, s.z);
      s.body.scale.set(1.05 + squash, 0.82 - squash * 0.7, 1.05 + squash);
      s.belly.scale.set(1 + squash, 0.38, 1 + squash);
      const targetRot = dist > 0.1 && s.phase === 'chase' ? Math.atan2(dx, dz) : Math.atan2(s.wander.x - s.x, s.wander.z - s.z);
      s.group.rotation.y += (targetRot - s.group.rotation.y) * Math.min(1, dt * 8);

      if (s.hurt > 0) {
        s.bodyMat.emissiveIntensity = 1.6;
        s.body.scale.x += 0.1;
      } else {
        s.bodyMat.emissiveIntensity = 0.32 + Math.sin(t * 2 + s.homeX) * 0.05;
      }
      const night = game.state.hours > 18 || game.state.hours < 6;
      s.glow.material.opacity = 0.18 + (night ? 0.4 : 0.1) + Math.sin(t * 3 + s.homeX) * 0.06;
      s.glow.scale.setScalar(1.8 + Math.sin(t * 2 + s.homeX) * 0.2);
    }
  }
}
