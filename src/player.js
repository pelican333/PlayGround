import * as THREE from 'three';
import { stdMat, glowSprite, angleLerp, clamp, damp } from './util.js';

export class Player {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'player';
    this.pos = new THREE.Vector3(0, 0, 12.4);
    this.facing = Math.PI;
    this.walkPhase = 0;
    this.attackTimer = 0;
    this.attackCooldown = 0;
    this.moving = false;
    this.hurtFlash = 0;
    this.build();
    scene.add(this.group);
  }

  build() {
    const g = this.group;
    const skin = stdMat({ color: '#e9c39c' });
    const tunic = stdMat({ color: '#3f7f74' });
    const tunicDark = stdMat({ color: '#2c5e57' });
    const pants = stdMat({ color: '#3a3f52' });
    const leather = stdMat({ color: '#75512f' });
    const hatMat = stdMat({ color: '#c9a05a' });
    const goldMat = stdMat({ color: '#e2c072', roughness: 0.5, metalness: 0.25 });
    const hairMat = stdMat({ color: '#6a4326' });
    const capeMat = stdMat({ color: '#2e5f68', side: THREE.DoubleSide });

    // legs (pivot groups)
    this.legL = new THREE.Group();
    this.legR = new THREE.Group();
    for (const [leg, x] of [[this.legL, -0.14], [this.legR, 0.14]]) {
      leg.position.set(x, 0.62, 0);
      const limb = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.5, 0.2), pants);
      limb.position.y = -0.25;
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.32), leather);
      boot.position.set(0, -0.52, 0.05);
      limb.castShadow = true; boot.castShadow = true;
      leg.add(limb, boot);
      g.add(leg);
    }

    // tunic / body
    this.body = new THREE.Group();
    this.body.position.y = 0.62;
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.4, 0.82, 7), tunic);
    torso.position.y = 0.4;
    torso.castShadow = true;
    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.34, 0.1, 8), leather);
    belt.position.y = 0.2;
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.05), goldMat);
    buckle.position.set(0, 0.2, 0.33);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.16, 7), tunicDark);
    collar.position.y = 0.82;
    this.body.add(torso, belt, buckle, collar);

    // head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.245, 11, 10), skin);
    head.position.y = 1.08;
    head.castShadow = true;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.255, 11, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), hairMat);
    hair.position.set(0, 1.13, -0.02);
    hair.rotation.x = -0.16;
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.09, 4), skin);
    nose.position.set(0, 1.06, 0.24);
    nose.rotation.x = Math.PI / 2;
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 5), new THREE.MeshBasicMaterial({ color: 0x2a241f }));
      eye.position.set(0.085 * s, 1.13, 0.215);
      this.body.add(eye);
    }
    this.body.add(head, hair, nose);

    // hat
    this.hat = new THREE.Group();
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.055, 12), hatMat);
    brim.castShadow = true;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.52, 10), hatMat);
    cone.position.y = 0.27;
    cone.castShadow = true;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.275, 0.29, 0.09, 10), tunicDark);
    band.position.y = 0.06;
    this.hat.add(brim, cone, band);
    this.hat.position.set(0, 1.27, 0);
    this.hat.rotation.z = 0.08;
    this.body.add(this.hat);

    // cape
    const capeGeo = new THREE.PlaneGeometry(0.5, 0.9, 1, 3);
    capeGeo.translate(0, -0.42, 0);
    this.cape = new THREE.Mesh(capeGeo, capeMat);
    this.cape.position.set(0, 0.78, -0.25);
    this.cape.rotation.x = 0.12;
    this.cape.castShadow = true;
    this.body.add(this.cape);

    // arms
    this.armL = new THREE.Group();
    this.armR = new THREE.Group();
    for (const [arm, x] of [[this.armL, -0.35], [this.armR, 0.35]]) {
      arm.position.set(x, 0.7, 0);
      const limb = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.46, 0.16), tunicDark);
      limb.position.y = -0.2;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 7, 6), skin);
      hand.position.y = -0.45;
      limb.castShadow = true;
      arm.add(limb, hand);
      this.body.add(arm);
      arm.rotation.z = x > 0 ? -0.12 : 0.12;
    }

    // lantern in left hand
    this.lantern = glowSprite('#ffd08a', 1.1, 0.6);
    this.lantern.position.set(0, -0.52, 0.08);
    this.armL.add(this.lantern);
    const lampBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.13, 0.18, 0.13),
      new THREE.MeshStandardMaterial({ color: '#ffdca2', emissive: '#ffb257', emissiveIntensity: 1.4 })
    );
    lampBody.position.set(0, -0.52, 0.08);
    this.armL.add(lampBody);
    this.lanternLight = new THREE.PointLight(0xffb96a, 0.9, 7, 2);
    this.lanternLight.position.set(0, 1.2, 0.3);
    g.add(this.lanternLight);

    // sword (hidden unless attacking)
    this.sword = new THREE.Group();
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.72, 0.022), new THREE.MeshStandardMaterial({ color: '#d8e7ef', metalness: 0.7, roughness: 0.28, emissive: '#78d9ff', emissiveIntensity: 0.25 }));
    blade.position.y = 0.44;
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.06), goldMat);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.18, 5), leather);
    grip.position.y = -0.11;
    this.sword.add(blade, guard, grip);
    this.sword.position.set(0, -0.48, 0.02);
    this.sword.rotation.x = Math.PI;
    this.sword.visible = false;
    this.armR.add(this.sword);

    // backpack
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.42, 0.22), leather);
    pack.position.set(0, 0.45, -0.34);
    pack.castShadow = true;
    const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.42, 6), stdMat({ color: '#8d6b42' }));
    roll.rotation.z = Math.PI / 2;
    roll.position.set(0, 0.72, -0.35);
    this.body.add(pack, roll);

    g.add(this.body);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  }

  setPosition(x, y, z) {
    this.pos.set(x, y, z);
    this.group.position.set(x, y, z);
  }

  update(dt, moving, speed, hours) {
    this.moving = moving;
    if (this.attackTimer > 0) this.attackTimer = Math.max(0, this.attackTimer - dt);
    if (this.attackCooldown > 0) this.attackCooldown = Math.max(0, this.attackCooldown - dt);

    if (moving) {
      this.walkPhase += dt * (5.4 + speed * 0.9);
    } else {
      this.walkPhase += dt * 1.2;
    }
    const swing = moving ? Math.sin(this.walkPhase) * 0.62 : Math.sin(this.walkPhase * 0.6) * 0.04;
    this.legL.rotation.x = swing;
    this.legR.rotation.x = -swing;
    this.armL.rotation.x = -swing * 0.65;
    this.armR.rotation.x = swing * 0.65;

    const bob = moving ? Math.abs(Math.sin(this.walkPhase)) * 0.055 : Math.sin(this.walkPhase * 0.6) * 0.014;
    this.body.position.y = 0.62 + bob;
    this.cape.rotation.x = 0.1 + (moving ? 0.28 : 0.03) + Math.sin(this.walkPhase * 0.8) * 0.05;

    // attack swing overrides right arm
    if (this.attackTimer > 0) {
      const t = 1 - this.attackTimer / 0.34;
      const ang = -1.9 + t * 2.9;
      this.armR.rotation.x = ang;
      this.armR.rotation.z = -0.55 + t * 0.8;
      const atk = new THREE.Euler();
      atk.set(ang + 0.5, 0.2, 0);
      this.sword.rotation.set(Math.PI + ang * 0.55, 0.1, 0);
      this.sword.visible = true;
    } else {
      this.armR.rotation.z = damp(this.armR.rotation.z, -0.12, 8, dt);
      this.sword.visible = false;
    }

    // lantern flicker and night brightness
    const night = 1 - clamp(Math.sin(((hours - 6) / 24) * Math.PI * 2) * 1.6 + 0.35, 0, 1);
    this.lantern.material.opacity = 0.32 + night * 0.55 + Math.sin(performance.now() * 0.006) * 0.05;
    this.lanternLight.intensity = 0.25 + night * 1.1;
    this.group.position.x = this.pos.x;
    this.group.position.z = this.pos.z;
    this.group.position.y = this.pos.y;
  }

  faceTowards(tx, tz, dt) {
    const target = Math.atan2(tx - this.pos.x, tz - this.pos.z);
    this.facing = angleLerp(this.facing, target, 1 - Math.exp(-12 * dt));
    this.group.rotation.y = this.facing;
  }

  faceDirection(dx, dz, dt) {
    if (Math.abs(dx) + Math.abs(dz) < 0.001) return;
    const target = Math.atan2(dx, dz);
    this.facing = angleLerp(this.facing, target, 1 - Math.exp(-14 * dt));
    this.group.rotation.y = this.facing;
  }

  startAttack() {
    if (this.attackCooldown > 0) return false;
    this.attackCooldown = 0.48;
    this.attackTimer = 0.34;
    return true;
  }

  forward() {
    return { x: Math.sin(this.facing), z: Math.cos(this.facing) };
  }
}
