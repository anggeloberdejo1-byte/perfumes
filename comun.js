// Aroma Capital — piezas compartidas: encabezado, pie, carrito, búsqueda y tarjetas.
const WA='18292324326';

// Sección de cada marca. Lo que no está aquí es "Diseñador".
const ARABES=['Lattafa','Armaf','Afnan','Orientica','Al Haramain','Rasasi','Ajmal','French Avenue','Dumont','Jo Milano Paris','Ahli','Ilmin','Beckkan'];
const NICHO=['Creed','Bond No. 9','Xerjoff','Montale','Parfums de Marly','Kilian','Roja Parfums','Initio','Le Labo','Mancera','Ex Nihilo','Byredo','Maison Francis Kurkdjian','Amouage','Giardini di Toscana','Sospiro','Lorenzo Pazzaglia','Bharara','Kayali','Louis Vuitton','Tom Ford'];
const SECCIONES=[
  {id:'disenador',nombre:'Diseñador',desc:'Las casas de moda de siempre: Chanel, Dior, Carolina Herrera, Versace…'},
  {id:'arabes',nombre:'Árabes',desc:'Intensos y duraderos: Lattafa, Armaf, Afnan, Al Haramain…'},
  {id:'nicho',nombre:'Nicho',desc:'Perfumería de autor: Creed, Parfums de Marly, Xerjoff, Kilian…'},
];
const seccionDe=marca=>ARABES.includes(marca)?'arabes':NICHO.includes(marca)?'nicho':'disenador';


const BY={};PERFUMES.forEach(p=>{p[6]=seccionDe(p[2]);BY[p[0]]=p});
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const img=c=>BY[c]&&BY[c][5]?`<img src="img/${c}.webp" alt="${esc(BY[c][1])}, ${esc(BY[c][2])}" loading="lazy">`:'';
const waLink=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const cat=(q={})=>'catalogo.html'+(Object.keys(q).length?'?'+new URLSearchParams(q):'');

const CARRO='<g transform="translate(350,0) scale(-1,1)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M292 5L247 7L196 138" stroke-width="11"/><path d="M58 46H233M60 46L72 130L196 138" stroke-width="11"/><path d="M88 46V132M113 46V133M138 46V135M163 46V136M188 46V137M64 74H222M68 102H211" stroke-width="7"/><path d="M196 138C204 158 224 162 228 182H66" stroke-width="10"/><circle cx="86" cy="198" r="9" stroke-width="6"/><circle cx="212" cy="198" r="9" stroke-width="6"/></g>';
const WAICON='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>';
const DIBUJO=`<svg class="dibujo" viewBox="0 0 620 360" role="img" aria-label="Dibujo de frascos de perfume">
<g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 341H606"/>
  <path d="M40 340V252a25 25 0 0 1 50 0v88z"/><path d="M40 264h50"/><path d="M49 280v14M49 302v26" stroke-width="1.6"/>
  <circle cx="120" cy="192" r="31"/><path d="M150 198c10-12 22-12 31-4"/>
  <path d="M127 340c-15-40 5-95 63-95s78 55 63 95z"/><path d="M136 340c-6-12-7-26-3-38" stroke-width="1.6"/>
  <rect x="174" y="217" width="32" height="28" rx="3"/><rect x="169" y="206" width="42" height="12" rx="3"/><path d="M182 206v-26l8-15 8 15v26"/>
  <rect x="290" y="150" width="80" height="190" rx="8"/><rect x="302" y="80" width="56" height="70" rx="6"/><path d="M312 92v46" stroke-width="1.6"/>
  <circle cx="360" cy="100" r="5"/><path d="M299 166v12M299 188v140" stroke-width="1.6"/>
  <circle cx="330" cy="224" r="14"/><circle cx="330" cy="256" r="14"/><circle cx="314" cy="240" r="14"/><circle cx="346" cy="240" r="14"/>
  <rect x="391" y="176" width="112" height="164" rx="18"/><rect x="426" y="152" width="42" height="24" rx="4"/><rect x="419" y="128" width="56" height="25" rx="5"/>
  <path d="M403 196c0-6 3-9 9-10" stroke-width="1.6"/><path d="M400 214v10M400 234v92" stroke-width="1.6"/>
  <circle cx="430" cy="222" r="13"/><circle cx="474" cy="258" r="22"/><circle cx="433" cy="272" r="9"/><circle cx="460" cy="303" r="17"/>
  <path d="M424 216a6 6 0 0 1 6-5M466 246a10 10 0 0 1 10-6M454 295a7 7 0 0 1 7-5" stroke-width="1.6"/>
  <path d="M526 340l-5-68q0-16 15-16h38q15 0 15 16l-5 68z"/><rect x="545" y="240" width="20" height="16" rx="2"/>
  <path d="M555 240l-20-26 20-30 20 30z"/><rect x="536" y="286" width="38" height="26" rx="2" stroke-width="1.6"/>
</g>
<g fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round">
  <path d="M65 283c-7 10-10 15-10 20a10 10 0 0 0 20 0c0-5-3-10-10-20z"/>
  <path d="M206 186l48-18M208 192l50-4M208 198l50 9M206 204l46 20" stroke-dasharray="14 7"/>
  <path d="M366 98l62-28M367 100l68-8M367 103l66 12M365 106l60 30" stroke-dasharray="16 8"/>
  <circle cx="330" cy="240" r="6"/>
  <path d="M140 300q50 16 100 0" stroke-dasharray="10 6"/>
  <path d="M555 184v56M535 214h40" stroke-width="1.4"/>
  <path d="M545 299h20" stroke-width="1.6"/>
</g></svg>`;
// Redes sociales: cambia "#" por el enlace de cada cuenta cuando los tengas.
const REDES=[
  ['Facebook','#','<path fill="currentColor" d="M13.5 21v-7.5H16l.4-3h-2.9V8.7c0-.9.3-1.4 1.5-1.4h1.5V4.6a20 20 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8v2.2H8.1v3h2.5V21z"/>'],
  ['Instagram','#','<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>'],
  ['TikTok','#','<path fill="currentColor" d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6l.8.1V9.7a5.8 5.8 0 1 0 5 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.4-1.6z"/>'],
  ['YouTube','#','<path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"/>'],
];
const PAGOS=`<span class="pago" title="Mastercard"><svg viewBox="0 0 64 40" width="54" height="34" aria-label="Mastercard"><circle cx="25" cy="17" r="13" fill="#eb001b"/><circle cx="39" cy="17" r="13" fill="#f79e1b"/><path d="M32 6a13 13 0 0 1 0 22 13 13 0 0 1 0-22z" fill="#ff5f00"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="#231f20">mastercard</text></svg></span>
<span class="pago" title="Visa"><svg viewBox="0 0 64 40" width="54" height="34" aria-label="Visa"><text x="32" y="27" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-style="italic" font-size="20" fill="#1a1f71">VISA</text></svg></span>`;
const AVISO='Perfume inspirado. No es un producto original ni tenemos relación con la marca mencionada.';

