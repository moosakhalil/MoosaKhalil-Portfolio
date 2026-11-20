/* eslint-disable */
// @ts-nocheck
// Behaviour for the portfolio page (animations, scroll effects, galleries, filters).
// The markup lives in src/content/portfolio.html. initPortfolio() wires it up after
// hydration and returns a cleanup function so React Strict Mode can mount it twice safely.
export function initPortfolio(): () => void {
  let alive = true;
  const rec: any[] = [];
  const ios: IntersectionObserver[] = [];
  const ints: number[] = [];
  const origAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (t: any, f: any, o: any) {
    rec.push([this || window, t, f, o]);
    return origAdd.call(this || window, t, f, o);
  };
  function raf(fn: (t: number) => void) {
    return requestAnimationFrame(function (t) { if (alive) fn(t); });
  }
  function mkIO(cb: any, o?: any) {
    const io = new IntersectionObserver(cb, o);
    ios.push(io);
    return io;
  }
  const _si = window.setInterval.bind(window);
  var setInterval = function (f: any, t: number) { const id = _si(f, t); ints.push(id); return id; };
  try {
document.documentElement.classList.add('js');
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var clamp=function(v,a,b){return Math.max(a,Math.min(b,v))}, lerp=function(a,b,t){return a+(b-a)*t};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var desktop=matchMedia('(min-width:901px)');

/* ---------- data ---------- */
var P=[
 {n:'Hisaab Kitab',label:'Personal project',state:'Live',
  tag:'A free personal-finance app for Pakistan, in English and Urdu.',
  desc:'Accounts, budgets, loans, savings and bills, plus a Zakat calculator and a Committee (BC) tracker. It installs as a PWA, works offline and runs right-to-left in Urdu.',
  role:'Sole designer and developer: product plan, UI, database, auth, background jobs and test suites.',
  m:[['50+','real users'],['400+','unit tests'],['100','Lighthouse accessibility']],
  stack:['Next.js','TypeScript','Tailwind CSS','PostgreSQL','Drizzle ORM','Better Auth'],
  note:'Private project. Source is not public.',links:[],
  shots:[['/images/home.png','p',26,19,56,-7,1,10,'Hisaab Kitab home screen showing available money and safe-to-spend figure'],['/images/budgets.png','p',26,39,48,-2,2,18,'Budgets screen with usage bars per category'],['/images/committee.png','p',26,60,48,3,3,26,'Office BC committee tracker with rounds'],['/images/insights.png','p',26,80,56,8,4,34,'Insights screen with spending comparisons']]},
 {n:'Rental Management System',label:'Client project',state:'In production',
  tag:'The system that runs a car rental agency.',
  desc:'A MERN platform for fleet, rental agreements, invoicing, owner and vendor payouts, expenses, salaries and profit and loss reporting.',
  role:'Sole developer: architecture, MongoDB schema, Express.js APIs, React.js UI and deployment.',
  m:[['8','step agreement wizard'],['RBAC','server-enforced roles'],['EN / UR','bilingual PDFs']],
  stack:['React.js','Node.js','Express.js','MongoDB','Tailwind CSS','JWT'],
  note:'Private client project. Source and live system are not public.',links:[],
  shots:[['/images/01-dashboard.png','b',80,42,42,-1.5,1,8,'Rental system dashboard with net revenue and fleet status'],['/images/05-new-rental-wizard.png','b',58,66,72,2.5,3,16,'Eight-step new rental wizard'],['/images/16-mobile-dashboard.png','p',19,89,40,5,2,26,'Rental system dashboard on a phone']]},
 {n:'Health Sync',label:'Final year project',state:'Award winner',
  tag:'Telehealth and remote patient monitoring.',
  desc:'Patients and clinicians on one platform, with real-time heart-rate tracking through the Fitbit wearable API.',
  role:'Full-stack developer: PostgreSQL schema with Prisma on Supabase, Fitbit integration and the Next.js interfaces.',
  m:[['Award','NUST COMPPEC ’26'],['3rd','Bahria FYP Open House'],['Live','Fitbit heart rate']],
  stack:['Next.js','Supabase','Prisma ORM','PostgreSQL','Fitbit API'],
  links:[['Live site','https://www.health-sync.live/']],
  shots:[['/images/health-sync-home.jpg','b',86,45,44,-1,1,8,'Health Sync landing page'],['/images/image.jpg','ph',24,86,70,6,2,22,'COMPPEC 26 Appreciation Award trophy'],['/images/logo.jpg','c',17,11,80,-6,3,26,'Health Sync logo']]},
 {n:'Mustaqbil Prep',label:'Personal project',state:'Shipped',
  tag:'Practice app for degree courses and military initial tests.',
  desc:'A free, installable app for software-engineering students and for ICTO, LCC, Navy IT and PAF IT candidates. AI explains answers and builds study plans, and never decides an answer.',
  role:'Product owner and developer: product and test flow, question banks, screens and the full build.',
  m:[['6,600+','questions'],['25','degree-course banks'],['10','AI requests per user a day']],
  stack:['Next.js','TypeScript','Tailwind CSS','PostgreSQL','Drizzle ORM','Better Auth'],
  note:'',links:[],
  shots:[['/images/1-hero-signin-install-dark.png','c',68,38,34,-4,1,8,'Mustaqbil Prep sign-in in light and dark on phones'],['/images/3-install-on-iphone.png','c',68,58,54,2,2,16,'Install on your phone guide'],['/images/4-works-offline.png','c',68,44,76,-2,3,24,'Offline screen explaining saved quizzes still work'],['/images/2-signin.png','c',42,80,14,5,4,30,'Mustaqbil Prep sign in with Google screen']]},
 {n:'IndoorAce',label:'Team project',state:'Live',
  tag:'Slot booking for indoor sports venues.',
  desc:'Real-time booking that handles concurrent users without double-booking, with separate secure dashboards for players and venue owners.',
  role:'Architected the booking system and integrated the auth and data layers.',
  m:[['0','double-booking conflicts'],['2','role-based dashboards'],['Live','slot availability']],
  stack:['Next.js','Node.js','Prisma ORM','Supabase','Firebase','Tailwind CSS'],
  links:[['Live site','https://indoor-ace-nine.vercel.app'],['GitHub','https://github.com/zohaibShafqat2003/IndoorAce',1]],
  shots:[['/images/indoorace-1.jpg','b',80,42,38,-1.5,1,8,'IndoorAce landing page'],['/images/indoorace-3.jpg','c',50,72,72,3,3,22,'IndoorAce sign-in screen'],['/images/indoorace-2.jpg','b',54,27,76,-3,2,16,'IndoorAce how it works section']]},
 {n:'Footy Insights',label:'Personal project',state:'Live',
  tag:'Real-time football statistics.',
  desc:'Live scores and standings from a third-party REST API, with client-side caching for faster responses and fewer API calls.',
  role:'Solo developer: UI, API integration and caching.',
  m:[['Live','scores and standings'],['Cached','on the client'],['Solo','UI to API']],
  stack:['React.js','REST APIs','JavaScript'],
  links:[['Live site','https://footy-insights-football.vercel.app/'],['GitHub','https://github.com/moosakhalil/Footy-Insights-Football',1]],
  shots:[['/images/footy-insights-2.jpg','b',74,40,36,-2,1,8,'Footy Insights home with live football scores headline'],['/images/footy-insights-1.jpg','b',70,56,66,2,2,16,'Premier League standings table'],['/images/footy-insights-3.jpg','c',24,89,52,5,3,24,'Match lineups for Burnley and Aston Villa']]}
];
var N=P.length;
var LOGO={'React.js':'react','Next.js':'next','TypeScript':'typescript','JavaScript':'javascript','JavaScript (ES6+)':'javascript','Tailwind CSS':'tailwind-css','Node.js':'node','Express.js':'express','REST APIs':'rest-apis','REST API design':'rest-apis','MongoDB':'mongo','PostgreSQL':'postgresql','Prisma ORM':'prisma-orm','Prisma':'prisma-orm','Supabase':'supabase','Firebase':'firebase','Git':'git','GitHub':'github','Webpack':'webpack'};
function ic(n){return LOGO[n]?'<img class="lg" src="/images/logos/'+LOGO[n]+'.png" alt="" width="20" height="20">':''}
function ini(n){var w=n.replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/);return (w.length>1?w[0][0]+w[1][0]:n.slice(0,2)).toUpperCase()}

/* ---------- hero: bolts + name ---------- */
(function(){
  var b=$('#bolts'),h='';
  for(var i=0;i<12;i++)h+='<i class="bolt" style="--a:'+(i*30)+'deg"></i>';
  b.innerHTML=h;
  $$('.ln').forEach(function(ln,li){
    var t=ln.getAttribute('data-t'),h2='',idx=li*5;
    for(var i=0;i<t.length;i++)h2+='<span class="ch" style="--i:'+(idx+i)+'">'+t[i]+'</span>';
    if(ln.getAttribute('data-dot'))h2+='<span class="stop"></span>';
    ln.innerHTML=h2;
  });
})();
var letters=$$('.ch'), lines=$$('.ln'), nameEl=$('#name');
function fit(){
  var hi=$('.hero-in'),cs=getComputedStyle(hi),hl=$('.h-left');
  var avail=hl.clientWidth||(hi.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight));
  letters.forEach(function(l){l.style.fontVariationSettings="'wght' 900,'wdth' 106"});
  nameEl.style.setProperty('--nm','100px');
  var mw=0;lines.forEach(function(l){mw=Math.max(mw,l.offsetWidth)});
  var fs=clamp(100*avail/mw*(innerWidth>=900?1.1:0.985),44,310);
  nameEl.style.setProperty('--nm',fs+'px');
  if(reduce)letters.forEach(function(l){l.style.fontVariationSettings="'wght' 800,'wdth' 96"});
}
var ptr={x:-9999,y:-9999,on:false};
addEventListener('pointermove',function(e){ptr.x=e.clientX;ptr.y=e.clientY;ptr.on=true;},{passive:true});
var t0=performance.now(), heroVisible=true;
function nameLoop(now){
  raf(nameLoop);
  if(!heroVisible||reduce)return;
  var t=(now-t0)/1000, ramp=clamp(t/2.2,0,1); ramp=1-Math.pow(1-ramp,3);
  var fs=parseFloat(getComputedStyle(nameEl).fontSize)||120;
  for(var i=0;i<letters.length;i++){
    var l=letters[i],r=l.getBoundingClientRect();
    var cx=r.left+r.width/2, cy=r.top+r.height/2;
    var d=Math.hypot(ptr.x-cx,ptr.y-cy), inf=ptr.on?Math.exp(-Math.pow(d/(fs*1.05),2)):0;
    var wave=.5+.5*Math.sin(t*1.15-i*.62);
    var wg=lerp(120,380+300*wave,ramp); wg=lerp(wg,900,inf);
    var wd=lerp(70,84+16*wave,ramp); wd=lerp(wd,108,inf);
    l.style.fontVariationSettings="'wght' "+wg.toFixed(0)+",'wdth' "+wd.toFixed(0);
  }
}

