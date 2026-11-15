(() => {
  const canvas = document.querySelector('#game');
  const ctx = canvas.getContext('2d');
  const W = 1000, H = 640;
  const $ = (s) => document.querySelector(s);
  const hud = { health: $('#healthFill'), healthText: $('#healthText'), boss: $('#bossFill'), flasks: $('#flaskText'), phase: $('#phaseText'), hint: $('#hintText'), toast: $('#toast'), overlay: $('#overlay'), title: $('#overlayTitle'), copy: $('#overlayCopy'), start: $('#startBtn'), flash: $('#flash') };
  let state = 'intro', last = 0, time = 0, shake = 0, toastTimer = 0, audioOn = true, audioCtx;
  let keys = {}, pointer = { x: 700, y: 320 }, mouseDown = false, joystick = { x: 0, y: 0, active: false };
  let player, boss, particles = [], projectiles = [], stones = [], trees = [];
  const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
  const rand = (a,b) => a+Math.random()*(b-a);
  const distance = (a,b) => Math.hypot(a.x-b.x,a.y-b.y);
  function sound(freq=260,duration=.08,type='sine',volume=.035){
    if(!audioOn)return;
    try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.setValueAtTime(freq,audioCtx.currentTime);g.gain.setValueAtTime(volume,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration)}catch(e){}
  }
  function initWorld(){
    player={x:270,y:350,hp:100,max:100,flasks:3,face:0,attack:0,attackCooldown:0,attackHit:false,roll:0,rollCooldown:0,invuln:0,hitFlash:0};
    boss={x:700,y:310,hp:100,max:100,phase:1,state:'idle',timer:1.6,attack:'',face:Math.PI,stun:0,hitFlash:0,pattern:0};
    particles=[];projectiles=[];stones=[];trees=[];
    for(let i=0;i<38;i++){
      const x=rand(35,965),y=rand(36,605);
      if(Math.hypot(x-500,y-320)>205)trees.push({x,y,r:rand(16,35),tone:Math.random()});
    }
    for(let i=0;i<17;i++){let x=rand(55,945),y=rand(65,585);if(Math.hypot(x-500,y-320)>160)stones.push({x,y,r:rand(4,13),rot:rand(0,6)})}
    updateHud();
  }
  function startGame(){initWorld();state='playing';hud.overlay.classList.add('hidden');$('#touchControls').classList.add('visible');hud.hint.textContent='The Warden is watching. Strike when it rests.';sound(330,.12,'triangle');sound(490,.17,'sine');}
  function showToast(text){hud.toast.textContent=text;hud.toast.classList.add('show');toastTimer=2.2}
  function updateHud(){hud.health.style.width=`${100*player.hp/player.max}%`;hud.healthText.textContent=`${Math.ceil(player.hp)} / ${player.max}`;hud.flasks.textContent=player.flasks;hud.boss.style.width=`${100*boss.hp/boss.max}%`;hud.phase.textContent=boss.phase===1?'ANCIENT SENTINEL':'EMBER UNBOUND';}
  function burst(x,y,color,count=12,power=100){for(let i=0;i<count;i++){let a=rand(0,Math.PI*2),s=rand(power*.25,power);particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:rand(.25,.7),max:.7,size:rand(2,5),color})}}
  function damagePlayer(amount,sourceX,sourceY){if(player.invuln>0||state!=='playing')return;player.hp=Math.max(0,player.hp-amount);player.invuln=.9;player.hitFlash=.3;shake=9;$('#flash').classList.remove('active');void $('#flash').offsetWidth;$('#flash').classList.add('active');const a=Math.atan2(player.y-sourceY,player.x-sourceX);player.x=clamp(player.x+Math.cos(a)*24,70,930);player.y=clamp(player.y+Math.sin(a)*24,90,570);burst(player.x,player.y,'#e5795f',10,130);sound(115,.2,'sawtooth',.04);updateHud();if(player.hp<=0)endGame(false)}
  function attack(){if(state!=='playing'||player.attackCooldown>0||player.roll>0)return;player.attack=.25;player.attackCooldown=.39;player.attackHit=false;const a=Math.atan2(pointer.y-player.y,pointer.x-player.x);player.face=a;sound(420,.07,'triangle',.022)}
  function roll(){if(state!=='playing'||player.rollCooldown>0)return;let dx=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+(joystick.x||0),dy=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+(joystick.y||0);if(Math.hypot(dx,dy)<.1){dx=Math.cos(player.face);dy=Math.sin(player.face)}let l=Math.hypot(dx,dy)||1;player.rollDir={x:dx/l,y:dy/l};player.roll=.25;player.rollCooldown=.75;player.invuln=.38;sound(170,.1,'triangle',.025)}
  function heal(){if(state!=='playing'||player.flasks<=0||player.hp>=player.max)return;player.flasks--;player.hp=Math.min(player.max,player.hp+36);burst(player.x,player.y,'#c8db84',18,90);showToast('SUNDEW RESTORES 36 VITALITY');sound(560,.22,'sine');updateHud()}
  function beginBossAttack(){boss.state='tell';boss.timer=boss.phase===1?.83:.62;boss.pattern++;let pick=boss.pattern%3;boss.attack=boss.phase===1?(pick===0?'lunge':'slam'):(pick===0?'lunge':pick===1?'slam':'volley');boss.face=Math.atan2(player.y-boss.y,player.x-boss.x);sound(105,.35,'sawtooth',.018)}
  function bossAttack(){
    if(boss.attack==='lunge'){
      boss.state='lunge';boss.timer=.42;boss.vx=Math.cos(boss.face)*(boss.phase===1?460:560);boss.vy=Math.sin(boss.face)*(boss.phase===1?460:560);shake=4;
    }else if(boss.attack==='slam'){
      boss.state='slam';boss.timer=.65;boss.slamRadius= boss.phase===1?156:190;shake=5;
    }else{
      boss.state='volley';boss.timer=.7;
      for(let i=-1;i<=1;i++){let a=boss.face+i*.23;projectiles.push({x:boss.x+Math.cos(a)*48,y:boss.y+Math.sin(a)*48,vx:Math.cos(a)*260,vy:Math.sin(a)*260,r:9,life:2.5,color:'#ff8a4c'})}
    }
    sound(boss.attack==='slam'?90:150,.16,'square',.025);
  }
  function resolveBossAttack(){
    if(boss.state==='lunge'){if(distance(player,boss)<76)damagePlayer(22,boss.x,boss.y);boss.state='recover';boss.timer=.72;boss.vx=0;boss.vy=0;}
    else if(boss.state==='slam'){if(distance(player,boss)<boss.slamRadius)damagePlayer(boss.phase===1?19:24,boss.x,boss.y);for(let i=0;i<48;i++){let a=i*Math.PI/24;particles.push({x:boss.x+Math.cos(a)*36,y:boss.y+Math.sin(a)*36,vx:Math.cos(a)*rand(130,250),vy:Math.sin(a)*rand(130,250),life:.55,max:.55,size:rand(3,6),color:'#e28b52'})}boss.state='recover';boss.timer=.86;shake=12;}
    else if(boss.state==='volley'){boss.state='recover';boss.timer=.65;}
  }
  function update(dt){
    time+=dt;if(toastTimer>0){toastTimer-=dt;if(toastTimer<=0)hud.toast.classList.remove('show')}
    if(state!=='playing')return;
    player.attackCooldown=Math.max(0,player.attackCooldown-dt);player.rollCooldown=Math.max(0,player.rollCooldown-dt);player.invuln=Math.max(0,player.invuln-dt);player.hitFlash=Math.max(0,player.hitFlash-dt);
    if(player.attack>0){player.attack-=dt;if(!player.attackHit&&player.attack<.15){player.attackHit=true;const d=distance(player,boss),a=Math.atan2(boss.y-player.y,boss.x-player.x),diff=Math.atan2(Math.sin(a-player.face),Math.cos(a-player.face));if(d<156&&Math.abs(diff)<1.17&&boss.state!=='lunge'){boss.hp=Math.max(0,boss.hp-(boss.phase===1?8:7));boss.hitFlash=.13;boss.stun=.09;burst(boss.x+Math.cos(a)*48,boss.y+Math.sin(a)*48,'#ffe19a',9,120);sound(210,.1,'square',.03);updateHud();if(boss.hp<=0){endGame(true);return}if(boss.phase===1&&boss.hp<=50){boss.phase=2;boss.state='recover';boss.timer=1.1;boss.hp=Math.max(50,boss.hp);showToast('THE LAST EMBER IGNITES');shake=10;burst(boss.x,boss.y,'#ff9b50',38,190);sound(85,.45,'sawtooth',.05);updateHud()}}}}
    let dx=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+(joystick.x||0),dy=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+(joystick.y||0),len=Math.hypot(dx,dy);if(len>1){dx/=len;dy/=len}
    if(player.roll>0){player.roll-=dt;player.x+=player.rollDir.x*460*dt;player.y+=player.rollDir.y*460*dt;}
    else{let speed=player.attack>0?195:245;player.x+=dx*speed*dt;player.y+=dy*speed*dt;if(len>.1&&!(player.attack>0))player.face=Math.atan2(dy,dx)}
    player.x=clamp(player.x,68,932);player.y=clamp(player.y,90,566);
    if(boss.stun>0)boss.stun-=dt;else{
      boss.timer-=dt;
      if(boss.state==='idle'&&boss.timer<=0)beginBossAttack();
      else if(boss.state==='tell'&&boss.timer<=0)bossAttack();
      else if((boss.state==='lunge'||boss.state==='slam'||boss.state==='volley')&&boss.timer<=0)resolveBossAttack();
      else if(boss.state==='recover'&&boss.timer<=0){boss.state='idle';boss.timer=boss.phase===1?1.32:.76}
    }
    if(boss.state==='lunge'){boss.x+=boss.vx*dt;boss.y+=boss.vy*dt;boss.x=clamp(boss.x,95,905);boss.y=clamp(boss.y,100,540);if(Math.abs(boss.x-500)>410||Math.abs(boss.y-320)>220){boss.state='recover';boss.timer=.55}}
    if(boss.state==='slam'&&boss.timer<=0)resolveBossAttack();
    for(let i=projectiles.length-1;i>=0;i--){let p=projectiles[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;if(distance(p,player)<p.r+15){damagePlayer(12,p.x,p.y);projectiles.splice(i,1)}else if(p.life<=0||p.x<0||p.x>W||p.y<0||p.y>H)projectiles.splice(i,1)}
    for(let i=particles.length-1;i>=0;i--){let p=particles[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=Math.pow(.06,dt);p.vy*=Math.pow(.06,dt);p.life-=dt;if(p.life<=0)particles.splice(i,1)}
    shake=Math.max(0,shake-25*dt);
  }
  function endGame(win){state=win?'win':'dead';$('#touchControls').classList.remove('visible');hud.title.innerHTML=win?'Dawn returns<br><em>to Hollowfall</em>':'The grove<br><em>falls quiet</em>';hud.copy.textContent=win?'The Warden’s ember is yours. Sunlight spills through the canopy, and somewhere in the village a bell begins to ring. The forest remembers your name.':'The Warden’s light fades, but the grove is not lost. Gather your courage and try again.';$('.overline').innerHTML=win?'<span></span> THE HOLLOW IS HEALED <span></span>':'<span></span> NOT THE END <span></span>';hud.start.innerHTML=(win?'Play again':'Rise again')+' <span>→</span>';hud.overlay.classList.remove('hidden');sound(win?620:100,.45,win?'sine':'sawtooth',.04)}
  function roundedRect(c,x,y,w,h,r){c.beginPath();c.roundRect(x,y,w,h,r)}
  function drawBackground(){
    let g=ctx.createLinearGradient(0,0,1000,640);g.addColorStop(0,'#1d3028');g.addColorStop(.5,'#25352a');g.addColorStop(1,'#17271f');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    // soft forest light
    let glow=ctx.createRadialGradient(515,290,20,515,310,370);glow.addColorStop(0,'#81915b30');glow.addColorStop(.6,'#52654516');glow.addColorStop(1,'#18241e00');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
    // paths etched into the earth
    ctx.save();ctx.globalAlpha=.16;ctx.strokeStyle='#c0ad7b';ctx.lineWidth=1;for(let i=0;i<6;i++){ctx.beginPath();ctx.ellipse(505,321,155+i*15,112+i*12,-.1,0,Math.PI*2);ctx.stroke()}ctx.restore();
    // edge vignette
    const v=ctx.createRadialGradient(500,320,215,500,320,620);v.addColorStop(0,'#00000000');v.addColorStop(1,'#07110de0');ctx.fillStyle=v;ctx.fillRect(0,0,W,H);
    for(const t of trees){drawTree(t)}
    for(const s of stones){ctx.save();ctx.translate(s.x,s.y);ctx.rotate(s.rot);ctx.fillStyle='#84907a';ctx.globalAlpha=.28;ctx.beginPath();ctx.ellipse(0,0,s.r*1.5,s.r*.75,0,0,7);ctx.fill();ctx.restore()}
    // ring of old standing stones
    for(let i=0;i<9;i++){let a=i*Math.PI*2/9+.2,x=500+Math.cos(a)*171,y=321+Math.sin(a)*126;ctx.fillStyle='#8c9275';ctx.globalAlpha=.42;ctx.beginPath();ctx.ellipse(x,y,7,13,a,0,7);ctx.fill();ctx.globalAlpha=1;ctx.fillStyle='#d5c586';ctx.globalAlpha=.18;ctx.beginPath();ctx.arc(x,y,2,0,7);ctx.fill();ctx.globalAlpha=1}
    // glyphs and moss
    ctx.save();ctx.globalAlpha=.2;ctx.strokeStyle='#d0c77d';ctx.lineWidth=1;for(let i=0;i<8;i++){let a=i*Math.PI/4;ctx.beginPath();ctx.arc(500,320,126,a+.1,a+.27);ctx.stroke()}ctx.restore();
  }
  function drawTree(t){ctx.save();ctx.translate(t.x,t.y);ctx.globalAlpha=.78;ctx.fillStyle='#0d1914';ctx.beginPath();ctx.ellipse(4,9,t.r*1.16,t.r*.72,-.3,0,7);ctx.fill();ctx.fillStyle=t.tone>.5?'#304535':'#283a30';ctx.beginPath();ctx.arc(0,0,t.r,0,7);ctx.fill();ctx.fillStyle=t.tone>.5?'#40543a':'#344739';ctx.beginPath();ctx.arc(-t.r*.22,-t.r*.22,t.r*.63,0,7);ctx.fill();ctx.fillStyle='#707c50';ctx.globalAlpha=.4;ctx.beginPath();ctx.arc(-t.r*.28,-t.r*.3,t.r*.18,0,7);ctx.fill();ctx.restore()}
  function drawPlayer(){
    ctx.save();ctx.translate(player.x,player.y);if(player.invuln>0&&Math.floor(time*18)%2)ctx.globalAlpha=.42;
    ctx.fillStyle='#09120f88';ctx.beginPath();ctx.ellipse(0,9,17,8,0,0,7);ctx.fill();
    // cloak
    ctx.fillStyle=player.hitFlash>0?'#f4bca1':'#a7b27c';ctx.beginPath();ctx.moveTo(-10,-6);ctx.quadraticCurveTo(-15,8,-8,14);ctx.lineTo(9,12);ctx.quadraticCurveTo(16,2,8,-8);ctx.closePath();ctx.fill();
    ctx.fillStyle='#d9c99c';ctx.beginPath();ctx.arc(0,-7,7,0,7);ctx.fill();ctx.fillStyle='#594d3b';ctx.beginPath();ctx.arc(-1,-10,7,Math.PI,Math.PI*2);ctx.fill();
    ctx.rotate(player.face);ctx.strokeStyle='#e7e2c7';ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(6,0);ctx.lineTo(25,0);ctx.stroke();ctx.strokeStyle='#bd9862';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(6,-4);ctx.lineTo(6,4);ctx.stroke();
    if(player.attack>0){let prog=1-player.attack/.25;ctx.strokeStyle=`rgba(246,224,153,${Math.sin(prog*Math.PI)*.8})`;ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,0,48,-.9+prog*1.7,-.9+prog*1.7+1.15);ctx.stroke();ctx.strokeStyle=`rgba(255,244,197,${Math.sin(prog*Math.PI)*.6})`;ctx.lineWidth=1;ctx.beginPath();ctx.arc(0,0,57,-.9+prog*1.7,-.9+prog*1.7+1.15);ctx.stroke()}
    ctx.restore();
  }
  function drawBoss(){
    const b=boss, pulse=1+Math.sin(time*3)*.035;
    // shadow and warning tell
    ctx.save();ctx.translate(b.x,b.y);
    if(b.state==='tell'){
      ctx.globalAlpha=.19+.12*Math.sin(time*25);ctx.fillStyle=b.attack==='slam'?'#ff8b45':'#f04c3d';ctx.beginPath();ctx.ellipse(0,0,b.attack==='slam'?b.slamRadius||175:55,b.attack==='slam'?b.slamRadius||175:55,0,0,7);ctx.fill();ctx.globalAlpha=.8;ctx.strokeStyle='#ff9b5b';ctx.lineWidth=2;ctx.setLineDash([6,8]);ctx.beginPath();if(b.attack==='slam')ctx.arc(0,0,b.slamRadius||175,0,7);else{ctx.moveTo(0,0);ctx.lineTo(Math.cos(b.face)*300,Math.sin(b.face)*300)}ctx.stroke();ctx.setLineDash([])
    }
    ctx.globalAlpha=1;ctx.fillStyle='#07100d88';ctx.beginPath();ctx.ellipse(2,18,59,25,0,0,7);ctx.fill();
    // ember aura
    const aura=ctx.createRadialGradient(0,0,22,0,0,86);aura.addColorStop(0,b.phase===2?'#ff773a66':'#e6bb5d44');aura.addColorStop(1,'#e56c3600');ctx.fillStyle=aura;ctx.beginPath();ctx.arc(0,0,86,0,7);ctx.fill();
    ctx.scale(pulse,pulse);
    // shoulders / bark armor
    ctx.fillStyle=b.hitFlash>0?'#fff1c7':b.phase===2?'#70433a':'#435143';ctx.beginPath();ctx.ellipse(0,4,43,52,0,0,7);ctx.fill();
    ctx.fillStyle=b.hitFlash>0?'#fff1c7':b.phase===2?'#a2553d':'#68775b';ctx.beginPath();ctx.moveTo(-39,-17);ctx.lineTo(-53,-47);ctx.lineTo(-23,-38);ctx.lineTo(-11,-55);ctx.lineTo(1,-37);ctx.lineTo(24,-51);ctx.lineTo(26,-29);ctx.lineTo(43,-21);ctx.lineTo(36,21);ctx.lineTo(18,44);ctx.lineTo(-20,42);ctx.lineTo(-41,20);ctx.closePath();ctx.fill();
    // carved face plate
    ctx.fillStyle='#252c24';ctx.beginPath();ctx.ellipse(0,-8,26,29,0,0,7);ctx.fill();
    ctx.fillStyle=b.phase===2?'#ffb35f':'#e3cf83';ctx.shadowColor=b.phase===2?'#ff6735':'#e6c95e';ctx.shadowBlur=15;ctx.beginPath();ctx.ellipse(-10,-10,5,3,0,0,7);ctx.ellipse(10,-10,5,3,0,0,7);ctx.fill();ctx.shadowBlur=0;
    // branch crown
    ctx.strokeStyle='#4b5a43';ctx.lineWidth=8;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-19,-29);ctx.lineTo(-34,-53);ctx.lineTo(-29,-68);ctx.moveTo(-32,-50);ctx.lineTo(-46,-55);ctx.moveTo(17,-30);ctx.lineTo(32,-55);ctx.lineTo(28,-68);ctx.moveTo(30,-52);ctx.lineTo(45,-58);ctx.stroke();
    ctx.fillStyle=b.phase===2?'#f18a48':'#d7c579';for(let i=0;i<5;i++){let a=time*1.8+i*1.256;ctx.globalAlpha=.55+.3*Math.sin(time*4+i);ctx.beginPath();ctx.arc(Math.cos(a)*63,Math.sin(a)*48,2.1,0,7);ctx.fill()}ctx.globalAlpha=1;ctx.restore();
  }
  function draw(){
    ctx.save();ctx.clearRect(0,0,W,H);if(shake>0)ctx.translate(rand(-shake,shake),rand(-shake,shake));drawBackground();
    // spectral motes
    for(let i=0;i<25;i++){let x=(i*173+time*(8+i%3)*((i%2)?1:-1)+1200)%1000,y=(i*97+Math.sin(time*.7+i)*35+640)%640;ctx.globalAlpha=.15+.16*Math.sin(time*2+i);ctx.fillStyle=i%4===0?'#ebd98a':'#b8c892';ctx.beginPath();ctx.arc(x,y,i%6===0?2:1,0,7);ctx.fill()}ctx.globalAlpha=1;
    if(boss.state==='slam'){ctx.globalAlpha=.22+.12*Math.sin(time*18);ctx.strokeStyle='#ffaf6a';ctx.lineWidth=3;ctx.beginPath();ctx.arc(boss.x,boss.y,boss.slamRadius*(1-boss.timer/.65),0,7);ctx.stroke();ctx.globalAlpha=1}
    for(const p of projectiles){ctx.shadowColor=p.color;ctx.shadowBlur=18;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#ffe2a3';ctx.beginPath();ctx.arc(p.x-2,p.y-2,3,0,7);ctx.fill()}
    drawBoss();drawPlayer();
    for(const p of particles){ctx.globalAlpha=clamp(p.life/p.max,0,1);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,7);ctx.fill()}ctx.globalAlpha=1;
    // canvas reticle
    if(state==='playing'&&pointer.x>0){ctx.strokeStyle='#f0e2b588';ctx.lineWidth=1;ctx.beginPath();ctx.arc(pointer.x,pointer.y,7,0,7);ctx.moveTo(pointer.x-11,pointer.y);ctx.lineTo(pointer.x-5,pointer.y);ctx.moveTo(pointer.x+5,pointer.y);ctx.lineTo(pointer.x+11,pointer.y);ctx.moveTo(pointer.x,pointer.y-11);ctx.lineTo(pointer.x,pointer.y-5);ctx.moveTo(pointer.x,pointer.y+5);ctx.lineTo(pointer.x,pointer.y+11);ctx.stroke()}
    ctx.restore();
  }
  function loop(now){let dt=Math.min(.033,(now-last)/1000||0);last=now;update(dt);draw();requestAnimationFrame(loop)}
  function getPoint(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height}}
  canvas.addEventListener('pointermove',e=>{pointer=getPoint(e);if(e.pointerType==='touch')return});
  canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){pointer=getPoint(e);mouseDown=true;attack()}});
  window.addEventListener('pointerup',()=>mouseDown=false);
  window.addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();keys[e.code]=true;if(e.repeat)return;if(e.code==='Space'||e.code==='ShiftLeft'||e.code==='ShiftRight')roll();if(e.code==='KeyQ')heal();if(e.code==='KeyJ'||e.code==='Enter')attack()});
  window.addEventListener('keyup',e=>keys[e.code]=false);
  $('#startBtn').addEventListener('click',startGame);$('#healBtn').addEventListener('click',heal);$('#soundBtn').addEventListener('click',()=>{audioOn=!audioOn;$('#soundBtn').innerHTML=audioOn?'♫ <span>Sound on</span>':'♫ <span>Sound off</span>'});$('#touchAttack').addEventListener('pointerdown',e=>{e.preventDefault();attack()});$('#touchRoll').addEventListener('pointerdown',e=>{e.preventDefault();roll()});
  const joy=$('#joystick'),knob=joy.querySelector('.joy-knob');let joyId=null;
  joy.addEventListener('pointerdown',e=>{e.preventDefault();joyId=e.pointerId;joy.setPointerCapture(joyId);joystick.active=true;moveJoy(e)});
  joy.addEventListener('pointermove',e=>{if(e.pointerId===joyId)moveJoy(e)});
  function moveJoy(e){let r=joy.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),max=r.width*.31,l=Math.hypot(dx,dy);if(l>max){dx*=max/l;dy*=max/l}joystick.x=dx/max;joystick.y=dy/max;knob.style.transform=`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px))`}
  function releaseJoy(e){if(e.pointerId!==joyId)return;joyId=null;joystick.x=joystick.y=0;knob.style.transform='translate(-50%,-50%)'}joy.addEventListener('pointerup',releaseJoy);joy.addEventListener('pointercancel',releaseJoy);
  initWorld();draw();requestAnimationFrame(loop);
})();
