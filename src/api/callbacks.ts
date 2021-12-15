/* eslint-disable import/extensions */
import bus from '../modules/bus/bus';
import ajax from '../modules/rpc/ajax';
import {
  AjaxResponse,
  Callback,
  CartItem,
  NewComment,
  OrderRequest,
  Product,
  Suggests,
} from '../types';
import searchParams from '../services/search/params';

// const backendAddress = 'https://ozonback.herokuapp.com';
// const backendAddress = 'http://37.139.33.76';
/* const backendAddress = 'https://goodvibesazot.tk/backend/api'; */

// const backendAddress = 'https://goodvibesazot.tk';

const backendAddress = 'https://goodvibesazot.tk/api';

export const signin = (data) => {
  ajax.post({
    url: `${backendAddress}/login`,
    body: data,
  })
    .then((response: AjaxResponse) => bus.emit('signIn ajax confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('signIn ajax denied', response));
};

export const signup = (data) => {
  ajax.post({
    url: `${backendAddress}/signup`,
    body: data,
  })
    .then((response: AjaxResponse) => bus.emit('signUp ajax confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('signUp ajax denied', response));
};

export const signout = () => {
  ajax.get({
    url: `${backendAddress}/logout`,
  })
    .then(() => bus.emit('signout confirmed', undefined))
    .catch((error) => console.error(error));
};

export const profile = () => {
  ajax.get({
    url: `${backendAddress}/profile`,
  })
    .then((response: AjaxResponse) => bus.emit('authorization', undefined))
    .catch((response: AjaxResponse) => bus.emit('no authorization', undefined));
};

export const cookieCheck = () => {
  ajax.get({
    url: `${backendAddress}/profile`,
  })
    .then((response: AjaxResponse) => bus.emit('cookie check success', response))
    .catch((response: AjaxResponse) => bus.emit('cookie check fail', response))
    .then(() => bus.emit('cookie check finished', undefined));
};

export const productAdd = () => {
  ajax.get({
    url: `${backendAddress}/product/add`,
  });
};

export const homepage = () => {
  ajax.get({
    url: `${backendAddress}/homepage`,
  })
    .then((response: AjaxResponse) => bus.emit('homepage ajax confirmed', response))
    .catch((error) => console.error(error));
};

export const product: Callback = (obj: { 'id': number }) => {
  const { id } = obj;

  ajax.get({
    url: `${backendAddress}/product?id=${id}`,
  })
    .then(({ responseText }) => bus.emit('product request confirmed', { responseText }))
    .catch(({ responseText }) => bus.emit('product request denied', { responseText }));
};

export const productArrayRequest: Callback = (array: CartItem[]) => {
  const result = [];

  array.forEach((element) => {
    ajax.get({
      url: `${backendAddress}/product?id=${element.product_id}`,
    })
      .then(({ responseText }) => JSON.parse(responseText))
      .then((obj) => {
        const tempObj = obj;
        // tempObj.number = element.number;
        return tempObj;
      })
      .then((obj) => result.push(obj))
      .then(() => {
        if (result.length === array.length) {
          bus.emit('product array request confirmed', result);
        }
      })
      .catch(({ responseText }) => bus.emit('product array request denied', responseText));
  });
};

export const order = () => {
  ajax.get({
    url: `${backendAddress}/cart/confirm`,
  })
    .then(({ responseText }) => bus.emit('order response', responseText))
    .catch((error) => console.error(error));
};

export const putProductToCart: Callback = (obj: { 'id': number, 'number': number }) => {
  const { id, number } = obj;
  const temp = {
    product_id: id,
    number,
  };

  ajax.post({
    url: `${backendAddress}/cart/put`,
    body: temp,
  })
    .then((response: AjaxResponse) => bus.emit('put product to cart confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('put product to cart denied', response));
};

export const cartGet = () => {
  ajax.get({
    url: `${backendAddress}/cart/get`,
  })
    .then(({ responseText }) => bus.emit('cart get confirmed', { responseText }))
    .catch(({ responseText }) => bus.emit('cart get denied', { responseText }))
    .then(() => bus.emit('cart get finished', undefined));
};

export const cartConfirm: Callback = (obj: OrderRequest) => {
  ajax.post({
    url: `${backendAddress}/cart/confirm`,
    body: obj,
  })
    .then(({ responseText }) => bus.emit('order confirmed', responseText))
    .catch(({ responseText }) => bus.emit('order denied', responseText));
};

export const categoryGet: Callback = () => {
  ajax.get({
    url: `${backendAddress}/category`,
  })

    .then((response: Response) => bus.emit('category get confirmed', response))
    .catch((response: Response) => bus.emit('category get denied', response))
    .then(() => bus.emit('category get finished', undefined));
};

// export const categoryRequest: Callback = (obj: { name: string }) => {
//   const { name } = obj;

//   const {
//     minPrice,
//     maxPrice,
//     maxRating,
//     minRating,
//     type,
//     orderType,
//   } = searchParams;

//   ajax.get({
//     // url: `${backendAddress}/category/${name}`,
//     url: `${backendAddress}/category/${name}?price_min=${minPrice}&price_max=${maxPrice}&rating_min=${minRating}&rating_max=${maxRating}&order=${orderType}&order_type=${type}`,
//   })

//     .then((response: AjaxResponse) => bus.emit('category ajax confirmed', response))
//     .then(() => bus.emit('category ajax name', obj))
//     .catch((response: AjaxResponse) => bus.emit('category ajax denied', response));
// };

export const categoryRequest: Callback = (obj: {
  name: string,
  pathname: string,
  search?: boolean,
  params?: {
    minPrice: number,
    maxPrice: number,
    minRating: number,
    maxRating: number,
    type: 'asc' | 'desc',
    orderType: 'rating' | 'price',
  }
}) => {
  const { name, pathname } = obj;
  let { search } = obj;

  // console.log(search);
  if (!search) search = false;
  // console.log(obj);

  const {
    minPrice,
    maxPrice,
    maxRating,
    minRating,
    type,
    orderType,
  } = searchParams;

  searchParams.search = search;

  // console.log('pathname', pathname);

  ajax.get({
    // url: `${backendAddress}/category/${name}`,

    url: `${backendAddress}/category/${name}?price_min=${minPrice}&price_max=${maxPrice}&rating_min=${minRating}&rating_max=${maxRating}&order=${orderType}&order_type=${type}&search=${search}`,

    // url: `${backendAddress}${pathname}?price_min=${minPrice}&price_max=${maxPrice}&rating_min=${minRating}&rating_max=${maxRating}&order=${orderType}&order_type=${type}`,
  })

    .then((response: AjaxResponse) => bus.emit('category ajax confirmed', response))
    .then(() => bus.emit('category ajax name', { ...obj, searchParams }))
    .catch((response: AjaxResponse) => bus.emit('category ajax denied', response));
};

export const cartDelete: Callback = (obj: { 'id': number, 'number': number }) => {
  // console.log('cart delete', obj);

  const { id, number } = obj;
  const temp = {
    product_id: id,
    number,
  };

  ajax.post({
    url: `${backendAddress}/cart/delete`,
    body: temp,
  })
    .then((response: AjaxResponse) => bus.emit('delete product from cart confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('delete product from cart denied', response));
};

export const profileUpload: Callback = (obj: { 'username': string, 'email': string }) => {
  ajax.post({
    url: `${backendAddress}/profile`,
    body: obj,
  })
    .then((response: AjaxResponse) => bus.emit('profile upload confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('profile upload denied', response));
};

export const avatarUpload: Callback = (file: File) => {
  ajax.avatarUpload({
    method: 'POST',
    url: `${backendAddress}/upload/avatar`,
    file,
    callback: (response: AjaxResponse) => {
      const { status } = response;

      if (status < 300) {
        bus.emit('avatar upload confirmed', response);
        return;
      }
      bus.emit('avatar upload denied', response);
    },
  });
};

export const orderList: Callback = () => {
  // console.log('orderList ajax request');

  ajax.get({
    url: `${backendAddress}/profile/orders`,
  })

    .then((response: AjaxResponse) => bus.emit('orders list confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('orders list denied', response));
};

// =======================
export const comments: Callback = (obj: { 'id': number }) => {
  const { id } = obj;

  // console.log('ajax comments request', id);

  // const fakeAfComments = [
  //   {
  //     username: 'user1',
  //     rating: 4,
  //     text: 'user1 fakeaf comment text',
  //   },
  //   {
  //     username: 'user2',
  //     rating: 2,
  //     text: 'user2 fakeaf comment text',
  //   },
  // ];

  ajax.get({
    url: `${backendAddress}/reviews?product_id=${id}`,
  })

    // .then((response: AjaxResponse) => console.log('comments request confirmed', response))
    // .catch((response: AjaxResponse) => console.log('comments request denied', response))

    .then((response: AjaxResponse) => bus.emit('comments request confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('comments request denied', response));

  // .then(() => bus.emit('comments request confirmed', fakeAfComments));
};

const fakeafSuggests: Suggests = {
  products: [
    {
      name: 'product 1',
      id: 863,
      image: 'empty',
    },
    {
      name: 'product 2',
      id: 876,
      image: 'empty',
    },
  ],
  categories: [
    {
      name: 'CLOTHES_MEN',
      description: 'category 1',
    },
    {
      name: 'WATCHES',
      description: 'category 2',
    },
  ],
};

export const suggests: Callback = (obj: { 'str': string }) => {
  const { str } = obj;
  // console.log(str);

  ajax.get({
    url: `${backendAddress}/search/suggest?str=${str}`,
  })
    .then((response: AjaxResponse) => bus.emit('suggest request confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('suggest request denied', response));
};

export const search: Callback = (obj: { 'str': string }) => {
  const { str } = obj;
  ajax.get({
    url: `${backendAddress}/search?str=${str}`,
  })
    .then((response: AjaxResponse) => bus.emit('search state confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('search state denied', response));
};

export const addComment: Callback = (obj: NewComment) => {
  // console.log('add comment ajax request', obj);

  ajax.post({
    url: `${backendAddress}/review/add`,
    body: obj,
  })
    .then((response: AjaxResponse) => bus.emit('add comment request confirmed', response))
    .catch((response: AjaxResponse) => bus.emit('add comment request denied', response));
};

// ===============================

// =========================================
// |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||
//            Лида, сюда смотри))

// Важно!!! Вызов апи происходит при нажатии на лого.
// Закомментил колбэк на лого в файле components/hood/connections
// Добавил колбек в конце файла api/connections

// Эта функция парса положительного ответа с сервера
// Можно добавить в dispatcher/confirmed/callbacks
const handleAjaxRecommendationConfirmed: Callback = (response: string) => {
  Promise.resolve()
    .then(() => JSON.parse(response))
    // .then((responseObj: AjaxResponse) => JSON.parse(responseObj.responseText))

    // Продуктовый массив вываливается в событие 'recommendations product array parsed'
    // Можно отловить это событие в том модуле, где ты решить отрисовывать рекомендации
    // на главной, либо же на отдельной странице
    // По идее, ответ должен быть с типом Product[]
    .then((responseObj: AjaxResponse) => bus.emit('recommendations product array parsed', responseObj.responseText))
    .catch((err) => console.error('JSON parse error', err));
};

// Эта функция парса отрицательного ответа с сервера
// Можно добавить в dispatcher/denied/callbacks
const handleAjaxRecommendationDenied: Callback = (response: string) => {
  // const { responseText } = response;
  Promise.resolve()
    .then(() => JSON.parse(response))

    // Здесь пишется в консоль ошибка, которая случилась
    .then((serverError) => console.log(serverError))
    .catch((err) => console.error('JSON parse error', err))

    // В любом случе в случае, если пришла ошибка от сервера, будет выполнен запрос отрисовки
    // главной страницы
    .finally(() => bus.emit('homepage state request', undefined));
};

export const recommendations: Callback = () => {
  console.log('ajax recommendations callback');

  // Это добавляет колбек на эвент 'ajax recommendations confirmed'
  // Можно добавить в dispatcher/confirmed/callbacks
  bus.on('ajax recommendations confirmed', handleAjaxRecommendationConfirmed);

  // Это добавляет колбек на эвент 'ajax recommendations denied'
  // Можно добавить в dispatcher/denied/callbacks
  bus.on('ajax recommendations denied', handleAjaxRecommendationDenied);

  // Тестовый листенер для отображения итогового массива
  bus.on('recommendations product array parsed', (array) => console.warn(array));

  // ==========================
  // Раскомментить, когда парни починят апи

  // ajax.get({
  //   url: `${backendAddress}/reccommend`,
  // })

  //   .then((response: AjaxResponse) => bus.emit('ajax recommendations confirmed', response))
  //   .catch((response: AjaxResponse) => bus.emit('ajax recommendations denied', response));
  // ==========================

  // Имитация работы апи
  const fishOfMyDream = [
    {
      id: 877, image: 'https://products-bucket-ozon-good-vibes.s3.eu-west-1.amazonaws.com/d6b2d8b1-aa40-493d-8d9e-d3e52eacc3c0', name: 'Часы мужские механические Ника', price: 100000, rating: 4.5, category: 'WATCHES', count_in_stock: 1000, description: 'Часы мужские механические Ника, сапфировое стекло, нержавеющая сталь',
    },
    {
      id: 876, image: 'https://products-bucket-ozon-good-vibes.s3.eu-west-1.amazonaws.com/c1a27b7a-e685-4ed4-b453-ed01cdf65bf9', name: 'Часы мужские Rolex S15228', price: 1000000, rating: 5, category: 'WATCHES', count_in_stock: 100, description: 'Часы мужские коллекционные Rolex среднего класса',
    },
    {
      id: 875, image: 'https://products-bucket-ozon-good-vibes.s3.eu-west-1.amazonaws.com/55c1615f-626d-4520-8fe3-0db6e22bb878', name: 'Часы мужские Rolex золотые', price: 3000000, rating: 5, category: 'WATCHES', count_in_stock: 10, description: 'Часы мужские Rolex ультрадорогие для успешных мужчин',
    },
  ];

  const responseFakeAF = {
    status: 200,
    responseText: fishOfMyDream,
  };

  Promise.resolve()
    .then(() => bus.emit('ajax recommendations confirmed', JSON.stringify(responseFakeAF)))
    .catch(() => bus.emit('ajax recommendations denied', JSON.stringify(responseFakeAF)));
};