/* ---------- hero ripples ---------- */
(function(){
  var cv=$('#ripples'),ctx=cv.getContext('2d'),hero=$('#top'),W=0,H=0,dpr=1,dots=[],rip=[],GAP=28,lastX=-999,lastY=-999,dirty=true;
  function size(){var r=hero.getBoundingClientRect();dpr=Math.min(2,devicePixelRatio||1);W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);dots=[];for(var y=GAP/2;y<H;y+=GAP)for(var x=GAP/2;x<W;x+=GAP)dots.push(x,y);dirty=true;}
  function add(x,y,a){rip.push({x:x,y:y,t:performance.now(),a:a});if(rip.length>14)rip.shift();}
  hero.addEventListener('pointermove',function(e){if(reduce)return;var r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;if(Math.hypot(x-lastX,y-lastY)>44){lastX=x;lastY=y;add(x,y,.55);}},{passive:true});
  hero.addEventListener('pointerdown',function(e){var r=hero.getBoundingClientRect();add(e.clientX-r.left,e.clientY-r.top,1.3);});
  function draw(now){
    raf(draw);
    if(!heroVisible)return;
    rip=rip.filter(function(r){return (now-r.t)<4200});
    if(!rip.length&&!dirty)return;
    dirty=false;ctx.clearRect(0,0,W,H);
    for(var i=0;i<dots.length;i+=2){
      var x=dots[i],y=dots[i+1],ox=0,oy=0,amp=0;
      for(var k=0;k<rip.length;k++){
        var r=rip[k],age=(now-r.t)/1000,dx=x-r.x,dy=y-r.y,d=Math.sqrt(dx*dx+dy*dy)||1,dl=d-age*360;
        if(dl>150||dl<-150)continue;
        var e=Math.exp(-dl*dl/(2*44*44))*Math.exp(-age*1.05)*r.a;
        amp+=e;ox+=dx/d*e*10;oy+=dy/d*e*10;
      }
      ctx.beginPath();ctx.arc(x+ox,y+oy,1.25+amp*2.8,0,6.2832);
      ctx.fillStyle=amp>.14?'rgba(255,90,44,'+Math.min(.9,.1+amp*.8)+')':'rgba(6,24,42,.2)';
      ctx.fill();
    }
  }
  size();addEventListener('resize',size);
  setTimeout(function(){var r=$('#porthole').getBoundingClientRect(),h=hero.getBoundingClientRect();add(r.left-h.left+r.width/2,r.top-h.top+r.height/2,1.1);},900);
  setInterval(function(){if(heroVisible&&!reduce)add(Math.random()*W,Math.random()*H*.8,.7);},4200);
  raf(draw);
  if('IntersectionObserver' in window)mkIO(function(es){heroVisible=es[0].isIntersecting;if(heroVisible)dirty=true;}).observe(hero);
})();

