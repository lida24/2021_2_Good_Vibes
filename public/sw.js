// наименование для нашего хранилища кэша
const CACHE_NAME = 'Ozon2.0 cache';
// ссылки на кэшируемые файлы

// const cacheUrls = [
//   '/',
//   './index.html',
//   './main.css',
//   './main.js',
// ];

// const list = ['/'];

// fetch('./fileList')
//   .then((response) => response.text())
//   .then((text) => {
//     list = text.split('\n');
//     console.log(list);
//   });


const cacheUrls = ['/'];

fetch('./fileList')
  .then((response) => response.text())
  .then((text) => text.split('\n'))
  .then((split) => cacheUrls.concat(split))
  // .then((res) => console.log(res))

  // .then((res) => {
  //   const a = cacheUrls.find((element, index) => {
  //     if (element === './sw.js') {
  //       return index;
  //     }
  //     return undefined;
  //   });
  //   res.splice(a, 1);
  // })

  // .then((res) => res.find((element, index) => {
  //   if (element === './sw.js') {
  //     cacheUrls.split(index, 1);
  //     console.log(cacheUrls);
  //     return index;
  //   }
  //   return undefined;
  // }))
  // .then((res) => cacheUrls.split(res, 1))
  // .then((res) => console.log(res));


  .then(() => console.log(cacheUrls));

const foo = (cacheUrls) => {
  console.log(cacheUrls);

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
};


// .then((res) => () => {
//   // const a = res.find((element, index) => {
//   //   if (element === './sw.js') {
//   //     return index;
//   //   }
//   //   return undefined;
//   // });
//   // res.splice(a, 1);
// });

// const a = cacheUrls.find((element, index) => {
//   if (element === './sw.js') {
//     return index;
//   }
//   return undefined;
// });
// cacheUrls.splice(a, 1);

// console.log(cacheUrls);

// this.addEventListener('install', (event) => {
//   // задержим обработку события
//   // если произойдёт ошибка, serviceWorker не установится
//   event.waitUntil(
//     // находим в глобальном хранилище Cache-объект с нашим именем
//     // если такого не существует, то он будет создан
//     caches.open(CACHE_NAME)
//       .then((cache) =>
//         // загружаем в наш cache необходимые файлы
//         cache.addAll(cacheUrls)
//       )
//       .catch((err) => {
//         console.error('smth went wrong with caches.open: ', err);
//       })
//   );
// });

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