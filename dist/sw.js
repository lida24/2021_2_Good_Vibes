const CACHE_NAME = 'Ozon2.0 cache';



const callback = (event) => {
  event.respondWith((async () => {
    // // if (navigator.onLine === false) {
    // //   console.log(event.request);

    // //   const r = await caches.match(event.request);
    // //   // console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    // //   if (r) return r;
    // // }
    // const response = await fetch(event.request);
    // const cache = await caches.open(CACHE_NAME);
    // console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    // cache.put(event.request, response.clone());
    // return response;

    const cache = await caches.open(CACHE_NAME);

    if (navigator.onLine === true) {
      const response = await fetch(event.request);
      console.log(`[Service Worker] Caching new resource: ${event.request.url}`);

      // console.log(event.request);

      if (event.request.method !== 'POST') {
        cache.put(event.request, response.clone());
      }
      return response;
    }

    const r = await caches.match(event.request);
    console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    if (r) return r;

    const response = await fetch(event.request);
    return response;
  })());
};


this.addEventListener('fetch', (event) => callback(event));

this.addEventListener('install', (event) => {
  // let cacheUrls = ['/'];

  // event.waitUntil(
  // fetch('./fileList')
  //   .then((response) => response.text())
  //   .then((text) => text.split('\n'))
  //   .then((split) => cacheUrls.concat(split))
  //   .then((split) => {
  //     cacheUrls = split.filter((url) => {
  //       if (url !== './_redirects'
  //         && url !== './fileList'
  //         // && url !== './sw.js'
  //       ) {
  //         return url;
  //       }
  //       return undefined;
  //     });
  //   })
  // .caches.open('CACHE_NAME')
  // .then((cache) => cache.addAll(cacheUrls))
  // .catch((err) => console.error(err)),
  // );

  // let cacheUrls = [
  //   '/',
  //   './main_bundle.js',
  //   './sw.js',
  //   './index.html',
  // ];

  let cacheUrls = [
    '/',
    '/profile',
    '/signin',
    '/signup',
    '/homepage',
    '/product',
    '/cart',
    '/category',
    '/address',
    '/payment',
    '/confirmation',
  ];

  console.log('[Service Worker] Install');
  event.waitUntil((async () => {
    // this.addEventListener('fetch', (e) => callback(e));
    // fetch('./fileList')
    //   .then((response) => response.text())
    //   .then((text) => text.split('\n'))
    //   .then((split) => cacheUrls.concat(split))
    //   .then((split) => {
    //     cacheUrls = split.filter((url) => {
    //       if (url !== './_redirects'
    //         && url !== './fileList'
    //         // && url !== './sw.js'
    //       ) {
    //         return url;
    //       }
    //       return undefined;
    //     });
    //   })
    //   .then(() => caches.open('CACHE_NAME'))
    //   .then((cache) => cache.addAll(cacheUrls))
    //   .then(() => console.log(cacheUrls))
    //   .catch((err) => console.error(err));

    const response = await fetch('./fileList');
    const text = (await response.text()).split('\n');
    const split = cacheUrls.concat(text);
    cacheUrls = split.filter((url) => {
      if (url !== './_redirects'
        && url !== './fileList'
        && url !== './sw.js'
      ) {
        return url;
      }
      return undefined;
    });
    const cache = await caches.open(CACHE_NAME);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(cacheUrls);

    this.addEventListener('fetch', (e) => callback(e));
  })());
});

this.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    console.log('Claiming control');
  })());
});