/* ---------- porthole tilt ---------- */
(function(){
  var ph=$('#porthole'),inn=$('#phIn');
  addEventListener('pointermove',function(e){
    if(reduce)return;var r=ph.getBoundingClientRect();
    var x=(e.clientX-(r.left+r.width/2))/innerWidth,y=(e.clientY-(r.top+r.height/2))/innerHeight;
    inn.style.transform='rotateY('+(x*26).toFixed(2)+'deg) rotateX('+(-y*26).toFixed(2)+'deg)';
  },{passive:true});
})();

/* ---------- counters ---------- */
$$('.reads dd').forEach(function(el){
  if(reduce)return;
  var n=+el.getAttribute('data-n'),suf=el.getAttribute('data-s')||'',t=performance.now()+700;
  (function step(now){
    var p=clamp((now-t)/1300,0,1);p=1-Math.pow(1-p,3);
    el.textContent=Math.round(n*p)+(p>0.999?suf:'');
    if(p<1)raf(step);
  })(performance.now());
});

/* ---------- manifesto words ---------- */
var words=[];
(function(){
  var m=$('#manifesto'),txt=m.textContent.trim().split(/\s+/),h='';
  txt.forEach(function(w,i){var hl=/^(request\.?|ships?\.?)$/i.test(w)?' hl':'';h+='<span class="w'+hl+'">'+w+'</span> ';});
  m.innerHTML=h;words=$$('.w',m);
})();

