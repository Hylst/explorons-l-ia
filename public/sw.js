const CACHE_NAME = 'ia-explorer-v1';
const ASSETS_CACHE = 'ia-explorer-assets-v1';

// Ressources initiales à mettre en cache à l'installation
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)),
      // Prend le contrôle plus tôt
      self.skipWaiting()
    ])
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      const validCaches = [CACHE_NAME, ASSETS_CACHE];
      await Promise.all(
        cacheNames
          .filter(name => !validCaches.includes(name))
          .map(name => caches.delete(name))
      );
      // Contrôle immédiat des clients
      await self.clients.claim();
    })()
  );
});

// Stratégies de cache simples
self.addEventListener('fetch', event => {
  const { request } = event;

  // Ne pas gérer les requêtes non-GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cache-first pour assets statiques (Vite les sert sous /assets/)
  if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/pics/')) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(ASSETS_CACHE);
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        // Ne mettre en cache que les réponses valides
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      })()
    );
    return;
  }

  // Network-first avec fallback cache pour le reste
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);
        // Optionnel: mettre en cache les pages HTML
        if (response && response.status === 200 && response.headers.get('content-type')?.includes('text/html')) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;
        // Fallback minimal: page racine si dispo
        return caches.match('/');
      }
    })()
  );
});