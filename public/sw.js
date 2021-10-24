// наименование для нашего хранилища кэша
const CACHE_NAME = 'lesson-6-2021-2';
// ссылки на кэшируемые файлы
const cacheUrls = [
  '/',
  './index.html',
  './main.css',
  './main.js',
];

this.addEventListener('install', (event) => {
  // задержим обработку события
  // если произойдёт ошибка, serviceWorker не установится
  event.waitUntil(
    // находим в глобальном хранилище Cache-объект с нашим именем
    // если такого не существует, то он будет создан
    caches.open(CACHE_NAME)
      .then((cache) =>
        // загружаем в наш cache необходимые файлы
        cache.addAll(cacheUrls)
      )
      .catch((err) => {
        console.error('smth went wrong with caches.open: ', err);
      })
  );
});

this.addEventListener('fetch', (event) => {

  /** online first */
  if (navigator.onLine === true) {
    return fetch(event.request);
  }

  /** cache first */
  event.respondWith(
    // ищем запрашиваемый ресурс в хранилище кэша
    caches
      .match(event.request)
      .then((cachedResponse) => {
        // выдаём кэш, если он есть
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request);
      })
      .catch((err) => {
        console.error('smth went wrong with caches.match: ', err);
      })
  );
});