/* ---------- projects ---------- */
(function(){
  var g=$('#stageGrid'),rail=$('#rail'),h='',rh='';
  P.forEach(function(p,i){
    var num=String(i+1).padStart(2,'0');
    var shots=p.shots.map(function(s,k){
      return '<div class="shot" style="--x:'+s[3]+'%;--y:'+s[4]+'%;--w:'+s[2]+'%;--r:'+s[5]+'deg;--z:'+s[6]+';--d:'+s[7]+'"><div class="fr '+s[1]+'" style="--i:'+k+'"><img src="'+s[0]+'" alt="'+s[8]+'" decoding="sync"></div></div>';
    }).join('');
    var links=(p.links||[]).map(function(l){return '<a class="lk'+(l[2]?' g':'')+'" href="'+l[1]+'" target="_blank" rel="noopener">'+(l[2]?'<svg class="ic f"><use href="#i-gh"/></svg>':'')+l[0]+(l[2]?'':' ↗')+'</a>'}).join('');
    if(p.note)links+='<span class="p-note">'+p.note+'</span>';
    h+='<article class="proj'+(i===0?' on':'')+'" data-i="'+i+'">'+
      '<div class="p-text"><div class="p-meta"><span class="p-idx">'+num+' / 0'+N+'</span><span class="chip st">'+p.state+'</span><span>'+p.label+'</span></div>'+
      '<h3 class="p-name">'+p.n+'</h3><p class="p-tag">'+p.tag+'</p><p class="p-desc">'+p.desc+'</p>'+
      '<dl class="p-m">'+p.m.map(function(m){return '<div><dd>'+m[0]+'</dd><dt>'+m[1]+'</dt></div>'}).join('')+'</dl>'+
      '<p class="p-role"><b>Role.</b> '+p.role+'</p>'+
      '<ul class="chips">'+p.stack.map(function(s){return '<li class="chip">'+ic(s)+s+'</li>'}).join('')+'</ul>'+
      (links?'<div class="p-links">'+links+'</div>':'')+'</div>'+
      '<div class="p-media" data-i="'+i+'"><span class="ghost" aria-hidden="true">'+num+'</span>'+shots+'</div></article>';
    rh+='<button class="rb'+(i===0?' on':'')+'" type="button" data-i="'+i+'" aria-label="Show '+p.n+'"><i></i><span>'+num+' '+p.n+'</span></button>';
  });
  g.innerHTML=h;rail.innerHTML=rh;
  $$('.p-media').forEach(function(m){
    m.addEventListener('pointermove',function(e){
      if(reduce)return;var r=m.getBoundingClientRect();
      m.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*-1);
      m.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*-1);
    });
    m.addEventListener('pointerleave',function(){m.style.setProperty('--mx',0);m.style.setProperty('--my',0)});
  });
  rail.addEventListener('click',function(e){
    var b=e.target.closest('.rb');if(!b)return;
    var sc=$('#stageScroll'),top=sc.getBoundingClientRect().top+scrollY,step=innerHeight*.8;
    scrollTo({top:top+(+b.getAttribute('data-i'))*step+2,behavior:reduce?'auto':'smooth'});
  });
})();
var projs=$$('.proj'), rbs=$$('.rb'), curIdx=0;

