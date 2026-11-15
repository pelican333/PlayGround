(() => {
  'use strict';
  const canvas = document.getElementById('world'), ctx = canvas.getContext('2d');
  const mini = document.getElementById('minimap'), mctx = mini.getContext('2d');
  const $ = (id) => document.getElementById(id);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const dist = (a,b) => Math.hypot(a.x-b.x,a.y-b.y);
  let W=innerWidth,H=innerHeight,dpr=1,last=0,toastTimer=0,dialogueDone=null;
  const world = { x:3, y:-1, vx:0, vy:0, faceX:1, faceY:0, walk:0, roll:0, attack:0, health:100, stamina:100, invuln:0, time:0, day:1, dungeon:false, ended:false, kills:0, discoveries:0 };
  const keys = new Set(), heldTouch = new Set();
  const items = { moonpetal:0, fang:0, wood:0, ore:0, fiber:0, tea:2, coins:12 };
  const quest = { step:0, petals:0, fangs:0, clue:false, boss:false };
  const player = world;
  const npcs = [
    {id:'rowan',name:'Elder Rowan',role:'VILLAGE ELDER',initial:'R',x:1.2,y:1.4,color:'#c89562'},
    {id:'mara',name:'Mara',role:'THE VILLAGE KEEPER',initial:'M',x:-2.3,y:.1,color:'#8aa37d'},
    {id:'pippin',name:'Pippin',role:'WAYFARER',initial:'P',x:3.7,y:2.4,color:'#9b91bd'}
  ];
  const resources = [
    {id:'petal-a',kind:'moonpetal',x:6.5,y:-5.5,name:'Moonpetal',color:'#d8c6f0'},
    {id:'petal-b',kind:'moonpetal',x:9.2,y:-2.2,name:'Moonpetal',color:'#c9b9e8'},
    {id:'petal-c',kind:'moonpetal',x:5.2,y:-9.1,name:'Moonpetal',color:'#e4cbe0'},
    {id:'petal-d',kind:'moonpetal',x:13,y:-7,name:'Moonpetal',color:'#d8c6f0'},
    {id:'ore-a',kind:'ore',x:-7,y:7,name:'Copper outcrop',color:'#c98761'},
    {id:'ore-b',kind:'ore',x:14,y:10,name:'Copper outcrop',color:'#bc8963'},
    {id:'wood-a',kind:'wood',x:-6,y:-6,name:'Fallen branch',color:'#b48a5f'},
    {id:'wood-b',kind:'wood',x:11,y:7,name:'Fallen branch',color:'#b48a5f'},
    {id:'fiber-a',kind:'fiber',x:-11,y:-5,name:'Wild flax',color:'#d5ca85'},
    {id:'fiber-b',kind:'fiber',x:2,y:13,name:'Wild flax',color:'#d5ca85'},
    {id:'cave',kind:'cave',x:-13,y:11,name:'Whispering Cave',color:'#87917c'}
  ];
  const monsters = [
    {id:'wolf-a',kind:'wolf',x:10,y:-7,hp:3,max:3,alive:true,aggro:false},
    {id:'wolf-b',kind:'wolf',x:14,y:-3,hp:3,max:3,alive:true,aggro:false},
    {id:'wolf-c',kind:'wolf',x:18,y:-9,hp:3,max:3,alive:true,aggro:false},
    {id:'boss',kind:'boss',x:7,y:0,hp:8,max:8,alive:true,aggro:false}
  ];
  const props=[];
  let seed=89324; function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
  for(let i=0;i<145;i++){
    const x=Math.floor(rand()*64-32),y=Math.floor(rand()*64-32); if(Math.hypot(x,y)<5)continue;
    const r=rand(); props.push({x:x+(rand()-.5)*.8,y:y+(rand()-.5)*.8,kind:r<.66?'tree':r<.84?'bush':'stone',variant:rand(),scale:.75+rand()*.65});
  }
  let activeSlot=0, activeTab='story', modal=false, started=false, dialogueIndex=0, currentNpc=null;
  const dialogs = {
    rowan:[
      ['The lanterns along the old road have gone dark. The Hollow is forgetting its way home.','Will you help me wake the heartfire again?'],
      ['The heartfire answers to living things. Moonpetals grow where the forest keeps its old, quiet magic.','Bring me three, and we will listen for the next part of the song.'],
      ['These petals still remember the moon. Thank you, little wanderer.','The wild has grown uneasy, though. Duskfangs have been prowling the north trail. Bring me two of their fangs.'],
      ['You faced the dark with a steady heart. The old map has begun to show itself.','A listening stone lies in Whispering Cave, beyond the western ridge. Find its clue, and the Hollow will know what to do.'],
      ['The stone speaks of a guardian beneath the roots. It has carried the heartfire too long.','Follow the cave passage and set it free. I will keep the village light for you.'],
      ['The village lanterns are shining again. You made a home of this place, and a friend of the wild.','There will always be another path beyond the map, if you want it.']
    ],
    mara:[['I keep the little things in order around here. A kind hand makes this place feel like home.','Gather branches and copper on your travels. I can make something useful of them.'],['The animals are calmer when you move slowly. Try bringing them a little warmth.','If you find flax, I can trade a healing tea for three fibers.']]
  };

  function resize(){W=innerWidth;H=innerHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.floor(W*dpr);canvas.height=Math.floor(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)}
  addEventListener('resize',resize); resize();
  function biome(x,y){if(world.dungeon)return 'cave'; if(Math.hypot(x,y)<5.2)return 'village';if(y<-5&&x<3)return 'forest';if(x>15&&y>4)return 'desert';if(x<-14&&y<-1)return 'snow';if(y>12&&x<4)return 'marsh';return (x>8&&y<-10)?'forest':'meadow'}
  const pal={village:['#748e64','#7d966b','#72885d'],meadow:['#769564','#819c69','#6f8c5c'],forest:['#4d7657','#567d5b','#4a7052'],desert:['#b79a68','#c1a473','#b09764'],snow:['#a9b5a4','#b7c1b2','#a3b2a5'],marsh:['#607d69','#68836c','#597766'],cave:['#343e38','#3c463e','#303a35']};
  const iso=(x,y)=>({x:(x-y)*34,y:(x+y)*17});
  function centerOf(x,y){const p=iso(x-world.x,y-world.y);return{x:W/2+p.x,y:H*.53+p.y}}
  function poly(points,fill,stroke){ctx.beginPath();ctx.moveTo(points[0][0],points[0][1]);for(let i=1;i<points.length;i++)ctx.lineTo(points[i][0],points[i][1]);ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke()}}
  function diamond(cx,cy,color){poly([[cx,cy-17],[cx+34,cy],[cx,cy+17],[cx-34,cy]],color)}