const ficha=c=>'ficha.html?c='+encodeURIComponent(c);
// Acordes del PDF, tal cual: nombre, ancho y color. n = cuántos mostrar.
function ink(h){const n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return (0.299*r+0.587*g+0.114*b)>165?'#333':'#fff'}
const acordes=(c,n)=>(ACORDES[c]||[]).slice(0,n).map(([l,w,col])=>`<div style="width:${w}%;background:${col};color:${ink(col)}">${esc(l)}</div>`).join('');

function card(c){
  const p=BY[c];if(!p)return'';
  const sec=SECCIONES.find(s=>s.id==p[6]).nombre;
  return `<article class="card"><a class="ph" href="${ficha(c)}" aria-label="Ver ficha de ${esc(p[1])}">${img(c)||'<span class="nofoto">Foto muy pronto</span>'}</a>
    <a class="nm" href="${ficha(c)}">${esc(p[1])}</a><div class="mk">${esc(p[2])}</div>
    <div class="tags"><span class="tag ${p[3]=='H'?'h':'m'}">${p[3]=='H'?'Hombre':'Mujer'}</span><span class="tag f">${esc(p[4])}</span>${p[6]!='disenador'?`<span class="tag f">${sec}</span>`:''}</div>
    <button class="montar" data-code="${c}"></button></article>`;
}