/* ---------- stack tables ---------- */
var G=[
 ['languages',['TypeScript','JavaScript (ES6+)','SQL','HTML5','CSS3']],
 ['frontend',['React.js','Next.js','Tailwind CSS','SSR','PWA / service workers','Offline-first sync','i18n (English, Urdu, RTL)']],
 ['backend',['Node.js','Express.js','REST API design','JWT','Better Auth','Firebase Auth']],
 ['data',['PostgreSQL','MongoDB','Prisma','Drizzle ORM','Supabase','Firebase','Schema design']],
 ['security',['RBAC','AES-256-GCM','Rate limiting','Audit logging']],
 ['tooling',['Vitest','Playwright','Lighthouse','Git','GitHub','Vercel','Render','Webpack','Agile / Scrum']]
];
(function(){
  var h='';
  G.forEach(function(g){
    h+='<div class="tbl rv"><div class="tbl-h"><b>'+g[0]+'</b><span>'+g[1].length+' rows</span></div><ul>'+g[1].map(function(s,i){return '<li><i>'+String(i+1).padStart(2,'0')+'</i>'+(ic(s)||'<span class="lg ini">'+ini(s)+'</span>')+'<span>'+s+'</span></li>'}).join('')+'</ul></div>';
  });
  $('#tables').innerHTML=h;
  var q=$('#q'),qc=$('#qc'),rows=$$('#tables li'),tbls=$$('.tbl');
  q.addEventListener('input',function(){
    var v=q.value.trim().toLowerCase(),c=0;
    rows.forEach(function(li){
      var hit=v&&li.textContent.toLowerCase().indexOf(v)>-1;
      li.classList.toggle('m',!!hit);li.classList.toggle('d',!!v&&!hit);if(hit)c++;
    });
    tbls.forEach(function(t){var any=$$('li.m',t).length;t.classList.toggle('hit',!!any);t.classList.toggle('off',!!v&&!any);});
    qc.textContent=v?(c+(c===1?' row':' rows')+' matched'):'Type a skill to light up matching rows.';
  });
})();

