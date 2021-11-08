const CACHE_NAME = 'Ozon2.0 cache';

this.addEventListener('install', (event) => {
  let cacheUrls = ['/'];

  event.waitUntil(
    fetch('./fileList')
      .then((response) => response.text())
      .then((text) => text.split('\n'))
      .then((split) => cacheUrls.concat(split))
      .then((split) => {
        cacheUrls = split.filter((url) => {
          if (url !== './_redirects'
            && url !== './fileList'
            && url !== './sw.js') {
            return url;
          }
          return undefined;
        });
      })
      .caches.open('CACHE_NAME')
      .then((cache) => cache.addAll(cacheUrls))
      .catch((err) => console.error(err)),
  );
});

this.addEventListener('fetch', (event) => {
  if (navigator.onLine === true) {
    return fetch(event.request);
  }

  return event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request);
      })
      .catch((err) => console.error('smth went wrong with caches.match: ', err)),
  );
});
