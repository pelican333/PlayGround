(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="160",uc=0,Pa=1,dc=2,_l=1,vl=2,yn=3,Bn=0,Ge=1,He=2,En=0,Pi=1,Sn=2,La=3,Da=4,fc=5,Zn=100,pc=101,mc=102,Ua=103,Ia=104,gc=200,_c=201,vc=202,xc=203,Qr=204,ta=205,Mc=206,yc=207,Sc=208,wc=209,bc=210,Ec=211,Tc=212,Ac=213,Rc=214,Cc=0,Pc=1,Lc=2,Zs=3,Dc=4,Uc=5,Ic=6,Nc=7,xl=0,Fc=1,Oc=2,Fn=0,Ml=1,yl=2,Sl=3,da=4,zc=5,wl=6,bl=300,Di=301,Ui=302,ea=303,na=304,ir=306,ia=1e3,cn=1001,sa=1002,ke=1003,Na=1004,hr=1005,tn=1006,Bc=1007,rs=1008,On=1009,kc=1010,Gc=1011,fa=1012,El=1013,In=1014,Nn=1015,Tn=1016,Tl=1017,Al=1018,Qn=1020,Hc=1021,hn=1023,Vc=1024,Wc=1025,ti=1026,Ii=1027,Xc=1028,Rl=1029,qc=1030,Cl=1031,Pl=1033,ur=33776,dr=33777,fr=33778,pr=33779,Fa=35840,Oa=35841,za=35842,Ba=35843,Ll=36196,ka=37492,Ga=37496,Ha=37808,Va=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,ja=37815,Za=37816,Ka=37817,Ja=37818,Qa=37819,to=37820,eo=37821,mr=36492,no=36494,io=36495,Yc=36283,so=36284,ro=36285,ao=36286,Dl=3e3,ei=3001,$c=3200,jc=3201,Ul=0,Zc=1,en="",ge="srgb",An="srgb-linear",pa="display-p3",sr="display-p3-linear",Ks="linear",le="srgb",Js="rec709",Qs="p3",si=7680,oo=519,Kc=512,Jc=513,Qc=514,Il=515,th=516,eh=517,nh=518,ih=519,ra=35044,lo="300 es",aa=1035,bn=2e3,tr=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,oa=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function sh(s,t){return(s%t+t)%t}function gr(s,t,e){return(1-e)*s+e*t}function co(s){return(s&s-1)===0&&s!==0}function la(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,i,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],v=i[4],S=i[7],C=i[2],A=i[5],T=i[8];return r[0]=a*_+o*x+l*C,r[3]=a*m+o*v+l*A,r[6]=a*f+o*S+l*T,r[1]=c*_+h*x+u*C,r[4]=c*m+h*v+u*A,r[7]=c*f+h*S+u*T,r[2]=d*_+p*x+g*C,r[5]=d*m+p*v+g*A,r[8]=d*f+p*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new Yt;function Nl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rh(){const s=er("canvas");return s.style.display="block",s}const ho={};function ts(s){s in ho||(ho[s]=!0,console.warn(s))}const uo=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fo=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[An]:{transfer:Ks,primaries:Js,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:le,primaries:Js,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[sr]:{transfer:Ks,primaries:Qs,toReference:s=>s.applyMatrix3(fo),fromReference:s=>s.applyMatrix3(uo)},[pa]:{transfer:le,primaries:Qs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(fo),fromReference:s=>s.applyMatrix3(uo).convertLinearToSRGB()}},ah=new Set([An,sr]),ee={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ah.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=hs[t].toReference,i=hs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return hs[s].primaries},getTransfer:function(s){return s===en?Ks:hs[s].transfer}};function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ri;class Fl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=er("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oh=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=zn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xr(i[a].image)):r.push(xr(i[a]))}else r=xr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lh=0;class Ve extends Oi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=cn,i=cn,r=tn,a=rs,o=hn,l=On,c=Ve.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=zn(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?ge:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?ei:Dl}set encoding(t){ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ei?ge:en}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=bl;Ve.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(f+1)/2,A=(h+d)/4,T=(u+_)/4,D=(g+m)/4;return v>S&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=T/n):S>C?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=D/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=D/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ch extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?ge:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zl extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,f*x);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const S=o*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new R,po=new on;class ni{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),ds.subVectors(this.max,Gi),ai.subVectors(t.a,Gi),oi.subVectors(t.b,Gi),li.subVectors(t.c,Gi),Rn.subVectors(oi,ai),Cn.subVectors(li,oi),Vn.subVectors(ai,li);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!yr(e,ai,oi,li,ds)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,ai,oi,li,ds))?!1:(fs.crossVectors(Rn,Cn),e=[fs.x,fs.y,fs.z],yr(e,ai,oi,li,ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new R,new R,new R,new R,new R,new R,new R,new R],nn=new R,us=new ni,ai=new R,oi=new R,li=new R,Rn=new R,Cn=new R,Vn=new R,Gi=new R,ds=new R,fs=new R,Wn=new R;function yr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const uh=new ni,Hi=new R,Sr=new R;class ii{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hi.subVectors(t,this.center);const e=Hi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hi.copy(t.center).add(Sr)),this.expandByPoint(Hi.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new R,wr=new R,ps=new R,Pn=new R,br=new R,ms=new R,Er=new R;class ma{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wr.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Pn.dot(this.direction),l=-Pn.dot(ps),c=Pn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wr).addScaledVector(ps,d),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){br.subVectors(e,t),ms.subVectors(n,t),Er.crossVectors(br,ms);let a=this.direction.dot(Er),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,t);const l=o*this.direction.dot(ms.crossVectors(Pn,ms));if(l<0)return null;const c=o*this.direction.dot(br.cross(Pn));if(c<0||l+c>a)return null;const h=-o*Pn.dot(Er);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dh,t,fh)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Ln.crossVectors(n,Xe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Ln.crossVectors(n,Xe)),Ln.normalize(),gs.crossVectors(Xe,Ln),i[0]=Ln.x,i[4]=gs.x,i[8]=Xe.x,i[1]=Ln.y,i[5]=gs.y,i[9]=Xe.y,i[2]=Ln.z,i[6]=gs.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],C=n[15],A=i[0],T=i[4],D=i[8],M=i[12],w=i[1],F=i[5],N=i[9],J=i[13],P=i[2],U=i[6],H=i[10],q=i[14],$=i[3],Q=i[7],tt=i[11],ot=i[15];return r[0]=a*A+o*w+l*P+c*$,r[4]=a*T+o*F+l*U+c*Q,r[8]=a*D+o*N+l*H+c*tt,r[12]=a*M+o*J+l*q+c*ot,r[1]=h*A+u*w+d*P+p*$,r[5]=h*T+u*F+d*U+p*Q,r[9]=h*D+u*N+d*H+p*tt,r[13]=h*M+u*J+d*q+p*ot,r[2]=g*A+_*w+m*P+f*$,r[6]=g*T+_*F+m*U+f*Q,r[10]=g*D+_*N+m*H+f*tt,r[14]=g*M+_*J+m*q+f*ot,r[3]=x*A+v*w+S*P+C*$,r[7]=x*T+v*F+S*U+C*Q,r[11]=x*D+v*N+S*H+C*tt,r[15]=x*M+v*J+S*q+C*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=e*x+n*v+i*S+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*T,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*T,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*T,t[4]=v*T,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*T,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*T,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*T,t[8]=S*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=C*T,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,x=l*c,v=l*h,S=l*u,C=n.x,A=n.y,T=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+S)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(p-S)*A,i[5]=(1-(d+f))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(m-x)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const a=ci.set(i[4],i[5],i[6]).length(),o=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const c=1/r,h=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=bn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===tr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===bn)g=(a+r)*u,_=-2*u;else if(o===tr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new R,sn=new Kt,dh=new R(0,0,0),fh=new R(1,1,1),Ln=new R,gs=new R,Xe=new R,mo=new Kt,go=new on;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return go.setFromEuler(this),this.setFromQuaternion(go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ph=0;const _o=new R,hi=new on,vn=new Kt,_s=new R,Vi=new R,mh=new R,gh=new on,vo=new R(1,0,0),xo=new R(0,1,0),Mo=new R(0,0,1),_h={type:"added"},vh={type:"removed"};class Me extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new ln,n=new on,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Yt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(vo,t)}rotateY(t){return this.rotateOnAxis(xo,t)}rotateZ(t){return this.rotateOnAxis(Mo,t)}translateOnAxis(t,e){return _o.copy(t).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vo,t)}translateY(t){return this.translateOnAxis(xo,t)}translateZ(t){return this.translateOnAxis(Mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_s.copy(t):_s.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Vi,_s,this.up):vn.lookAt(_s,Vi,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(vn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_h)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,t,mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new R,xn=new R,Tr=new R,Mn=new R,ui=new R,di=new R,yo=new R,Ar=new R,Rr=new R,Cr=new R;let vs=!1;class je{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),xn.subVectors(n,e),Tr.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(xn),l=rn.dot(Tr),c=xn.dot(xn),h=xn.dot(Tr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,r,a,o,l){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),xn.subVectors(t,e),rn.cross(xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),rn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vs=!0),je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ui.subVectors(i,n),di.subVectors(r,n),Ar.subVectors(t,n);const l=ui.dot(Ar),c=di.dot(Ar);if(l<=0&&c<=0)return e.copy(n);Rr.subVectors(t,i);const h=ui.dot(Rr),u=di.dot(Rr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ui,a);Cr.subVectors(t,r);const p=ui.dot(Cr),g=di.dot(Cr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(di,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return yo.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(yo,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Pr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=sh(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pr(a,r,t+1/3),this.g=Pr(a,r,t),this.b=Pr(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=kl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ee.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Le(Ce.r*255,0,255))*65536+Math.round(Le(Ce.g*255,0,255))*256+Math.round(Le(Ce.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=ge){ee.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(xs);const n=gr(Dn.h,xs.h,e),i=gr(Dn.s,xs.s,e),r=gr(Dn.l,xs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new ht;ht.NAMES=kl;let xh=0;class kn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Pi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ta,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pe extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new R,Ms=new bt;class _e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ra&&(t.usage=this.usage),t}}class Gl extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hl extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mh=0;const Je=new Kt,Lr=new Me,fi=new R,qe=new ni,Wi=new ni,Ee=new R;class se extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nl(t)?Hl:Gl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(qe.min,Wi.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,Wi.max),qe.expandByPoint(Ee)):(qe.expandByPoint(Wi.min),qe.expandByPoint(Wi.max))}qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(t,c),Ee.add(fi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new R,h[w]=new R;const u=new R,d=new R,p=new R,g=new bt,_=new bt,m=new bt,f=new R,x=new R;function v(w,F,N){u.fromArray(i,w*3),d.fromArray(i,F*3),p.fromArray(i,N*3),g.fromArray(a,w*2),_.fromArray(a,F*2),m.fromArray(a,N*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(J),x.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(J),c[w].add(f),c[F].add(f),c[N].add(f),h[w].add(x),h[F].add(x),h[N].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,F=S.length;w<F;++w){const N=S[w],J=N.start,P=N.count;for(let U=J,H=J+P;U<H;U+=3)v(n[U+0],n[U+1],n[U+2])}const C=new R,A=new R,T=new R,D=new R;function M(w){T.fromArray(r,w*3),D.copy(T);const F=c[w];C.copy(F),C.sub(T.multiplyScalar(T.dot(F))).normalize(),A.crossVectors(D,F);const J=A.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=J}for(let w=0,F=S.length;w<F;++w){const N=S[w],J=N.start,P=N.count;for(let U=J,H=J+P;U<H;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new se,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new Kt,Xn=new ma,ys=new ii,wo=new R,pi=new R,mi=new R,gi=new R,Dr=new R,Ss=new R,ws=new bt,bs=new bt,Es=new bt,bo=new R,Eo=new R,To=new R,Ts=new R,As=new R;class W extends Me{constructor(t=new se,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Dr.fromBufferAttribute(u,t),a?Ss.addScaledVector(Dr,h):Ss.addScaledVector(Dr.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(ys.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(ys,wo)===null||Xn.origin.distanceToSquared(wo)>(t.far-t.near)**2))&&(So.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(So),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=o.getX(S),T=o.getX(S+1),D=o.getX(S+2);i=Rs(this,f,t,n,c,h,u,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);i=Rs(this,a,t,n,c,h,u,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=S,T=S+1,D=S+2;i=Rs(this,f,t,n,c,h,u,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;i=Rs(this,a,t,n,c,h,u,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function yh(s,t,e,n,i,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Bn,o),l===null)return null;As.copy(o),As.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:s}}function Rs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,pi),s.getVertexPosition(l,mi),s.getVertexPosition(c,gi);const h=yh(s,t,e,n,pi,mi,gi,Ts);if(h){i&&(ws.fromBufferAttribute(i,o),bs.fromBufferAttribute(i,l),Es.fromBufferAttribute(i,c),h.uv=je.getInterpolation(Ts,pi,mi,gi,ws,bs,Es,new bt)),r&&(ws.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),Es.fromBufferAttribute(r,c),h.uv1=je.getInterpolation(Ts,pi,mi,gi,ws,bs,Es,new bt),h.uv2=h.uv1),a&&(bo.fromBufferAttribute(a,o),Eo.fromBufferAttribute(a,l),To.fromBufferAttribute(a,c),h.normal=je.getInterpolation(Ts,pi,mi,gi,bo,Eo,To,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};je.getNormal(pi,mi,gi,u.normal),h.face=u}return h}class Bt extends se{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,m,f,x,v,S,C,A,T,D,M){const w=S/T,F=C/D,N=S/2,J=C/2,P=A/2,U=T+1,H=D+1;let q=0,$=0;const Q=new R;for(let tt=0;tt<H;tt++){const ot=tt*F-J;for(let at=0;at<U;at++){const V=at*w-N;Q[_]=V*x,Q[m]=ot*v,Q[f]=P,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(at/T),u.push(1-tt/D),q+=1}}for(let tt=0;tt<D;tt++)for(let ot=0;ot<T;ot++){const at=d+ot+U*tt,V=d+ot+U*(tt+1),nt=d+(ot+1)+U*(tt+1),ut=d+(ot+1)+U*tt;l.push(at,V,ut),l.push(V,nt,ut),$+=6}o.addGroup(p,$,M),p+=$,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=Ni(s[e]);for(const i in n)t[i]=n[i]}return t}function Sh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vl(s){return s.getRenderTarget()===null?s.outputColorSpace:ee.workingColorSpace}const as={clone:Ni,merge:Fe};var wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wh,this.fragmentShader=bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=Sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class Eh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(_i,vi,t,e);i.layers=this.layers,this.add(i);const r=new Ze(_i,vi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(_i,vi,t,e);a.layers=this.layers,this.add(a);const o=new Ze(_i,vi,t,e);o.layers=this.layers,this.add(o);const l=new Ze(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new Ze(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xl extends Ve{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Th extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ei?ge:en),this.texture=new Xl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bt(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:En});r.uniforms.tEquirect.value=e;const a=new W(i,r),o=e.minFilter;return e.minFilter===rs&&(e.minFilter=tn),new Eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ur=new R,Ah=new R,Rh=new Yt;class $n{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ur.subVectors(n,e).cross(Ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rh.getNormalMatrix(t),i=this.coplanarPoint(Ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ii,Cs=new R;class ga{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+a,d+h,m+g,S+x).normalize(),n[3].setComponents(l-a,d-h,m-g,S-x).normalize(),n[4].setComponents(l-o,d-u,m-_,S-v).normalize(),e===bn)n[5].setComponents(l+o,d+u,m+_,S+v).normalize();else if(e===tr)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cs.x=i.normal.x>0?t.max.x:t.min.x,Cs.y=i.normal.y>0?t.max.y:t.min.y,Cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ql(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ch(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class fn extends se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-a;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,S=x+c*(f+1),C=x+1+c*(f+1),A=x+1+c*f;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,au="gl_FragColor = linearToOutputTexel( gl_FragColor );",ou=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Au=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$u=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Od=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$d=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,af=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Ph,alphahash_pars_fragment:Lh,alphamap_fragment:Dh,alphamap_pars_fragment:Uh,alphatest_fragment:Ih,alphatest_pars_fragment:Nh,aomap_fragment:Fh,aomap_pars_fragment:Oh,batching_pars_vertex:zh,batching_vertex:Bh,begin_vertex:kh,beginnormal_vertex:Gh,bsdfs:Hh,iridescence_fragment:Vh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:qh,clipping_planes_pars_vertex:Yh,clipping_planes_vertex:$h,color_fragment:jh,color_pars_fragment:Zh,color_pars_vertex:Kh,color_vertex:Jh,common:Qh,cube_uv_reflection_fragment:tu,defaultnormal_vertex:eu,displacementmap_pars_vertex:nu,displacementmap_vertex:iu,emissivemap_fragment:su,emissivemap_pars_fragment:ru,colorspace_fragment:au,colorspace_pars_fragment:ou,envmap_fragment:lu,envmap_common_pars_fragment:cu,envmap_pars_fragment:hu,envmap_pars_vertex:uu,envmap_physical_pars_fragment:wu,envmap_vertex:du,fog_vertex:fu,fog_pars_vertex:pu,fog_fragment:mu,fog_pars_fragment:gu,gradientmap_pars_fragment:_u,lightmap_fragment:vu,lightmap_pars_fragment:xu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:yu,lights_pars_begin:Su,lights_toon_fragment:bu,lights_toon_pars_fragment:Eu,lights_phong_fragment:Tu,lights_phong_pars_fragment:Au,lights_physical_fragment:Ru,lights_physical_pars_fragment:Cu,lights_fragment_begin:Pu,lights_fragment_maps:Lu,lights_fragment_end:Du,logdepthbuf_fragment:Uu,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:Fu,map_fragment:Ou,map_pars_fragment:zu,map_particle_fragment:Bu,map_particle_pars_fragment:ku,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Hu,morphcolor_vertex:Vu,morphnormal_vertex:Wu,morphtarget_pars_vertex:Xu,morphtarget_vertex:qu,normal_fragment_begin:Yu,normal_fragment_maps:$u,normal_pars_fragment:ju,normal_pars_vertex:Zu,normal_vertex:Ku,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:ed,iridescence_pars_fragment:nd,opaque_fragment:id,packing:sd,premultiplied_alpha_fragment:rd,project_vertex:ad,dithering_fragment:od,dithering_pars_fragment:ld,roughnessmap_fragment:cd,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:dd,shadowmap_vertex:fd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:gd,skinning_vertex:_d,skinnormal_vertex:vd,specularmap_fragment:xd,specularmap_pars_fragment:Md,tonemapping_fragment:yd,tonemapping_pars_fragment:Sd,transmission_fragment:wd,transmission_pars_fragment:bd,uv_pars_fragment:Ed,uv_pars_vertex:Td,uv_vertex:Ad,worldpos_vertex:Rd,background_vert:Cd,background_frag:Pd,backgroundCube_vert:Ld,backgroundCube_frag:Dd,cube_vert:Ud,cube_frag:Id,depth_vert:Nd,depth_frag:Fd,distanceRGBA_vert:Od,distanceRGBA_frag:zd,equirect_vert:Bd,equirect_frag:kd,linedashed_vert:Gd,linedashed_frag:Hd,meshbasic_vert:Vd,meshbasic_frag:Wd,meshlambert_vert:Xd,meshlambert_frag:qd,meshmatcap_vert:Yd,meshmatcap_frag:$d,meshnormal_vert:jd,meshnormal_frag:Zd,meshphong_vert:Kd,meshphong_frag:Jd,meshphysical_vert:Qd,meshphysical_frag:tf,meshtoon_vert:ef,meshtoon_frag:nf,points_vert:sf,points_frag:rf,shadow_vert:af,shadow_frag:of,sprite_vert:lf,sprite_frag:cf},ct={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},pn={basic:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Fe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Fe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Fe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Fe([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Fe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Fe([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Fe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Fe([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Fe([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Fe([ct.lights,ct.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:Fe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Ps={r:0,b:0,g:0};function hf(s,t,e,n,i,r,a){const o=new ht(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),x=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ir)?(h===void 0&&(h=new W(new Bt(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Ni(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new W(new fn(2,2),new De({name:"BackgroundMaterial",uniforms:Ni(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ps,Vl(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function uf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(P,U,H,q,$){let Q=!1;if(a){const tt=_(q,H,U);c!==tt&&(c=tt,p(c.object)),Q=f(P,q,H,$),Q&&x(P,q,H,$)}else{const tt=U.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==tt)&&(c.geometry=q.id,c.program=H.id,c.wireframe=tt,Q=!0)}$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,D(P,U,H,q),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,U,H){const q=H.wireframe===!0;let $=o[P.id];$===void 0&&($={},o[P.id]=$);let Q=$[U.id];Q===void 0&&(Q={},$[U.id]=Q);let tt=Q[q];return tt===void 0&&(tt=m(d()),Q[q]=tt),tt}function m(P){const U=[],H=[],q=[];for(let $=0;$<i;$++)U[$]=0,H[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:P,attributes:{},index:null}}function f(P,U,H,q){const $=c.attributes,Q=U.attributes;let tt=0;const ot=H.getAttributes();for(const at in ot)if(ot[at].location>=0){const nt=$[at];let ut=Q[at];if(ut===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),nt===void 0||nt.attribute!==ut||ut&&nt.data!==ut.data)return!0;tt++}return c.attributesNum!==tt||c.index!==q}function x(P,U,H,q){const $={},Q=U.attributes;let tt=0;const ot=H.getAttributes();for(const at in ot)if(ot[at].location>=0){let nt=Q[at];nt===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));const ut={};ut.attribute=nt,nt&&nt.data&&(ut.data=nt.data),$[at]=ut,tt++}c.attributes=$,c.attributesNum=tt,c.index=q}function v(){const P=c.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function S(P){C(P,0)}function C(P,U){const H=c.newAttributes,q=c.enabledAttributes,$=c.attributeDivisors;H[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),$[P]!==U&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),$[P]=U)}function A(){const P=c.newAttributes,U=c.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==P[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function T(P,U,H,q,$,Q,tt){tt===!0?s.vertexAttribIPointer(P,U,H,$,Q):s.vertexAttribPointer(P,U,H,q,$,Q)}function D(P,U,H,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const $=q.attributes,Q=H.getAttributes(),tt=U.defaultAttributeValues;for(const ot in Q){const at=Q[ot];if(at.location>=0){let V=$[ot];if(V===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const nt=V.normalized,ut=V.itemSize,Et=e.get(V);if(Et===void 0)continue;const wt=Et.buffer,It=Et.type,Ft=Et.bytesPerElement,At=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||V.gpuType===El);if(V.isInterleavedBufferAttribute){const $t=V.data,O=$t.stride,j=V.offset;if($t.isInstancedInterleavedBuffer){for(let Z=0;Z<at.locationSize;Z++)C(at.location+Z,$t.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$t.meshPerAttribute*$t.count)}else for(let Z=0;Z<at.locationSize;Z++)S(at.location+Z);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Z=0;Z<at.locationSize;Z++)T(at.location+Z,ut/at.locationSize,It,nt,O*Ft,(j+ut/at.locationSize*Z)*Ft,At)}else{if(V.isInstancedBufferAttribute){for(let $t=0;$t<at.locationSize;$t++)C(at.location+$t,V.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $t=0;$t<at.locationSize;$t++)S(at.location+$t);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let $t=0;$t<at.locationSize;$t++)T(at.location+$t,ut/at.locationSize,It,nt,ut*Ft,ut/at.locationSize*$t*Ft,At)}}else if(tt!==void 0){const nt=tt[ot];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(at.location,nt);break;case 3:s.vertexAttrib3fv(at.location,nt);break;case 4:s.vertexAttrib4fv(at.location,nt);break;default:s.vertexAttrib1fv(at.location,nt)}}}}A()}function M(){N();for(const P in o){const U=o[P];for(const H in U){const q=U[H];for(const $ in q)g(q[$].object),delete q[$];delete U[H]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const H in U){const q=U[H];for(const $ in q)g(q[$].object),delete q[$];delete U[H]}delete o[P.id]}function F(P){for(const U in o){const H=o[U];if(H[P.id]===void 0)continue;const q=H[P.id];for(const $ in q)g(q[$].object),delete q[$];delete H[P.id]}}function N(){J(),h=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:N,resetDefaultState:J,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:S,disableUnusedAttributes:A}}function df(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function ff(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||t.has("OES_texture_float"),C=v&&S,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function pf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new $n,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let C=0;C!==v;++C)S[C]=e[C];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function mf(s){let t=new WeakMap;function e(a,o){return o===ea?a.mapping=Di:o===na&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ea||o===na)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Th(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class _a extends Wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,Ao=[.125,.215,.35,.446,.526,.582],Kn=20,Ir=new _a,Ro=new ht;let Nr=null,Fr=0,Or=0;const jn=(1+Math.sqrt(5))/2,xi=1/jn,Co=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,jn,xi),new R(0,jn,-xi),new R(xi,0,jn),new R(-xi,0,jn),new R(jn,xi,0),new R(-jn,xi,0)];class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nr,Fr,Or),t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Tn,format:hn,colorSpace:An,depthBuffer:!1},i=Lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gf(r)),this._blurMaterial=_f(r,t,e)}return i}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Ir)}_sceneToCubeUV(t,e,n,i){const o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ro),h.toneMapping=Fn,h.autoClear=!1;const p=new Pe({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new W(new Bt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ro),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;Ls(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Co[(i-1)%Co.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new W(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let x=0;for(let T=0;T<Kn;++T){const D=T/_,M=Math.exp(-D*D/2);f.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],C=3*S*(i>v-Ti?i-v+Ti:0),A=4*(this._cubeSize-S);Ls(e,C,A,3*S,2*S),l.setRenderTarget(e),l.render(u,Ir)}}function gf(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+Ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ti?l=Ao[a-s+Ti-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,D=A>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(M,_*g*A),v.set(d,m*g*A);const w=[A,A,A,A,A,A];S.set(w,f*g*A)}const C=new se;C.setAttribute("position",new _e(x,_)),C.setAttribute("uv",new _e(v,m)),C.setAttribute("faceIndex",new _e(S,f)),t.push(C),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lo(s,t,e){const n=new un(s,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _f(s,t,e){const n=new Float32Array(Kn),i=new R(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Do(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Uo(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ea||l===na,h=l===Di||l===Ui;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Po(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Po(s));const d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function xf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mf(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],A=x[v+1],T=x[v+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;d.push(C,A,A,T,T,C)}}else return;const m=new(Nl(d)?Hl:Gl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function yf(s,t,e,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Sf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wf(s,t){return s[0]-t[0]}function bf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ef(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ce,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let U=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let w=h.attributes.position.count*M,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const N=new Float32Array(w*F*4*_),J=new zl(N,w,F,_);J.type=Nn,J.needsUpdate=!0;const P=M*4;for(let H=0;H<_;H++){const q=A[H],$=T[H],Q=D[H],tt=w*F*4*H;for(let ot=0;ot<q.count;ot++){const at=ot*P;v===!0&&(a.fromBufferAttribute(q,ot),N[tt+at+0]=a.x,N[tt+at+1]=a.y,N[tt+at+2]=a.z,N[tt+at+3]=0),S===!0&&(a.fromBufferAttribute($,ot),N[tt+at+4]=a.x,N[tt+at+5]=a.y,N[tt+at+6]=a.z,N[tt+at+7]=0),C===!0&&(a.fromBufferAttribute(Q,ot),N[tt+at+8]=a.x,N[tt+at+9]=a.y,N[tt+at+10]=a.z,N[tt+at+11]=Q.itemSize===4?a.w:1)}}m={count:_,texture:J,size:new bt(w,F)},r.set(h,m),h.addEventListener("dispose",U)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=d[S]}_.sort(bf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(wf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=o[S],A=C[0],T=C[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+S)!==m[A]&&h.setAttribute("morphTarget"+S,m[A]),f&&h.getAttribute("morphNormal"+S)!==f[A]&&h.setAttribute("morphNormal"+S,f[A]),i[S]=T,x+=T):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Tf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Yl extends Ve{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=In),n===void 0&&h===Ii&&(n=Qn),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $l=new Ve,jl=new Yl(1,1);jl.compareFunction=Il;const Zl=new zl,Kl=new hh,Jl=new Xl,Io=[],No=[],Fo=new Float32Array(16),Oo=new Float32Array(9),zo=new Float32Array(4);function zi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Io[i];if(r===void 0&&(r=new Float32Array(i),Io[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function rr(s,t){let e=No[t];e===void 0&&(e=new Int32Array(t),No[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;zo.set(n),s.uniformMatrix2fv(this.addr,!1,zo),Se(e,n)}}function Df(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Oo.set(n),s.uniformMatrix3fv(this.addr,!1,Oo),Se(e,n)}}function Uf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Fo.set(n),s.uniformMatrix4fv(this.addr,!1,Fo),Se(e,n)}}function If(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function zf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?jl:$l;e.setTexture2D(t||r,i)}function Vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kl,i)}function Wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jl,i)}function Xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zl,i)}function qf(s){switch(s){case 5126:return Af;case 35664:return Rf;case 35665:return Cf;case 35666:return Pf;case 35674:return Lf;case 35675:return Df;case 35676:return Uf;case 5124:case 35670:return If;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return zf;case 36294:return Bf;case 36295:return kf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}function Yf(s,t){s.uniform1fv(this.addr,t)}function $f(s,t){const e=zi(t,this.size,2);s.uniform2fv(this.addr,e)}function jf(s,t){const e=zi(t,this.size,3);s.uniform3fv(this.addr,e)}function Zf(s,t){const e=zi(t,this.size,4);s.uniform4fv(this.addr,e)}function Kf(s,t){const e=zi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jf(s,t){const e=zi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qf(s,t){const e=zi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tp(s,t){s.uniform1iv(this.addr,t)}function ep(s,t){s.uniform2iv(this.addr,t)}function np(s,t){s.uniform3iv(this.addr,t)}function ip(s,t){s.uniform4iv(this.addr,t)}function sp(s,t){s.uniform1uiv(this.addr,t)}function rp(s,t){s.uniform2uiv(this.addr,t)}function ap(s,t){s.uniform3uiv(this.addr,t)}function op(s,t){s.uniform4uiv(this.addr,t)}function lp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||$l,r[a])}function cp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Kl,r[a])}function hp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Jl,r[a])}function up(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Zl,r[a])}function dp(s){switch(s){case 5126:return Yf;case 35664:return $f;case 35665:return jf;case 35666:return Zf;case 35674:return Kf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}class fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qf(e.type)}}class pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dp(e.type)}}class mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function Bo(s,t){s.seq.push(t),s.map[t.id]=t}function gp(s,t,e){const n=s.name,i=n.length;for(zr.lastIndex=0;;){const r=zr.exec(n),a=zr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Bo(e,c===void 0?new fp(o,s,t):new pp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new mp(o),Bo(e,u)),e=u}}}class qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);gp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ko(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _p=37297;let vp=0;function xp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mp(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===Qs&&e===Js?n="LinearDisplayP3ToLinearSRGB":t===Js&&e===Qs&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case sr:return[n,"LinearTransferOETF"];case ge:case pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Go(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+xp(s.getShaderSource(t),a)}else return i}function yp(s,t){const e=Mp(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sp(s,t){let e;switch(t){case Ml:e="Linear";break;case yl:e="Reinhard";break;case Sl:e="OptimizedCineon";break;case da:e="ACESFilmic";break;case wl:e="AgX";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function wp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function bp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function Ep(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ai(s){return s!==""}function Ho(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(s){return s.replace(Ap,Cp)}const Rp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cp(s,t){let e=Ht[t];if(e===void 0){const n=Rp.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ca(e)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(s){return s.replace(Pp,Lp)}function Lp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Up(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Ui:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ip(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function Np(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Fc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function Fp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Op(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Dp(e),c=Up(e),h=Ip(e),u=Np(e),d=Fp(e),p=e.isWebGL2?"":wp(e),g=bp(e),_=Ep(r),m=i.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ai).join(`
`),x.length>0&&(x+=`
`)):(f=[Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),x=[p,Xo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Sp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,yp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=ca(a),a=Ho(a,e),a=Vo(a,e),o=ca(o),o=Ho(o,e),o=Vo(o,e),a=Wo(a),o=Wo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+f+a,C=v+x+o,A=ko(i,i.VERTEX_SHADER,S),T=ko(i,i.FRAGMENT_SHADER,C);i.attachShader(m,A),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(N){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(T).trim();let H=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,T);else{const $=Go(i,A,"vertex"),Q=Go(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+$+`
`+Q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||U==="")&&(q=!1);q&&(N.diagnostics={runnable:H,programLog:J,vertexShader:{log:P,prefix:f},fragmentShader:{log:U,prefix:x}})}i.deleteShader(A),i.deleteShader(T),M=new qs(i,m),w=Tp(i,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,_p)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let zp=0;class Bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kp(t),e.set(t,n)),n}}class kp{constructor(t){this.id=zp++,this.code=t,this.usedTimes=0}}function Gp(s,t,e,n,i,r,a){const o=new Bl,l=new Bp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,F,N,J){const P=N.fog,U=J.geometry,H=M.isMeshStandardMaterial?N.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),$=q&&q.mapping===ir?q.image.height:null,Q=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=tt!==void 0?tt.length:0;let at=0;U.morphAttributes.position!==void 0&&(at=1),U.morphAttributes.normal!==void 0&&(at=2),U.morphAttributes.color!==void 0&&(at=3);let V,nt,ut,Et;if(Q){const Ue=pn[Q];V=Ue.vertexShader,nt=Ue.fragmentShader}else V=M.vertexShader,nt=M.fragmentShader,l.update(M),ut=l.getVertexShaderID(M),Et=l.getFragmentShaderID(M);const wt=s.getRenderTarget(),It=J.isInstancedMesh===!0,Ft=J.isBatchedMesh===!0,At=!!M.map,$t=!!M.matcap,O=!!q,j=!!M.aoMap,Z=!!M.lightMap,Y=!!M.bumpMap,X=!!M.normalMap,St=!!M.displacementMap,vt=!!M.emissiveMap,E=!!M.metalnessMap,y=!!M.roughnessMap,z=M.anisotropy>0,et=M.clearcoat>0,it=M.iridescence>0,st=M.sheen>0,yt=M.transmission>0,pt=z&&!!M.anisotropyMap,xt=et&&!!M.clearcoatMap,Lt=et&&!!M.clearcoatNormalMap,Vt=et&&!!M.clearcoatRoughnessMap,rt=it&&!!M.iridescenceMap,ne=it&&!!M.iridescenceThicknessMap,jt=st&&!!M.sheenColorMap,Nt=st&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Mt=!!M.specularColorMap,Gt=!!M.specularIntensityMap,te=yt&&!!M.transmissionMap,ue=yt&&!!M.thicknessMap,Xt=!!M.gradientMap,lt=!!M.alphaMap,L=M.alphaTest>0,dt=!!M.alphaHash,ft=!!M.extensions,Dt=!!U.attributes.uv1,Ct=!!U.attributes.uv2,re=!!U.attributes.uv3;let ae=Fn;return M.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ae=s.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:nt,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ft,instancing:It,instancingColor:It&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:An,map:At,matcap:$t,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:$,aoMap:j,lightMap:Z,bumpMap:Y,normalMap:X,displacementMap:d&&St,emissiveMap:vt,normalMapObjectSpace:X&&M.normalMapType===Zc,normalMapTangentSpace:X&&M.normalMapType===Ul,metalnessMap:E,roughnessMap:y,anisotropy:z,anisotropyMap:pt,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,iridescence:it,iridescenceMap:rt,iridescenceThicknessMap:ne,sheen:st,sheenColorMap:jt,sheenRoughnessMap:Nt,specularMap:Rt,specularColorMap:Mt,specularIntensityMap:Gt,transmission:yt,transmissionMap:te,thicknessMap:ue,gradientMap:Xt,opaque:M.transparent===!1&&M.blending===Pi,alphaMap:lt,alphaTest:L,alphaHash:dt,combine:M.combine,mapUv:At&&_(M.map.channel),aoMapUv:j&&_(M.aoMap.channel),lightMapUv:Z&&_(M.lightMap.channel),bumpMapUv:Y&&_(M.bumpMap.channel),normalMapUv:X&&_(M.normalMap.channel),displacementMapUv:St&&_(M.displacementMap.channel),emissiveMapUv:vt&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:pt&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:Mt&&_(M.specularColorMap.channel),specularIntensityMapUv:Gt&&_(M.specularIntensityMap.channel),transmissionMapUv:te&&_(M.transmissionMap.channel),thicknessMapUv:ue&&_(M.thicknessMap.channel),alphaMapUv:lt&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(X||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:re,pointsUvs:J.isPoints===!0&&!!U.attributes.uv&&(At||lt),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const w=g[M.type];let F;if(w){const N=pn[w];F=as.clone(N.uniforms)}else F=M.uniforms;return F}function C(M,w){let F;for(let N=0,J=c.length;N<J;N++){const P=c[N];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Op(s,w,M,r),c.push(F)),F}function A(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function Hp(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function qo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Vp),n.length>1&&n.sort(d||qo),i.length>1&&i.sort(d||qo)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Yo,s.set(n,[a])):i>=r.length?(a=new Yo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ht};break;case"SpotLight":e={position:new R,direction:new R,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function qp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Yp=0;function $p(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jp(s,t){const e=new Xp,n=qp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,a=new Kt,o=new Kt;function l(h,u){let d=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,C=0,A=0,T=0,D=0,M=0;h.sort($p);const w=u===!0?Math.PI:1;for(let N=0,J=h.length;N<J;N++){const P=h[N],U=P.color,H=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*H*w,p+=U.g*H*w,g+=U.b*H*w;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(P.sh.coefficients[Q],H);M++}else if(P.isDirectionalLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const tt=P.shadow,ot=n.get(P);ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,i.directionalShadow[_]=ot,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=Q,_++}else if(P.isSpotLight){const Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(U).multiplyScalar(H*w),Q.distance=q,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,i.spot[f]=Q;const tt=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,tt.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[f]=tt.matrix,P.castShadow){const ot=n.get(P);ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,i.spotShadow[f]=ot,i.spotShadowMap[f]=$,A++}f++}else if(P.isRectAreaLight){const Q=e.get(P);Q.color.copy(U).multiplyScalar(H),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Q,x++}else if(P.isPointLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity*w),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){const tt=P.shadow,ot=n.get(P);ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,ot.shadowCameraNear=tt.camera.near,ot.shadowCameraFar=tt.camera.far,i.pointShadow[m]=ot,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=P.shadow.matrix,C++}i.point[m]=Q,m++}else if(P.isHemisphereLight){const Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(H*w),Q.groundColor.copy(P.groundColor).multiplyScalar(H*w),i.hemi[v]=Q,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==S||F.numPointShadows!==C||F.numSpotShadows!==A||F.numSpotMaps!==T||F.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=M,F.directionalLength=_,F.pointLength=m,F.spotLength=f,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=S,F.numPointShadows=C,F.numSpotShadows=A,F.numSpotMaps=T,F.numLightProbes=M,i.version=Yp++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const S=h[x];if(S.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(S.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function $o(s,t){const e=new jp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new $o(s,t),e.set(r,[l])):a>=o.length?(l=new $o(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Kp extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jp extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function em(s,t,e){let n=new ga;const i=new bt,r=new bt,a=new ce,o=new Kp({depthPacking:jc}),l=new Jp,c={},h=e.maxTextureSize,u={[Bn]:Ge,[Ge]:Bn,[He]:He},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Qp,fragmentShader:tm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new se;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let f=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),N=s.state;N.setBlending(En),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const J=f!==yn&&this.type===yn,P=f===yn&&this.type!==yn;for(let U=0,H=A.length;U<H;U++){const q=A[U],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const Q=$.getFrameExtents();if(i.multiply(Q),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||J===!0||P===!0){const ot=this.type!==yn?{minFilter:ke,magFilter:ke}:{};$.map!==null&&$.map.dispose(),$.map=new un(i.x,i.y,ot),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const tt=$.getViewportCount();for(let ot=0;ot<tt;ot++){const at=$.getViewport(ot);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),N.viewport(a),$.updateMatrices(q,ot),n=$.getFrustum(),S(T,D,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===yn&&x($,D),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,w,F)};function x(A,T){const D=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new un(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,D,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,D,p,_,null)}function v(A,T,D,M){let w=null;const F=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)w=F;else if(w=D.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=w.uuid,J=T.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let U=P[J];U===void 0&&(U=w.clone(),P[J]=U,T.addEventListener("dispose",C)),w=U}if(w.visible=T.visible,w.wireframe=T.wireframe,M===yn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=s.properties.get(w);N.light=D}return w}function S(A,T,D,M,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const J=t.update(A),P=A.material;if(Array.isArray(P)){const U=J.groups;for(let H=0,q=U.length;H<q;H++){const $=U[H],Q=P[$.materialIndex];if(Q&&Q.visible){const tt=v(A,Q,M,w);A.onBeforeShadow(s,A,T,D,J,tt,$),s.renderBufferDirect(D,null,J,tt,A,$),A.onAfterShadow(s,A,T,D,J,tt,$)}}}else if(P.visible){const U=v(A,P,M,w);A.onBeforeShadow(s,A,T,D,J,U,null),s.renderBufferDirect(D,null,J,U,A,null),A.onAfterShadow(s,A,T,D,J,U,null)}}const N=A.children;for(let J=0,P=N.length;J<P;J++)S(N[J],T,D,M,w)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const M=c[D],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function nm(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const dt=new ce;let ft=null;const Dt=new ce(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!L&&(s.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){L=Ct},setClear:function(Ct,re,ae,we,Ue){Ue===!0&&(Ct*=we,re*=we,ae*=we),dt.set(Ct,re,ae,we),Dt.equals(dt)===!1&&(s.clearColor(Ct,re,ae,we),Dt.copy(dt))},reset:function(){L=!1,ft=null,Dt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,ft=null,Dt=null;return{setTest:function(Ct){Ct?Ft(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Ct){dt!==Ct&&!L&&(s.depthMask(Ct),dt=Ct)},setFunc:function(Ct){if(ft!==Ct){switch(Ct){case Cc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Uc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=Ct}},setLocked:function(Ct){L=Ct},setClear:function(Ct){Dt!==Ct&&(s.clearDepth(Ct),Dt=Ct)},reset:function(){L=!1,dt=null,ft=null,Dt=null}}}function a(){let L=!1,dt=null,ft=null,Dt=null,Ct=null,re=null,ae=null,we=null,Ue=null;return{setTest:function(oe){L||(oe?Ft(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!L&&(s.stencilMask(oe),dt=oe)},setFunc:function(oe,Ie,dn){(ft!==oe||Dt!==Ie||Ct!==dn)&&(s.stencilFunc(oe,Ie,dn),ft=oe,Dt=Ie,Ct=dn)},setOp:function(oe,Ie,dn){(re!==oe||ae!==Ie||we!==dn)&&(s.stencilOp(oe,Ie,dn),re=oe,ae=Ie,we=dn)},setLocked:function(oe){L=oe},setClear:function(oe){Ue!==oe&&(s.clearStencil(oe),Ue=oe)},reset:function(){L=!1,dt=null,ft=null,Dt=null,Ct=null,re=null,ae=null,we=null,Ue=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,A=null,T=null,D=null,M=new ht(0,0,0),w=0,F=!1,N=null,J=null,P=null,U=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=Q>=1):tt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=Q>=2);let ot=null,at={};const V=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),ut=new ce().fromArray(V),Et=new ce().fromArray(nt);function wt(L,dt,ft,Dt){const Ct=new Uint8Array(4),re=s.createTexture();s.bindTexture(L,re),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ft;ae++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(dt,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(dt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return re}const It={};It[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(s.DEPTH_TEST),l.setFunc(Zs),vt(!1),E(Pa),Ft(s.CULL_FACE),X(En);function Ft(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function At(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function $t(L,dt){return p[L]!==dt?(s.bindFramebuffer(L,dt),p[L]=dt,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=dt),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=dt)),!0):!1}function O(L,dt){let ft=_,Dt=!1;if(L)if(ft=g.get(dt),ft===void 0&&(ft=[],g.set(dt,ft)),L.isWebGLMultipleRenderTargets){const Ct=L.texture;if(ft.length!==Ct.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let re=0,ae=Ct.length;re<ae;re++)ft[re]=s.COLOR_ATTACHMENT0+re;ft.length=Ct.length,Dt=!0}}else ft[0]!==s.COLOR_ATTACHMENT0&&(ft[0]=s.COLOR_ATTACHMENT0,Dt=!0);else ft[0]!==s.BACK&&(ft[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function j(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Z={[Zn]:s.FUNC_ADD,[pc]:s.FUNC_SUBTRACT,[mc]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Ua]=s.MIN,Z[Ia]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Z[Ua]=L.MIN_EXT,Z[Ia]=L.MAX_EXT)}const Y={[gc]:s.ZERO,[_c]:s.ONE,[vc]:s.SRC_COLOR,[Qr]:s.SRC_ALPHA,[bc]:s.SRC_ALPHA_SATURATE,[Sc]:s.DST_COLOR,[Mc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[ta]:s.ONE_MINUS_SRC_ALPHA,[wc]:s.ONE_MINUS_DST_COLOR,[yc]:s.ONE_MINUS_DST_ALPHA,[Ec]:s.CONSTANT_COLOR,[Tc]:s.ONE_MINUS_CONSTANT_COLOR,[Ac]:s.CONSTANT_ALPHA,[Rc]:s.ONE_MINUS_CONSTANT_ALPHA};function X(L,dt,ft,Dt,Ct,re,ae,we,Ue,oe){if(L===En){f===!0&&(At(s.BLEND),f=!1);return}if(f===!1&&(Ft(s.BLEND),f=!0),L!==fc){if(L!==x||oe!==F){if((v!==Zn||A!==Zn)&&(s.blendEquation(s.FUNC_ADD),v=Zn,A=Zn),oe)switch(L){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sn:s.blendFunc(s.ONE,s.ONE);break;case La:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Da:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case La:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Da:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,T=null,D=null,M.set(0,0,0),w=0,x=L,F=oe}return}Ct=Ct||dt,re=re||ft,ae=ae||Dt,(dt!==v||Ct!==A)&&(s.blendEquationSeparate(Z[dt],Z[Ct]),v=dt,A=Ct),(ft!==S||Dt!==C||re!==T||ae!==D)&&(s.blendFuncSeparate(Y[ft],Y[Dt],Y[re],Y[ae]),S=ft,C=Dt,T=re,D=ae),(we.equals(M)===!1||Ue!==w)&&(s.blendColor(we.r,we.g,we.b,Ue),M.copy(we),w=Ue),x=L,F=!1}function St(L,dt){L.side===He?At(s.CULL_FACE):Ft(s.CULL_FACE);let ft=L.side===Ge;dt&&(ft=!ft),vt(ft),L.blending===Pi&&L.transparent===!1?X(En):X(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Dt=L.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function E(L){L!==uc?(Ft(s.CULL_FACE),L!==J&&(L===Pa?s.cullFace(s.BACK):L===dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),J=L}function y(L){L!==P&&($&&s.lineWidth(L),P=L)}function z(L,dt,ft){L?(Ft(s.POLYGON_OFFSET_FILL),(U!==dt||H!==ft)&&(s.polygonOffset(dt,ft),U=dt,H=ft)):At(s.POLYGON_OFFSET_FILL)}function et(L){L?Ft(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function it(L){L===void 0&&(L=s.TEXTURE0+q-1),ot!==L&&(s.activeTexture(L),ot=L)}function st(L,dt,ft){ft===void 0&&(ot===null?ft=s.TEXTURE0+q-1:ft=ot);let Dt=at[ft];Dt===void 0&&(Dt={type:void 0,texture:void 0},at[ft]=Dt),(Dt.type!==L||Dt.texture!==dt)&&(ot!==ft&&(s.activeTexture(ft),ot=ft),s.bindTexture(L,dt||It[L]),Dt.type=L,Dt.texture=dt)}function yt(){const L=at[ot];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(L){ut.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ut.copy(L))}function te(L){Et.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Et.copy(L))}function ue(L,dt){let ft=u.get(dt);ft===void 0&&(ft=new WeakMap,u.set(dt,ft));let Dt=ft.get(L);Dt===void 0&&(Dt=s.getUniformBlockIndex(dt,L.name),ft.set(L,Dt))}function Xt(L,dt){const Dt=u.get(dt).get(L);h.get(dt)!==Dt&&(s.uniformBlockBinding(dt,Dt,L.__bindingPointIndex),h.set(dt,Dt))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ot=null,at={},p={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,C=null,A=null,T=null,D=null,M=new ht(0,0,0),w=0,F=!1,N=null,J=null,P=null,U=null,H=null,ut.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ft,disable:At,bindFramebuffer:$t,drawBuffers:O,useProgram:j,setBlending:X,setMaterial:St,setFlipSided:vt,setCullFace:E,setLineWidth:y,setPolygonOffset:z,setScissorTest:et,activeTexture:it,bindTexture:st,unbindTexture:yt,compressedTexImage2D:pt,compressedTexImage3D:xt,texImage2D:Rt,texImage3D:Mt,updateUBOMapping:ue,uniformBlockBinding:Xt,texStorage2D:jt,texStorage3D:Nt,texSubImage2D:Lt,texSubImage3D:Vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ne,scissor:Gt,viewport:te,reset:lt}}function im(s,t,e,n,i,r,a){const o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return p?new OffscreenCanvas(E,y):er("canvas")}function _(E,y,z,et){let it=1;if((E.width>et||E.height>et)&&(it=et/Math.max(E.width,E.height)),it<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const st=y?la:Math.floor,yt=st(it*E.width),pt=st(it*E.height);u===void 0&&(u=g(yt,pt));const xt=z?g(yt,pt):u;return xt.width=yt,xt.height=pt,xt.getContext("2d").drawImage(E,0,0,yt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+yt+"x"+pt+")."),xt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return co(E.width)&&co(E.height)}function f(E){return o?!1:E.wrapS!==cn||E.wrapT!==cn||E.minFilter!==ke&&E.minFilter!==tn}function x(E,y){return E.generateMipmaps&&y&&E.minFilter!==ke&&E.minFilter!==tn}function v(E){s.generateMipmap(E)}function S(E,y,z,et,it=!1){if(o===!1)return y;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=y;if(y===s.RED&&(z===s.FLOAT&&(st=s.R32F),z===s.HALF_FLOAT&&(st=s.R16F),z===s.UNSIGNED_BYTE&&(st=s.R8)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(st=s.R8UI),z===s.UNSIGNED_SHORT&&(st=s.R16UI),z===s.UNSIGNED_INT&&(st=s.R32UI),z===s.BYTE&&(st=s.R8I),z===s.SHORT&&(st=s.R16I),z===s.INT&&(st=s.R32I)),y===s.RG&&(z===s.FLOAT&&(st=s.RG32F),z===s.HALF_FLOAT&&(st=s.RG16F),z===s.UNSIGNED_BYTE&&(st=s.RG8)),y===s.RGBA){const yt=it?Ks:ee.getTransfer(et);z===s.FLOAT&&(st=s.RGBA32F),z===s.HALF_FLOAT&&(st=s.RGBA16F),z===s.UNSIGNED_BYTE&&(st=yt===le?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function C(E,y,z){return x(E,z)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){return E===ke||E===Na||E===hr?s.NEAREST:s.LINEAR}function T(E){const y=E.target;y.removeEventListener("dispose",T),M(y),y.isVideoTexture&&h.delete(y)}function D(E){const y=E.target;y.removeEventListener("dispose",D),F(y)}function M(E){const y=n.get(E);if(y.__webglInit===void 0)return;const z=E.source,et=d.get(z);if(et){const it=et[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(E),Object.keys(et).length===0&&d.delete(z)}n.remove(E)}function w(E){const y=n.get(E);s.deleteTexture(y.__webglTexture);const z=E.source,et=d.get(z);delete et[y.__cacheKey],a.memory.textures--}function F(E){const y=E.texture,z=n.get(E),et=n.get(y);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(z.__webglFramebuffer[it]))for(let st=0;st<z.__webglFramebuffer[it].length;st++)s.deleteFramebuffer(z.__webglFramebuffer[it][st]);else s.deleteFramebuffer(z.__webglFramebuffer[it]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[it])}else{if(Array.isArray(z.__webglFramebuffer))for(let it=0;it<z.__webglFramebuffer.length;it++)s.deleteFramebuffer(z.__webglFramebuffer[it]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let it=0;it<z.__webglColorRenderbuffer.length;it++)z.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[it]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let it=0,st=y.length;it<st;it++){const yt=n.get(y[it]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(y[it])}n.remove(y),n.remove(E)}let N=0;function J(){N=0}function P(){const E=N;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),N+=1,E}function U(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function H(E,y){const z=n.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,E,y);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function q(E,y){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ut(z,E,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function $(E,y){const z=n.get(E);if(E.version>0&&z.__version!==E.version){ut(z,E,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function Q(E,y){const z=n.get(E);if(E.version>0&&z.__version!==E.version){Et(z,E,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}const tt={[ia]:s.REPEAT,[cn]:s.CLAMP_TO_EDGE,[sa]:s.MIRRORED_REPEAT},ot={[ke]:s.NEAREST,[Na]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[Bc]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},at={[Kc]:s.NEVER,[ih]:s.ALWAYS,[Jc]:s.LESS,[Il]:s.LEQUAL,[Qc]:s.EQUAL,[nh]:s.GEQUAL,[th]:s.GREATER,[eh]:s.NOTEQUAL};function V(E,y,z){if(z?(s.texParameteri(E,s.TEXTURE_WRAP_S,tt[y.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,tt[y.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,tt[y.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ot[y.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ot[y.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==cn||y.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,A(y.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==ke&&y.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===ke||y.minFilter!==hr&&y.minFilter!==rs||y.type===Nn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Tn&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(s.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function nt(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));const et=y.source;let it=d.get(et);it===void 0&&(it={},d.set(et,it));const st=U(y);if(st!==E.__cacheKey){it[st]===void 0&&(it[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),it[st].usedTimes++;const yt=it[E.__cacheKey];yt!==void 0&&(it[E.__cacheKey].usedTimes--,yt.usedTimes===0&&w(y)),E.__cacheKey=st,E.__webglTexture=it[st].texture}return z}function ut(E,y,z){let et=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=s.TEXTURE_3D);const it=nt(E,y),st=y.source;e.bindTexture(et,E.__webglTexture,s.TEXTURE0+z);const yt=n.get(st);if(st.version!==yt.__version||it===!0){e.activeTexture(s.TEXTURE0+z);const pt=ee.getPrimaries(ee.workingColorSpace),xt=y.colorSpace===en?null:ee.getPrimaries(y.colorSpace),Lt=y.colorSpace===en||pt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Vt=f(y)&&m(y.image)===!1;let rt=_(y.image,Vt,!1,i.maxTextureSize);rt=vt(y,rt);const ne=m(rt)||o,jt=r.convert(y.format,y.colorSpace);let Nt=r.convert(y.type),Rt=S(y.internalFormat,jt,Nt,y.colorSpace,y.isVideoTexture);V(et,y,ne);let Mt;const Gt=y.mipmaps,te=o&&y.isVideoTexture!==!0&&Rt!==Ll,ue=yt.__version===void 0||it===!0,Xt=C(y,rt,ne);if(y.isDepthTexture)Rt=s.DEPTH_COMPONENT,o?y.type===Nn?Rt=s.DEPTH_COMPONENT32F:y.type===In?Rt=s.DEPTH_COMPONENT24:y.type===Qn?Rt=s.DEPTH24_STENCIL8:Rt=s.DEPTH_COMPONENT16:y.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ti&&Rt===s.DEPTH_COMPONENT&&y.type!==fa&&y.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=In,Nt=r.convert(y.type)),y.format===Ii&&Rt===s.DEPTH_COMPONENT&&(Rt=s.DEPTH_STENCIL,y.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Qn,Nt=r.convert(y.type))),ue&&(te?e.texStorage2D(s.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,jt,Nt,null));else if(y.isDataTexture)if(Gt.length>0&&ne){te&&ue&&e.texStorage2D(s.TEXTURE_2D,Xt,Rt,Gt[0].width,Gt[0].height);for(let lt=0,L=Gt.length;lt<L;lt++)Mt=Gt[lt],te?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,jt,Nt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,Rt,Mt.width,Mt.height,0,jt,Nt,Mt.data);y.generateMipmaps=!1}else te?(ue&&e.texStorage2D(s.TEXTURE_2D,Xt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,jt,Nt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,rt.width,rt.height,0,jt,Nt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){te&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Rt,Gt[0].width,Gt[0].height,rt.depth);for(let lt=0,L=Gt.length;lt<L;lt++)Mt=Gt[lt],y.format!==hn?jt!==null?te?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,rt.depth,jt,Mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Rt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,rt.depth,jt,Nt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,lt,Rt,Mt.width,Mt.height,rt.depth,0,jt,Nt,Mt.data)}else{te&&ue&&e.texStorage2D(s.TEXTURE_2D,Xt,Rt,Gt[0].width,Gt[0].height);for(let lt=0,L=Gt.length;lt<L;lt++)Mt=Gt[lt],y.format!==hn?jt!==null?te?e.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,jt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,lt,Rt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,jt,Nt,Mt.data):e.texImage2D(s.TEXTURE_2D,lt,Rt,Mt.width,Mt.height,0,jt,Nt,Mt.data)}else if(y.isDataArrayTexture)te?(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,jt,Nt,rt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,jt,Nt,rt.data);else if(y.isData3DTexture)te?(ue&&e.texStorage3D(s.TEXTURE_3D,Xt,Rt,rt.width,rt.height,rt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,jt,Nt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,jt,Nt,rt.data);else if(y.isFramebufferTexture){if(ue)if(te)e.texStorage2D(s.TEXTURE_2D,Xt,Rt,rt.width,rt.height);else{let lt=rt.width,L=rt.height;for(let dt=0;dt<Xt;dt++)e.texImage2D(s.TEXTURE_2D,dt,Rt,lt,L,0,jt,Nt,null),lt>>=1,L>>=1}}else if(Gt.length>0&&ne){te&&ue&&e.texStorage2D(s.TEXTURE_2D,Xt,Rt,Gt[0].width,Gt[0].height);for(let lt=0,L=Gt.length;lt<L;lt++)Mt=Gt[lt],te?e.texSubImage2D(s.TEXTURE_2D,lt,0,0,jt,Nt,Mt):e.texImage2D(s.TEXTURE_2D,lt,Rt,jt,Nt,Mt);y.generateMipmaps=!1}else te?(ue&&e.texStorage2D(s.TEXTURE_2D,Xt,Rt,rt.width,rt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,jt,Nt,rt)):e.texImage2D(s.TEXTURE_2D,0,Rt,jt,Nt,rt);x(y,ne)&&v(et),yt.__version=st.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Et(E,y,z){if(y.image.length!==6)return;const et=nt(E,y),it=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const st=n.get(it);if(it.version!==st.__version||et===!0){e.activeTexture(s.TEXTURE0+z);const yt=ee.getPrimaries(ee.workingColorSpace),pt=y.colorSpace===en?null:ee.getPrimaries(y.colorSpace),xt=y.colorSpace===en||yt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,Vt=y.image[0]&&y.image[0].isDataTexture,rt=[];for(let lt=0;lt<6;lt++)!Lt&&!Vt?rt[lt]=_(y.image[lt],!1,!0,i.maxCubemapSize):rt[lt]=Vt?y.image[lt].image:y.image[lt],rt[lt]=vt(y,rt[lt]);const ne=rt[0],jt=m(ne)||o,Nt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),Mt=S(y.internalFormat,Nt,Rt,y.colorSpace),Gt=o&&y.isVideoTexture!==!0,te=st.__version===void 0||et===!0;let ue=C(y,ne,jt);V(s.TEXTURE_CUBE_MAP,y,jt);let Xt;if(Lt){Gt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Mt,ne.width,ne.height);for(let lt=0;lt<6;lt++){Xt=rt[lt].mipmaps;for(let L=0;L<Xt.length;L++){const dt=Xt[L];y.format!==hn?Nt!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,Mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,dt.width,dt.height,Nt,Rt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,Mt,dt.width,dt.height,0,Nt,Rt,dt.data)}}}else{Xt=y.mipmaps,Gt&&te&&(Xt.length>0&&ue++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Mt,rt[0].width,rt[0].height));for(let lt=0;lt<6;lt++)if(Vt){Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,rt[lt].width,rt[lt].height,Nt,Rt,rt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,rt[lt].width,rt[lt].height,0,Nt,Rt,rt[lt].data);for(let L=0;L<Xt.length;L++){const ft=Xt[L].image[lt].image;Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,ft.width,ft.height,Nt,Rt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,Mt,ft.width,ft.height,0,Nt,Rt,ft.data)}}else{Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Rt,rt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,Nt,Rt,rt[lt]);for(let L=0;L<Xt.length;L++){const dt=Xt[L];Gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,Nt,Rt,dt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,Mt,Nt,Rt,dt.image[lt])}}}x(y,jt)&&v(s.TEXTURE_CUBE_MAP),st.__version=it.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function wt(E,y,z,et,it,st){const yt=r.convert(z.format,z.colorSpace),pt=r.convert(z.type),xt=S(z.internalFormat,yt,pt,z.colorSpace);if(!n.get(y).__hasExternalTextures){const Vt=Math.max(1,y.width>>st),rt=Math.max(1,y.height>>st);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,st,xt,Vt,rt,y.depth,0,yt,pt,null):e.texImage2D(it,st,xt,Vt,rt,0,yt,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),X(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,it,n.get(z).__webglTexture,0,Y(y)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,it,n.get(z).__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let et=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||X(y)){const it=y.depthTexture;it&&it.isDepthTexture&&(it.type===Nn?et=s.DEPTH_COMPONENT32F:it.type===In&&(et=s.DEPTH_COMPONENT24));const st=Y(y);X(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,et,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,st,et,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,et,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const et=Y(y);z&&X(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{const et=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let it=0;it<et.length;it++){const st=et[it],yt=r.convert(st.format,st.colorSpace),pt=r.convert(st.type),xt=S(st.internalFormat,yt,pt,st.colorSpace),Lt=Y(y);z&&X(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,y.width,y.height):X(y)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,xt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const et=n.get(y.depthTexture).__webglTexture,it=Y(y);if(y.depthTexture.format===ti)X(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(y.depthTexture.format===Ii)X(y)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function At(E){const y=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ft(y.__webglFramebuffer,E)}else if(z){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]=s.createRenderbuffer(),It(y.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),It(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(E,y,z){const et=n.get(E);y!==void 0&&wt(et.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&At(E)}function O(E){const y=E.texture,z=n.get(E),et=n.get(y);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=y.version,a.memory.textures++);const it=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,yt=m(E)||o;if(it){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let xt=0;xt<y.mipmaps.length;xt++)z.__webglFramebuffer[pt][xt]=s.createFramebuffer()}else z.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)z.__webglFramebuffer[pt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(st)if(i.drawBuffers){const pt=E.texture;for(let xt=0,Lt=pt.length;xt<Lt;xt++){const Vt=n.get(pt[xt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&X(E)===!1){const pt=st?y:[y];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<pt.length;xt++){const Lt=pt[xt];z.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);const Vt=r.convert(Lt.format,Lt.colorSpace),rt=r.convert(Lt.type),ne=S(Lt.internalFormat,Vt,rt,Lt.colorSpace,E.isXRRenderTarget===!0),jt=Y(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,ne,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),It(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),V(s.TEXTURE_CUBE_MAP,y,yt);for(let pt=0;pt<6;pt++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)wt(z.__webglFramebuffer[pt][xt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,xt);else wt(z.__webglFramebuffer[pt],E,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);x(y,yt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const pt=E.texture;for(let xt=0,Lt=pt.length;xt<Lt;xt++){const Vt=pt[xt],rt=n.get(Vt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),V(s.TEXTURE_2D,Vt,yt),wt(z.__webglFramebuffer,E,Vt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),x(Vt,yt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,et.__webglTexture),V(pt,y,yt),o&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)wt(z.__webglFramebuffer[xt],E,y,s.COLOR_ATTACHMENT0,pt,xt);else wt(z.__webglFramebuffer,E,y,s.COLOR_ATTACHMENT0,pt,0);x(y,yt)&&v(pt),e.unbindTexture()}E.depthBuffer&&At(E)}function j(E){const y=m(E)||o,z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,it=z.length;et<it;et++){const st=z[et];if(x(st,y)){const yt=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pt=n.get(st).__webglTexture;e.bindTexture(yt,pt),v(yt),e.unbindTexture()}}}function Z(E){if(o&&E.samples>0&&X(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],z=E.width,et=E.height;let it=s.COLOR_BUFFER_BIT;const st=[],yt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(E),xt=E.isWebGLMultipleRenderTargets===!0;if(xt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){st.push(s.COLOR_ATTACHMENT0+Lt),E.depthBuffer&&st.push(yt);const Vt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Vt===!1&&(E.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),xt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]),Vt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),xt){const rt=n.get(y[Lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,z,et,0,0,z,et,it,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]);const Vt=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function Y(E){return Math.min(i.maxSamples,E.samples)}function X(E){const y=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function vt(E,y){const z=E.colorSpace,et=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===aa||z!==An&&z!==en&&(ee.getTransfer(z)===le?o===!1?t.has("EXT_sRGB")===!0&&et===hn?(E.format=aa,E.minFilter=tn,E.generateMipmaps=!1):y=Fl.sRGBToLinear(y):(et!==hn||it!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=$t,this.setupRenderTarget=O,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=X}function sm(s,t,e){const n=e.isWebGL2;function i(r,a=en){let o;const l=ee.getTransfer(a);if(r===On)return s.UNSIGNED_BYTE;if(r===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Al)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kc)return s.BYTE;if(r===Gc)return s.SHORT;if(r===fa)return s.UNSIGNED_SHORT;if(r===El)return s.INT;if(r===In)return s.UNSIGNED_INT;if(r===Nn)return s.FLOAT;if(r===Tn)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Hc)return s.ALPHA;if(r===hn)return s.RGBA;if(r===Vc)return s.LUMINANCE;if(r===Wc)return s.LUMINANCE_ALPHA;if(r===ti)return s.DEPTH_COMPONENT;if(r===Ii)return s.DEPTH_STENCIL;if(r===aa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xc)return s.RED;if(r===Rl)return s.RED_INTEGER;if(r===qc)return s.RG;if(r===Cl)return s.RG_INTEGER;if(r===Pl)return s.RGBA_INTEGER;if(r===ur||r===dr||r===fr||r===pr)if(l===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fa||r===Oa||r===za||r===Ba)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ll)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ka||r===Ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ka)return l===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ga)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ha||r===Va||r===Wa||r===Xa||r===qa||r===Ya||r===$a||r===ja||r===Za||r===Ka||r===Ja||r===Qa||r===to||r===eo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ha)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Va)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wa)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xa)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qa)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ya)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$a)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ja)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Za)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ka)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ja)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qa)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===to)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===eo)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mr||r===no||r===io)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===mr)return l===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===no)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===io)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yc||r===so||r===ro||r===ao)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===mr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===so)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ro)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ao)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class rm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(am)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class om extends Oi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new bt;let C=null;const A=new Ze;A.layers.enable(1),A.viewport=new ce;const T=new Ze;T.layers.enable(2),T.viewport=new ce;const D=[A,T],M=new rm;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let nt=x[V];return nt===void 0&&(nt=new Br,x[V]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(V){let nt=x[V];return nt===void 0&&(nt=new Br,x[V]=nt),nt.getGripSpace()},this.getHand=function(V){let nt=x[V];return nt===void 0&&(nt=new Br,x[V]=nt),nt.getHandSpace()};function N(V){const nt=v.indexOf(V.inputSource);if(nt===-1)return;const ut=x[nt];ut!==void 0&&(ut.update(V.inputSource,V.frame,c||a),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let V=0;V<x.length;V++){const nt=v[V];nt!==null&&(v[V]=null,x[V].disconnect(nt))}w=null,F=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new un(p.framebufferWidth,p.framebufferHeight,{format:hn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let nt=null,ut=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Ii:ti,ut=_.stencil?Qn:In);const wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(wt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new un(d.textureWidth,d.textureHeight,{format:hn,type:On,depthTexture:new Yl(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let nt=0;nt<V.removed.length;nt++){const ut=V.removed[nt],Et=v.indexOf(ut);Et>=0&&(v[Et]=null,x[Et].disconnect(ut))}for(let nt=0;nt<V.added.length;nt++){const ut=V.added[nt];let Et=v.indexOf(ut);if(Et===-1){for(let It=0;It<x.length;It++)if(It>=v.length){v.push(ut),Et=It;break}else if(v[It]===null){v[It]=ut,Et=It;break}if(Et===-1)break}const wt=x[Et];wt&&wt.connect(ut)}}const U=new R,H=new R;function q(V,nt,ut){U.setFromMatrixPosition(nt.matrixWorld),H.setFromMatrixPosition(ut.matrixWorld);const Et=U.distanceTo(H),wt=nt.projectionMatrix.elements,It=ut.projectionMatrix.elements,Ft=wt[14]/(wt[10]-1),At=wt[14]/(wt[10]+1),$t=(wt[9]+1)/wt[5],O=(wt[9]-1)/wt[5],j=(wt[8]-1)/wt[0],Z=(It[8]+1)/It[0],Y=Ft*j,X=Ft*Z,St=Et/(-j+Z),vt=St*-j;nt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(vt),V.translateZ(St),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const E=Ft+St,y=At+St,z=Y-vt,et=X+(Et-vt),it=$t*At/y*E,st=O*At/y*E;V.projectionMatrix.makePerspective(z,et,it,st,E,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,nt){nt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(nt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=T.near=A.near=V.near,M.far=T.far=A.far=V.far,(w!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);const nt=V.parent,ut=M.cameras;$(M,nt);for(let Et=0;Et<ut.length;Et++)$(ut[Et],nt);ut.length===2?q(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),Q(V,M,nt)};function Q(V,nt,ut){ut===null?V.matrix.copy(nt.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(nt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(nt.projectionMatrix),V.projectionMatrixInverse.copy(nt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=oa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let tt=null;function ot(V,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Et=!1;ut.length!==M.cameras.length&&(M.cameras.length=0,Et=!0);for(let wt=0;wt<ut.length;wt++){const It=ut[wt];let Ft=null;if(p!==null)Ft=p.getViewport(It);else{const $t=u.getViewSubImage(d,It);Ft=$t.viewport,wt===0&&(t.setRenderTargetTextures(f,$t.colorTexture,d.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(f))}let At=D[wt];At===void 0&&(At=new Ze,At.layers.enable(wt),At.viewport=new ce,D[wt]=At),At.matrix.fromArray(It.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(It.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),wt===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Et===!0&&M.cameras.push(At)}}for(let ut=0;ut<x.length;ut++){const Et=v[ut],wt=x[ut];Et!==null&&wt!==void 0&&wt.update(Et,nt,c||a)}tt&&tt(V,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const at=new ql;at.setAnimationLoop(ot),this.setAnimationLoop=function(V){tt=V},this.dispose=function(){}}}function lm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cm(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(g(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(x,C);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const S=s.createBuffer(),C=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],S=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,w=D.length;M<w;M++){const F=D[M];if(p(F,A,M,C)===!0){const N=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let U=0;U<J.length;U++){const H=J[U],q=_(H);typeof H=="number"||typeof H=="boolean"?(F.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+P,F.__data)):H.isMatrix3?(F.__data[0]=H.elements[0],F.__data[1]=H.elements[1],F.__data[2]=H.elements[2],F.__data[3]=0,F.__data[4]=H.elements[3],F.__data[5]=H.elements[4],F.__data[6]=H.elements[5],F.__data[7]=0,F.__data[8]=H.elements[6],F.__data[9]=H.elements[7],F.__data[10]=H.elements[8],F.__data[11]=0):(H.toArray(F.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,v,S,C){const A=x.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const D=C[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(x){const v=x.uniforms;let S=0;const C=16;for(let T=0,D=v.length;T<D;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,F=M.length;w<F;w++){const N=M[w],J=Array.isArray(N.value)?N.value:[N.value];for(let P=0,U=J.length;P<U;P++){const H=J[P],q=_(H),$=S%C;$!==0&&C-$<q.boundary&&(S+=C-$),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=q.storage}}}const A=S%C;return A>0&&(S+=C-A),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Ql{constructor(t={}){const{canvas:e=rh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,D=-1,M=null;const w=new ce,F=new ce;let N=null;const J=new ht(0);let P=0,U=e.width,H=e.height,q=1,$=null,Q=null;const tt=new ce(0,0,U,H),ot=new ce(0,0,U,H);let at=!1;const V=new ga;let nt=!1,ut=!1,Et=null;const wt=new Kt,It=new bt,Ft=new R,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $t(){return T===null?q:1}let O=n;function j(b,I){for(let k=0;k<b.length;k++){const G=b[k],B=e.getContext(G,I);if(B!==null)return B}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),O=j(I,b),O===null)throw j(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,Y,X,St,vt,E,y,z,et,it,st,yt,pt,xt,Lt,Vt,rt,ne,jt,Nt,Rt,Mt,Gt,te;function ue(){Z=new xf(O),Y=new ff(O,Z,t),Z.init(Y),Mt=new sm(O,Z,Y),X=new nm(O,Z,Y),St=new Sf(O),vt=new Hp,E=new im(O,Z,X,vt,Y,Mt,St),y=new mf(v),z=new vf(v),et=new Ch(O,Y),Gt=new uf(O,Z,et,Y),it=new Mf(O,et,St,Gt),st=new Tf(O,it,et,St),jt=new Ef(O,Y,E),Vt=new pf(vt),yt=new Gp(v,y,z,Z,Y,Gt,Vt),pt=new lm(v,vt),xt=new Wp,Lt=new Zp(Z,Y),ne=new hf(v,y,z,X,st,d,l),rt=new em(v,st,Y),te=new cm(O,St,Y,X),Nt=new df(O,Z,St,Y),Rt=new yf(O,Z,St,Y),St.programs=yt.programs,v.capabilities=Y,v.extensions=Z,v.properties=vt,v.renderLists=xt,v.shadowMap=rt,v.state=X,v.info=St}ue();const Xt=new om(v,O);this.xr=Xt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(U,H,!1))},this.getSize=function(b){return b.set(U,H)},this.setSize=function(b,I,k=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,H=I,e.width=Math.floor(b*q),e.height=Math.floor(I*q),k===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(b,I,k){U=b,H=I,q=k,e.width=Math.floor(b*k),e.height=Math.floor(I*k),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,I,k,G){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,I,k,G),X.viewport(w.copy(tt).multiplyScalar(q).floor())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,I,k,G){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,I,k,G),X.scissor(F.copy(ot).multiplyScalar(q).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){X.setScissorTest(at=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,I=!0,k=!0){let G=0;if(b){let B=!1;if(T!==null){const _t=T.texture.format;B=_t===Pl||_t===Cl||_t===Rl}if(B){const _t=T.texture.type,Tt=_t===On||_t===In||_t===fa||_t===Qn||_t===Tl||_t===Al,Pt=ne.getClearColor(),Ut=ne.getClearAlpha(),Wt=Pt.r,Ot=Pt.g,kt=Pt.b;Tt?(p[0]=Wt,p[1]=Ot,p[2]=kt,p[3]=Ut,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Wt,g[1]=Ot,g[2]=kt,g[3]=Ut,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}I&&(G|=O.DEPTH_BUFFER_BIT),k&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),Lt.dispose(),vt.dispose(),y.dispose(),z.dispose(),st.dispose(),Gt.dispose(),te.dispose(),yt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Ue),Xt.removeEventListener("sessionend",oe),Et&&(Et.dispose(),Et=null),Ie.stop()};function lt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=St.autoReset,I=rt.enabled,k=rt.autoUpdate,G=rt.needsUpdate,B=rt.type;ue(),St.autoReset=b,rt.enabled=I,rt.autoUpdate=k,rt.needsUpdate=G,rt.type=B}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const I=b.target;I.removeEventListener("dispose",ft),Dt(I)}function Dt(b){Ct(b),vt.remove(b)}function Ct(b){const I=vt.get(b).programs;I!==void 0&&(I.forEach(function(k){yt.releaseProgram(k)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,k,G,B,_t){I===null&&(I=At);const Tt=B.isMesh&&B.matrixWorld.determinant()<0,Pt=oc(b,I,k,G,B);X.setMaterial(G,Tt);let Ut=k.index,Wt=1;if(G.wireframe===!0){if(Ut=it.getWireframeAttribute(k),Ut===void 0)return;Wt=2}const Ot=k.drawRange,kt=k.attributes.position;let me=Ot.start*Wt,We=(Ot.start+Ot.count)*Wt;_t!==null&&(me=Math.max(me,_t.start*Wt),We=Math.min(We,(_t.start+_t.count)*Wt)),Ut!==null?(me=Math.max(me,0),We=Math.min(We,Ut.count)):kt!=null&&(me=Math.max(me,0),We=Math.min(We,kt.count));const be=We-me;if(be<0||be===1/0)return;Gt.setup(B,G,Pt,k,Ut);let mn,he=Nt;if(Ut!==null&&(mn=et.get(Ut),he=Rt,he.setIndex(mn)),B.isMesh)G.wireframe===!0?(X.setLineWidth(G.wireframeLinewidth*$t()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(B.isLine){let qt=G.linewidth;qt===void 0&&(qt=1),X.setLineWidth(qt*$t()),B.isLineSegments?he.setMode(O.LINES):B.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else B.isPoints?he.setMode(O.POINTS):B.isSprite&&he.setMode(O.TRIANGLES);if(B.isBatchedMesh)he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)he.renderInstances(me,be,B.count);else if(k.isInstancedBufferGeometry){const qt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ar=Math.min(k.instanceCount,qt);he.renderInstances(me,be,ar)}else he.render(me,be)};function re(b,I,k){b.transparent===!0&&b.side===He&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,cs(b,I,k),b.side=Bn,b.needsUpdate=!0,cs(b,I,k),b.side=He):cs(b,I,k)}this.compile=function(b,I,k=null){k===null&&(k=b),m=Lt.get(k),m.init(),x.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==k&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(v._useLegacyLights);const G=new Set;return b.traverse(function(B){const _t=B.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Pt=_t[Tt];re(Pt,k,B),G.add(Pt)}else re(_t,k,B),G.add(_t)}),x.pop(),m=null,G},this.compileAsync=function(b,I,k=null){const G=this.compile(b,I,k);return new Promise(B=>{function _t(){if(G.forEach(function(Tt){vt.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){B(b);return}setTimeout(_t,10)}Z.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ae=null;function we(b){ae&&ae(b)}function Ue(){Ie.stop()}function oe(){Ie.start()}const Ie=new ql;Ie.setAnimationLoop(we),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){ae=b,Xt.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},Xt.addEventListener("sessionstart",Ue),Xt.addEventListener("sessionend",oe),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(I),I=Xt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,T),m=Lt.get(b,x.length),m.init(),x.push(m),wt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),V.setFromProjectionMatrix(wt),ut=this.localClippingEnabled,nt=Vt.init(this.clippingPlanes,ut),_=xt.get(b,f.length),_.init(),f.push(_),dn(b,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,Q),this.info.render.frame++,nt===!0&&Vt.beginShadows();const k=m.state.shadowsArray;if(rt.render(k,b,I),nt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(_,b),m.setupLights(v._useLegacyLights),I.isArrayCamera){const G=I.cameras;for(let B=0,_t=G.length;B<_t;B++){const Tt=G[B];ba(_,b,Tt,Tt.viewport)}}else ba(_,b,I);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,I),Gt.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function dn(b,I,k,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){G&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const Tt=st.update(b),Pt=b.material;Pt.visible&&_.push(b,Tt,Pt,k,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const Tt=st.update(b),Pt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ft.copy(Tt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(Pt)){const Ut=Tt.groups;for(let Wt=0,Ot=Ut.length;Wt<Ot;Wt++){const kt=Ut[Wt],me=Pt[kt.materialIndex];me&&me.visible&&_.push(b,Tt,me,k,Ft.z,kt)}}else Pt.visible&&_.push(b,Tt,Pt,k,Ft.z,null)}}const _t=b.children;for(let Tt=0,Pt=_t.length;Tt<Pt;Tt++)dn(_t[Tt],I,k,G)}function ba(b,I,k,G){const B=b.opaque,_t=b.transmissive,Tt=b.transparent;m.setupLightsView(k),nt===!0&&Vt.setGlobalState(v.clippingPlanes,k),_t.length>0&&ac(B,_t,I,k),G&&X.viewport(w.copy(G)),B.length>0&&ls(B,I,k),_t.length>0&&ls(_t,I,k),Tt.length>0&&ls(Tt,I,k),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function ac(b,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const _t=Y.isWebGL2;Et===null&&(Et=new un(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?Tn:On,minFilter:rs,samples:_t?4:0})),v.getDrawingBufferSize(It),_t?Et.setSize(It.x,It.y):Et.setSize(la(It.x),la(It.y));const Tt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Pt=v.toneMapping;v.toneMapping=Fn,ls(b,k,G),E.updateMultisampleRenderTarget(Et),E.updateRenderTargetMipmap(Et);let Ut=!1;for(let Wt=0,Ot=I.length;Wt<Ot;Wt++){const kt=I[Wt],me=kt.object,We=kt.geometry,be=kt.material,mn=kt.group;if(be.side===He&&me.layers.test(G.layers)){const he=be.side;be.side=Ge,be.needsUpdate=!0,Ea(me,k,G,We,be,mn),be.side=he,be.needsUpdate=!0,Ut=!0}}Ut===!0&&(E.updateMultisampleRenderTarget(Et),E.updateRenderTargetMipmap(Et)),v.setRenderTarget(Tt),v.setClearColor(J,P),v.toneMapping=Pt}function ls(b,I,k){const G=I.isScene===!0?I.overrideMaterial:null;for(let B=0,_t=b.length;B<_t;B++){const Tt=b[B],Pt=Tt.object,Ut=Tt.geometry,Wt=G===null?Tt.material:G,Ot=Tt.group;Pt.layers.test(k.layers)&&Ea(Pt,I,k,Ut,Wt,Ot)}}function Ea(b,I,k,G,B,_t){b.onBeforeRender(v,I,k,G,B,_t),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,I,k,G,b,_t),B.transparent===!0&&B.side===He&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,v.renderBufferDirect(k,I,G,B,b,_t),B.side=Bn,B.needsUpdate=!0,v.renderBufferDirect(k,I,G,B,b,_t),B.side=He):v.renderBufferDirect(k,I,G,B,b,_t),b.onAfterRender(v,I,k,G,B,_t)}function cs(b,I,k){I.isScene!==!0&&(I=At);const G=vt.get(b),B=m.state.lights,_t=m.state.shadowsArray,Tt=B.state.version,Pt=yt.getParameters(b,B.state,_t,I,k),Ut=yt.getProgramCacheKey(Pt);let Wt=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?z:y).get(b.envMap||G.environment),Wt===void 0&&(b.addEventListener("dispose",ft),Wt=new Map,G.programs=Wt);let Ot=Wt.get(Ut);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===Tt)return Aa(b,Pt),Ot}else Pt.uniforms=yt.getUniforms(b),b.onBuild(k,Pt,v),b.onBeforeCompile(Pt,v),Ot=yt.acquireProgram(Pt,Ut),Wt.set(Ut,Ot),G.uniforms=Pt.uniforms;const kt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),Aa(b,Pt),G.needsLights=cc(b),G.lightsStateVersion=Tt,G.needsLights&&(kt.ambientLightColor.value=B.state.ambient,kt.lightProbe.value=B.state.probe,kt.directionalLights.value=B.state.directional,kt.directionalLightShadows.value=B.state.directionalShadow,kt.spotLights.value=B.state.spot,kt.spotLightShadows.value=B.state.spotShadow,kt.rectAreaLights.value=B.state.rectArea,kt.ltc_1.value=B.state.rectAreaLTC1,kt.ltc_2.value=B.state.rectAreaLTC2,kt.pointLights.value=B.state.point,kt.pointLightShadows.value=B.state.pointShadow,kt.hemisphereLights.value=B.state.hemi,kt.directionalShadowMap.value=B.state.directionalShadowMap,kt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,kt.spotShadowMap.value=B.state.spotShadowMap,kt.spotLightMatrix.value=B.state.spotLightMatrix,kt.spotLightMap.value=B.state.spotLightMap,kt.pointShadowMap.value=B.state.pointShadowMap,kt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Ta(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=qs.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Aa(b,I){const k=vt.get(b);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function oc(b,I,k,G,B){I.isScene!==!0&&(I=At),E.resetTextureUnits();const _t=I.fog,Tt=G.isMeshStandardMaterial?I.environment:null,Pt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,Ut=(G.isMeshStandardMaterial?z:y).get(G.envMap||Tt),Wt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),kt=!!k.morphAttributes.position,me=!!k.morphAttributes.normal,We=!!k.morphAttributes.color;let be=Fn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(be=v.toneMapping);const mn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=mn!==void 0?mn.length:0,qt=vt.get(G),ar=m.state.lights;if(nt===!0&&(ut===!0||b!==M)){const Ke=b===M&&G.id===D;Vt.setState(G,b,Ke)}let de=!1;G.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ar.state.version||qt.outputColorSpace!==Pt||B.isBatchedMesh&&qt.batching===!1||!B.isBatchedMesh&&qt.batching===!0||B.isInstancedMesh&&qt.instancing===!1||!B.isInstancedMesh&&qt.instancing===!0||B.isSkinnedMesh&&qt.skinning===!1||!B.isSkinnedMesh&&qt.skinning===!0||B.isInstancedMesh&&qt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qt.instancingColor===!1&&B.instanceColor!==null||qt.envMap!==Ut||G.fog===!0&&qt.fog!==_t||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Wt||qt.vertexTangents!==Ot||qt.morphTargets!==kt||qt.morphNormals!==me||qt.morphColors!==We||qt.toneMapping!==be||Y.isWebGL2===!0&&qt.morphTargetsCount!==he)&&(de=!0):(de=!0,qt.__version=G.version);let Gn=qt.currentProgram;de===!0&&(Gn=cs(G,I,B));let Ra=!1,ki=!1,or=!1;const Ae=Gn.getUniforms(),Hn=qt.uniforms;if(X.useProgram(Gn.program)&&(Ra=!0,ki=!0,or=!0),G.id!==D&&(D=G.id,ki=!0),Ra||M!==b){Ae.setValue(O,"projectionMatrix",b.projectionMatrix),Ae.setValue(O,"viewMatrix",b.matrixWorldInverse);const Ke=Ae.map.cameraPosition;Ke!==void 0&&Ke.setValue(O,Ft.setFromMatrixPosition(b.matrixWorld)),Y.logarithmicDepthBuffer&&Ae.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,ki=!0,or=!0)}if(B.isSkinnedMesh){Ae.setOptional(O,B,"bindMatrix"),Ae.setOptional(O,B,"bindMatrixInverse");const Ke=B.skeleton;Ke&&(Y.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ae.setValue(O,"boneTexture",Ke.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ae.setOptional(O,B,"batchingTexture"),Ae.setValue(O,"batchingTexture",B._matricesTexture,E));const lr=k.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&Y.isWebGL2===!0)&&jt.update(B,k,Gn),(ki||qt.receiveShadow!==B.receiveShadow)&&(qt.receiveShadow=B.receiveShadow,Ae.setValue(O,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Hn.envMap.value=Ut,Hn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ki&&(Ae.setValue(O,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&lc(Hn,or),_t&&G.fog===!0&&pt.refreshFogUniforms(Hn,_t),pt.refreshMaterialUniforms(Hn,G,q,H,Et),qs.upload(O,Ta(qt),Hn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qs.upload(O,Ta(qt),Hn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(O,"center",B.center),Ae.setValue(O,"modelViewMatrix",B.modelViewMatrix),Ae.setValue(O,"normalMatrix",B.normalMatrix),Ae.setValue(O,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ke=G.uniformsGroups;for(let cr=0,hc=Ke.length;cr<hc;cr++)if(Y.isWebGL2){const Ca=Ke[cr];te.update(Ca,Gn),te.bind(Ca,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function lc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function cc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,k){vt.get(b.texture).__webglTexture=I,vt.get(b.depthTexture).__webglTexture=k;const G=vt.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const k=vt.get(b);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,k=0){T=b,C=I,A=k;let G=!0,B=null,_t=!1,Tt=!1;if(b){const Ut=vt.get(b);Ut.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Ut.__webglFramebuffer===void 0?E.setupRenderTarget(b):Ut.__hasExternalTextures&&E.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Tt=!0);const Ot=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[I])?B=Ot[I][k]:B=Ot[I],_t=!0):Y.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?B=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[k]:B=Ot,w.copy(b.viewport),F.copy(b.scissor),N=b.scissorTest}else w.copy(tt).multiplyScalar(q).floor(),F.copy(ot).multiplyScalar(q).floor(),N=at;if(X.bindFramebuffer(O.FRAMEBUFFER,B)&&Y.drawBuffers&&G&&X.drawBuffers(b,B),X.viewport(w),X.scissor(F),X.setScissorTest(N),_t){const Ut=vt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ut.__webglTexture,k)}else if(Tt){const Ut=vt.get(b.texture),Wt=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,k||0,Wt)}D=-1},this.readRenderTargetPixels=function(b,I,k,G,B,_t,Tt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){X.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Ut=b.texture,Wt=Ut.format,Ot=Ut.type;if(Wt!==hn&&Mt.convert(Wt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ot===Tn&&(Z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ot!==On&&Mt.convert(Ot)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Nn&&(Y.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&k>=0&&k<=b.height-B&&O.readPixels(I,k,G,B,Mt.convert(Wt),Mt.convert(Ot),_t)}finally{const Ut=T!==null?vt.get(T).__webglFramebuffer:null;X.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(b,I,k=0){const G=Math.pow(2,-k),B=Math.floor(I.image.width*G),_t=Math.floor(I.image.height*G);E.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,b.x,b.y,B,_t),X.unbindTexture()},this.copyTextureToTexture=function(b,I,k,G=0){const B=I.image.width,_t=I.image.height,Tt=Mt.convert(k.format),Pt=Mt.convert(k.type);E.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,b.x,b.y,B,_t,Tt,Pt,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Tt,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,b.x,b.y,Tt,Pt,I.image),G===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(b,I,k,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=b.max.x-b.min.x+1,Tt=b.max.y-b.min.y+1,Pt=b.max.z-b.min.z+1,Ut=Mt.convert(G.format),Wt=Mt.convert(G.type);let Ot;if(G.isData3DTexture)E.setTexture3D(G,0),Ot=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Ot=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const kt=O.getParameter(O.UNPACK_ROW_LENGTH),me=O.getParameter(O.UNPACK_IMAGE_HEIGHT),We=O.getParameter(O.UNPACK_SKIP_PIXELS),be=O.getParameter(O.UNPACK_SKIP_ROWS),mn=O.getParameter(O.UNPACK_SKIP_IMAGES),he=k.isCompressedTexture?k.mipmaps[B]:k.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,b.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(Ot,B,I.x,I.y,I.z,_t,Tt,Pt,Ut,Wt,he.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ot,B,I.x,I.y,I.z,_t,Tt,Pt,Ut,he.data)):O.texSubImage3D(Ot,B,I.x,I.y,I.z,_t,Tt,Pt,Ut,Wt,he),O.pixelStorei(O.UNPACK_ROW_LENGTH,kt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me),O.pixelStorei(O.UNPACK_SKIP_PIXELS,We),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),O.pixelStorei(O.UNPACK_SKIP_IMAGES,mn),B===0&&G.generateMipmaps&&O.generateMipmap(Ot),X.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,X.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pa?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===sr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?ei:Dl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ei?ge:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class hm extends Ql{}hm.prototype.isWebGL1Renderer=!0;class xa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class um extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class dm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new R;class nr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new _e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tc extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mi;const Xi=new R,yi=new R,Si=new R,wi=new bt,qi=new bt,ec=new Kt,Ds=new R,Yi=new R,Us=new R,jo=new bt,kr=new bt,Zo=new bt;class fm extends Me{constructor(t=new tc){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dm(e,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new nr(n,3,0,!1)),Mi.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=Mi,this.material=t,this.center=new bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),ec.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Is(Ds.set(-.5,-.5,0),Si,a,yi,i,r),Is(Yi.set(.5,-.5,0),Si,a,yi,i,r),Is(Us.set(.5,.5,0),Si,a,yi,i,r),jo.set(0,0),kr.set(1,0),Zo.set(1,1);let o=t.ray.intersectTriangle(Ds,Yi,Us,!1,Xi);if(o===null&&(Is(Yi.set(-.5,.5,0),Si,a,yi,i,r),kr.set(0,1),o=t.ray.intersectTriangle(Ds,Us,Yi,!1,Xi),o===null))return;const l=t.ray.origin.distanceTo(Xi);l<t.near||l>t.far||e.push({distance:l,point:Xi.clone(),uv:je.getInterpolation(Xi,Ds,Yi,Us,jo,kr,Zo,new bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Is(s,t,e,n,i,r){wi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*wi.x-i*wi.y,qi.y=i*wi.x+r*wi.y):qi.copy(wi),s.copy(t),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(ec)}class Ko extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new Kt,Jo=new Kt,Ns=[],Qo=new ni,pm=new Kt,$i=new W,ji=new ii;class Yn extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Qo.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Qo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ji.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bi),Jo.multiplyMatrices(n,bi),$i.matrixWorld=Jo,$i.raycast(t,Ns);for(let a=0,o=Ns.length;a<o;a++){const l=Ns[a];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const tl=new R,el=new R,nl=new Kt,Gr=new ma,Fs=new ii;class mm extends Me{constructor(t=new se,e=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)tl.fromBufferAttribute(e,i-1),el.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=tl.distanceTo(el);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;nl.copy(i).invert(),Gr.copy(t.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=f,S=x-1;v<S;v+=p){const C=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,A),Gr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=f,S=x-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Gr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const il=new R,sl=new R;class Hr extends mm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)il.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(sl);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jn extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new Kt,ha=new ma,Os=new ii,zs=new R;class Ei extends Me{constructor(t=new se,e=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;rl.copy(i).invert(),ha.copy(t.ray).applyMatrix4(rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);zs.fromBufferAttribute(u,m),al(zs,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)zs.fromBufferAttribute(u,g),al(zs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(s,t,e,n,i,r,a){const o=ha.distanceSqToPoint(s);if(o<e){const l=new R;ha.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Ma extends Ve{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new bt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],a=[],o=new R,l=new Kt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Le(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Le(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ya(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Bs=new R,Vr=new ya,Wr=new ya,Xr=new ya;class _m extends gm{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Bs.subVectors(i[0],i[1]).add(i[0]),c=Bs);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Bs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Xr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vr.calc(l),Wr.calc(l),Xr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Ri extends se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zt extends se{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function x(){const S=new R,C=new R;let A=0;const T=(e-t)/n;for(let D=0;D<=r;D++){const M=[],w=D/r,F=w*(e-t)+t;for(let N=0;N<=i;N++){const J=N/i,P=J*l+o,U=Math.sin(P),H=Math.cos(P);C.x=F*U,C.y=-w*n+m,C.z=F*H,u.push(C.x,C.y,C.z),S.set(U,T,H).normalize(),d.push(S.x,S.y,S.z),p.push(J,1-w),M.push(g++)}_.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){const w=_[M][D],F=_[M+1][D],N=_[M+1][D+1],J=_[M][D+1];h.push(w,F,J),h.push(F,N,J),A+=6}c.addGroup(f,A,0),f+=A}function v(S){const C=g,A=new bt,T=new R;let D=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),g++;const F=g;for(let N=0;N<=i;N++){const P=N/i*l+o,U=Math.cos(P),H=Math.sin(P);T.x=M*H,T.y=m*w,T.z=M*U,u.push(T.x,T.y,T.z),d.push(0,w,0),A.x=U*.5+.5,A.y=H*.5*w+.5,p.push(A.x,A.y),g++}for(let N=0;N<i;N++){const J=C+N,P=F+N;S===!0?h.push(P,P+1,J):h.push(P+1,P,J),D+=3}c.addGroup(f,D,S===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fe extends zt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new R,S=new R,C=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],v),p(e[A+1],S),p(e[A+2],C),l(v,S,C,x)}function l(x,v,S,C){const A=C+1,T=[];for(let D=0;D<=A;D++){T[D]=[];const M=x.clone().lerp(S,D/A),w=v.clone().lerp(S,D/A),F=A-D;for(let N=0;N<=F;N++)N===0&&D===A?T[D][N]=M:T[D][N]=M.clone().lerp(w,N/F)}for(let D=0;D<A;D++)for(let M=0;M<2*(A-D)-1;M++){const w=Math.floor(M/2);M%2===0?(d(T[D][w+1]),d(T[D+1][w]),d(T[D][w])):(d(T[D][w+1]),d(T[D+1][w+1]),d(T[D+1][w]))}}function c(x){const v=new R;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(x),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const x=new R;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const S=m(x)/2/Math.PI+.5,C=f(x)/Math.PI+.5;a.push(S,1-C)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const v=a[x+0],S=a[x+2],C=a[x+4],A=Math.max(v,S,C),T=Math.min(v,S,C);A>.9&&T<.1&&(v<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),C<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,v){const S=x*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const x=new R,v=new R,S=new R,C=new R,A=new bt,T=new bt,D=new bt;for(let M=0,w=0;M<r.length;M+=9,w+=6){x.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),A.set(a[w+0],a[w+1]),T.set(a[w+2],a[w+3]),D.set(a[w+4],a[w+5]),C.copy(x).add(v).add(S).divideScalar(3);const F=m(C);_(A,w+0,x,F),_(T,w+2,v,F),_(D,w+4,S,F)}}function _(x,v,S,C){C<0&&x.x===1&&(a[v]=x.x-1),S.x===0&&S.z===0&&(a[v]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.vertices,t.indices,t.radius,t.details)}}class es extends os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new es(t.radius,t.detail)}}const ks=new R,Gs=new R,qr=new R,Hs=new je;class vm extends se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Xs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=Hs;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Hs.getNormal(qr),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,S=u[x],C=u[v],A=Hs[h[x]],T=Hs[h[v]],D=`${S}_${C}`,M=`${C}_${S}`;M in d&&d[M]?(qr.dot(d[M].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),d[M]=null):D in d||(d[D]={index0:c[x],index1:c[v],normal:qr.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];ks.fromBufferAttribute(o,_),Gs.fromBufferAttribute(o,m),p.push(ks.x,ks.y,ks.z),p.push(Gs.x,Gs.y,Gs.z)}this.setAttribute("position",new Jt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ze extends os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ze(t.radius,t.detail)}}class ns extends os{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ns(t.radius,t.detail)}}class xe extends se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&a===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const v=h[f][x+1],S=h[f][x],C=h[f+1][x],A=h[f+1][x+1];(f!==0||a>0)&&p.push(v,S,A),(f!==n-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class is extends se{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,x=(i+1)*p+g;a.push(_,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xm extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Te extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sa extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Mm extends Sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new Kt,ol=new R,ll=new R;class nc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cl=new Kt,Zi=new R,$r=new R;class ym extends nc{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zi),$r.copy(n.position),$r.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($r),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl)}}class $s extends Sa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ym}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sm extends nc{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ic{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ul();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ul(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const sc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Bi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wm=new _a(-1,1,1,-1,0,1);class bm extends se{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Em=new bm;class wa{constructor(t){this._mesh=new W(Em,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tm extends Bi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=as.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dl extends Bi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Am extends Bi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Rm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new bt);this._width=n.width,this._height=n.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tm(sc),this.copyPass.material.blending=En,this.clock=new ic}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}dl!==void 0&&(a instanceof dl?n=!0:a instanceof Am&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cm extends Bi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ht}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Pm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Fi extends Bi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new bt(t.x,t.y):new bt(256,256),this.clearColor=new ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new un(r,a,{type:Tn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new un(r,a,{type:Tn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=Pm;this.highPassUniforms=as.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new bt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=sc;this.copyUniforms=as.clone(h.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Sn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ht,this.oldClearAlpha=1,this.basic=new Pe,this.fsQuad=new wa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new bt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new bt(.5,.5)},direction:{value:new bt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Fi.BlurDirectionX=new bt(1,0);Fi.BlurDirectionY=new bt(0,1);const Lm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Dm extends Bi{constructor(){super();const t=Lm;this.uniforms=as.clone(t.uniforms),this.material=new xm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ml?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Um(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new se;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=fl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let _=0;_<a[h].length;++_)p.push(a[h][_][d]);const g=fl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function fl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new t(r);let o=0;for(let c=0;c<s.length;++c)a.set(s[c].array,o),o+=s[c].array.length;const l=new _e(a,e,n);return i!==void 0&&(l.gpuType=i),l}const pe=(s,t,e)=>Math.max(t,Math.min(e,s)),Be=(s,t,e)=>s+(t-s)*e,Qe=(s,t,e)=>{const n=pe((e-s)/(t-s),0,1);return n*n*(3-2*n)},Im=(s,t,e,n)=>Be(s,t,1-Math.exp(-8*n)),K=(s=0,t=1)=>s+Math.random()*(t-s);function pl(s,t,e){let n=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*e}function Vs(s,t){const e=Math.sin(s*127.1+t*311.7+13.7)*43758.5453;return e-Math.floor(e)}function js(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Vs(e,n),c=Vs(e+1,n),h=Vs(e,n+1),u=Vs(e+1,n+1);return Be(Be(l,c,a),Be(h,u,a),o)}function Ki(s,t){return js(s,t)*.58+js(s*2.07+5.2,t*2.07+1.3)*.27+js(s*4.1+9,t*4.1+3)*.15}function Nm(s,t,e=0){const n=new ht(t),i=s.attributes.position.count,r=new Float32Array(i*3);for(let a=0;a<i;a++){const o=e?(Math.random()-.5)*e:0;r[a*3]=pe(n.r+o,0,1),r[a*3+1]=pe(n.g+o,0,1),r[a*3+2]=pe(n.b+o,0,1)}return s.setAttribute("color",new _e(r,3)),s}function Ye(s,t=0,e=0,n=0,i=0,r=0,a=0,o=1){return o!==1&&s.scale(o,o,o),i&&s.rotateX(i),r&&s.rotateY(r),a&&s.rotateZ(a),s.translate(t,e,n),s}function an(s){const t=s.map(({geo:n,color:i,jitter:r})=>{let a=n;if(a.index){const o=a.toNonIndexed();a.dispose(),a=o}return Nm(a,i,r||0)}),e=Um(t,!1);if(!e)throw new Error("mergeColored failed: incompatible geometries");return t.forEach(n=>n.dispose()),e.computeVertexNormals(),e}function mt(s={}){return new Te({roughness:.92,metalness:0,flatShading:!0,...s})}function Un(s={}){return mt({vertexColors:!0,...s})}const jr=new Map;function Ci(s="#ffffff",t=.55){const e=s+t;if(jr.has(e))return jr.get(e);const n=128,i=document.createElement("canvas");i.width=i.height=n;const r=i.getContext("2d"),a=r.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(t*.5,s),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,n,n);const o=new Ma(i);return o.colorSpace=ge,jr.set(e,o),o}function Oe(s,t,e=1){const n=new tc({map:Ci(s),color:16777215,transparent:!0,opacity:e,blending:Sn,depthWrite:!1,toneMapped:!1}),i=new fm(n);return i.scale.setScalar(t),i}function Fm(s,t,e,n,i,r,a){const o=Math.max(Math.abs(s-e)-i,0),l=Math.max(Math.abs(t-n)-r,0),c=Math.hypot(o,l);return 1-Qe(0,a,c)}function rc(s,t,e,n,i,r){const a=i-e,o=r-n,l=s-e,c=t-n,h=a*a+o*o;let u=h>0?(l*a+c*o)/h:0;u=pe(u,0,1);const d=s-(e+a*u),p=t-(n+o*u);return{dist:Math.hypot(d,p),nx:d,nz:p,t:u}}const ss={cols:8,rows:8,tile:1.75,ox:-7,oz:-7},gt={home:{x:-11.5,z:-13.5},homeDoor:{x:-11.5,z:-10.9},tower:{x:15.5,z:6.5},towerDoor:{x:15.5,z:9},shrine:{x:-16.5,z:5.5},pond:{x:16,z:-14,r:6},spawn:{x:0,z:8.2},fence:9.4,wizard:{x:18.6,z:8.4},dryad:{x:-20.5,z:11.5}},Ji=["#3f7a44","#4d8f4c","#356b3e","#5a9a4f"],Om=["#2c5c43","#25523b","#356a4b"];function ml(s,t){const e=document.createElement("canvas");e.width=512,e.height=256;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#5a4128"),i.addColorStop(1,"#3a281a"),n.fillStyle=i,n.fillRect(0,0,512,256),n.strokeStyle="#c9a86c",n.lineWidth=9,n.strokeRect(12,12,488,232),n.fillStyle="#f2dfae",n.font="600 58px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,256,t?108:128),t&&(n.fillStyle="#cbb98e",n.font="italic 34px Georgia, serif",n.fillText(t,256,180));const r=new Ma(e);return r.colorSpace=ge,r}function zm(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");t.clearRect(0,0,128,128),t.strokeStyle="#bdf6ff",t.lineWidth=5,t.lineCap="round",t.shadowColor="#7fe6ff",t.shadowBlur=12,t.beginPath(),t.moveTo(64,18),t.lineTo(64,110),t.moveTo(64,32),t.lineTo(92,58),t.lineTo(64,76),t.lineTo(36,58),t.closePath(),t.moveTo(44,96),t.lineTo(84,96),t.stroke();const e=new Ma(s);return e.colorSpace=ge,e}class Bm{constructor(t,e,n={}){this.scene=t,this.renderer=e,this.lowQuality=!!n.lowQuality,this.time=0,this.hours=6,this.weather="clear",this.day=1,this.colliders=[],this.boxes=[],this.segments=[],this.trees=[],this.rocks=[],this.plotStates=[],this.targetPlot=-1,this.sprites=[],this.lights={},this.pathSamples=[],this.gateLights=[],this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildPaths(),this.buildFarm(),this.buildFence(),this.buildCottage(),this.buildTower(),this.buildShrine(),this.buildPond(),this.buildNature(),this.buildNPCs(),this.buildAtmosphere(),this.buildBounds(),this.sprinklerSpots=[[-.875,-.875],[-4.375,-4.375],[2.625,2.625],[-4.375,2.625],[2.625,-4.375]].map(([i,r])=>({x:i,z:r})),this.sprinklers=[]}height(t,e){let n=(Ki(t*.026+3.1,e*.026+7.7)-.5)*7.2;n+=(Ki(t*.085+11.3,e*.085+2.4)-.5)*.85;const i=Fm(t,e,0,0,8.6,8.6,7.5);n=Be(n,0,i);const r=Math.hypot(t-gt.home.x,e-gt.home.z);n=Be(n,.05,1-Qe(4.2,10,r));const a=Math.hypot(t-gt.tower.x,e-gt.tower.z);n=Be(n,.25,1-Qe(3.4,8.5,a));const o=Math.hypot(t-gt.shrine.x,e-gt.shrine.z);n=Be(n,.55,1-Qe(3.4,8.5,o));const l=Math.hypot(t-gt.pond.x,e-gt.pond.z);n=Be(n,-2.7,1-Qe(4,8.8,l));const c=Math.hypot(t,e);return n+=Qe(52,90,c)*(4+Ki(t*.021,e*.021)*10),n}normalAt(t,e){const i=this.height(t-.25,e),r=this.height(t+.25,e),a=this.height(t,e-.25),o=this.height(t,e+.25);return new R(i-r,2*.25,a-o).normalize()}buildTerrain(){const t=this.lowQuality?100:150,e=190,n=new fn(e,e,t,t);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=new ht("#6f9f52"),o=new ht("#88b15d"),l=new ht("#527f43"),c=new ht("#8a6f4b"),h=new ht("#776f62"),u=new ht("#b0a170"),d=new ht("#5f8a4b"),p=new ht;for(let m=0;m<i.count;m++){const f=i.getX(m),x=i.getZ(m),v=this.height(f,x);i.setY(m,v);const S=Ki(f*.11+4,x*.11+9),C=Ki(f*.35,x*.35);p.copy(a).lerp(o,C),S>.56&&p.lerp(l,(S-.56)*2.4),S<.36&&p.lerp(l,(.36-S)*.9);const A=Math.hypot(f-gt.pond.x,x-gt.pond.z);A<9.2&&p.lerp(u,1-Qe(5.2,9.2,A)*.75);const T=Math.abs(this.height(f+.8,x)-v)+Math.abs(this.height(f,x+.8)-v);T>1.5&&p.lerp(h,pe((T-1.5)*.5,0,.7)),C>.72&&T<1.2&&p.lerp(d,.35);const D=Math.max(Math.abs(f)-8,Math.abs(x)-8);D<1.2&&p.lerp(c,.22*(1-Math.max(D,0)/1.2)),Math.abs(f)<8.1&&Math.abs(x)<8.1&&p.lerp(new ht("#7c9b52"),.32);const M=Math.hypot(f,x);M>44&&p.lerp(new ht("#7f8d84"),Qe(44,82,M)*.5);const w=(C-.5)*.07;r[m*3]=pe(p.r+w,0,1),r[m*3+1]=pe(p.g+w,0,1),r[m*3+2]=pe(p.b+w*.6,0,1)}n.setAttribute("color",new _e(r,3)),n.computeVertexNormals();const g=Un({roughness:1}),_=new W(n,g);_.receiveShadow=!0,_.name="terrain",this.scene.add(_),this.terrain=_}buildPaths(){const t=[[[-11.5,-10.2],[-10.1,-7.6],[-8.4,-3.8],[-8.4,5.4],[-6.3,8.6],[-2,11.1],[0,11.7],[5.2,11.5],[10.2,9.8],[13.2,8.2],[15.5,8]],[[0,11.7],[-5.2,11.4],[-10.5,10.5],[-14.2,8.9],[-16.2,7.3]],[[15.5,8],[19.4,8.5],[22.5,10.5]]];for(const e of t){const n=new _m(e.map(([d,p])=>new R(d,0,p))),i=60,r=1.35,a=[],o=[],l=[];new R(0,1,0);for(let d=0;d<=i;d++){const p=d/i,g=n.getPoint(p),_=n.getTangent(p),m=new R(-_.z,0,_.x).normalize();for(const f of[-1,1]){const x=g.x+m.x*r*f,v=g.z+m.z*r*f,S=this.height(x,v)+.035;a.push(x,S,v);const C=js(x*1.7,v*1.7),A=new ht("#8d7550").lerp(new ht("#a58c62"),C);o.push(A.r,A.g,A.b)}if(d<i){const f=d*2;l.push(f,f+1,f+2,f+1,f+3,f+2)}this.pathSamples.push({x:g.x,z:g.z})}const c=new se;c.setAttribute("position",new Jt(a,3)),c.setAttribute("color",new Jt(o,3)),c.setIndex(l),c.computeVertexNormals();const h=Un({roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),u=new W(c,h);u.receiveShadow=!0,this.scene.add(u)}}nearPath(t,e,n=2.2){for(const i of this.pathSamples)if(Math.abs(i.x-t)<n&&Math.abs(i.z-e)<n&&rc(t,e,i.x,i.z,i.x,i.z).dist<n)return!0;return!1}buildSky(){const t=new xe(340,32,20);this.skyMat=new De({side:Ge,depthWrite:!1,uniforms:{top:{value:new ht("#63b6e2")},horizon:{value:new ht("#d9ecf0")},bottom:{value:new ht("#9db592")}},vertexShader:`
        varying vec3 vDir;
        void main(){
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vDir;
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
        void main(){
          float h = vDir.y;
          vec3 c = mix(horizon, top, smoothstep(0.02, 0.62, h));
          c = mix(bottom, c, smoothstep(-0.28, 0.02, h));
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),this.sky=new W(t,this.skyMat),this.sky.frustumCulled=!1,this.scene.add(this.sky),this.scene.fog=new xa(13624290,.0052);const e=[],n=[];for(let l=0;l<420;l++){const c=Math.random()*Math.PI*2,h=K(.06,1.35),u=300;e.push(Math.cos(c)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(c)*Math.cos(h)*u);const d=new ht().setHSL(K(.52,.65),K(.1,.5),K(.75,1));n.push(d.r,d.g,d.b)}const i=new se;i.setAttribute("position",new Jt(e,3)),i.setAttribute("color",new Jt(n,3)),this.starMat=new Jn({size:1.6,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,fog:!1,toneMapped:!1}),this.stars=new Ei(i,this.starMat),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.sunSprite=Oe("#ffe2a0",34,.95),this.sunSprite.material.depthWrite=!1,this.moonSprite=Oe("#bcd6ff",16,.8),this.moonSprite.material.depthWrite=!1,this.scene.add(this.sunSprite,this.moonSprite),this.clouds=new Qt;const r=mt({color:"#f2f6f7",roughness:1,transparent:!0,opacity:.82,flatShading:!0});for(let l=0;l<11;l++){const c=[],h=3+(Math.random()*3|0);for(let d=0;d<h;d++){const p=K(2.4,4.6),g=new ze(p,0);g.scale(1.5,.55,1),g.translate(K(-6,6),K(-.6,.8),K(-2.4,2.4)),c.push({geo:g,color:d%2?"#e8f1f4":"#f7fbfc"})}const u=new W(an(c),r);u.position.set(K(-95,95),K(30,48),K(-95,95)),u.userData.speed=K(.4,1.1),this.clouds.add(u)}this.scene.add(this.clouds);const a=[],o=24;for(let l=0;l<o;l++){const c=l/o*Math.PI*2+K(-.06,.06),h=K(72,104),u=K(16,34),d=K(7,15),p=new fe(d,u,5,1);if(p.translate(Math.cos(c)*h,u/2-4,Math.sin(c)*h),a.push({geo:p,color:l%3?"#6a7b94":"#586a86",jitter:.04}),u>24){const g=new fe(d*.38,u*.28,5,1);g.translate(Math.cos(c)*h,u*.87-4,Math.sin(c)*h),a.push({geo:g,color:"#e8eef4",jitter:.02})}}this.mountains=new W(an(a),Un({fog:!0})),this.scene.add(this.mountains)}buildLights(){const t=new Mm(12574975,6060618,1);this.scene.add(t),this.hemi=t;const e=new hl(16773848,2.6);e.position.set(30,50,20),e.castShadow=!0;const n=this.lowQuality?1024:2048;e.shadow.mapSize.set(n,n),e.shadow.camera.left=-46,e.shadow.camera.right=46,e.shadow.camera.top=46,e.shadow.camera.bottom=-46,e.shadow.camera.near=1,e.shadow.camera.far=190,e.shadow.bias=-4e-4,e.shadow.normalBias=.035,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.moonLight=new hl(9153e3,0),this.scene.add(this.moonLight)}updateSky(t){this.hours=t;const e=(t-6)/24*Math.PI*2,n=Math.sin(e),i=Qe(-.01,.22,n),r=Qe(-.24,.04,n)*(1-i),a=new ht("#071021"),o=new ht("#182b46"),l=new ht("#0d1827"),c=new ht("#4f4a80"),h=new ht("#f19a68"),u=new ht("#5b5260"),d=new ht("#5db3e3"),p=new ht("#dceef0"),g=new ht("#9fb992"),_=a.clone().lerp(c,r).lerp(d,i),m=o.clone().lerp(h,r).lerp(p,i),f=l.clone().lerp(u,r).lerp(g,i);this.skyMat.uniforms.top.value.copy(_),this.skyMat.uniforms.horizon.value.copy(m),this.skyMat.uniforms.bottom.value.copy(f),this.scene.fog.color.copy(m).multiplyScalar(.88),this.starMat.opacity=pe(1-Qe(-.16,.12,n),0,1)*.95;const x=new R(Math.cos(e)*.92,Math.sin(e),.34).normalize();this.sunSprite.position.copy(x).multiplyScalar(270),this.moonSprite.position.copy(x).multiplyScalar(-270),this.sunSprite.material.opacity=pe(n*6,0,.95),this.moonSprite.material.opacity=pe(-n*5,0,.85);const v=30+(1-pe(n,0,1))*16;this.sunSprite.scale.setScalar(v),this.sunSprite.material.color.set(i>.4?16773312:16757370);const S=x.clone().multiplyScalar(80);return this.sun.position.set(S.x,Math.max(S.y,4),S.z+20),this.sun.target.position.set(0,0,0),this.sun.intensity=.12+i*2.5+r*.9,this.sun.color.copy(new ht("#ff9d6a")).lerp(new ht("#fff2d8"),i),this.sun.castShadow=n>-.05,this.moonLight.position.copy(x).multiplyScalar(-70),this.moonLight.intensity=(1-i)*.42,this.hemi.intensity=.22+i*.72+r*.24,this.hemi.color.copy(new ht("#7591c7")).lerp(new ht("#cfe8ff"),i),this.hemi.groundColor.copy(new ht("#24301f")).lerp(new ht("#69874f"),i),{elev:n,dayW:i,duskW:r}}buildFarm(){const{cols:t,rows:e,tile:n,ox:i,oz:r}=ss,a=new Bt(n*.94,.16,n*.94),o=mt({color:16777215,roughness:1});this.soilMesh=new Yn(a,o,t*e),this.soilMesh.receiveShadow=!0,this.soilMesh.frustumCulled=!1;const l=new Kt().makeScale(1e-4,1e-4,1e-4);for(let T=0;T<t*e;T++)this.soilMesh.setMatrixAt(T,l),this.soilMesh.setColorAt(T,new ht("#6b4a2e"));this.soilMesh.instanceMatrix.needsUpdate=!0,this.soilMesh.instanceColor&&(this.soilMesh.instanceColor.needsUpdate=!0),this.scene.add(this.soilMesh),this.plots=[];for(let T=0;T<e;T++)for(let D=0;D<t;D++){const M=i+(D+.5)*n,w=r+(T+.5)*n;this.plots.push({index:T*t+D,i:D,j:T,x:M,z:w,tilled:!1,watered:!1,crop:null,visual:null}),this.plotStates.push({tilled:!1})}const c=new zt(.05,.075,.92,4,1);c.translate(0,.46,0);const h=[{geo:c,color:"#4c9a4a"}];for(let T=0;T<4;T++){const D=new fe(.2,.58,4,1);D.scale(1,.5,1),D.rotateZ(Math.PI/2.4),D.rotateY(T/4*Math.PI*2),D.translate(Math.cos(T/4*Math.PI*2)*.19,.32+T*.16,Math.sin(T/4*Math.PI*2)*.19),h.push({geo:D,color:T%2?"#5ea94e":"#438a43"})}this.cropPlantGeo=an(h),this.cropPlantMat=Un(),this.cropFruitGeo=new ze(.23,0),this.cropMats={moon:mt({color:"#d8f3ff",emissive:"#7fd4ff",emissiveIntensity:1.7,roughness:.35}),sun:mt({color:"#ffd166",emissive:"#ff9a20",emissiveIntensity:1.5,roughness:.4}),star:mt({color:"#ffe9a3",emissive:"#ffcf4d",emissiveIntensity:1.8,roughness:.3})};const u=new fn(n*.98,n*.98);u.rotateX(-Math.PI/2),this.highlight=new Qt;const d=new W(u,new Pe({color:16770209,transparent:!0,opacity:.17,depthWrite:!1,toneMapped:!1}));d.position.y=.13;const p=new Hr(new vm(u),new Ys({color:16770728,transparent:!0,opacity:.85,toneMapped:!1}));p.position.y=.14,this.highlight.add(d,p),this.highlight.visible=!1,this.scene.add(this.highlight);const g=[],_=i,m=r,f=i+t*n,x=r+e*n,v=.045;for(let T=0;T<=t;T++){const D=_+T*n;g.push(D,v,m,D,v,x)}for(let T=0;T<=e;T++){const D=m+T*n;g.push(_,v,D,f,v,D)}const S=new se;S.setAttribute("position",new Jt(g,3));const C=new Hr(S,new Ys({color:4612917,transparent:!0,opacity:.42,depthWrite:!1}));this.scene.add(C);const A=mt({color:"#7b5a36"});for(const[T,D]of[[_,m],[f,m],[_,x],[f,x]]){const M=new W(new zt(.06,.08,.55,5),A);M.position.set(T,.22,D),M.castShadow=!0,this.scene.add(M)}this.buildFarmProps(_,m,f,x),this.buildScarecrow(7.4,-7.9)}plotAtWorld(t,e){const{tile:n,ox:i,oz:r,cols:a,rows:o}=ss,l=Math.floor((t-i)/n),c=Math.floor((e-r)/n);return l<0||c<0||l>=a||c>=o?null:this.plots[c*a+l]}worldOf(t,e){const{tile:n,ox:i,oz:r}=ss;return{x:i+(t+.5)*n,z:r+(e+.5)*n}}setTargetPlot(t){if(!t||t.index===this.targetPlot){t||(this.highlight.visible=!1,this.targetPlot=-1);return}this.targetPlot=t.index,this.highlight.visible=!0,this.highlight.position.set(t.x,0,t.z)}updateSoilVisual(t){const e=new Kt;if(!t.tilled)e.makeScale(1e-4,1e-4,1e-4),this.soilMesh.setMatrixAt(t.index,e);else{e.makeTranslation(t.x,.02,t.z),this.soilMesh.setMatrixAt(t.index,e);const n=new ht(t.watered?"#67482c":"#8a6138");this.soilMesh.setColorAt(t.index,n)}this.soilMesh.instanceMatrix.needsUpdate=!0,this.soilMesh.instanceColor&&(this.soilMesh.instanceColor.needsUpdate=!0)}updateCropVisual(t){if(!t.crop){t.visual&&(this.scene.remove(t.visual),t.visual=null);return}if(!t.visual){const r=new Qt;r.position.set(t.x,.1,t.z);const a=new W(this.cropPlantGeo,this.cropPlantMat);a.castShadow=!0;const o=new W(this.cropFruitGeo,this.cropMats[t.crop.type]);o.position.y=1.1,o.castShadow=!0,r.add(a,o),this.scene.add(r),t.visual=r,t.plantMesh=a,t.fruitMesh=o}const e=pe(t.crop.grown/t.crop.growDays,0,1),n=.5+e*.72;t.visual.scale.set(n,n,n),t.visual.rotation.y=t.index%7*.8;const i=e>=.98?1+Math.sin(this.time*2.4+t.index)*.08:e>.55?.5:.001;t.fruitMesh.scale.setScalar(i),t.fruitMesh.visible=e>.55}refreshPlot(t){this.updateSoilVisual(t),this.updateCropVisual(t)}buildFence(){const t=gt.fence,e=[],n=()=>{const o=new Bt(.18,1.06,.18);return o.translate(0,.53,0),o},i=(o,l,c,h,u)=>{const d=c-o,p=h-l,g=Math.hypot(d,p),_=new Bt(g,.11,.09);return _.rotateY(-Math.atan2(p,d)),_.translate((o+c)/2,u,(l+h)/2),_},r=(o,l,c,h)=>{const u=Math.hypot(c-o,h-l),d=Math.max(1,Math.round(u/1.55));for(let g=0;g<=d;g++){const _=g/d,m=Be(o,c,_),f=Be(l,h,_),x=this.height(m,f);g>0&&e.push({geo:Ye(n(),m,x-.05,f),color:"#8a6542",jitter:.05})}const p=4;for(let g=0;g<p;g++){const _=g/p,m=(g+1)/p,f=Be(o,c,_),x=Be(l,h,_),v=Be(o,c,m),S=Be(l,h,m),C=this.height(f,x),A=this.height(v,S);e.push({geo:Ye(i(f,x,v,S,.42+(C+A)/2),0,0,0),color:"#9b7550",jitter:.04}),e.push({geo:Ye(i(f,x,v,S,.8+(C+A)/2),0,0,0),color:"#8f6a47",jitter:.04})}this.segments.push({ax:o,az:l,bx:c,bz:h,r:.22})};r(-t,-t,-t,t),r(t,-t,t,t),r(-t,-t,-1.4,-t),r(1.4,-t,t,-t),r(-t,t,-1.4,t),r(1.4,t,t,t);for(const[o,l]of[[-t,-t],[t,-t],[-t,t],[t,t],[-1.4,-t],[1.4,-t],[-1.4,t],[1.4,t]])e.push({geo:Ye(n(),o,this.height(o,l)-.02,l,0,0,0,1.35),color:"#755435",jitter:.04});const a=new W(an(e),Un());a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a);for(const[o,l]of[[-1.6,t],[1.6,t],[-1.6,-t],[1.6,-t]]){const c=this.height(o,l),h=new W(new zt(.09,.12,1.9,6),mt({color:"#6a4c30"}));h.position.set(o,c+.95,l);const u=Oe("#ffc978",1.05,.32);u.position.set(o,c+2,l);const d=new W(new xe(.15,8,6),new Te({color:"#ffd49a",emissive:"#ffb45e",emissiveIntensity:.12}));d.position.copy(u.position),this.scene.add(h,u,d),this.gateLights.push({lamp:u,bulb:d})}}buildCottage(){const t=new Qt,{x:e,z:n}=gt.home,i=this.height(e,n);t.position.set(e,i,n),this.scene.add(t),this.homeGroup=t;const r=mt({color:"#6b4a2f"}),a=mt({color:"#4a3321"}),o=mt({color:"#e6d5ae"}),l=mt({color:"#8a8478"}),c=mt({color:"#b5623e",roughness:1}),h=new Te({color:"#ffdca0",emissive:"#ffb45e",emissiveIntensity:1.15,roughness:.4}),u=(v,S,C,A,T,D=0,M=0,w=0,F=!0)=>{const N=new W(v,S);return N.position.set(C,A,T),N.rotation.set(D,M,w),N.castShadow=F,N.receiveShadow=!0,t.add(N),N};u(new Bt(6.4,.7,5.2),l,0,.35,0),u(new Bt(6,3,4.8),o,0,2.05,0);for(const v of[-2.9,2.9])for(const S of[-2.3,2.3])u(new Bt(.22,3,.22),a,v,2.05,S);u(new Bt(6.15,.2,.22),a,0,3.45,2.32),u(new Bt(6.15,.2,.22),a,0,3.45,-2.32),u(new Bt(.22,.2,4.85),a,2.42,2.6,0,0,0,.5),u(new Bt(.22,.2,4.85),a,-2.42,2.6,0,0,0,-.5),u(new Bt(.22,3,4.85),a,3,2.05,0),u(new Bt(.22,3,4.85),a,-3,2.05,0);const d=new W(new fe(4.65,2.5,4,1),c);d.rotation.y=Math.PI/4,d.position.y=4.7,d.castShadow=!0,d.receiveShadow=!0,t.add(d),u(new zt(.06,.06,.6,5),a,0,6.2,0),u(new xe(.12,6,5),new Pe({color:16767370,toneMapped:!1}),0,6.5,0),u(new Bt(1.15,2,.14),r,0,1.72,2.42),u(new Bt(1.4,.18,.2),a,0,2.8,2.42),u(new xe(.055,6,5),new Pe({color:16765822}),.38,1.7,2.5),u(new Bt(1.9,.18,.9),l,0,.13,3);for(const v of[-1.9,1.9])u(new Bt(.95,.85,.08),h,v,2.35,2.44,0,0,0,!1),u(new Bt(1.1,.1,.12),a,v,2.81,2.47),u(new Bt(1.1,.1,.12),a,v,1.9,2.47),u(new Bt(.08,.95,.12),a,v,2.35,2.47);for(const v of[-1.9,1.9]){u(new Bt(1.1,.22,.34),r,v,1.78,2.6);for(let S=0;S<5;S++)u(new ze(.09,0),mt({color:S%2?"#ef8fb0":"#ffd076"}),v-.4+S*.2,1.94,2.62,0,0,0,!1)}u(new Bt(.75,2.1,.75),l,-1.9,5,-1),u(new Bt(.9,.18,.9),mt({color:"#6e695f"}),-1.9,6.1,-1),this.smokeOrigin=new R(e-1.9,i+6.3,n-1);const p=u(new zt(.06,.08,1.2,6),a,1.15,.6+1,2.85);p.rotation.z=.1;const g=Oe("#ffc76d",2.6,.75);g.position.set(1.2,2.05,2.85),t.add(g);const _=new W(new xe(.14,8,6),new Pe({color:16769443,toneMapped:!1}));_.position.copy(g.position),t.add(_),this.homeLight=new $s(16758122,1.3,9,2),this.homeLight.position.set(0,2.3,3.4),t.add(this.homeLight);const m=new Qt;m.position.set(e+2.2,this.height(e+2.2,n+3.8),n+3.8);const f=new W(new Bt(.12,1.3,.12),a);f.position.y=.65;const x=new W(new fn(1.5,.75),new Te({map:ml("EMBERFALL","farmstead"),roughness:.85}));x.position.set(0,1.35,.08),m.add(f,x),this.scene.add(m),this.boxes.push({minX:e-3.25,maxX:e+3.25,minZ:n-2.55,maxZ:n+2.55})}buildFarmProps(t,e,n,i){const r=t-1.15,a=i+.9,o=this.height(r,a),l=new Qt;l.position.set(r,o,a);const c=new W(new zt(.4,.34,.85,10),mt({color:"#7a5736"}));c.position.y=.43;for(const A of[.16,.7]){const T=new W(new is(.38,.035,4,12),mt({color:"#4b4a48"}));T.rotation.x=Math.PI/2,T.position.y=A,l.add(T)}const h=new W(new Ri(.33,12),new Pe({color:7328729,transparent:!0,opacity:.8}));h.rotation.x=-Math.PI/2,h.position.y=.84,l.add(c,h),c.castShadow=!0,this.scene.add(l),this.colliders.push({x:r,z:a,r:.42});const u=mt({color:"#d5b360"});for(const[A,T,D]of[[t-1.4,e+.9,.2],[t-.9,e-.2,1.1]]){const M=new W(new zt(.55,.55,.95,9),u),w=this.height(A,T);M.position.set(A,w+.55,T),M.rotation.z=Math.PI/2,M.rotation.y=D,M.castShadow=!0,this.scene.add(M),this.colliders.push({x:A,z:T,r:.6})}const d=2.3,p=i+.6,g=new W(new Bt(.72,.62,.72),mt({color:"#8a6842"}));g.position.set(d,this.height(d,p)+.31,p),g.rotation.y=.3,g.castShadow=!0,this.scene.add(g),this.colliders.push({x:d,z:p,r:.5});const _=n+1,m=e+1.2,f=this.height(_,m),x=new W(new zt(.07,.1,1.7,6),mt({color:"#5b4128"}));x.position.set(_,f+.85,m);const v=new Te({color:"#ffddab",emissive:"#ffb85e",emissiveIntensity:.15}),S=new W(new xe(.13,8,6),v);S.position.set(_,f+1.78,m);const C=Oe("#ffc978",1.4,.3);C.position.copy(S.position),this.scene.add(x,S,C),this.gateLights.push({lamp:C,bulb:S})}buildScarecrow(t,e){const n=this.height(t,e),i=new Qt;i.position.set(t,n,e);const r=new W(new zt(.07,.09,2.4,6),mt({color:"#6b4a2f"}));r.position.y=1.2;const a=new W(new Bt(1.9,.09,.09),mt({color:"#6b4a2f"}));a.position.y=1.75;const o=new W(new fe(.5,1.1,6),mt({color:"#8e6a3f"}));o.position.y=1.15;const l=new W(new xe(.29,8,7),mt({color:"#d7bc7c"}));l.position.y=2;const c=new W(new fe(.55,.5,7),mt({color:"#9a6b3c"}));c.position.y=2.35,c.rotation.z=.12;for(const h of[-1,1]){const u=new W(new xe(.04,5,4),new Pe({color:16767869,toneMapped:!1}));u.position.set(.1*h,2.04,.26),i.add(u)}[r,a,o,l,c].forEach(h=>{h.castShadow=!0,i.add(h)}),this.scene.add(i),this.colliders.push({x:t,z:e,r:.4})}buildTower(){const{x:t,z:e}=gt.tower,n=this.height(t,e),i=new Qt;i.position.set(t,n,e),this.scene.add(i),this.towerGroup=i;const r=mt({color:"#8d8b86"}),a=mt({color:"#6b6a68"}),o=mt({color:"#5a4a92",roughness:.8}),l=mt({color:"#c8a95e"}),c=new Te({color:"#a9ecff",emissive:"#49c8ff",emissiveIntensity:1.8,roughness:.3}),h=new W(new zt(2.5,2.85,1,9),a);h.position.y=.5;const u=new W(new zt(2,2.4,6.2,9),r);u.position.y=4;const d=new W(new zt(2.65,2.35,.3,9),a);d.position.y=6.95;const p=new W(new zt(1.65,1.9,1.6,9),r);p.position.y=7.9;const g=new W(new fe(2.5,4.2,9),o);g.position.y=10.7,g.rotation.y=.2;const _=new W(new fe(.16,.7,5),l);_.position.y=13.1,[h,u,d,p,g,_].forEach(P=>{P.castShadow=!0,P.receiveShadow=!0,i.add(P)});const m=new W(new Bt(1.15,2,.16),mt({color:"#3c2f52"}));m.position.set(0,1.55,2.34),m.rotation.x=-.13,i.add(m);const f=new W(new is(.62,.09,6,12,Math.PI),l);f.position.set(0,2.55,2.4),i.add(f);for(const[P,U,H]of[[4.2,.5,1.1],[5.4,2.3,1.1],[7.9,.8,.8]]){const q=new W(new Bt(.6,.9,.1),c),$=P===7.9?1.7:2.15;q.position.set(Math.sin(U)*$,P,Math.cos(U)*$),q.rotation.y=U,i.add(q)}for(const P of[1.4,-1.6]){const U=new W(new fn(.62,1.7),new Te({color:"#7d5fb8",side:He,roughness:.9}));U.position.set(Math.sin(P)*2.1,8.5,Math.cos(P)*2.1),U.rotation.y=P,i.add(U)}this.towerOrb=new Qt;const x=new W(new ze(.42,1),c),v=Oe("#7fdcff",4.2,.8);this.towerOrb.add(x,v),this.towerOrb.position.set(0,13.6,0),i.add(this.towerOrb),this.towerLight=new $s(7788287,1.6,14,2),this.towerLight.position.set(0,9.5,0),i.add(this.towerLight);const S=new Qt,C=t-2.4,A=e+3.1;S.position.set(C,this.height(C,A),A);const T=new W(new Bt(.12,2,.12),mt({color:"#4d3b27"}));T.position.y=1;const D=new W(new fn(2,1),new Te({map:ml("ZEPHYR'S","arcane goods"),roughness:.85}));D.position.set(0,1.65,.08),S.add(T,D),S.rotation.y=.5,this.scene.add(S);const M=new Qt,w=t+3.1,F=e+2.4;M.position.set(w,this.height(w,F),F);const N=new W(new zt(.52,.4,.65,9),mt({color:"#2c2b30"}));N.position.y=.45;const J=new W(new Ri(.43,12),new Pe({color:7271092,toneMapped:!1}));J.rotation.x=-Math.PI/2,J.position.y=.78,this.brewGlow=Oe("#6ef2b4",2.2,.55),this.brewGlow.position.y=1,M.add(N,J,this.brewGlow),this.scene.add(M);for(let P=0;P<3;P++){const U=new W(new Bt(.7,.7,.7),mt({color:"#8b6a43"})),H=t-3.1+P%2*.8,q=e+1.2+Math.floor(P/2)*.8;U.position.set(H,this.height(H,q)+.36,q),U.rotation.y=K(-.4,.4),U.castShadow=!0,this.scene.add(U)}this.colliders.push({x:t,z:e,r:2.6}),this.boxes.push({minX:t-3.8,maxX:t-2.4,minZ:e+.4,maxZ:e+2.2})}buildShrine(){const{x:t,z:e}=gt.shrine,n=this.height(t,e),i=new Qt;i.position.set(t,n,e),this.scene.add(i),this.shrineGroup=i;const r=mt({color:"#7b8290"}),a=zm(),o=new Pe({map:a,transparent:!0,blending:Sn,depthWrite:!1,toneMapped:!1}),l=new W(new zt(4.4,4.7,.3,18),mt({color:"#5f6a63"}));l.position.y=.1,l.receiveShadow=!0,i.add(l);const c=new W(new zt(2.5,2.5,.34,18),mt({color:"#7d8674"}));c.position.y=.15,c.receiveShadow=!0,i.add(c);for(let d=0;d<6;d++){const p=d/6*Math.PI*2+.2,g=Math.cos(p)*3.7,_=Math.sin(p)*3.7,m=2+d%3*.42,f=new W(new es(.88,0),r);f.scale.set(.75,m/1.55,.55),f.position.set(g,m*.64,_),f.rotation.set(K(-.12,.12),K(0,3),K(-.14,.14)),f.castShadow=!0,f.receiveShadow=!0,i.add(f);const x=new W(new fn(.62,.62),o);x.position.set(g*.86,m*.62,_*.86),x.lookAt(new R(0,m*.62,0)),i.add(x),this.colliders.push({x:t+g,z:e+_,r:.62})}this.shrineCrystal=new Qt;const h=new W(new ns(.72,0),new Te({color:"#bff4ff",emissive:"#45d4ff",emissiveIntensity:2.2,roughness:.2})),u=Oe("#7fe4ff",6.5,.75);this.shrineCrystal.add(h,u),this.shrineCrystal.position.y=2.2,i.add(this.shrineCrystal),this.shrineBeam=new W(new zt(.55,2.3,16,10,1,!0),new Pe({color:9366015,transparent:!0,opacity:.07,side:He,blending:Sn,depthWrite:!1,toneMapped:!1})),this.shrineBeam.position.y=8.5,i.add(this.shrineBeam),this.shrineLight=new $s(8381695,1.8,16,2),this.shrineLight.position.y=2.5,i.add(this.shrineLight),this.shrineDiscGlow=Oe("#75ddff",9,.3),this.shrineDiscGlow.rotation.x=-Math.PI/2,this.shrineDiscGlow.position.y=.4,i.add(this.shrineDiscGlow),this.colliders.push({x:t,z:e,r:.7})}buildPond(){const{x:t,z:e,r:n}=gt.pond,i=-1.18,r=new Ri(n+.7,48);r.rotateX(-Math.PI/2),this.waterMat=new De({transparent:!0,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv; varying vec3 vWorld;
        void main(){
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        varying vec2 vUv; varying vec3 vWorld;
        uniform float uTime;
        void main(){
          vec2 p = vWorld.xz;
          float w1 = sin(p.x*1.3 + uTime*0.9) * cos(p.y*1.1 - uTime*0.7);
          float w2 = sin((p.x+p.y)*2.1 - uTime*1.4) * 0.5;
          float ripple = w1*0.5 + w2*0.5;
          vec3 deep = vec3(0.055, 0.25, 0.30);
          vec3 shallow = vec3(0.20, 0.62, 0.58);
          float edge = smoothstep(0.0, 1.0, vUv.y);
          vec3 col = mix(shallow, deep, 0.55 + ripple*0.18);
          col += vec3(0.25,0.5,0.45) * pow(max(0.0,ripple),3.0) * 0.6;
          float sparkle = smoothstep(0.93, 1.0, sin(p.x*6.0 + uTime*2.0)*sin(p.y*5.0 - uTime*1.6));
          col += vec3(0.8,0.95,0.9) * sparkle * 0.5;
          gl_FragColor = vec4(col, 0.88);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});const a=new W(r,this.waterMat);a.position.set(t,i,e),this.scene.add(a),this.water=a,this.pondGlow=Oe("#63d6cd",15,.16),this.pondGlow.rotation.x=-Math.PI/2,this.pondGlow.position.set(t,i+.2,e),this.scene.add(this.pondGlow);const o=new Ri(.4,8);o.rotateX(-Math.PI/2);const l=mt({color:"#4f8f4b",side:He});for(let _=0;_<12;_++){const m=K(0,Math.PI*2),f=K(1,n-.9),x=new W(o,l);if(x.position.set(t+Math.cos(m)*f,i+.05,e+Math.sin(m)*f),x.scale.setScalar(K(.7,1.3)),x.rotation.y=K(0,3),this.scene.add(x),Math.random()<.4){const v=new W(new ze(.09,0),mt({color:"#ffc8e0",emissive:"#ff8fc2",emissiveIntensity:.5}));v.position.set(x.position.x,i+.12,x.position.z),this.scene.add(v)}}const c=new fe(.05,1,4);c.translate(0,.5,0);const h=new Yn(c,mt({color:"#6b8a45"}),60),u=new Kt,d=new on,p=new R,g=new R;for(let _=0;_<60;_++){const m=K(0,Math.PI*2),f=n+K(-.6,1.4);g.set(t+Math.cos(m)*f,this.height(t+Math.cos(m)*f,e+Math.sin(m)*f)-.1,e+Math.sin(m)*f),d.setFromEuler(new ln(K(-.12,.12),K(0,3),K(-.12,.12))),p.set(K(.7,1.4),K(.7,1.6),K(.7,1.4)),u.compose(g,d,p),h.setMatrixAt(_,u)}h.castShadow=!1,this.scene.add(h),this.colliders.push({x:t,z:e,r:5.45})}buildNature(){const t=[{geo:Ye(new zt(.16,.26,2,6),0,1,0),color:"#6d5138"}];for(const[j,Z,Y,X,St]of[[0,2.7,0,1.55,Ji[0]],[.8,2.3,.5,1.05,Ji[1]],[-.85,2.4,.25,1,Ji[2]],[.1,3.4,-.4,1,Ji[3]],[.5,3.1,.7,.8,Ji[1]]]){const vt=new ze(X,0);vt.scale(1,.86,1),vt.translate(j,Z,Y),t.push({geo:vt,color:St,jitter:.06})}const e=an(t),n=Un(),i=[{geo:Ye(new zt(.14,.24,1.6,6),0,.8,0),color:"#5a4632"}];for(let j=0;j<4;j++){const Z=1.55-j*.32,Y=new fe(Z,1.85,7,1);Y.translate(0,1.5+j*.95,0),i.push({geo:Y,color:Om[j%3],jitter:.05})}const r=an(i),a=[{geo:Ye(new zt(.14,.3,2.2,6),0,1.1,0),color:"#b9a4c9"}];for(const[j,Z,Y,X,St]of[[0,2.9,0,1.6,"#8e6cc0"],[.9,2.3,.3,1.1,"#c477c9"],[-.9,2.4,-.2,1.05,"#7957ad"],[.1,3.7,.2,1,"#d490d8"]]){const vt=new ze(X,0);vt.translate(j,Z,Y),a.push({geo:vt,color:St,jitter:.05})}const o=an(a),l={broad:[],pine:[],magic:[]},c=[];let h=0;for(;c.length<150&&h++<5e3;){const j=K(0,Math.PI*2),Z=K(13,58),Y=Math.cos(j)*Z,X=Math.sin(j)*Z;Math.abs(Y)<11.5&&Math.abs(X)<11.5||Math.hypot(Y-gt.home.x,X-gt.home.z)<9||Math.hypot(Y-gt.tower.x,X-gt.tower.z)<7.5||Math.hypot(Y-gt.shrine.x,X-gt.shrine.z)<7.4||Math.hypot(Y-gt.pond.x,X-gt.pond.z)<9.5||Math.hypot(Y-gt.spawn.x,X-gt.spawn.z)<5||Math.hypot(Y+14,X-26)<12||Y>-14&&Y<18&&X>10.5&&X<31||this.nearPath(Y,X,3.1)||this.height(Y,X)<-.35||c.some(St=>Math.hypot(St.x-Y,St.z-X)<3.2)||c.push({x:Y,z:X})}for(const j of c){const Z=Math.hypot(j.x-gt.shrine.x,j.z-gt.shrine.z),Y=j.x<-13,X=j.z<-15,St=j.x>20;let vt="broad";const E=Math.random();Z<13&&E<.55?vt="magic":(Y||X||St)&&E<.55||E<.32?vt="pine":E<.42&&(vt="magic"),l[vt].push(j)}const u=(j,Z,Y,X)=>{const St=new Yn(j,Z,Math.max(Y.length,1));St.castShadow=!0,St.receiveShadow=!0,St.count=Y.length;const vt=new Kt,E=new on,y=new R,z=new R;return Y.forEach((et,it)=>{const st=K(.85,1.35);z.set(et.x,this.height(et.x,et.z)-.05,et.z),E.setFromEuler(new ln(0,K(0,Math.PI*2),0)),y.set(st,st*K(.9,1.15),st),vt.compose(z,E,y),St.setMatrixAt(it,vt);const yt={kind:X,x:et.x,z:et.z,scale:st,active:!0,hits:3,maxHits:3,respawnDay:0,mesh:St,idx:it,base:vt.clone(),ref:null};yt.ref=yt,this.trees.push(yt),this.colliders.push({x:et.x,z:et.z,r:.55*st,tree:yt})}),St.instanceMatrix.needsUpdate=!0,this.scene.add(St),St};u(e,n,l.broad,"broad"),u(r,n,l.pine,"pine"),u(o,n,l.magic,"magic");const d=[];for(const j of this.trees)if(j.kind==="magic")for(let Z=0;Z<2;Z++)d.push(j.x+K(-1,1),this.height(j.x,j.z)+K(2.2,4.2),j.z+K(-1,1));const p=new se;p.setAttribute("position",new Jt(d,3)),this.moteMat=new Jn({size:.3,map:Ci("#d9a4ff"),transparent:!0,opacity:.85,blending:Sn,depthWrite:!1,color:14066943,toneMapped:!1}),this.motes=new Ei(p,this.moteMat),this.moteBase=d.slice(),this.scene.add(this.motes);const g=[],_=new es(1,0);g.push({geo:Ye(_.clone(),0,.42,0,.2,.4,0,1),color:"#7d7d78",jitter:.07}),g.push({geo:Ye(new es(.55,0),.62,.24,.3,.4,.2,.3),color:"#8f8d84",jitter:.06});const m=an(g),f=Un({roughness:1}),x=[];for(h=0;x.length<46&&h++<3e3;){const j=K(0,Math.PI*2),Z=K(11,50),Y=Math.cos(j)*Z,X=Math.sin(j)*Z;Math.abs(Y)<11&&Math.abs(X)<11||Math.hypot(Y-gt.home.x,X-gt.home.z)<7||Math.hypot(Y-gt.tower.x,X-gt.tower.z)<6||Math.hypot(Y-gt.shrine.x,X-gt.shrine.z)<6||Math.hypot(Y-gt.pond.x,X-gt.pond.z)<7.5||this.nearPath(Y,X,2.6)||x.some(St=>Math.hypot(St.x-Y,St.z-X)<3)||x.push({x:Y,z:X})}const v=new Yn(m,f,x.length);v.castShadow=!0,v.receiveShadow=!0,x.forEach((j,Z)=>{const Y=K(.55,1.25),X=new R(j.x,this.height(j.x,j.z),j.z),St=new on().setFromEuler(new ln(0,K(0,6),K(-.1,.1))),vt=new R(Y,Y*K(.7,1),Y),E=new Kt().compose(X,St,vt);v.setMatrixAt(Z,E);const y={x:j.x,z:j.z,scale:Y,active:!0,hits:3,maxHits:3,respawnDay:0,mesh:v,idx:Z,base:E.clone()};y.ref=y,this.rocks.push(y),this.colliders.push({x:j.x,z:j.z,r:.7*Y,rock:y})}),v.instanceMatrix.needsUpdate=!0,this.scene.add(v);const S=new ns(.6,0);S.scale(.7,1.7,.7);const C=new Te({color:"#bff2ff",emissive:"#4fd8ff",emissiveIntensity:1.6,roughness:.25,flatShading:!0}),A=[];for(let j=0;j<16;j++){const Z=K(0,Math.PI*2),Y=K(20,46),X=Math.cos(Z)*Y,St=Math.sin(Z)*Y;Math.abs(X)<12&&Math.abs(St)<12||A.push({x:X,z:St,s:K(.6,1.6)})}for(let j=0;j<6;j++){const Z=j/6*Math.PI*2+.5;A.push({x:gt.shrine.x+Math.cos(Z)*6.4,z:gt.shrine.z+Math.sin(Z)*6.4,s:K(.5,.9)})}this.crystals=[];for(const j of A){const Z=new W(S,C),Y=this.height(j.x,j.z);Z.position.set(j.x,Y+j.s*.55,j.z),Z.scale.setScalar(j.s),Z.rotation.set(K(-.15,.15),K(0,3),K(-.15,.15)),Z.castShadow=!0,this.scene.add(Z),this.crystals.push(Z)}const T=[];for(let j=0;j<3;j++){const Z=new fe(.055,.5,3);Z.translate(0,.25,0),Z.rotateZ(K(-.35,.35)),Z.rotateY(j/3*Math.PI*2),T.push({geo:Z,color:j%2?"#79a84e":"#5f9145"})}const D=an(T),M=Un({side:He}),w=this.lowQuality?500:1e3,F=new Yn(D,M,w),N=new Kt,J=new on,P=new R,U=new R;let H=0,q=0;for(;H<w&&q++<w*8;){const j=K(0,Math.PI*2),Z=K(9.5,55),Y=Math.cos(j)*Z,X=Math.sin(j)*Z;if(Math.abs(Y)<9.6&&Math.abs(X)<9.6||Math.hypot(Y-gt.pond.x,X-gt.pond.z)<6.8||this.nearPath(Y,X,1.7))continue;const St=this.height(Y,X);U.set(Y,St,X),J.setFromEuler(new ln(0,K(0,3.14),0));const vt=K(.6,1.5);P.set(vt,K(.7,1.6),vt),N.compose(U,J,P),F.setMatrixAt(H,N),H++}F.count=H,F.instanceMatrix.needsUpdate=!0,F.castShadow=!1,this.scene.add(F);const $=[{geo:Ye(new zt(.02,.02,.28,3),0,.14,0),color:"#4f7f3e"},{geo:Ye(new ze(.11,0),0,.34,0),color:"#ffffff"}],Q=an($),tt=mt({vertexColors:!0,emissive:2236962,emissiveIntensity:.15}),ot=220,at=new Yn(Q,tt,ot),V=["#ffd8e6","#fff0b0","#cfe6ff","#ffc4a0","#e3c6ff","#ffffff"],nt=new ht;let ut=0,Et=0;for(;ut<ot&&Et++<ot*10;){const j=K(0,Math.PI*2),Z=K(9.6,42),Y=Math.cos(j)*Z,X=Math.sin(j)*Z;if(Math.abs(Y)<9.5&&Math.abs(X)<9.5||this.nearPath(Y,X,1.6)||Math.hypot(Y-gt.pond.x,X-gt.pond.z)<7)continue;const St=new Kt().compose(new R(Y,this.height(Y,X),X),new on().setFromEuler(new ln(0,K(0,6),0)),new R().setScalar(K(.7,1.3)));at.setMatrixAt(ut,St),nt.set(V[Math.random()*V.length|0]),at.setColorAt(ut,nt),ut++}at.count=ut,at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0),this.scene.add(at);const wt=[{geo:Ye(new zt(.06,.09,.26,5),0,.13,0),color:"#e8d8bf"},{geo:Ye(new xe(.2,7,5,0,Math.PI*2,0,Math.PI/2),0,.26,0),color:"#b85a4d"}],It=an(wt),Ft=mt({vertexColors:!0,emissive:2755850,emissiveIntensity:.2}),At=new Yn(It,Ft,70);let $t=0;for(q=0;$t<70&&q++<1e3;){const j=K(0,Math.PI*2),Z=K(12,45),Y=Math.cos(j)*Z,X=Math.sin(j)*Z;if(Math.abs(Y)<10&&Math.abs(X)<10||this.nearPath(Y,X,2.2))continue;const St=new Kt().compose(new R(Y,this.height(Y,X),X),new on().setFromEuler(new ln(0,K(0,6),0)),new R().setScalar(K(.6,1.5)));At.setMatrixAt($t++,St)}At.count=$t,At.instanceMatrix.needsUpdate=!0,this.scene.add(At),this.islands=[];const O=[{x:-56,y:30,z:-52,s:2},{x:52,y:34,z:-62,s:2.4},{x:64,y:26,z:40,s:1.7},{x:-48,y:40,z:50,s:2}];for(const j of O){const Z=new Qt,Y=new W(new fe(5.4*j.s,9*j.s,6,1),new Te({color:"#867d96",emissive:"#2a1d44",emissiveIntensity:.35,flatShading:!0}));Y.rotation.x=Math.PI,Y.position.y=-4.5*j.s;const X=new W(new zt(5.3*j.s,5.6*j.s,1*j.s,7),mt({color:"#6d9a56"}));X.position.y=.2;const St=new W(new fe(1.4*j.s,4*j.s,7),mt({color:"#3c7247"}));St.position.set(1.6*j.s,2.4*j.s,.6*j.s);const vt=new W(new zt(.4*j.s,.5*j.s,1.8*j.s,5),mt({color:"#6b5138"}));vt.position.set(1.6*j.s,.6*j.s,.6*j.s);const E=new W(new ns(1*j.s,0),new Te({color:"#bff2ff",emissive:"#57d9ff",emissiveIntensity:1.8,flatShading:!0}));E.position.set(-1.8*j.s,2.2*j.s,-.8*j.s),Z.add(Y,X,St,vt,E),Z.position.set(j.x,j.y,j.z),Z.userData.baseY=j.y,Z.userData.phase=K(0,6),this.scene.add(Z),this.islands.push(Z)}this.buildForestDetails(c)}buildForestDetails(t){const e=mt({color:"#6a5137"}),n=new W(new zt(.36,.42,3.6,7),e);n.rotation.z=Math.PI/2,n.rotation.y=.5;const i=-22,r=-11;n.position.set(i,this.height(i,r)+.4,r),n.castShadow=!0,this.scene.add(n);for(let a=0;a<4;a++){const o=-25+a*1.6,l=-13-a*.7,c=new W(new zt(.42,.5,.45,7),e);c.position.set(o,this.height(o,l)+.2,l),c.castShadow=!0,this.scene.add(c)}}buildNPCs(){const t=gt.wizard,e=new Qt;e.position.set(t.x,this.height(t.x,t.z),t.z);const n=new W(new fe(.55,1.75,7),mt({color:"#4b3d86"}));n.position.y=.9;const i=new W(new zt(.3,.42,.8,7),mt({color:"#5a4a9e"}));i.position.y=1.6;const r=new W(new xe(.3,9,8),mt({color:"#e8c7a2"}));r.position.y=2.18;const a=new W(new fe(.2,.55,6),mt({color:"#dfe6ef"}));a.position.set(0,1.95,.2),a.rotation.x=.15;const o=new W(new fe(.46,1,7),mt({color:"#3f3470"}));o.position.y=2.72,o.rotation.z=.12;const l=new W(new zt(.62,.62,.08,9),mt({color:"#3f3470"}));l.position.y=2.3,l.rotation.z=.12;const c=new W(new zt(.045,.06,2.3,5),mt({color:"#6d5138"}));c.position.set(.68,1.15,.1);const h=new W(new ze(.16,0),new Te({color:"#a8ecff",emissive:"#4fd7ff",emissiveIntensity:2.2}));h.position.set(.68,2.35,.1);const u=Oe("#71ddff",2,.65);u.position.copy(h.position),[n,i,r,a,o,l,c].forEach(v=>{v.castShadow=!0,e.add(v)}),e.add(h,u),this.scene.add(e),this.wizard={group:e,orb:h,orbGlow:u,baseY:e.position.y},this.colliders.push({x:t.x,z:t.z,r:.5});const d=gt.dryad,p=new Qt;p.position.set(d.x,this.height(d.x,d.z),d.z);const g=new W(new fe(.5,1.35,7),mt({color:"#4f7d4b"}));g.position.y=.68;const _=new W(new zt(.26,.37,.7,7),mt({color:"#67975a"}));_.position.y=1.35;const m=new W(new xe(.27,9,8),mt({color:"#e3c6a2"}));m.position.y=1.86;const f=new W(new ze(.34,0),mt({color:"#5c8a45"}));f.position.set(0,2.02,-.06),f.scale.set(1,.85,1);for(let v=0;v<5;v++){const S=v/5*Math.PI*2,C=new W(new ze(.09,0),mt({color:v%2?"#ffc7df":"#ffe8a8"}));C.position.set(Math.cos(S)*.28,2.14,Math.sin(S)*.28),p.add(C)}for(const v of[-1,1]){const S=new W(new fe(.05,.5,4),mt({color:"#c9b083"}));S.position.set(.18*v,2.3,0),S.rotation.z=-.35*v,p.add(S)}[g,_,m,f].forEach(v=>{v.castShadow=!0,p.add(v)});const x=Oe("#a8f0b8",2.6,.35);x.position.y=1.4,p.add(x),this.scene.add(p),this.dryad={group:p,baseY:p.position.y},this.colliders.push({x:d.x,z:d.z,r:.45})}buildAtmosphere(){const t=this.lowQuality?50:110,e=new Float32Array(t*3);this.fireflyData=[];for(let p=0;p<t;p++){const g=K(0,Math.PI*2),_=K(8,48),m=Math.cos(g)*_,f=Math.sin(g)*_,x=this.height(m,f)+K(.5,4);e[p*3]=m,e[p*3+1]=x,e[p*3+2]=f,this.fireflyData.push({x:m,y:x,z:f,phase:K(0,6.28),speed:K(.4,1.4),amp:K(.4,1.4)})}const n=new se;n.setAttribute("position",new _e(e,3)),this.fireflyMat=new Jn({size:.34,map:Ci("#d8ffb0"),color:14090142,transparent:!0,opacity:0,blending:Sn,depthWrite:!1,sizeAttenuation:!0,toneMapped:!1}),this.fireflies=new Ei(n,this.fireflyMat),this.scene.add(this.fireflies);const i=26,r=new Float32Array(i*3);this.smokeData=[];for(let p=0;p<i;p++){const g=p/i;r[p*3]=this.smokeOrigin.x+K(-.15,.15),r[p*3+1]=this.smokeOrigin.y+g*4,r[p*3+2]=this.smokeOrigin.z+K(-.15,.15),this.smokeData.push({t:g,drift:K(-.5,.5)})}const a=new se;a.setAttribute("position",new _e(r,3)),this.smokeMat=new Jn({size:1,map:Ci("#c8c8c8",.35),color:13224393,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0,toneMapped:!0}),this.smoke=new Ei(a,this.smokeMat),this.scene.add(this.smoke);const o=this.lowQuality?380:700,l=new Float32Array(o*6);this.rainDrops=[];for(let p=0;p<o;p++)this.resetDrop(l,p,!0);const c=new se;c.setAttribute("position",new _e(l,3)),this.rainMat=new Ys({color:12376296,transparent:!0,opacity:.42,depthWrite:!1}),this.rain=new Hr(c,this.rainMat),this.rain.visible=!1,this.rain.frustumCulled=!1,this.scene.add(this.rain),this.rainGeo=c,this.rainCount=o;const h=40,u=new Float32Array(h*3);this.sparkData=[];for(let p=0;p<h;p++){const g=K(-30,30),_=K(-30,30);u[p*3]=g,u[p*3+1]=this.height(g,_)+K(1,6),u[p*3+2]=_,this.sparkData.push({phase:K(0,6),amp:K(.3,1.4)})}const d=new se;d.setAttribute("position",new _e(u,3)),this.sparkMat=new Jn({size:.22,map:Ci("#fff3c7"),color:16773312,transparent:!0,opacity:.3,blending:Sn,depthWrite:!1,toneMapped:!1}),this.sparks=new Ei(d,this.sparkMat),this.scene.add(this.sparks)}resetDrop(t,e,n=!1){const i=K(-24,24),r=K(-24,24),a=K(n?0:12,18);t[e*6]=i,t[e*6+1]=a,t[e*6+2]=r,t[e*6+3]=i+.08,t[e*6+4]=a-.75,t[e*6+5]=r}setWeather(t){this.weather=t,this.rain.visible=t==="rain",t==="rain"&&(this.rainMat.opacity=.42)}buildBounds(){this.colliders.push({x:0,z:0,r:0,boundary:!0})}nearestCollider(t,e,n,i){let r=null,a=n;for(const o of this.colliders){if(o.boundary||o.tree&&!o.tree.active||o.rock&&!o.rock.active||i&&!i(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r={...o,dist:l})}return r}newDay(t){this.day=t;for(const e of this.trees)!e.active&&t>=e.respawnDay&&(e.active=!0,e.hits=e.maxHits,e.mesh.setMatrixAt(e.idx,e.base),e.mesh.instanceMatrix.needsUpdate=!0);for(const e of this.rocks)!e.active&&t>=e.respawnDay&&(e.active=!0,e.hits=e.maxHits,e.mesh.setMatrixAt(e.idx,e.base),e.mesh.instanceMatrix.needsUpdate=!0)}chopTree(t){if(t.hits--,t.hits<=0){t.active=!1,t.respawnDay=this.day+2;const e=new Kt().makeScale(1e-4,1e-4,1e-4);return t.mesh.setMatrixAt(t.idx,e),t.mesh.instanceMatrix.needsUpdate=!0,!0}return!1}mineRock(t){if(t.hits--,t.hits<=0){t.active=!1,t.respawnDay=this.day+3;const e=new Kt().makeScale(1e-4,1e-4,1e-4);return t.mesh.setMatrixAt(t.idx,e),t.mesh.instanceMatrix.needsUpdate=!0,!0}return!1}addSprinkler(t){const e=this.sprinklerSpots[t];if(!e)return null;const n=new Qt;n.position.set(e.x,.16,e.z);const i=new W(new zt(.26,.32,.14,8),mt({color:"#a97b45"})),r=new W(new zt(.05,.05,.4,5),mt({color:"#c9a45f"}));r.position.y=.26;const a=new W(new is(.2,.045,5,10),mt({color:"#8fd8c9",metalness:.4,roughness:.4}));a.position.y=.47,a.rotation.x=Math.PI/2;const o=new W(new ze(.07,0),new Pe({color:10416383,toneMapped:!1}));o.position.y=.6,n.add(i,r,a,o);const l=Oe("#7fe7d7",1.5,.4);return l.position.y=.5,n.add(l),this.scene.add(n),this.sprinklers.push({group:n,top:a,x:e.x,z:e.z}),this.wateredSpots=!0,{x:e.x,z:e.z}}update(t,e,n,i){this.time+=t;const r=this.time;this.updateSky(e),this.waterMat&&(this.waterMat.uniforms.uTime.value=r);const a=Qe(.02,.4,Math.sin((e-6)/24*Math.PI*2));this.pondGlow.material.opacity=.08+a*.1,this.starMat.size=1.5+Math.sin(r*.6)*.15,this.stars.rotation.y=r*.0025;const o=1-a;if(this.fireflyMat.opacity=o*.95,o>.02){const l=this.fireflies.geometry.attributes.position;for(let c=0;c<this.fireflyData.length;c++){const h=this.fireflyData[c];l.setXYZ(c,h.x+Math.sin(r*h.speed+h.phase)*h.amp,h.y+Math.sin(r*h.speed*1.7+h.phase*2)*.4,h.z+Math.cos(r*h.speed*.8+h.phase)*h.amp)}l.needsUpdate=!0}if(this.sparkMat.opacity=.06+a*.24,a>.05){const l=this.sparks.geometry.attributes.position;for(let c=0;c<this.sparkData.length;c++){const h=this.sparkData[c];l.setY(c,l.getY(c)+Math.sin(r*.5+h.phase)*.0015)}l.needsUpdate=!0}if(this.motes){const l=this.motes.geometry.attributes.position;for(let c=0;c<l.count;c++)l.setY(c,this.moteBase[c*3+1]+Math.sin(r*.7+c)*.3),l.setX(c,this.moteBase[c*3]+Math.cos(r*.4+c)*.25);l.needsUpdate=!0,this.moteMat.opacity=.35+o*.6,this.moteMat.size=.3+Math.sin(r*1.3)*.06}for(const l of this.crystals)l.material.emissiveIntensity=1.4+Math.sin(r*1.2+l.position.x)*.2;this.shrineCrystal.rotation.y=r*.45,this.shrineCrystal.position.y=2.2+Math.sin(r*.9)*.18,this.shrineBeam.material.opacity=.03+o*.09,this.shrineDiscGlow.material.opacity=.12+o*.24,this.shrineLight.intensity=1+o*1,this.towerOrb.rotation.y=r*.8,this.towerOrb.position.y=13.6+Math.sin(r*1.1)*.18,this.towerOrb.children[1].material.opacity=.55+o*.35,this.brewGlow.material.opacity=.35+Math.sin(r*2)*.12+o*.2,this.wizard.group.position.y=this.wizard.baseY+Math.sin(r*1.1)*.05,this.wizard.orb.position.y=2.35+Math.sin(r*1.7)*.07,this.wizard.orb.rotation.y=r,this.wizard.orbGlow.material.opacity=.5+Math.sin(r*1.6)*.15,this.dryad.group.position.y=this.dryad.baseY+Math.sin(r*.9+1)*.03,this.dryad.group.rotation.y=Math.sin(r*.3)*.18;for(const l of this.gateLights)l.lamp.material.opacity=.02+o*.3,l.bulb.material.emissiveIntensity!==void 0&&(l.bulb.material.emissiveIntensity=.08+o*1.1);this.homeLight.intensity=.5+o*1.5;for(const l of this.clouds.children)l.position.x+=t*l.userData.speed*.5,l.position.x>105&&(l.position.x=-105);for(const l of this.islands)l.position.y=l.userData.baseY+Math.sin(r*.35+l.userData.phase)*.7,l.rotation.y+=t*.01;if(this.smokeData){const l=this.smoke.geometry.attributes.position;for(let c=0;c<this.smokeData.length;c++){const h=this.smokeData[c];h.t+=t*.055,h.t>1&&(h.t-=1),l.setXYZ(c,this.smokeOrigin.x+Math.sin(r*.6+c)*.35+h.t*(1.1+h.drift),this.smokeOrigin.y+h.t*4.5,this.smokeOrigin.z+Math.cos(r*.4+c)*.3+h.t*.5)}l.needsUpdate=!0,this.smokeMat.opacity=.2+o*.08}for(const l of this.sprinklers)l.top.rotation.z=r*2.2,l.group.position.y=.16+Math.sin(r*1.4)*.035;if(n==="rain"){const l=this.rainGeo.attributes.position.array;for(let c=0;c<this.rainCount;c++)l[c*6+1]-=t*16,l[c*6+4]-=t*16,l[c*6+4]<0&&this.resetDrop(l,c,!1);this.rainGeo.attributes.position.needsUpdate=!0,this.rain.position.set(i.x,this.height(i.x,i.z),i.z),this.rainMat.opacity=.34+Math.sin(r*.7)*.04}this.sun.target.position.set(pe(i.x,-20,20)*.4,0,pe(i.z,-20,20)*.4);for(const l of this.plots)l.fruitMesh&&l.fruitMesh.visible&&(l.fruitMesh.position.y=1.1+Math.sin(r*2.2+l.index)*.04,l.fruitMesh.rotation.y=r*.6+l.index)}}class km{constructor(t){this.scene=t,this.group=new Qt,this.group.name="player",this.pos=new R(0,0,12.4),this.facing=Math.PI,this.walkPhase=0,this.attackTimer=0,this.attackCooldown=0,this.moving=!1,this.hurtFlash=0,this.build(),t.add(this.group)}build(){const t=this.group,e=mt({color:"#e9c39c"}),n=mt({color:"#3f7f74"}),i=mt({color:"#2c5e57"}),r=mt({color:"#3a3f52"}),a=mt({color:"#75512f"}),o=mt({color:"#c9a05a"}),l=mt({color:"#e2c072",roughness:.5,metalness:.25}),c=mt({color:"#6a4326"}),h=mt({color:"#2e5f68",side:He});this.legL=new Qt,this.legR=new Qt;for(const[N,J]of[[this.legL,-.14],[this.legR,.14]]){N.position.set(J,.62,0);const P=new W(new Bt(.17,.5,.2),r);P.position.y=-.25;const U=new W(new Bt(.2,.2,.32),a);U.position.set(0,-.52,.05),P.castShadow=!0,U.castShadow=!0,N.add(P,U),t.add(N)}this.body=new Qt,this.body.position.y=.62;const u=new W(new zt(.29,.4,.82,7),n);u.position.y=.4,u.castShadow=!0;const d=new W(new zt(.31,.34,.1,8),a);d.position.y=.2;const p=new W(new Bt(.12,.1,.05),l);p.position.set(0,.2,.33);const g=new W(new zt(.2,.3,.16,7),i);g.position.y=.82,this.body.add(u,d,p,g);const _=new W(new xe(.245,11,10),e);_.position.y=1.08,_.castShadow=!0;const m=new W(new xe(.255,11,8,0,Math.PI*2,0,Math.PI*.62),c);m.position.set(0,1.13,-.02),m.rotation.x=-.16;const f=new W(new fe(.035,.09,4),e);f.position.set(0,1.06,.24),f.rotation.x=Math.PI/2;for(const N of[-1,1]){const J=new W(new xe(.028,6,5),new Pe({color:2761759}));J.position.set(.085*N,1.13,.215),this.body.add(J)}this.body.add(_,m,f),this.hat=new Qt;const x=new W(new zt(.42,.44,.055,12),o);x.castShadow=!0;const v=new W(new fe(.27,.52,10),o);v.position.y=.27,v.castShadow=!0;const S=new W(new zt(.275,.29,.09,10),i);S.position.y=.06,this.hat.add(x,v,S),this.hat.position.set(0,1.27,0),this.hat.rotation.z=.08,this.body.add(this.hat);const C=new fn(.5,.9,1,3);C.translate(0,-.42,0),this.cape=new W(C,h),this.cape.position.set(0,.78,-.25),this.cape.rotation.x=.12,this.cape.castShadow=!0,this.body.add(this.cape),this.armL=new Qt,this.armR=new Qt;for(const[N,J]of[[this.armL,-.35],[this.armR,.35]]){N.position.set(J,.7,0);const P=new W(new Bt(.14,.46,.16),i);P.position.y=-.2;const U=new W(new xe(.09,7,6),e);U.position.y=-.45,P.castShadow=!0,N.add(P,U),this.body.add(N),N.rotation.z=J>0?-.12:.12}this.lantern=Oe("#ffd08a",1.1,.6),this.lantern.position.set(0,-.52,.08),this.armL.add(this.lantern);const A=new W(new Bt(.13,.18,.13),new Te({color:"#ffdca2",emissive:"#ffb257",emissiveIntensity:1.4}));A.position.set(0,-.52,.08),this.armL.add(A),this.lanternLight=new $s(16759146,.9,7,2),this.lanternLight.position.set(0,1.2,.3),t.add(this.lanternLight),this.sword=new Qt;const T=new W(new Bt(.055,.72,.022),new Te({color:"#d8e7ef",metalness:.7,roughness:.28,emissive:"#78d9ff",emissiveIntensity:.25}));T.position.y=.44;const D=new W(new Bt(.24,.05,.06),l),M=new W(new zt(.035,.035,.18,5),a);M.position.y=-.11,this.sword.add(T,D,M),this.sword.position.set(0,-.48,.02),this.sword.rotation.x=Math.PI,this.sword.visible=!1,this.armR.add(this.sword);const w=new W(new Bt(.34,.42,.22),a);w.position.set(0,.45,-.34),w.castShadow=!0;const F=new W(new zt(.09,.09,.42,6),mt({color:"#8d6b42"}));F.rotation.z=Math.PI/2,F.position.set(0,.72,-.35),this.body.add(w,F),t.add(this.body),t.traverse(N=>{N.isMesh&&(N.castShadow=!0)})}setPosition(t,e,n){this.pos.set(t,e,n),this.group.position.set(t,e,n)}update(t,e,n,i){this.moving=e,this.attackTimer>0&&(this.attackTimer=Math.max(0,this.attackTimer-t)),this.attackCooldown>0&&(this.attackCooldown=Math.max(0,this.attackCooldown-t)),e?this.walkPhase+=t*(5.4+n*.9):this.walkPhase+=t*1.2;const r=e?Math.sin(this.walkPhase)*.62:Math.sin(this.walkPhase*.6)*.04;this.legL.rotation.x=r,this.legR.rotation.x=-r,this.armL.rotation.x=-r*.65,this.armR.rotation.x=r*.65;const a=e?Math.abs(Math.sin(this.walkPhase))*.055:Math.sin(this.walkPhase*.6)*.014;if(this.body.position.y=.62+a,this.cape.rotation.x=.1+(e?.28:.03)+Math.sin(this.walkPhase*.8)*.05,this.attackTimer>0){const l=1-this.attackTimer/.34,c=-1.9+l*2.9;this.armR.rotation.x=c,this.armR.rotation.z=-.55+l*.8,new ln().set(c+.5,.2,0),this.sword.rotation.set(Math.PI+c*.55,.1,0),this.sword.visible=!0}else this.armR.rotation.z=Im(this.armR.rotation.z,-.12,8,t),this.sword.visible=!1;const o=1-pe(Math.sin((i-6)/24*Math.PI*2)*1.6+.35,0,1);this.lantern.material.opacity=.32+o*.55+Math.sin(performance.now()*.006)*.05,this.lanternLight.intensity=.25+o*1.1,this.group.position.x=this.pos.x,this.group.position.z=this.pos.z,this.group.position.y=this.pos.y}faceTowards(t,e,n){const i=Math.atan2(t-this.pos.x,e-this.pos.z);this.facing=pl(this.facing,i,1-Math.exp(-12*n)),this.group.rotation.y=this.facing}faceDirection(t,e,n){if(Math.abs(t)+Math.abs(e)<.001)return;const i=Math.atan2(t,e);this.facing=pl(this.facing,i,1-Math.exp(-14*n)),this.group.rotation.y=this.facing}startAttack(){return this.attackCooldown>0?!1:(this.attackCooldown=.48,this.attackTimer=.34,!0)}forward(){return{x:Math.sin(this.facing),z:Math.cos(this.facing)}}}const Gm=[{x:-22,z:-17},{x:-25,z:3},{x:25,z:-18},{x:27,z:15},{x:-14,z:26},{x:9,z:-25},{x:-30,z:-4},{x:32,z:2}],gl=[{body:"#5fbf8f",glow:"#7dffb8",eye:"#1d3a2b"},{body:"#7f8fe8",glow:"#b4c4ff",eye:"#232546"},{body:"#c67fd8",glow:"#f2a8ff",eye:"#3a1f45"},{body:"#d8b35f",glow:"#ffe28a",eye:"#3d2d12"}];class Hm{constructor(t,e){this.scene=t,this.world=e,this.slimes=[],this.time=0,Gm.forEach((n,i)=>{this.slimes.push(this.makeSlime(n.x,n.z,i))})}makeSlime(t,e,n){const i=gl[n%gl.length],r=new Qt,a=new Te({color:i.body,emissive:i.glow,emissiveIntensity:.32,roughness:.55,flatShading:!0}),o=new W(new ze(.5,1),a);o.scale.set(1.05,.82,1.05),o.position.y=.4,o.castShadow=!0;const l=new W(new xe(.36,9,7),new Te({color:"#e8fff2",emissive:i.glow,emissiveIntensity:.18,roughness:.7}));l.scale.set(1,.38,1),l.position.y=.14;for(const u of[-1,1]){const d=new W(new xe(.09,7,6),new Pe({color:16777215}));d.position.set(.16*u,.5,.4);const p=new W(new xe(.045,6,5),new Pe({color:i.eye}));p.position.set(.16*u,.5,.47),r.add(d,p)}const c=Oe(i.glow,2,.35);c.position.y=.4,r.add(o,l,c);const h=this.world.height(t,e);return r.position.set(t,h,e),this.scene.add(r),{group:r,body:o,belly:l,bodyMat:a,glow:c,x:t,z:e,homeX:t,homeZ:e,y:h,hp:3,maxHp:3,alive:!0,hop:K(0,6.28),phase:"wander",wander:{x:t,z:e},timer:K(1,4),hurt:0,cooldown:0,speed:K(1.5,2.1),size:1,knockX:0,knockZ:0}}resetDay(t){for(const e of this.slimes)e.alive=!0,e.hp=e.maxHp,e.group.visible=!0,e.group.scale.setScalar(1),e.x=e.homeX,e.z=e.homeZ,e.hurt=0,e.cooldown=0,e.phase="wander",e.timer=K(.5,2)}hit(t,e,n){return t.alive?(t.hp-=1,t.hurt=.18,t.knockX=e*3.2,t.knockZ=n*3.2,t.phase="chase",t.hp<=0):!1}kill(t){t.alive=!1,t.group.visible=!1}update(t,e,n){this.time+=t;const i=this.time;for(const r of this.slimes){if(!r.alive)continue;const a=e.x-r.x,o=e.z-r.z,l=Math.hypot(a,o);r.timer-=t,r.cooldown>0&&(r.cooldown-=t),r.hurt>0&&(r.hurt-=t),Math.abs(r.knockX)+Math.abs(r.knockZ)>.01&&(r.x+=r.knockX*t,r.z+=r.knockZ*t,r.knockX*=Math.pow(.02,t),r.knockZ*=Math.pow(.02,t));let c=!1;if(l<7.2&&n.state.hours>17.5&&(r.phase="chase"),l<5.2&&(r.phase="chase"),r.phase==="chase"&&l>11&&(r.phase="wander"),r.phase==="chase"&&l>.01){const _=r.speed*(l<2?.8:1);r.x+=a/l*_*t,r.z+=o/l*_*t,c=!0,l<1.15&&r.cooldown<=0&&(r.cooldown=1.15,n.damagePlayer(8+(r.maxHp-3)*2,r.x,r.z),n.audio.sfx("hit"))}else if(r.timer<=0){r.timer=K(2.2,5.2);const _=K(0,Math.PI*2),m=K(2,8);r.wander.x=r.homeX+Math.cos(_)*m,r.wander.z=r.homeZ+Math.sin(_)*m}else{const _=r.wander.x-r.x,m=r.wander.z-r.z,f=Math.hypot(_,m);f>.4&&(r.x+=_/f*r.speed*.42*t,r.z+=m/f*r.speed*.42*t,c=!0)}const h=Math.hypot(r.x,r.z);h>54&&(r.x*=54/h,r.z*=54/h),r.y=this.world.height(r.x,r.z),r.hop+=t*(c?6.2:2.6);const u=c?Math.abs(Math.sin(r.hop))*.34:0,d=c?Math.sin(r.hop*2)*.06:Math.sin(i*1.5+r.homeX)*.025;r.group.position.set(r.x,r.y+u+.02,r.z),r.body.scale.set(1.05+d,.82-d*.7,1.05+d),r.belly.scale.set(1+d,.38,1+d);const p=l>.1&&r.phase==="chase"?Math.atan2(a,o):Math.atan2(r.wander.x-r.x,r.wander.z-r.z);r.group.rotation.y+=(p-r.group.rotation.y)*Math.min(1,t*8),r.hurt>0?(r.bodyMat.emissiveIntensity=1.6,r.body.scale.x+=.1):r.bodyMat.emissiveIntensity=.32+Math.sin(i*2+r.homeX)*.05;const g=n.state.hours>18||n.state.hours<6;r.glow.material.opacity=.18+(g?.4:.1)+Math.sin(i*3+r.homeX)*.06,r.glow.scale.setScalar(1.8+Math.sin(i*2+r.homeX)*.2)}}}const Zt=s=>document.getElementById(s),$e={moon:{name:"Moonpetal",icon:"🌙",color:"#bfe9ff",sell:58,grow:2,seedName:"Moonpetal Seed"},sun:{name:"Sunberry",icon:"☀️",color:"#ffd166",sell:126,grow:3,seedName:"Sunberry Seed"},star:{name:"Starcorn",icon:"⭐",color:"#ffe9a3",sell:275,grow:4,seedName:"Starcorn Seed"}};class Vm{constructor(t){this.game=t,this.toastEl=Zt("toasts"),this.floatEl=Zt("floats"),this.modal=Zt("modal-root"),this.hintTimer=null,this.modalKind=null,this.questTab="quests",this.shopTab="buy",this.bind(),this.buildSeedSlots()}bind(){const t=(c,h)=>{const u=Zt(c);u&&u.addEventListener("click",d=>{d.preventDefault(),this.game.audio.init(),this.game.audio.sfx("click"),h(d)})};t("btn-menu",()=>this.game.openMenu()),t("btn-action",()=>this.game.doAction()),t("btn-attack",()=>this.game.doAttack()),t("btn-new",()=>this.game.startNew()),t("btn-continue",()=>this.game.continueGame()),t("btn-how",()=>this.openHelp()),t("btn-attack",()=>this.game.doAttack());const e=Zt("joystick"),n=Zt("stick");let i=!1,r=null;const a=()=>{const c=e.getBoundingClientRect();return{x:c.left+c.width/2,y:c.top+c.height/2,rad:c.width*.33}},o=c=>{if(!i||c.pointerId!==r)return;const h=a();let u=c.clientX-h.x,d=c.clientY-h.y;const p=Math.hypot(u,d),g=h.rad;p>g&&(u=u/p*g,d=d/p*g),n.style.transform=`translate(${u}px, ${d}px)`,this.game.joystick.x=u/g,this.game.joystick.y=d/g};e.addEventListener("pointerdown",c=>{i=!0,r=c.pointerId,e.setPointerCapture(c.pointerId),this.game.audio.init(),o(c)}),e.addEventListener("pointermove",o);const l=c=>{c.pointerId===r&&(i=!1,r=null,n.style.transform="translate(0px, 0px)",this.game.joystick.x=0,this.game.joystick.y=0)};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),e.addEventListener("lostpointercapture",l),this.modal.addEventListener("click",c=>{c.target===this.modal&&this.modalKind!=="win"&&this.modalKind!=="summary"&&this.closeModal()}),this.modal.addEventListener("click",c=>{c.target.closest("[data-close]")&&this.closeModal()}),this.modal.addEventListener("click",c=>{const h=c.target.closest("[data-tab]");h&&(this.shopTab=h.dataset.tab,this.renderShop());const u=c.target.closest("[data-qtab]");u&&(this.questTab=u.dataset.qtab,this.renderMenu())})}buildSeedSlots(){const t=Zt("seed-slots");t.innerHTML="",["moon","sun","star"].forEach((n,i)=>{const r=$e[n],a=document.createElement("button");a.className="slot",a.dataset.seed=n,a.innerHTML=`<span class="key">${i+1}</span><span class="seed">${r.icon}</span><span class="qty">0</span><span class="nm">${r.name}</span>`,a.addEventListener("click",o=>{o.preventDefault(),this.game.audio.init(),this.game.selectSeed(n)}),t.appendChild(a)})}setHudVisible(t){const e=Zt("hud");e.classList.toggle("hidden",!t),e.setAttribute("aria-hidden",t?"false":"true")}hideTitle(){const t=Zt("screen-title");t.classList.add("gone"),setTimeout(()=>t.classList.add("hidden"),900)}showTitle(t){Zt("screen-title").classList.remove("hidden","gone"),Zt("btn-continue").classList.toggle("hidden",!t),Zt("btn-new").textContent=t?"New Journey":"Begin Anew"}update(t){const e=t;Zt("hud-date").textContent=`${e.season} · Day ${e.day}`,Zt("hud-weather").textContent=e.weather==="rain"?"🌧 Rain":e.hours>19||e.hours<6?"🌙 Clear":"☀ Clear";const n=Math.floor(e.hours)%24,i=Math.floor(e.hours%1*60),r=n>=12?"PM":"AM",a=n%12===0?12:n%12;Zt("hud-clock").textContent=`${a}:${String(i).padStart(2,"0")} ${r}`,Zt("daytrack").style.width=`${Math.min(100,Math.max(0,(e.hours-6)/18*100))}%`,Zt("hud-gold").textContent=Math.floor(e.gold),Zt("hud-essence").textContent=Math.floor(e.essence),Zt("hud-wood").textContent=Math.floor(e.wood),Zt("hud-stone").textContent=Math.floor(e.stone),Zt("bar-health").style.width=`${Math.max(0,e.health/e.maxHealth*100)}%`,Zt("bar-energy").style.width=`${Math.max(0,e.energy/e.maxEnergy*100)}%`,Zt("bar-health").parentElement.classList.toggle("low",e.health/e.maxHealth<.3),Zt("bar-energy").parentElement.classList.toggle("low",e.energy/e.maxEnergy<.25),this.updateSeeds(e),this.updateQuestChip(e);const o=15.5-this.game.player.pos.x,l=6.5-this.game.player.pos.z,c=Math.atan2(o,l)-this.game.cameraYaw,h=Zt("needle");h&&(h.style.transform=`rotate(${c}rad)`)}updateSeeds(t){document.querySelectorAll(".slot").forEach(e=>{const n=e.dataset.seed,i=t.seeds[n]||0;e.querySelector(".qty").textContent=i,e.classList.toggle("sel",t.selectedSeed===n),e.classList.toggle("empty",i<=0)})}updateQuestChip(t){const e=this.game.currentQuest();if(!e){Zt("qt-title").textContent="The Vale Thrives",Zt("qt-desc").textContent="Free play — grow, explore, and prosper.";return}Zt("qt-title").textContent=e.name,Zt("qt-desc").textContent=e.desc}setPrompt(t,e="E"){const n=Zt("prompt");if(!t){n.classList.add("hidden");return}n.classList.remove("hidden"),Zt("prompt-key").textContent=e,Zt("prompt-text").textContent=t}setAction(t,e,n){Zt("action-icon").textContent=t,Zt("action-label").textContent=e,Zt("btn-action").classList.toggle("disabled",!n)}showHint(t,e=4200){const n=Zt("hint");n.textContent=t,n.classList.add("show"),clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>n.classList.remove("show"),e)}toast(t,e="",n=""){const i=document.createElement("div");for(i.className=`toast ${e}`,i.innerHTML=`${n?`<span class="ti">${n}</span>`:""}<span>${t}</span>`,this.toastEl.appendChild(i),setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),380)},3e3);this.toastEl.children.length>4;)this.toastEl.firstElementChild.remove()}float(t,e,n=""){const i=e.clone().project(this.game.camera);if(i.z>1)return;const r=(i.x*.5+.5)*window.innerWidth,a=(-i.y*.5+.5)*window.innerHeight,o=document.createElement("div");o.className=`float ${n}`,o.textContent=t,o.style.left=`${r}px`,o.style.top=`${a}px`,this.floatEl.appendChild(o),setTimeout(()=>o.remove(),1200)}openSheet(t,e,n=""){this.modalKind=e,this.modal.classList.remove("hidden"),this.modal.innerHTML=`<div class="sheet ${n}" role="dialog" aria-modal="true">${t}</div>`,this.game.setPaused(!0)}closeModal(){this.modal.classList.add("hidden"),this.modal.innerHTML="",this.modalKind=null,this.game.setPaused(!1),this.game.audio.sfx("click")}header(t,e,n){return`<div class="sheet-head">
      <div class="sigil">${t}</div>
      <div><h2>${e}</h2><p>${n}</p></div>
      <button class="close-x" data-close aria-label="Close">✕</button>
    </div>`}openShop(){this.shopTab="buy",this.renderShop(),this.game.audio.sfx("magic")}renderShop(){const t=this.game,e=t.state,n=t.shopItems();let i;if(this.shopTab==="buy")i=`<div class="shop-grid">${n.map((a,o)=>{const l=e.gold>=a.price&&a.available!==!1;return`<div class="shop-item">
          <div class="si-ico">${a.icon}</div>
          <div class="si-main">
            <div class="si-name">${a.name}</div>
            <div class="si-desc">${a.desc}</div>
          </div>
          <button class="si-buy" data-buy="${o}" ${l?"":"disabled"}>${a.locked?"Locked":a.available===!1?"Sold out":`${a.price} ◈`}</button>
        </div>`}).join("")}</div>`;else{const a=Object.entries($e).map(([l,c])=>{const h=e.crops[l]||0;return`<div class="sell-row">
          <span class="si-ico" style="width:32px;height:32px;font-size:18px;display:grid;place-items:center">${c.icon}</span>
          <span class="n">${c.name}</span><span class="c">× ${h}</span><span class="v">${c.sell} ◈ each</span>
        </div>`}).join(""),o=`<div class="sell-row"><span class="n">🪵 Wood</span><span class="c">× ${e.wood}</span><span class="v">4 ◈ each</span></div>
        <div class="sell-row"><span class="n">🪨 Stone</span><span class="c">× ${e.stone}</span><span class="v">6 ◈ each</span></div>`;i=`${a}${o}
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn ghost" style="min-width:0;flex:1;padding:9px;font-size:12.5px" data-sell="crops">Sell All Crops</button>
          <button class="btn ghost" style="min-width:0;flex:1;padding:9px;font-size:12.5px" data-sell="mats">Sell Materials</button>
        </div>
        <p style="font-size:10.5px;color:#8fa0b1;margin:10px 2px 0;line-height:1.5">Zephyr pays a fair price. Moonpetal 58◈ · Sunberry 126◈ · Starcorn 275◈.</p>`}const r=`${this.header("🪄","Zephyr's Arcane Goods","Seeds, charms & curious things")}
      <div class="sheet-body">
        <div class="tabs">
          <button class="tab ${this.shopTab==="buy"?"active":""}" data-tab="buy">Buy</button>
          <button class="tab ${this.shopTab==="sell"?"active":""}" data-tab="sell">Sell</button>
        </div>
        ${i}
      </div>
      <div class="sheet-foot">
        <span style="font-size:11px;color:#9fb0c2;letter-spacing:.06em">YOUR PURSE</span>
        <div class="purse"><span class="gold"><span class="gem">◈</span> <b>${Math.floor(e.gold)}</b></span><span class="essence"><span class="star">✦</span> <b>${e.essence}</b></span></div>
      </div>`;this.openSheet(r,"shop"),this.modal.querySelectorAll("[data-buy]").forEach(a=>{a.addEventListener("click",()=>{const o=t.shopItems()[Number(a.dataset.buy)];t.buy(o)&&(this.renderShop(),this.update(t.state))})}),this.modal.querySelectorAll("[data-sell]").forEach(a=>{a.addEventListener("click",()=>{t.sellAll(a.dataset.sell),this.renderShop(),this.update(t.state)})})}openMenu(){this.questTab="quests",this.renderMenu()}renderMenu(){const t=this.game,e=t.state;let n="";this.questTab==="quests"?n=t.questList().map(l=>{const c=Math.min(1,l.progress/l.target);return`<div class="quest-item ${l.done?"done":""}">
          <div class="qi-top"><span class="qi-name">${l.name}</span><span class="qi-reward">${l.rewardText||""}</span></div>
          <div class="qi-desc">${l.desc}</div>
          <div class="qi-bar"><i style="width:${l.done?100:c*100}%"></i></div>
          <div class="qi-status">${l.done?"✦ Completed":`${Math.min(l.progress,l.target)} / ${l.target}`}</div>
        </div>`}).join(""):this.questTab==="guide"?n=`<div class="help-grid">
        <div class="help-card"><h4>Move</h4><p>Joystick on touch, <span class="keyrow">W</span><span class="keyrow">A</span><span class="keyrow">S</span><span class="keyrow">D</span> on keyboard. Drag the world to orbit the camera, scroll to zoom.</p></div>
        <div class="help-card"><h4>Use &amp; Attack</h4><p><span class="keyrow">E</span> or the green button interacts with soil, trees, rocks, people and the cottage. <span class="keyrow">Space</span> or the sword button swings your blade.</p></div>
        <div class="help-card"><h4>Farming</h4><p>Till soil, pick a seed from the hotbar, plant, then water. Crops grow overnight <em>only if watered</em>. Rain waters everything for free.</p></div>
        <div class="help-card"><h4>Energy</h4><p>Every chore costs energy. Drink a Mana Potion, or sleep at the cottage door to start a new day with full energy.</p></div>
        <div class="help-card"><h4>The Vale</h4><p>Chop trees for wood, mine rocks for stone, and clear slimes in the Whisperwood for arcane essence. Zephyr's tower lies east.</p></div>
        <div class="help-card"><h4>Magic</h4><p>Offer essence at the Moonwell west of the farm for rain, vitality, or a permanent blessing. Buy sprinklers to water a 3×3 patch each dawn.</p></div>
      </div>
      <p style="font-size:11px;color:#8fa0b1;margin-top:10px;line-height:1.55">Phone tip: landscape gives the widest view. All progress saves automatically each morning and when you close a shop.</p>`:n=`
        <div class="setting-row"><div><div class="sl">Sound</div><div class="sd">Procedural ambience, birds &amp; chimes</div></div><button class="toggle ${t.soundOn?"on":""}" data-setting="sound"></button></div>
        <div class="setting-row"><div><div class="sl">Save game</div><div class="sd">Stored locally in this browser</div></div><button class="btn ghost" style="min-width:0;padding:8px 12px;font-size:12px" data-save>Save now</button></div>
        <div class="setting-row"><div><div class="sl">New journey</div><div class="sd">Erase this save and start over</div></div><button class="danger-btn" data-newgame>Start over</button></div>
        <div class="setting-row" style="border-bottom:none"><div><div class="sl">Your story</div><div class="sd">Day ${e.day} · ${Math.floor(e.gold)} gold · ${e.stats.harvested} crops harvested · ${e.stats.slimes} slimes cleared</div></div></div>`;const i=`${this.header("✦","Emberfall Vale",`Day ${e.day} · ${e.season} · ${e.weather==="rain"?"Rainy":"Clear skies"}`)}
      <div class="sheet-body">
        <div class="tabs">
          <button class="tab ${this.questTab==="quests"?"active":""}" data-qtab="quests">Quests</button>
          <button class="tab ${this.questTab==="guide"?"active":""}" data-qtab="guide">Guide</button>
          <button class="tab ${this.questTab==="settings"?"active":""}" data-qtab="settings">Options</button>
        </div>
        ${n}
      </div>
      <div class="sheet-foot">
        <span style="font-size:10.5px;color:#8fa0b1;letter-spacing:.06em">✦ ${e.essence} ESSENCE · 🪵 ${e.wood} · 🪨 ${e.stone}</span>
        <button class="btn primary" style="min-width:0;padding:9px 18px;font-size:13px" data-close>Resume</button>
      </div>`;this.openSheet(i,"menu");const r=this.modal.querySelector('[data-setting="sound"]');r&&r.addEventListener("click",()=>{t.setSound(!t.soundOn),r.classList.toggle("on",t.soundOn)});const a=this.modal.querySelector("[data-save]");a&&a.addEventListener("click",()=>{t.save(),this.toast("Journey saved.","","💾")});const o=this.modal.querySelector("[data-newgame]");o&&o.addEventListener("click",()=>{confirm("Erase this save and begin a new journey?")&&(this.closeModal(),t.startNew())})}openHelp(){this.questTab="guide",this.renderMenu()}openDialog(t){const{title:e,portrait:n,text:i,options:r}=t,a=`<div class="sheet-head">
        <div class="sigil">${n}</div>
        <div><h2>${e}</h2><p>${t.subtitle||""}</p></div>
        <button class="close-x" data-close aria-label="Close">✕</button>
      </div>
      <div class="sheet-body">
        <div class="dialog-body">
          <div class="portrait">${n}</div>
          <div class="dialog-text">${i}</div>
        </div>
        <div class="dialog-options">${r.map((o,l)=>`<button class="dialog-opt" data-opt="${l}" ${o.disabled?"disabled":""}>${o.label}</button>`).join("")}</div>
      </div>`;this.openSheet(a,"dialog","dialog-sheet"),this.modal.querySelectorAll("[data-opt]").forEach(o=>{o.addEventListener("click",()=>{const l=r[Number(o.dataset.opt)];l.action?l.action():this.closeModal()})})}openShrine(){const t=this.game,e=t.state,n=e.blessing>=2,i=`${this.header("✦","The Moonwell","An old magic sleeps beneath the stones")}
      <div class="sheet-body">
        <div class="dialog-body" style="margin-bottom:14px">
          <div class="portrait">🌙</div>
          <div class="dialog-text">The standing stones hum with a low, silver song. Offerings of <em>essence</em> are drawn into the floating crystal.
          <br /><br />You carry <em>${e.essence} essence</em>.</div>
        </div>
        <div class="shop-grid">
          <div class="shop-item">
            <div class="si-ico">🌧</div>
            <div class="si-main"><div class="si-name">Rite of Rain</div><div class="si-desc">Water every planted crop, and bring rain tomorrow morning.</div></div>
            <button class="si-buy" data-rite="rain" ${e.essence>=2?"":"disabled"}>2 ✦</button>
          </div>
          <div class="shop-item">
            <div class="si-ico">💚</div>
            <div class="si-main"><div class="si-name">Vitality Offering</div><div class="si-desc">Restore your health and energy to full.</div></div>
            <button class="si-buy" data-rite="heal" ${e.essence>=2?"":"disabled"}>2 ✦</button>
          </div>
          <div class="shop-item">
            <div class="si-ico">🌙</div>
            <div class="si-main"><div class="si-name">Awaken the Moonwell</div><div class="si-desc">A permanent blessing: +25 max energy and a sprinkler for your farm.${n?" (Already awakened)":""}</div></div>
            <button class="si-buy" data-rite="awaken" ${!n&&e.essence>=5?"":"disabled"}>${n?"Done":"5 ✦"}</button>
          </div>
        </div>
        <p style="font-size:10.5px;color:#8fa0b1;margin:11px 2px 0;line-height:1.5">Slimes in the Whisperwood drop essence. They grow bolder after dusk.</p>
      </div>`;this.openSheet(i,"shrine"),this.modal.querySelectorAll("[data-rite]").forEach(r=>{r.addEventListener("click",()=>{t.shrineRite(r.dataset.rite),this.openShrine(),this.update(t.state)})})}sleepFade(t){Zt("screen-fade").classList.toggle("on",t)}showSummary(t,e){const n=`<div class="sheet-body" style="padding-top:22px">
        <div class="weather-line">${t.weather==="rain"?"🌧 Rainy morning":"☀ Clear morning"}</div>
        <div class="big-day">Day ${t.day}</div>
        <div style="font-family:var(--serif);font-size:13px;color:#a9bccd;margin-top:2px">${t.season} · Emberfall Vale</div>
        <div class="summary-list">
          ${t.crops?`<div class="summary-line"><span>Crops grown</span><b>+${t.crops}</b></div>`:""}
          <div class="summary-line"><span>Gold earned yesterday</span><b>${t.earned} ◈</b></div>
          <div class="summary-line"><span>Energy restored</span><b>${t.maxEnergy} ⚡</b></div>
          ${t.rain?'<div class="summary-line"><span>The rain watered your crops</span><b>✓</b></div>':""}
          ${t.sprinklers?`<div class="summary-line"><span>Sprinklers murmured to life</span><b>${t.sprinklers}×</b></div>`:""}
        </div>
        <p class="summary-flavor">${t.flavor}</p>
        <button class="btn primary" id="btn-rise" style="width:100%;margin-top:6px">Rise and shine</button>
      </div>`;this.openSheet(n,"summary","summary-sheet");const i=this.modal.querySelector("#btn-rise");i&&i.addEventListener("click",()=>{this.closeModal(),e&&e()})}showWin(){const t=`<div class="sheet-body" style="padding:24px 22px">
        <div class="win-crown">👑</div>
        <h2>The Ember Crown</h2>
        <p>You gathered the crown of woven starlight and set it upon the Moonwell. Magic spills back into Emberfall Vale — the fields glow, the Whisperwood sings, and the little farm that time forgot is forgotten no longer.</p>
        <p style="color:#ffdf9b;font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-top:16px">Vale restored · Day ${this.game.state.day}</p>
        <button class="btn primary" id="btn-keep-playing" style="width:100%;margin-top:18px">Keep tending the vale</button>
      </div>`;this.openSheet(t,"win","win-sheet");const e=this.modal.querySelector("#btn-keep-playing");e&&e.addEventListener("click",()=>this.closeModal())}}class Wm{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.noiseBuffer=null,this.ambient=null,this.lastChirp=0}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.32,this.master.connect(this.ctx.destination),this.makeNoise(),this.startAmbient())}makeNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.noiseBuffer=e}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.32,this.ctx.currentTime,.05)}startAmbient(){if(!this.ctx)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=340;const n=this.ctx.createGain();n.gain.value=.055,t.connect(e).connect(n).connect(this.master),t.start(),this.ambient={src:t,filter:e,gain:n};const i=this.ctx.createGain();i.gain.value=.018,i.connect(this.master);for(const r of[110,164.81,220]){const a=this.ctx.createOscillator();a.type="sine",a.frequency.value=r;const o=this.ctx.createGain();o.gain.value=.33,a.connect(o).connect(i),a.start()}this.pad=i}updateAmbient(t,e){if(!this.ctx||this.muted)return;if(this.ambient){const i=e?200:380;this.ambient.filter.frequency.setTargetAtTime(i,this.ctx.currentTime,2),this.ambient.gain.gain.setTargetAtTime(e?.04:.06,this.ctx.currentTime,2)}const n=this.ctx.currentTime;n-this.lastChirp>(e?2.4:4.2)&&(this.lastChirp=n+Math.random()*2,Math.random()<.7&&(e?this.cricket():this.bird()))}bird(){const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine";const i=1700+Math.random()*900;e.frequency.setValueAtTime(i,t),e.frequency.exponentialRampToValueAtTime(i*1.5,t+.07),e.frequency.exponentialRampToValueAtTime(i*1.1,t+.16),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.035,t+.02),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n).connect(this.master),e.start(t),e.stop(t+.25)}cricket(){const t=this.ctx.currentTime;for(let e=0;e<3;e++){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.value=3200+Math.random()*300;const r=t+e*.08;i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.013,r+.01),i.gain.exponentialRampToValueAtTime(.001,r+.06),n.connect(i).connect(this.master),n.start(r),n.stop(r+.08)}}noise(t,e,n,i=.2,r="bandpass",a=null){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createBufferSource();l.buffer=this.noiseBuffer;const c=this.ctx.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(e,o),a&&c.frequency.exponentialRampToValueAtTime(a,o+t),c.Q.value=n;const h=this.ctx.createGain();h.gain.setValueAtTime(i,o),h.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(h).connect(this.master),l.start(o),l.stop(o+t+.02)}tone(t,e,n="sine",i=.12,r=0,a=null){if(!this.ctx)return;const o=this.ctx.currentTime+r,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+e),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(this.master),l.start(o),l.stop(o+e+.02)}sfx(t){if(!(!this.ctx||this.muted))switch(t){case"step":this.noise(.09,220,.7,.05,"lowpass");break;case"till":this.noise(.2,420,.8,.16,"lowpass"),this.tone(90,.12,"sine",.05);break;case"plant":this.tone(520,.1,"sine",.07,0,700),this.noise(.12,900,1,.05);break;case"water":this.noise(.45,1800,.6,.12,"bandpass",700);break;case"harvest":this.tone(660,.18,"sine",.09),this.tone(880,.22,"sine",.08,.07),this.tone(1320,.3,"triangle",.06,.14);break;case"chop":this.noise(.14,260,.7,.2,"lowpass"),this.tone(110,.12,"square",.05);break;case"mine":this.tone(880,.08,"square",.04,0,400),this.noise(.12,2400,1.4,.13);break;case"attack":this.noise(.18,900,.7,.14,"bandpass",2600);break;case"hit":this.tone(150,.14,"square",.08,0,70),this.noise(.1,400,.8,.12);break;case"slime":this.tone(300,.16,"sine",.08,0,520),this.tone(200,.2,"triangle",.05,.04);break;case"coin":this.tone(1046,.1,"triangle",.07),this.tone(1568,.16,"triangle",.06,.06);break;case"click":this.tone(520,.05,"sine",.05);break;case"quest":[523,659,784,1046].forEach((e,n)=>this.tone(e,.35,"triangle",.06,n*.1));break;case"magic":[392,523,659,784,1046].forEach((e,n)=>this.tone(e,.8,"sine",.045,n*.07));break;case"sleep":[523,392,330,262].forEach((e,n)=>this.tone(e,.7,"sine",.06,n*.18));break;case"hurt":this.tone(220,.2,"sawtooth",.07,0,110),this.noise(.14,500,.8,.1);break;case"error":this.tone(180,.12,"square",.04);break}}}const Zr="emberfall-vale-save-v1",Ws=()=>matchMedia("(pointer: coarse)").matches,Kr=[{id:"q1",name:"A New Beginning",desc:"Till the soil and plant 4 seeds on your farm.",target:4,get:s=>s.stats.planted,reward:{gold:60},rewardText:"+60 ◈"},{id:"q2",name:"First Watering",desc:"Water 4 crops in a single day.",target:4,get:s=>s.stats.wateredToday,reward:{seeds:{sun:2}},rewardText:"+2 Sunberry seeds"},{id:"q3",name:"Harvest Moon",desc:"Harvest 3 grown crops.",target:3,get:s=>s.stats.harvested,reward:{gold:150,essence:2},rewardText:"+150 ◈ · +2 ✦"},{id:"q4",name:"Whisperwood Threat",desc:"Clear 3 slimes from the Whisperwood.",target:3,get:s=>s.stats.slimes,reward:{gold:200,essence:2},rewardText:"+200 ◈ · +2 ✦"},{id:"q5",name:"Wake the Moonwell",desc:"Offer 5 essence to awaken the Moonwell.",target:1,get:s=>s.blessing,reward:{gold:200},rewardText:"+200 ◈"},{id:"q6",name:"The Ember Crown",desc:"Earn 900 gold and buy the Ember Crown from Zephyr.",target:1,get:s=>s.flags.won,reward:{},rewardText:"Restore the vale"}];function Jr(){return{version:1,day:1,hours:8.2,weather:"clear",season:"Spring",gold:120,energy:100,maxEnergy:100,health:100,maxHealth:100,essence:0,wood:0,stone:0,seeds:{moon:8,sun:2,star:0},crops:{moon:0,sun:0,star:0},selectedSeed:"moon",blessing:0,sprinklerCount:0,stats:{planted:0,wateredToday:0,harvested:0,slimes:0,earned:0,dayEarned:0},quests:{},flags:{tutTilled:!1,tutPlanted:!1,tutWatered:!1,tutShop:!1,charm:!1,won:!1,healDay:0},soundOn:!0}}class Xm{constructor(t){this.max=260,this.pos=new Float32Array(this.max*3),this.col=new Float32Array(this.max*3),this.vel=new Float32Array(this.max*3),this.life=new Float32Array(this.max),this.maxLife=new Float32Array(this.max),this.baseCol=[];for(let i=0;i<this.max;i++)this.pos[i*3+1]=-999,this.life[i]=0,this.baseCol.push(new ht);const e=new se;e.setAttribute("position",new _e(this.pos,3)),e.setAttribute("color",new _e(this.col,3));const n=new Jn({size:.26,map:Ci("#ffffff",.5),vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0});this.points=new Ei(e,n),this.points.frustumCulled=!1,this.geo=e,t.add(this.points),this.cursor=0}emit(t,e,n=10,i=2.4,r=2.4){const a=new ht(e);for(let o=0;o<n;o++){const l=this.cursor++%this.max;this.life[l]=this.maxLife[l]=K(.35,.85),this.pos[l*3]=t.x+K(-.2,.2),this.pos[l*3+1]=t.y+K(0,.4),this.pos[l*3+2]=t.z+K(-.2,.2);const c=K(0,Math.PI*2),h=K(.2,i);this.vel[l*3]=Math.cos(c)*h,this.vel[l*3+1]=K(.6,r),this.vel[l*3+2]=Math.sin(c)*h,this.baseCol[l].copy(a),this.col[l*3]=a.r,this.col[l*3+1]=a.g,this.col[l*3+2]=a.b}}update(t){let e=!1;for(let n=0;n<this.max;n++){if(this.life[n]<=0)continue;if(this.life[n]-=t,e=!0,this.life[n]<=0){this.pos[n*3+1]=-999;continue}this.vel[n*3+1]-=7.5*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;const i=pe(this.life[n]/this.maxLife[n],0,1);this.col[n*3]=this.baseCol[n].r*i,this.col[n*3+1]=this.baseCol[n].g*i,this.col[n*3+2]=this.baseCol[n].b*i}e&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0)}}class qm{constructor(t){this.canvas=t,this.audio=new Wm,this.joystick={x:0,y:0},this.keys=new Set,this.state=Jr(),this.mode="title",this.paused=!1,this.transitioning=!1,this.sleeping=!1,this.clock=new ic,this.cameraYaw=.15,this.cameraPitch=.5,this.cameraDist=14,this.camPos=new R,this.camLook=new R,this.target=null,this.lastPrompt="",this.lastActionKey="",this.uiAccum=0,this.shake=0,this.invuln=0,this.titleYaw=-.5,this.titleTime=0,this.drag=null,this.stepAccum=0,this.ambientAccum=0,this.fpsAccum=0,this.frames=0,this.lowFps=!1,this.soundOn=!0,this.rainToday=!1,this.setupRenderer(),this.scene=new um,this.camera=new Ze(48,innerWidth/innerHeight,.1,500),this.camera.position.set(16,15,24);const e=Ws()&&(navigator.hardwareConcurrency||4)<=4;this.world=new Bm(this.scene,this.renderer,{lowQuality:e}),this.player=new km(this.scene),this.slimes=new Hm(this.scene,this.world),this.particles=new Xm(this.scene),this.ui=new Vm(this),this.setupPost(),this.setupInput(),this.setupResize(),this.player.setPosition(gt.spawn.x,this.world.height(gt.spawn.x,gt.spawn.z),gt.spawn.z),this.player.facing=Math.PI,this.player.group.rotation.y=Math.PI,this.world.updateSky(16.7),this.updateCamera(0,!0),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupRenderer(){this.renderer=new Ql({canvas:this.canvas,antialias:!Ws(),powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,Ws()?1.5:1.8)),this.renderer.setSize(innerWidth,innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vl,this.renderer.toneMapping=da,this.renderer.toneMappingExposure=1.08,this.renderer.outputColorSpace=ge}setupPost(){this.composer=new Rm(this.renderer),this.composer.addPass(new Cm(this.scene,this.camera));const t=new bt(Math.max(1,innerWidth*.5),Math.max(1,innerHeight*.5));this.bloom=new Fi(t,Ws()?.42:.5,.55,.86),this.composer.addPass(this.bloom),this.composer.addPass(new Dm),this.composer.setSize(innerWidth,innerHeight)}setupResize(){addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight),this.bloom.setSize(innerWidth*.5,innerHeight*.5)})}setupInput(){addEventListener("keydown",n=>{if(n.code==="Escape"){this.ui.modalKind&&this.ui.closeModal();return}this.mode!=="play"||this.paused||(["Space","KeyE","Digit1","Digit2","Digit3","KeyM"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),!n.repeat&&(n.code==="KeyE"&&this.doAction(),n.code==="Space"&&this.doAttack(),n.code==="Digit1"&&this.selectSeed("moon"),n.code==="Digit2"&&this.selectSeed("sun"),n.code==="Digit3"&&this.selectSeed("star"),n.code==="KeyM"&&this.ui.openMenu()))}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>this.keys.clear());const t=this.renderer.domElement;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{if(!(this.mode!=="play"||this.paused)&&!(n.pointerType==="mouse"&&n.button!==0)){this.drag={id:n.pointerId,x:n.clientX,y:n.clientY};try{t.setPointerCapture(n.pointerId)}catch{}}}),t.addEventListener("pointermove",n=>{if(!this.drag||n.pointerId!==this.drag.id)return;const i=n.clientX-this.drag.x,r=n.clientY-this.drag.y;this.drag.x=n.clientX,this.drag.y=n.clientY,this.cameraYaw-=i*.0055,this.cameraPitch=pe(this.cameraPitch+r*.0028,.46,1.02)});const e=n=>{this.drag&&n.pointerId===this.drag.id&&(this.drag=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("wheel",n=>{this.mode==="play"&&(n.preventDefault(),this.cameraDist=pe(this.cameraDist+Math.sign(n.deltaY)*1.2,10,26))},{passive:!1}),addEventListener("beforeunload",()=>{this.mode==="play"&&this.save()})}boot(){const t=!!this.readSave();this.ui.showTitle(t),this.mode="title",this.ui.setHudVisible(!1),this.state.hours=16.7,this.world.setWeather("clear"),this.decorateTitleFarm();const e=document.getElementById("perf-note");e.textContent="The vale awaits…",setTimeout(()=>e.classList.add("gone"),1600),this.exposeDebug()}startNew(){localStorage.removeItem(Zr),this.resetWorldState(),this.state=Jr(),this.soundOn=!0,this.audio.setMuted(!1),this.beginPlay(),this.ui.toast("Welcome to Emberfall Vale, farmer.","quest","✦"),setTimeout(()=>this.ui.showHint("Walk onto the farm and press Use to till the soil.",6500),900),setTimeout(()=>this.ui.toast("Zephyr the wizard trades to the east. The Moonwell glows to the west.","","🧭"),5200),this.save()}continueGame(){const t=this.readSave();if(!t){this.startNew();return}this.resetWorldState(),this.loadState(t),this.beginPlay(),this.ui.toast(`Welcome back. Day ${this.state.day} in the vale.`,"quest","✦")}decorateTitleFarm(){const t=[[2,2,"moon",2],[3,2,"moon",2],[4,2,"moon",1],[5,2,"sun",1],[2,3,"sun",3],[3,3,"moon",1],[4,3,"sun",2],[5,3,"moon",2],[2,4,"star",2],[3,4,"sun",1],[4,4,"moon",0],[5,4,"sun",0]];for(const[n,i,r,a]of t){const o=this.world.plots[i*ss.cols+n];o&&(o.tilled=!0,o.watered=Math.random()<.5,o.crop={type:r,grown:a,growDays:$e[r].grow,watered:o.watered},this.world.refreshPlot(o))}const e=this.world.plots[4*ss.cols+1];e&&(e.tilled=!0,this.world.refreshPlot(e))}beginPlay(){var n,i;this.mode="play",this.paused=!1,this.ui.hideTitle(),this.ui.setHudVisible(!0),this.ui.sleepFade(!1),this.audio.init(),this.audio.setMuted(!this.soundOn);const t=((n=this.state.playerPos)==null?void 0:n.x)??gt.spawn.x,e=((i=this.state.playerPos)==null?void 0:i.z)??gt.spawn.z;this.player.setPosition(t,this.world.height(t,e),e),this.player.facing=this.state.playerFacing??Math.PI,this.player.group.rotation.y=this.player.facing,this.cameraYaw=.12,this.cameraPitch=.5,this.cameraDist=14,this.updateCamera(0,!0),this.updateTarget(),this.ui.update(this.state)}resetWorldState(){for(const t of this.world.plots)t.tilled=!1,t.watered=!1,t.crop=null,t.visual&&(this.scene.remove(t.visual),t.visual=null),this.world.updateSoilVisual(t);for(const t of this.world.sprinklers)this.scene.remove(t.group);this.world.sprinklers.length=0,this.world.newDay(1),this.world.day=1,this.world.setWeather("clear"),this.slimes.resetDay(1),this.invuln=0,this.transitioning=!1,this.sleeping=!1}save(){if(this.mode!=="play")return;const e={...this.state,playerPos:{x:this.player.pos.x,z:this.player.pos.z},playerFacing:this.player.facing,plots:this.world.plots.map(n=>({tilled:n.tilled,watered:n.watered,crop:n.crop?{type:n.crop.type,grown:n.crop.grown}:null}))};try{localStorage.setItem(Zr,JSON.stringify(e))}catch{}}readSave(){try{const t=localStorage.getItem(Zr);if(!t)return null;const e=JSON.parse(t);return!e||e.version!==1?null:e}catch{return null}}loadState(t){var n;const e=Jr();this.state={...e,...t,seeds:{...e.seeds,...t.seeds||{}},crops:{...e.crops,...t.crops||{}},stats:{...e.stats,...t.stats||{}},flags:{...e.flags,...t.flags||{}},quests:{...t.quests||{}},blessing:t.blessing||0,sprinklerCount:t.sprinklerCount||0},this.soundOn=this.state.soundOn!==!1,this.world.setWeather(this.state.weather==="rain"?"rain":"clear"),this.world.day=this.state.day,this.world.newDay(this.state.day);for(let i=0;i<(((n=t.plots)==null?void 0:n.length)||0);i++){const r=t.plots[i],a=this.world.plots[i];!r||!a||(a.tilled=!!r.tilled,a.watered=!!r.watered,r.crop&&$e[r.crop.type]?a.crop={type:r.crop.type,grown:r.crop.grown||0,growDays:$e[r.crop.type].grow,watered:a.watered}:a.crop=null,this.world.refreshPlot(a))}for(let i=0;i<this.state.sprinklerCount;i++)this.world.addSprinkler(i)}loop(){requestAnimationFrame(this.loop);let t=this.clock.getDelta();t>.06&&(t=.06),this.update(t),this.composer.render()}update(t){this.frames++,this.fpsAccum+=t,this.fpsAccum>2&&(this.frames/this.fpsAccum<26&&!this.lowFps&&(this.lowFps=!0,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.1)),this.bloom.enabled=!1),this.fpsAccum=0,this.frames=0);const e=this.mode==="play"&&!this.paused&&!this.transitioning;this.mode==="play"&&e?(this.state.hours+=t*.042,this.state.hours>=24&&(this.state.hours=24,this.sleep(!0)),this.updateMovement(t),this.updateTarget(),this.updateActionsUI(),this.invuln=Math.max(0,this.invuln-t),this.shake>0&&(this.shake=Math.max(0,this.shake-t*2.2)),this.stepAccum-=t,this.player.moving&&this.stepAccum<=0&&(this.stepAccum=.36,this.audio.sfx("step"))):(this.player.moving=!1,this.player.update(t,!1,0,this.state.hours),this.player.faceTowards(this.player.pos.x+Math.sin(this.player.facing),this.player.pos.z+Math.cos(this.player.facing),1)),this.player.update(t,this.player.moving,4.4,this.state.hours),this.slimes.update(e?t:0,this.player.pos,this),this.particles.update(t),this.world.update(t,this.state.hours,this.state.weather,this.player.pos),this.updateCamera(t,!1),e&&(this.autosaveAccum=(this.autosaveAccum||0)+t,this.autosaveAccum>20&&(this.autosaveAccum=0,this.save())),this.uiAccum+=t,this.uiAccum>.12&&(this.uiAccum=0,this.mode==="play"&&this.ui.update(this.state)),this.ambientAccum+=t,this.ambientAccum>1&&(this.ambientAccum=0,this.mode==="play"&&this.audio.updateAmbient(this.state.hours,this.state.hours>19||this.state.hours<6)),e&&(!this.state.flags.tutTilled&&this.state.hours>7.4,this.state.hours>19.5&&!this.state.flags.nightHint&&(this.state.flags.nightHint=!0,this.ui.showHint("Dusk falls. Slimes grow bold — or sleep at the cottage.",5e3)),this.state.hours>23.2&&!this.state.flags.midnightHint&&(this.state.flags.midnightHint=!0,this.ui.showHint("Midnight approaches. Head home to sleep.",5e3)))}updateMovement(t){let e=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),Math.abs(this.joystick.y)>.16&&(e+=-this.joystick.y),Math.abs(this.joystick.x)>.16&&(n+=this.joystick.x);let i=Math.hypot(e,n);i>1&&(e/=i,n/=i,i=1);const r=i>.05;if(this.player.moving=r,!r)return;const a=this.cameraYaw,o=4.5,l=(-Math.sin(a)*e+Math.cos(a)*n)*o,c=(-Math.cos(a)*e-Math.sin(a)*n)*o;this.player.pos.x+=l*t,this.player.pos.z+=c*t,this.resolveCollisions(this.player.pos);const h=Math.hypot(this.player.pos.x,this.player.pos.z);h>54&&(this.player.pos.x*=54/h,this.player.pos.z*=54/h),this.player.pos.y=this.world.height(this.player.pos.x,this.player.pos.z),this.player.faceDirection(l,c,t)}resolveCollisions(t){for(const i of this.world.colliders){if(i.boundary||i.tree&&!i.tree.active||i.rock&&!i.rock.active||i.kind==="stone")continue;const r=t.x-i.x,a=t.z-i.z,o=Math.hypot(r,a),l=i.r+.38;o<l&&o>1e-4&&(t.x=i.x+r/o*l,t.z=i.z+a/o*l)}for(const i of this.world.boxes){const r=pe(t.x,i.minX,i.maxX),a=pe(t.z,i.minZ,i.maxZ),o=t.x-r,l=t.z-a,c=Math.hypot(o,l);if(c<.38)if(c>1e-4)t.x=r+o/c*.38,t.z=a+l/c*.38;else{const h=t.x-i.minX,u=i.maxX-t.x,d=t.z-i.minZ,p=i.maxZ-t.z,g=Math.min(h,u,d,p);g===h?t.x=i.minX-.38:g===u?t.x=i.maxX+.38:g===d?t.z=i.minZ-.38:t.z=i.maxZ+.38}}for(const i of this.world.segments){const r=rc(t.x,t.z,i.ax,i.az,i.bx,i.bz),a=.38+i.r;r.dist<a&&r.dist>1e-4&&(t.x+=r.nx/r.dist*(a-r.dist),t.z+=r.nz/r.dist*(a-r.dist))}const n=Math.hypot(t.x-gt.pond.x,t.z-gt.pond.z);if(n<5.6){const i=5.6/Math.max(n,.001);t.x=gt.pond.x+(t.x-gt.pond.x)*i,t.z=gt.pond.z+(t.z-gt.pond.z)*i}}updateTarget(){const t=this.world.plotAtWorld(this.player.pos.x,this.player.pos.z),e=this.player.forward(),n=this.world.plotAtWorld(this.player.pos.x+e.x*1.15,this.player.pos.z+e.z*1.15),i=t||n;let r=null;i?(r={kind:"plot",plot:i,dist:0,label:"",icon:"",enabled:!0,prompt:""},this.world.setTargetPlot(i)):this.world.setTargetPlot(null);const a=this.player.pos.x,o=this.player.pos.z,l=[],c=(g,_,m,f,x,v,S)=>{const C=Math.hypot(a-_,o-m);C<f&&l.push({kind:g,x:_,z:m,dist:C,label:x,icon:v,prompt:S,enabled:!0})};c("wizard",gt.wizard.x,gt.wizard.z,3,"Talk","💬","Talk to Zephyr"),c("tower",gt.towerDoor.x,gt.towerDoor.z,2.9,"Shop","🛒","Enter Zephyr's shop"),c("dryad",gt.dryad.x,gt.dryad.z,2.9,"Talk","💬","Talk to Nissa"),c("home",gt.homeDoor.x,gt.homeDoor.z,3,"Sleep","🌙","Sleep until dawn"),c("shrine",gt.shrine.x,gt.shrine.z,3.5,"Moonwell","✦","Touch the Moonwell");let h=null,u=2.8;for(const g of this.world.trees){if(!g.active)continue;const _=Math.hypot(a-g.x,o-g.z)-g.scale*.35;_<u&&(u=_,h=g)}h&&l.push({kind:"tree",dist:u,label:"Chop",icon:"🪓",prompt:"Chop the tree",tree:h,enabled:!0});let d=null,p=2.7;for(const g of this.world.rocks){if(!g.active)continue;const _=Math.hypot(a-g.x,o-g.z)-g.scale*.4;_<p&&(p=_,d=g)}d&&l.push({kind:"rock",dist:p,label:"Mine",icon:"⛏",prompt:"Mine the stone",rock:d,enabled:!0}),!i&&l.length&&(l.sort((g,_)=>g.dist-_.dist),r=l[0]),r&&r.kind==="plot"&&this.describePlot(r),this.target=r}describePlot(t){const e=t.plot;if(!e.tilled){t.icon="🪓",t.label="Till",t.prompt="Till the soil",t.enabled=!0;return}if(!e.crop){const i=this.state.selectedSeed,r=$e[i],a=this.state.seeds[i]||0;t.icon="🌱",t.label=a>0?"Plant":"No seed",t.prompt=a>0?`Plant ${r.name} (${a} left)`:`No ${r.name} seeds — visit Zephyr`,t.enabled=a>0;return}const n=$e[e.crop.type];e.crop.grown>=e.crop.growDays?(t.icon="🌾",t.label="Harvest",t.prompt=`Harvest ${n.name}`,t.enabled=!0):e.crop.watered?(t.icon="⌛",t.label="Growing",t.prompt=`${n.name} · ${e.crop.grown}/${e.crop.growDays} nights · watered`,t.enabled=!1):(t.icon="💧",t.label="Water",t.prompt=`Water ${n.name}`,t.enabled=!0)}updateActionsUI(){const t=this.target,e=t?t.prompt:"",n=t?`${t.label}|${t.icon}|${t.enabled}`:"";e!==this.lastPrompt&&(this.lastPrompt=e,this.ui.setPrompt(e,"E")),n!==this.lastActionKey&&(this.lastActionKey=n,t?this.ui.setAction(t.icon,t.label,t.enabled):this.ui.setAction("✋","Use",!1))}selectSeed(t){$e[t]&&(this.state.selectedSeed=t,this.ui.updateSeeds(this.state),this.ui.update(this.state),this.audio.sfx("click"),(this.state.seeds[t]||0)<=0&&this.ui.toast(`No ${$e[t].name} seeds. Zephyr sells them east of the farm.`,"","🌱"))}doAction(){if(this.mode!=="play"||this.paused||this.transitioning)return;this.updateTarget();const t=this.target;if(!t){this.ui.toast("Nothing to use here. Walk to soil, a tree, or a friendly face.","","✋"),this.audio.sfx("error");return}if(this.audio.init(),t.kind==="plot")return this.actionPlot(t.plot);if(t.kind==="tree")return this.actionChop(t.tree);if(t.kind==="rock")return this.actionMine(t.rock);if(t.kind==="wizard")return this.talkWizard();if(t.kind==="tower"){this.state.flags.tutShop=!0,this.ui.openShop();return}if(t.kind==="dryad")return this.talkDryad();if(t.kind==="home")return this.askSleep();if(t.kind==="shrine"){this.ui.openShrine(),this.audio.sfx("magic");return}}spendEnergy(t){return this.state.energy<t?(this.ui.toast("Too tired. Drink a potion or sleep until dawn.","","⚡"),this.audio.sfx("error"),!1):(this.state.energy=Math.max(0,this.state.energy-t),!0)}actionPlot(t){if(this.player.faceTowards(t.x,t.z,1),!t.tilled){if(!this.spendEnergy(3))return;t.tilled=!0,t.watered=!1,t.crop=null,this.world.refreshPlot(t),this.particles.emit(new R(t.x,.2,t.z),"#8a6a42",12,2.2,2.2),this.ui.float("+soil",new R(t.x,.8,t.z),""),this.audio.sfx("till"),this.state.flags.tutTilled||(this.state.flags.tutTilled=!0,setTimeout(()=>this.ui.showHint("Pick a seed from the hotbar, then press Use to plant it.",6e3),500)),this.save();return}if(!t.crop){const n=this.state.selectedSeed,i=$e[n];if((this.state.seeds[n]||0)<=0){this.ui.toast(`No ${i.name} seeds. Buy more from Zephyr.`,"","🌱"),this.audio.sfx("error");return}if(!this.spendEnergy(1))return;this.state.seeds[n]--;const r=this.state.weather==="rain";t.crop={type:n,grown:0,growDays:i.grow,watered:r},t.watered=r,this.world.refreshPlot(t),this.particles.emit(new R(t.x,.3,t.z),"#a8e08a",10,1.8,2.2),this.ui.float(`🌱 ${i.name}`,new R(t.x,1,t.z),"heal"),this.audio.sfx("plant"),this.state.stats.planted++,this.state.flags.tutPlanted||(this.state.flags.tutPlanted=!0,setTimeout(()=>this.ui.showHint("Now water it. Crops only grow overnight when watered.",6e3),500)),this.checkQuests(),this.save();return}const e=$e[t.crop.type];if(t.crop.grown>=t.crop.growDays){const n=t.crop.type;this.state.crops[n]=(this.state.crops[n]||0)+1,this.state.stats.harvested++,t.crop=null,t.watered=!1,this.world.refreshPlot(t),this.particles.emit(new R(t.x,.8,t.z),e.color,22,3,3.2),this.particles.emit(new R(t.x,.6,t.z),"#ffe9a0",10,2,2.6),this.ui.float(`+1 ${e.name}`,new R(t.x,1.4,t.z),"gold"),this.audio.sfx("harvest"),this.ui.toast(`${e.name} harvested! Sell it at Zephyr's tower for ${e.sell} ◈.`,"quest","🌾"),this.checkQuests(),this.save();return}if(!t.crop.watered){if(!this.spendEnergy(1))return;t.crop.watered=!0,t.watered=!0,this.world.refreshPlot(t),this.state.stats.wateredToday++,this.particles.emit(new R(t.x,.4,t.z),"#9fe6ff",14,1.8,2.4),this.ui.float("💧",new R(t.x,.9,t.z),"ess"),this.audio.sfx("water"),this.state.flags.tutWatered||(this.state.flags.tutWatered=!0,setTimeout(()=>this.ui.showHint("Sleep at the cottage door to end the day. Watered crops grow overnight.",6500),500)),this.checkQuests(),this.save();return}this.ui.toast(`${e.name} is watered and growing. It needs ${t.crop.growDays-t.crop.grown} more night(s).`,"","⌛")}actionChop(t){if(!this.spendEnergy(4))return;this.player.faceTowards(t.x,t.z,1);const e=this.world.chopTree(t);this.state.wood+=1,this.state.stats.wood=(this.state.stats.wood||0)+1,this.particles.emit(new R(t.x,1.2,t.z),"#a97d4f",14,2.6,2.6),this.particles.emit(new R(t.x,1.5,t.z),"#6b9e4b",8,2.2,2.2),this.ui.float("+1 🪵",new R(t.x,2,t.z),""),this.audio.sfx("chop"),this.shake=.05,e&&this.ui.toast("Timber! The stump will regrow in a couple of days.","","🪵"),this.save()}actionMine(t){if(!this.spendEnergy(4))return;this.player.faceTowards(t.x,t.z,1);const e=this.world.mineRock(t);this.state.stone+=1;const n=Math.random()<.28;n&&(this.state.essence+=1),this.particles.emit(new R(t.x,.8,t.z),"#a9adb5",16,2.8,2.8),this.particles.emit(new R(t.x,.6,t.z),n?"#9fe6ff":"#ffe4a0",8,2,2.4),this.ui.float(n?"+1 🪨 · +1 ✦":"+1 🪨",new R(t.x,1.5,t.z),n?"ess":""),this.audio.sfx("mine"),this.shake=.06,e&&this.ui.toast("The rock splits. More will surface in a few days.","","🪨"),this.save()}talkWizard(){this.audio.sfx("magic"),this.ui.openDialog({title:"Zephyr",subtitle:"Wandering wizard · Keeper of Arcana",portrait:"🧙",text:'"Ah, the new keeper of Emberfall! I felt your boots on the old soil from three hills away."<br><br>"The vale remembers you, even if you do not remember it. Buy seeds. Grow something impossible. And if you find <em>essence</em> in the Whisperwood, bring it to the Moonwell."',options:[{label:"Browse wares (shop)",action:()=>{this.ui.closeModal(),setTimeout(()=>this.ui.openShop(),140)}},{label:"Ask about the Ember Crown",action:()=>this.wizardLore()},{label:"Farewell",action:()=>this.ui.closeModal()}]})}wizardLore(){this.ui.openDialog({title:"Zephyr",subtitle:"The Ember Crown",portrait:"🧙",text:'"Long ago the vale was crowned with woven starlight — a circlet that kept the seasons kind and the Moonwell bright."<br><br>"It was lost when the last farmer vanished. Earn <em>900 gold</em> by selling what you grow, and I will sell you the crown I have kept safe. Then wake the Moonwell, and Emberfall will sing again."',options:[{label:"I will do it.",action:()=>this.ui.closeModal()}]})}talkDryad(){this.audio.sfx("magic");const t=this.state.flags.healDay!==this.state.day;this.ui.openDialog({title:"Nissa",subtitle:"Dryad of the Whisperwood",portrait:"🧚",text:'"Little sprout, the trees told me you would come."<br><br>"The Whisperwood is restless. Slimes drink the moonlight and forget their manners after dusk. Mind your blade, water your seeds, and leave a little wildness at the edges."',options:[{label:t?"Ask for a woodland blessing (restore energy)":"Already blessed today",disabled:!t,action:()=>{t&&(this.state.flags.healDay=this.state.day,this.state.energy=this.state.maxEnergy,this.state.health=this.state.maxHealth,this.audio.sfx("magic"),this.particles.emit(new R(this.player.pos.x,1,this.player.pos.z),"#a8f0b8",24,2.4,3),this.ui.float("+energy",new R(this.player.pos.x,2.2,this.player.pos.z),"heal"),this.ui.toast("Nissa hums, and the forest lends you strength.","quest","🌿"),this.save()),this.ui.closeModal()}},{label:"Where do slimes gather?",action:()=>this.ui.openDialog({title:"Nissa",portrait:"🧚",subtitle:"Woodland wisdom",text:'"West and north, where the pines crowd close. They are shy at noon and bold at night. Their fallen <em>essence</em> is precious — the Moonwell drinks it gladly."',options:[{label:"Thank you.",action:()=>this.ui.closeModal()}]})},{label:"Farewell",action:()=>this.ui.closeModal()}]})}askSleep(){this.transitioning||(this.state.hours<16.5?this.ui.openDialog({title:"Cottage Door",subtitle:"Emberfall farmstead",portrait:"🏡",text:"The cottage smells of woodsmoke and dried herbs. The sun is still high — sleeping now would waste the day.<br><br>Rest until tomorrow morning?",options:[{label:"Rest until dawn",action:()=>{this.ui.closeModal(),this.sleep(!1)}},{label:"Not yet",action:()=>this.ui.closeModal()}]}):this.sleep(!1))}sleep(t){this.sleeping||this.transitioning||(this.sleeping=!0,this.transitioning=!0,this.ui.sleepFade(!0),this.audio.sfx("sleep"),setTimeout(()=>{const e=this.advanceDay();t&&this.ui.toast("You drifted off under the stars. Someone carried you home.","","🌙"),this.ui.sleepFade(!1),setTimeout(()=>{this.transitioning=!1,this.sleeping=!1,this.ui.showSummary(e)},380)},850))}advanceDay(){const t=this.state;let e=0;for(const a of this.world.plots){if(!a.crop){a.watered=!1;continue}a.crop.watered&&a.crop.grown<a.crop.growDays&&(a.crop.grown++,e++),a.crop.watered=!1,a.watered=!1}t.day++,t.hours=6.15,t.season="Spring";let n=Math.random()<.34;if(t.flags.forceRain&&(n=!0,t.flags.forceRain=!1),t.weather=n?"rain":"clear",n)for(const a of this.world.plots)a.crop?(a.crop.watered=!0,a.watered=!0):a.tilled&&(a.watered=!0);for(const a of this.world.sprinklers)for(const o of this.world.plots)o.crop&&Math.hypot(o.x-a.x,o.z-a.z)<3.1&&(o.crop.watered=!0,o.watered=!0);t.energy=t.maxEnergy,t.health=t.maxHealth;const i=t.stats.dayEarned||0;t.stats.dayEarned=0,t.stats.wateredToday=0,this.world.setWeather(t.weather),this.world.newDay(t.day),this.world.day=t.day,this.slimes.resetDay(t.day);for(const a of this.world.plots)this.world.refreshPlot(a);this.invuln=0,this.shake=0;const r=n?["Rain taps the roof like tiny knuckles. The fields drink deep.","The vale smells of wet earth and green things. A good day to stay in.","Mist curls between the fence posts. The crops are already grateful."]:["Birds stitch the morning together. The vale is quiet and kind.","Sunlight spills over the fence like warm honey.","Somewhere in the Whisperwood, a slime yawns. The farm waits.","The Moonwell hums softly. Another day to grow something impossible."];return this.save(),{day:t.day,season:t.season,weather:t.weather,crops:e,earned:i,maxEnergy:t.maxEnergy,rain:n,sprinklers:this.world.sprinklers.length,flavor:r[Math.random()*r.length|0]}}doAttack(){if(this.mode!=="play"||this.paused||this.transitioning||(this.audio.init(),!this.player.startAttack()))return;this.audio.sfx("attack"),this.shake=.04;const t=this.player.forward(),e=[];for(const n of this.slimes.slimes){if(!n.alive)continue;const i=n.x-this.player.pos.x,r=n.z-this.player.pos.z,a=Math.hypot(i,r);a>3||i/Math.max(a,.001)*t.x+r/Math.max(a,.001)*t.z<-.15||e.push(n)}if(!e.length){setTimeout(()=>this.audio.sfx("attack"),50);return}for(const n of e){const i=n.x-this.player.pos.x,r=n.z-this.player.pos.z,a=Math.hypot(i,r)||1,o=this.slimes.hit(n,i/a,r/a);if(this.particles.emit(new R(n.x,.7,n.z),"#c7ffd7",12,2.6,3),this.audio.sfx("hit"),this.shake=.12,o){this.slimes.kill(n),this.state.stats.slimes++;const l=1+(Math.random()<.4?1:0);this.state.essence+=l,this.state.gold+=2,this.state.stats.dayEarned+=2,this.particles.emit(new R(n.x,.8,n.z),"#7fe4ff",24,3.2,3.2),this.particles.emit(new R(n.x,.8,n.z),"#b4ffcf",16,2.4,3),this.ui.float(`+${l} ✦ · +2 ◈`,new R(n.x,1.6,n.z),"ess"),this.audio.sfx("slime"),this.checkQuests(),this.save()}else this.ui.float("-1",new R(n.x,1.2,n.z),"dmg")}}damagePlayer(t,e,n){if(this.invuln>0||this.mode!=="play"||this.paused)return;this.state.health=Math.max(0,this.state.health-t),this.invuln=1.15,this.shake=.22,this.audio.sfx("hurt"),this.ui.float(`-${t} ❤`,new R(this.player.pos.x,2.1,this.player.pos.z),"dmg");const i=this.player.pos.x-e,r=this.player.pos.z-n,a=Math.hypot(i,r)||1;this.player.pos.x+=i/a*.7,this.player.pos.z+=r/a*.7,this.state.health<=0&&this.faint(),this.ui.update(this.state)}faint(){if(this.transitioning)return;this.transitioning=!0,this.ui.sleepFade(!0),this.audio.sfx("sleep");const t=Math.min(this.state.gold,15);setTimeout(()=>{this.state.gold-=t,this.state.health=this.state.maxHealth,this.state.energy=Math.max(35,Math.floor(this.state.maxEnergy*.5)),this.player.pos.set(gt.spawn.x,this.world.height(gt.spawn.x,gt.spawn.z),gt.spawn.z),this.player.facing=Math.PI,this.player.group.rotation.y=Math.PI,this.cameraYaw=.12,this.invuln=2.5,this.ui.sleepFade(!1),this.transitioning=!1,this.ui.toast(`You wake at the farmhouse gate. Lost ${t} ◈ in the confusion.`,"","🌙"),this.save()},900)}currentQuest(){for(const t of Kr)if(!this.state.quests[t.id])return{...t,progress:t.get(this.state)};return null}questList(){return Kr.map(t=>{const e=!!this.state.quests[t.id];return{...t,done:e,progress:e?t.target:t.get(this.state)}})}checkQuests(){for(const t of Kr)if(!this.state.quests[t.id]&&t.get(this.state)>=t.target){this.state.quests[t.id]=!0;const e=t.reward||{};if(e.gold&&(this.state.gold+=e.gold),e.essence&&(this.state.essence+=e.essence),e.seeds)for(const[n,i]of Object.entries(e.seeds))this.state.seeds[n]=(this.state.seeds[n]||0)+i;e.maxEnergy&&(this.state.maxEnergy+=e.maxEnergy,this.state.energy=this.state.maxEnergy),this.ui.toast(`Quest complete — ${t.name}`,"quest","✦"),this.audio.sfx("quest"),this.save()}}shopItems(){const t=this.state;return[{id:"moon",name:"Moonpetal Seed",icon:"🌙",price:20,desc:"Grows in 2 nights · sells for 58 ◈. A pale flower that opens at dusk."},{id:"sun",name:"Sunberry Seed",icon:"☀️",price:45,desc:"Grows in 3 nights · sells for 126 ◈. Warm as a pocket of summer."},{id:"star",name:"Starcorn Seed",icon:"⭐",price:90,desc:"Grows in 4 nights · sells for 275 ◈. Kernels that chime in the wind."},{id:"potion",name:"Mana Potion",icon:"🧪",price:35,desc:"Restore 60 energy. Tastes faintly of thunderstorms."},{id:"sprinkler",name:"Copper Sprinkler",icon:"💧",price:260,desc:"Placed on the farm. Waters a 3×3 patch every dawn.",available:t.sprinklerCount<5,limit:`${t.sprinklerCount}/5`},{id:"charm",name:"Starlight Charm",icon:"🔮",price:180,desc:"Permanently increases max energy by 15.",available:!t.flags.charm},{id:"crown",name:"The Ember Crown",icon:"👑",price:1200,desc:"Woven starlight. The final piece of the vale’s story.",available:t.stats.earned>=900&&!t.flags.won,locked:t.stats.earned<900}]}buy(t){const e=this.state;if(!t)return!1;if(t.available===!1)return this.ui.toast(t.id==="crown"?"Zephyr will part with the crown only after you have earned 900 gold from the vale.":"Zephyr has no more of those just now.","","🔒"),this.audio.sfx("error"),!1;if(e.gold<t.price)return this.ui.toast("Not enough gold. Harvest and sell your crops.","","◈"),this.audio.sfx("error"),!1;switch(e.gold-=t.price,t.id){case"moon":e.seeds.moon++;break;case"sun":e.seeds.sun++;break;case"star":e.seeds.star++;break;case"potion":e.energy=Math.min(e.maxEnergy,e.energy+60),this.ui.float("+60 ⚡",new R(this.player.pos.x,2.2,this.player.pos.z),"heal");break;case"sprinkler":{const n=this.world.addSprinkler(e.sprinklerCount);n&&(e.sprinklerCount++,this.particles.emit(new R(n.x,.8,n.z),"#8ff0ff",20,2.4,3));break}case"charm":e.flags.charm=!0,e.maxEnergy+=15,e.energy=e.maxEnergy;break;case"crown":return e.flags.won=!0,this.checkQuests(),this.save(),this.ui.toast("Zephyr places the Ember Crown in your hands. It is warm.","quest","👑"),setTimeout(()=>{this.ui.closeModal(),setTimeout(()=>this.ui.showWin(),250)},600),!0}return this.audio.sfx("coin"),this.state.stats.earned=this.state.stats.earned,this.ui.toast(`Bought ${t.name}.`,"",t.icon),this.checkQuests(),this.save(),!0}sellAll(t){const e=this.state;let n=0,i=0;if(t==="crops")for(const r of Object.keys($e)){const a=e.crops[r]||0;a>0&&(n+=a*$e[r].sell,i+=a,e.crops[r]=0)}else n+=e.wood*4+e.stone*6,i=e.wood+e.stone,e.wood=0,e.stone=0;if(n<=0){this.ui.toast("Nothing to sell yet. Harvest crops or gather materials.","","🪙"),this.audio.sfx("error");return}e.gold+=n,e.stats.earned+=n,e.stats.dayEarned+=n,this.audio.sfx("coin"),this.ui.toast(`Sold ${i} item${i===1?"":"s"} for ${n} ◈.`,"gold","◈"),this.checkQuests(),this.save()}shrineRite(t){const e=this.state;if(t==="awaken"){if(e.blessing>=2){this.ui.toast("The Moonwell is already awake.","","✦");return}if(e.essence<5){this.ui.toast("The stones need 5 essence.","","✦"),this.audio.sfx("error");return}e.essence-=5,e.blessing=2,e.maxEnergy+=25,e.energy=e.maxEnergy,e.health=e.maxHealth,this.world.addSprinkler(e.sprinklerCount)&&e.sprinklerCount++,this.particles.emit(new R(gt.shrine.x,2,gt.shrine.z),"#9fe6ff",40,4.5,4.5),this.audio.sfx("magic"),this.ui.toast("The Moonwell awakens. +25 max energy, and a sprinkler rises from the soil.","quest","🌙"),this.checkQuests(),this.save();return}if(e.essence<2){this.ui.toast("The stones need 2 essence.","","✦"),this.audio.sfx("error");return}if(e.essence-=2,t==="rain"){for(const n of this.world.plots)n.crop&&(n.crop.watered=!0,n.watered=!0,this.world.refreshPlot(n));this.rainToday=!0,this.state.flags.forceRain=!0,this.ui.toast("Rain gathers over the vale. Every crop is watered.","quest","🌧")}else t==="heal"&&(e.health=e.maxHealth,e.energy=e.maxEnergy,this.particles.emit(new R(this.player.pos.x,1,this.player.pos.z),"#a8f0b8",30,2.8,3.2),this.ui.toast("Silver light mends your weariness.","quest","💚"));this.audio.sfx("magic"),this.save()}setSound(t){this.soundOn=t,this.state.soundOn=t,this.audio.setMuted(!t),this.ui.toast(t?"Sound on.":"Sound muted.","",t?"🔔":"🔇"),this.save()}setPaused(t){this.paused=t}updateCamera(t,e){if(this.mode==="title"){this.titleTime+=t,this.titleYaw=-.5+Math.sin(this.titleTime*.07)*.16;const l=new R(0,2.4,0),c=new R(l.x+Math.sin(this.titleYaw)*30,13.2,l.z+Math.cos(this.titleYaw)*30);this.camera.position.copy(c),this.camera.lookAt(l);return}const n=new R(this.player.pos.x,this.player.pos.y+1.15,this.player.pos.z);e?this.camLook.copy(n):this.camLook.lerp(n,1-Math.exp(-9*t));const i=Math.cos(this.cameraPitch),r=new R(this.camLook.x+Math.sin(this.cameraYaw)*this.cameraDist*i,this.camLook.y+Math.sin(this.cameraPitch)*this.cameraDist+1.8,this.camLook.z+Math.cos(this.cameraYaw)*this.cameraDist*i),a=this.world.height(r.x,r.z)+1.4;r.y<a&&(r.y=a),e?this.camera.position.copy(r):this.camera.position.lerp(r,1-Math.exp(-7.5*t));const o=this.shake;o>.001&&(this.camera.position.x+=K(-1,1)*o*.55,this.camera.position.y+=K(-1,1)*o*.4,this.camera.position.z+=K(-1,1)*o*.55),this.camera.lookAt(this.camLook)}exposeDebug(){const t=this;window.__ember={game:t,state:()=>t.state,teleport:(e,n,i=Math.PI)=>{t.player.pos.x=e,t.player.pos.z=n,t.player.pos.y=t.world.height(e,n),t.player.facing=i,t.player.group.rotation.y=i,t.updateCamera(0,!0),t.updateTarget()},face:e=>{t.player.facing=e,t.player.group.rotation.y=e,t.updateTarget()},use:()=>t.doAction(),attack:()=>t.doAttack(),sleep:()=>t.sleep(!1),advance:()=>t.advanceDay(),shop:()=>t.ui.openShop(),setHours:e=>{t.state.hours=e},setSeed:e=>t.selectSeed(e),addGold:e=>{t.state.gold+=e,t.state.stats.earned+=e,t.ui.update(t.state)},addEssence:e=>{t.state.essence+=e,t.ui.update(t.state)},plots:()=>t.world.plots.map(e=>({i:e.i,j:e.j,x:e.x,z:e.z,tilled:e.tilled,watered:e.watered,crop:e.crop})),target:()=>t.target,quests:()=>t.questList(),slimes:()=>t.slimes.slimes,hours:()=>t.state.hours,save:()=>t.save(),camera:()=>t.camera.position.toArray(),setPitch:e=>{t.cameraPitch=e,t.updateCamera(0,!0)},setDist:e=>{t.cameraDist=e,t.updateCamera(0,!0)},screen:()=>({w:innerWidth,h:innerHeight})}}}const Ym=document.getElementById("scene"),Qi=document.getElementById("perf-note");try{const s=new qm(Ym);s.boot(),window.__game=s}catch(s){console.error(s),Qi.classList.remove("gone"),Qi.style.fontSize="13px",Qi.style.maxWidth="70vw",Qi.style.color="#ffb3a8",Qi.textContent="Emberfall Vale could not start in this browser. WebGL 2 is required. ("+(s&&s.message?s.message:s)+")"}