/* ---------- contact ---------- */
$('#copy').addEventListener('click',function(){
  var b=this,txt=$('#addr').textContent;
  var lab=b.querySelector('span');function ok(){lab.textContent='Copied';setTimeout(function(){lab.textContent='Copy'},1600)}
  function fb(){var r=document.createRange();r.selectNodeContents($('#addr'));var s=getSelection();s.removeAllRanges();s.addRange(r);lab.textContent='Selected';setTimeout(function(){lab.textContent='Copy'},1600)}
  try{navigator.clipboard.writeText(txt).then(ok,fb)}catch(e){fb()}
});
$('#up').addEventListener('click',function(){scrollTo({top:0,behavior:reduce?'auto':'smooth'})});

/* ---------- snow ---------- */
var snow=(function(){
  var cv=$('#snow'),ctx=cv.getContext('2d'),W,H,dpr,ps=[],f=0;
  function size(){dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
  size();addEventListener('resize',size);
  var n=innerWidth<700?36:78;
  for(var i=0;i<n;i++)ps.push({x:Math.random(),y:Math.random(),r:.6+Math.random()*1.9,v:.04+Math.random()*.16,ph:Math.random()*6.28,z:.3+Math.random()*.9});
  function draw(){
    raf(draw);ctx.clearRect(0,0,W,H);
    var rr=Math.round(lerp(6,170,f)),gg=Math.round(lerp(24,230,f)),bb=Math.round(lerp(42,255,f)),al=lerp(.16,.42,f);
    ctx.fillStyle='rgba('+rr+','+gg+','+bb+','+al+')';
    for(var i=0;i<ps.length;i++){
      var p=ps[i];
      if(!reduce){p.y-=p.v/ H*60;p.ph+=.01;if(p.y<-.02)p.y=1.02;}
      var x=p.x*W+Math.sin(p.ph)*14,y=((p.y*H-scrollY*.12*p.z)%H+H)%H;
      ctx.beginPath();ctx.arc(x,y,p.r,0,6.2832);ctx.fill();
    }
  }
  raf(draw);
  return {set:function(v){f=v}};
})();

/* ---------- gauge ---------- */
var secs=$$('.layer'), layers=[], gT=$('#gTicks');
function buildTicks(){
  layers=[];var seen={};
  secs.forEach(function(s){var n=s.getAttribute('data-layer');if(!seen[n]){seen[n]=1;layers.push({n:n,el:s});}});
  gT.innerHTML=layers.map(function(l){return '<i class="g-tick" data-n="'+l.n+'"></i>'}).join('');
  placeTicks();
}
function docH(){return document.documentElement.scrollHeight-innerHeight}
function placeTicks(){
  var dh=docH();
  $$('.g-tick').forEach(function(t,i){var top=layers[i].el.getBoundingClientRect().top+scrollY;t.style.top=(clamp(top/dh,0,1)*100)+'%';});
}

/* ---------- scroll ---------- */
var bar=$('#bar'),gFill=$('#gFill'),gMark=$('#gMark'),gDepth=$('#gDepth'),gLab=$('#gLab'),torch=$('#torch'),work=$('#work'),navLinks=$$('.nav a.l'),ticking=false;
function update(){
  ticking=false;
  var dh=docH(),p=clamp(scrollY/dh,0,1);
  bar.style.transform='scaleX('+p+')';
  gFill.style.transform='scaleY('+p+')';gMark.style.top=(p*100)+'%';
  gDepth.textContent=String(Math.round(p*1200)).padStart(4,'0')+' m';
  /* current layer */
  var cur=secs[0];
  secs.forEach(function(s){if(s.getBoundingClientRect().top<=innerHeight*.45)cur=s;});
  gLab.textContent=cur.getAttribute('data-layer');
  navLinks.forEach(function(a){a.classList.toggle('on',a.getAttribute('data-s')===cur.id||(a.getAttribute('data-s')==='experience'&&cur.id==='stack'))});
  /* depth tint for snow + torch */
  var wt=work.getBoundingClientRect().top,f=clamp(1-wt/innerHeight,0,1);
  snow.set(f);torch.style.opacity=reduce?0:f;
  /* manifesto */
  var m=$('#manifesto'),mr=m.getBoundingClientRect(),mp=clamp((innerHeight*.88-mr.top)/(mr.height+innerHeight*.3),0,1)*(words.length+6);
  if(!reduce)for(var i=0;i<words.length;i++)words[i].style.opacity=(.2+.8*clamp(mp-i,0,1)).toFixed(2);
  else words.forEach(function(w){w.style.opacity=1});
  /* stage */
  if(desktop.matches){
    var sc=$('#stageScroll'),r=sc.getBoundingClientRect(),idx=clamp(Math.round(-r.top/(innerHeight*.8)),0,N-1);
    if(idx!==curIdx||!projs[idx].classList.contains('on')){
      curIdx=idx;
      projs.forEach(function(el,i){el.classList.toggle('on',i===idx);el.classList.toggle('past',i<idx);});
      rbs.forEach(function(b,i){b.classList.toggle('on',i<=idx)});
    }
  }
}
function req(){if(!ticking){ticking=true;raf(update)}}
addEventListener('scroll',req,{passive:true});
addEventListener('resize',function(){fit();placeTicks();req()});
addEventListener('pointermove',function(e){torch.style.setProperty('--tx',e.clientX+'px');torch.style.setProperty('--ty',e.clientY+'px')},{passive:true});
desktop.addEventListener&&desktop.addEventListener('change',function(){projs.forEach(function(el){el.classList.remove('past');el.classList.toggle('on',+el.getAttribute('data-i')===0)});curIdx=0;req()});

/* ---------- reveal ---------- */
(function(){
  var els=$$('.rv');
  if(!('IntersectionObserver' in window)||reduce)return;
  els.forEach(function(el){if(el.getBoundingClientRect().top>innerHeight*.96)el.classList.add('pre')});
  var io=mkIO(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el){io.observe(el)});
})();