function montarPiezas(activo){
  const nav=[['Mujeres',cat({g:'M'}),'M'],['Hombres',cat({g:'H'}),'H'],['Árabes',cat({s:'arabes'}),'arabes'],['Nicho',cat({s:'nicho'}),'nicho'],['Diseñador',cat({s:'disenador'}),'disenador'],['Todo el catálogo',cat(),'todo'],['Cómo pedir','index.html#como','como']];
  document.body.insertAdjacentHTML('afterbegin',`
<header class="top">
  <div class="wrap">
    <a class="logo" href="index.html"><span class="mono">A</span><span><b>AROMA CAPITAL</b><small>Perfumes inspirados · Santo Domingo</small></span></a>
    <div class="search">
      <input id="q" type="search" placeholder="Buscar perfume o marca" autocomplete="off" aria-label="Buscar perfume o marca">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5"/></svg>
      <div class="results" id="results"></div>
    </div>
    <button class="icon-btn" id="openCart" aria-label="Abrir tu carrito"><svg viewBox="50 -2 250 214" width="36" height="31" aria-hidden="true">${CARRO}</svg><span class="badge" id="badge" hidden>0</span><span class="t">Carrito</span></button>
  </div>
  <nav class="nav"><div class="wrap">${nav.map(([t,h,k])=>`<a href="${h}" class="${k==activo?'on':''}">${t}</a>`).join('')}</div></nav>
</header>`);
  document.body.insertAdjacentHTML('beforeend',`
<section class="pide"><div class="wrap">
  <div class="pide-txt">
    <h2>Pide tu perfume</h2>
    <p><b>Dónde estamos</b>Santo Domingo, República Dominicana</p>
    <p><b>Pedidos</b>Por WhatsApp al 829-232-4326</p>
    <p><b>Cómo pedir</b>Agrega a tu carrito los perfumes que quieras y envíanos un solo mensaje.</p>
    <a class="btn" href="${waLink('Hola Aroma Capital')}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
  </div>
  ${DIBUJO}
</div></section>
<section class="perks"><div class="wrap">
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><div><b>Pedidos por WhatsApp</b><span>829-232-4326</span></div></div>
  <div class="perk"><svg class="cart" viewBox="50 -2 250 214" width="44" height="38" aria-hidden="true">${CARRO}</svg><div><b>Un solo mensaje</b><span>Todo tu carrito de una vez</span></div></div>
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="6" y="8" width="12" height="13" rx="2"/><path d="M9 8V5h6v3M10 3h4"/><path d="M9 14h6"/></svg><div><b>Ficha completa</b><span>Notas, acordes y opiniones</span></div></div>
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><div><b>Santo Domingo</b><span>República Dominicana</span></div></div>
</div></section>
<footer><div class="wrap">
  <div class="fcols">
    <div><a class="logo" href="index.html"><span class="mono">A</span><span><b>AROMA CAPITAL</b><small>Perfumes inspirados</small></span></a>
      <p class="firma">By Anggelo Berdejo</p>
      <p>Santo Domingo, República Dominicana</p>
      <a class="wa-btn" href="${waLink('Hola Aroma Capital')}" target="_blank" rel="noopener">${WAICON} 829-232-4326</a></div>
    <div><h4>Catálogo</h4><a href="${cat({g:'M'})}">Mujeres</a><a href="${cat({g:'H'})}">Hombres</a><a href="${cat({s:'arabes'})}">Árabes</a><a href="${cat({s:'nicho'})}">Nicho</a><a href="${cat({s:'disenador'})}">Diseñador</a></div>
    <div><h4>Ayuda</h4><a href="index.html#como">Cómo pedir</a><a href="#" data-open-cart>Mi carrito</a><a href="${waLink('Hola Aroma Capital, busco un perfume que no vi en el catálogo: ')}" target="_blank" rel="noopener">¿No lo ves? Pídelo</a></div>
    <div><h4>Aviso</h4><p>${AVISO}</p><button class="instalar btn ghost" hidden>Guardar en mi celular</button></div>
  </div>
  <div class="fbar">
    <div><h4>Aceptamos</h4><div class="pagos">${PAGOS}</div></div>
    <div><h4>Síguenos</h4><div class="redes">${REDES.map(([n,h,ic])=>`<a href="${h}" aria-label="${n}" title="${n}"${h!='#'?' target="_blank" rel="noopener"':''}><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${ic}</svg></a>`).join('')}<a href="${waLink('Hola Aroma Capital')}" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener">${WAICON.replace('width="18" height="18"','width="22" height="22"')}</a></div></div>
  </div>
  <div class="legal">© 2026 Aroma Capital · By Anggelo Berdejo</div>
</div></footer>
<button class="fab" id="fab" data-open-cart aria-label="Abrir tu carrito"><svg viewBox="50 -2 250 214" width="36" height="31" aria-hidden="true">${CARRO}</svg><span class="fbadge" id="fbadge" hidden>0</span></button>
<div class="veil" id="veil"></div>
<aside class="drawer" id="drawer" aria-label="Tu carrito">
  <div class="dh"><h3>Tu carrito</h3><button class="x" id="closeCart" aria-label="Cerrar">✕</button></div>
  <p class="dnote">La fragancia que quieras, agrégala a tu carrito.</p>
  <div class="dlist" id="dlist"></div><div class="dfoot" id="dfoot"></div>
</aside>
<div class="toast" id="toast"></div>`);


  // Búsqueda
  const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
  $('#q').addEventListener('input',e=>{
    const q=norm(e.target.value.trim()),box=$('#results');
    if(q.length<2){box.classList.remove('on');return}
    const hits=PERFUMES.filter(p=>norm(p[1]+' '+p[2]).includes(q)).slice(0,30);
    box.innerHTML=hits.length?hits.map(p=>`<div class="res"><div class="th">${img(p[0])}</div><div><b>${esc(p[1])}</b><span>${esc(p[2])} · ${p[3]=='H'?'Hombre':'Mujer'}</span></div><button class="montar" data-code="${p[0]}" style="padding:7px 10px;font-size:10px"></button></div>`).join('')
      :`<div class="empty">No lo encontramos. <a href="${waLink('Hola Aroma Capital, ¿tienen '+e.target.value.trim()+'?')}" target="_blank" rel="noopener">Pídelo por WhatsApp</a></div>`;
    box.classList.add('on');pintarConcho();
  });

  // Carrito
  document.addEventListener('click',e=>{
    if(!e.target.closest('.search'))$('#results').classList.remove('on');
    const f=e.target.closest('a[href^="ficha.html"]');
    if(f){const lista=[...new Set($$('.card .montar').map(b=>b.dataset.code))];try{sessionStorage.setItem('ac_lista',JSON.stringify(lista));if(!location.pathname.endsWith('ficha.html'))sessionStorage.setItem('ac_volver',location.pathname.split('/').pop()+location.search)}catch(_){}}
    const m=e.target.closest('.montar');if(m){toggle(m.dataset.code);return}
    const r=e.target.closest('[data-rm]');if(r){toggle(r.dataset.rm);return}
    if(e.target.closest('#clear')){cart=[];guardar();pintarConcho();return}
    if(e.target.closest('[data-open-cart]')||e.target.closest('#openCart')){e.preventDefault();abrir(true)}
  });
  $('#closeCart').onclick=$('#veil').onclick=()=>abrir(false);
  addEventListener('keydown',e=>{if(e.key=='Escape')abrir(false)});
  // El carrito flotante aparece al bajar la pantalla
  const verFab=()=>$('#fab').classList.toggle('on',scrollY>300);
  addEventListener('scroll',verFab,{passive:true});verFab();
  pintarConcho();
}

