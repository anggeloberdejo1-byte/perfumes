// Aroma Capital — service worker: guarda la página y las fotos para abrirla sin internet.
// preparar.py cambia VERSION cada vez que cambian los archivos, así el celular baja lo nuevo.
const VERSION = '7fc97ba83c';
const BASE = 'aroma-base-' + VERSION;
const FOTOS = 'aroma-fotos-' + VERSION;
const FUENTES = 'aroma-fuentes';

const PAGINAS = [
  './', 'index.html', 'catalogo.html', 'ficha.html',
  'estilo.css', 'comun.js', 'datos.js', 'fichas.js',
  'manifest.webmanifest', 'iconos/icono-192.png', 'iconos/icono-512.png',
  'iconos/apple-touch-icon.png', 'iconos/favicon-32.png',
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    // Lo esencial tiene que quedar guardado; si falla, se reintenta en la próxima visita.
    // cache: 'reload' evita que se guarde una copia vieja que el navegador tenía en memoria.
    await (await caches.open(BASE)).addAll(PAGINAS.map(u => new Request(u, { cache: 'reload' })));
    // Las fotos se guardan de a 20; si alguna falla, se reintenta una vez y no bloquea la instalación.
    // Las que aun así falten se guardan solas la primera vez que se vean.
    try {
      const lista = await (await fetch('archivos.json', { cache: 'no-store' })).json();
      const cache = await caches.open(FOTOS);
      for (let i = 0; i < lista.fotos.length; i += 20) {
        await Promise.all(lista.fotos.slice(i, i + 20).map(f => {
          const guardar = () => cache.add(new Request(f, { cache: 'reload' }));
          return guardar().catch(guardar).catch(() => {}); // un reintento si falla
        }));
      }
    } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k !== BASE && k !== FOTOS && k !== FUENTES) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Letras de Google: se guardan la primera vez que se usan.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FUENTES).then(async c => {
      const hit = await c.match(req);
      const red = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || red;
    }));
    return;
  }
  if (url.origin !== location.origin) return;

  // Fotos: primero lo guardado.
  if (url.pathname.includes('/img/')) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => {
      const copia = r.clone(); caches.open(FOTOS).then(c => c.put(req, copia)); return r;
    })));
    return;
  }

  // Páginas y datos: se muestra lo guardado al instante y se actualiza por detrás.
  // ficha.html?c=E3 y catalogo.html?g=M usan la misma página guardada.
  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    const red = fetch(req).then(async r => {
      if (r.ok) {
        const c = await caches.open(BASE);
        await c.put(new Request(url.origin + url.pathname), r.clone());
      }
      return r;
    }).catch(() => null);
    if (hit) { e.waitUntil(red); return hit; }
    return (await red) || (await caches.match('index.html')) || Response.error();
  })());
});