/* ---------- static chip icons, marquee ---------- */
$$('.log .chips .chip').forEach(function(c){var n=c.textContent.trim();if(!c.querySelector('img'))c.insertAdjacentHTML('afterbegin',ic(n))});
(function(){
  var list=['TypeScript','JavaScript','React.js','Next.js','Tailwind CSS','Node.js','Express.js','REST APIs','MongoDB','PostgreSQL','Prisma ORM','Supabase','Firebase','Git','GitHub','Webpack'];
  var one=list.map(function(n){return '<span class="mq">'+ic(n)+n+'</span>'}).join('');
  $('#marq').innerHTML=one+one;
})();

/* ---------- lightbox with gallery navigation ---------- */
(function(){
  var lb=$('#lbx'),img=$('#lbxImg'),cap=$('#lbxCap'),pv=$('#lbxP'),nx=$('#lbxN'),group=[],gi=0,last=null;
  function show(i){gi=(i+group.length)%group.length;var g=group[gi];img.src=g.getAttribute('data-src');var c=g.getAttribute('data-cap')||'';img.alt=c;cap.textContent=c+(group.length>1?'   '+(gi+1)+' / '+group.length:'');}
  function open(list,i,from){group=list;last=from;pv.hidden=nx.hidden=list.length<2;show(i);lb.hidden=false;$('#lbxX').focus();document.body.style.overflow='hidden'}
  function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
  $$('[data-grp]').forEach(function(b){b.addEventListener('click',function(){var list=$$('[data-grp="'+b.getAttribute('data-grp')+'"]');open(list,list.indexOf(b),b)})});
  pv.addEventListener('click',function(e){e.stopPropagation();show(gi-1)});
  nx.addEventListener('click',function(e){e.stopPropagation();show(gi+1)});
  $('#lbxX').addEventListener('click',close);
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft'&&group.length>1)show(gi-1);else if(e.key==='ArrowRight'&&group.length>1)show(gi+1)});
})();

/* ---------- init ---------- */
fit();buildTicks();update();raf(nameLoop);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){fit();placeTicks();update()});
addEventListener('load',function(){fit();placeTicks();update()});
  } finally {
    EventTarget.prototype.addEventListener = origAdd;
  }
  return function cleanup() {
    alive = false;
    rec.forEach(function (r) { r[0].removeEventListener(r[1], r[2], r[3]); });
    ios.forEach(function (io) { io.disconnect(); });
    ints.forEach(function (id) { window.clearInterval(id); });
  };
}
