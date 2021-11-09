const CACHE_NAME = 'Ozon2.0 cache';

this.addEventListener('install', (event) => {
  // let cacheUrls = ['/'];

  // event.waitUntil(
  //   fetch('./fileList')
  //     .then((response) => response.text())
  //     .then((text) => text.split('\n'))
  //     .then((split) => cacheUrls.concat(split))
  //     .then((split) => {
  //       cacheUrls = split.filter((url) => {
  //         if (url !== './_redirects'
  //           && url !== './fileList'
  //           // && url !== './sw.js'
  //         ) {
  //           return url;
  //         }
  //         return undefined;
  //       });
  //     })
  //     .caches.open('CACHE_NAME')
  //     .then((cache) => cache.addAll(cacheUrls))
  //     .catch((err) => console.error(err)),
  // );

  const cacheUrls = [
    '/',
    './main_bundle.js',
    './sw.js',
    './index.html',
  ];

  console.log('[Service Worker] Install');
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(cacheUrls);
  })());
});

this.addEventListener('fetch', (event) => {
  // if (navigator.onLine === true) {
  //   return fetch(event.request);
  // }

  // return event.respondWith(
  //   caches
  //     .match(event.request)
  //     .then((cachedResponse) => {
  //       if (cachedResponse) {
  //         return cachedResponse;
  //       }

  //       return fetch(event.request);
  //     })
  //     .catch((err) => console.error('smth went wrong with caches.match: ', err)),
  // );

  // ==========================

  // event.respondWith((async () => {
  //   const r = await caches.match(event.request);
  //   console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
  //   if (r) return r;
  //   const response = await fetch(event.request);
  //   const cache = await caches.open(CACHE_NAME);
  //   console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
  //   cache.put(event.request, response.clone());
  //   return response;
  // })());

  // ========================

  // if (navigator.onLine === true) {
  //   return fetch(event.request);
  // }

  event.respondWith((async () => {
    if (navigator.onLine === false) {
      const r = await caches.match(event.request);
      console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
      if (r) return r;
    }
    const response = await fetch(event.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    cache.put(event.request, response.clone());
    return response;
  })());
});