let cart=[];try{cart=JSON.parse(localStorage.getItem('ac_concho')||'[]').filter(c=>BY[c])}catch(e){}
const guardar=()=>{try{localStorage.setItem('ac_concho',JSON.stringify(cart))}catch(e){}};
const abrir=on=>{$('#drawer').classList.toggle('on',on);$('#veil').classList.toggle('on',on)};
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),1800)}
function toggle(c){
  if(cart.includes(c)){cart=cart.filter(x=>x!=c);toast('Lo quitaste del carrito')}
  else{cart.push(c);toast(`${BY[c][1]} se agregó a tu carrito`)}
  guardar();pintarConcho();
}
function pintarConcho(){
  [$('#badge'),$('#fbadge')].forEach(b=>{b.hidden=!cart.length;b.textContent=cart.length});
  $$('.montar').forEach(m=>{const on=cart.includes(m.dataset.code);m.classList.toggle('on',on);m.textContent=on?(m.dataset.on||'✓ En tu carrito'):(m.dataset.off||'Agregar')});
  $('#dlist').innerHTML=cart.length?cart.map(c=>{const p=BY[c];return `<div class="ci"><div class="th">${img(c)}</div><div><b>${esc(p[1])}</b><span>${esc(p[2])}</span></div><button class="rm" data-rm="${c}">Quitar</button></div>`}).join('')
    :'<p class="dnote">Tu carrito está vacío. Toca <b>Agregar</b> en los perfumes que te gusten.</p>';
  const msg=`Hola, quiero consultar por estos perfumes de Aroma Capital:\n${cart.map((c,k)=>`${k+1}. ${c} – ${BY[c][1]} (${BY[c][2]})`).join('\n')}\n¿Están disponibles y qué precio tienen?`;
  $('#dfoot').innerHTML=cart.length?`<a class="wa-btn" href="${waLink(msg)}" target="_blank" rel="noopener">${WAICON} Enviar por WhatsApp</a><button class="rm" id="clear" style="text-align:center">Vaciar carrito</button>`:'';
}

// Guardar la página en el celular y abrirla sin internet.
if('serviceWorker' in navigator&&location.protocol!='file:')addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
let pedirInstalar=null;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();pedirInstalar=e;$$('.instalar').forEach(b=>b.hidden=false)});
document.addEventListener('click',async e=>{
  if(!e.target.closest('.instalar'))return;
  if(pedirInstalar){pedirInstalar.prompt();await pedirInstalar.userChoice;pedirInstalar=null;$$('.instalar').forEach(b=>b.hidden=true)}
});
