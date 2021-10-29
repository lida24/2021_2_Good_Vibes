/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import ajax from './script.js';

const backendAddress = 'https://ozonback.herokuapp.com';

export const signin = (data) => {
  console.log(data);
  ajax.post({
    url: `${backendAddress}/login`,
    body: data
  })
    .then(({ responseText }) => eventBus.emit('signin success', responseText))
    .catch(({ responseText }) => eventBus.emit('signin fail', responseText));
};

export const signup = (data) => {
  console.log(data);
  ajax.post({
    url: `${backendAddress}/signup`,
    body: data
  })
    .then(({ responseText }) => eventBus.emit('signup success', responseText))
    .catch(({ responseText }) => eventBus.emit('signup fail', responseText));
};

export const signout = () => {
  ajax.get({
    url: `${backendAddress}/logout`
  })
    .then(() => eventBus.emit('logout success'))
    .catch((error) => console.error(error));
};

export const profile = () => {
  ajax.get({
    url: `${backendAddress}/profile`
  })
    .then(() => eventBus.emit('authorization'))
    .catch(() => eventBus.emit('no authorization'));
};

export const cookieCheck = () => {
  ajax.get({
    url: `${backendAddress}/profile`
  })
    .then(({ responseText }) => eventBus.emit('cookie check success', responseText))
    .catch(({ responseText }) => eventBus.emit('cookie check fail', responseText));
};

export const homepage = () => {
  ajax.get({
    url: `${backendAddress}/homepage`
  })
    .then(({ responseText }) => eventBus.emit('homepage response', responseText))
    .catch((error) => console.error(error));
};

export const product = (id) => {
  ajax.get({
    url: `${backendAddress}/product?id=${id}`
  })
    .then(({ responseText }) => eventBus.emit('product request success', { responseText }))
    .catch(({ responseText }) => eventBus.emit('product request fail', { responseText }));
};

// export const cart = () => {
//   ajax.get({
//     url: `${backendAddress}/cart`
//   })
//   .then(({ responseText }) => eventBus.emit('cart response', responseText))
//   .catch((error) => console.error(error));
// };

export const cart = () => {
  ajax.get({
    url: `${backendAddress}/cart/get`
  })
    .then(({ responseText }) => eventBus.emit('cart response', responseText))
    .catch((error) => console.error(error));
};

export const order = () => {
  ajax.get({
    url: `${backendAddress}/cart/confirm`
  })
    .then(({ responseText }) => eventBus.emit('order response', responseText))
    .catch((error) => console.error(error));
};

export const addProductToCart = (obj) => {
  const temp = {
    product_id: obj.id,
    number: 1
  };

  console.log(temp);

  // const data = JSON.stringify(temp);

  ajax.post({
    url: `${backendAddress}/cart/put`,
    body: temp
  })
    // .then(({ responseText }) => console.log(responseText))
    // .catch(({ responseText }) => console.log(responseText));

    .then(({ responseText }) => eventBus.emit('add product to cart success', { responseText }))
    .catch(({ responseText }) => eventBus.emit('add product to cart fail', { responseText }));

  // 	ProductId int`json:"product_id"`
  // Number    int`json:"number,omitempty"`
};

export const cartGet = () => {
  ajax.get({
    url: `${backendAddress}/cart/get`
  })
    .then(({ responseText }) => console.log(responseText))
    .catch(({ responseText }) => console.log(responseText));
};

export const cartConfirm = (array) => {
  console.log(array);
};
