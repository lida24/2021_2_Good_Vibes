import bus from '../../init/bus';
import user from '../../object/user/user';
import {
  AjaxResponse, Callback, Product,
} from '../../types';

export const showSignIn: Callback = () => {
  bus.emit('show view', { name: 'signin' });
};

export const showSignUp: Callback = () => {
  bus.emit('show view', { name: 'signup' });
};

export const showProfile: Callback = () => {
  bus.emit('show view', { name: 'profile' });
};

export const showHomepage: Callback = () => {
  bus.emit('show view', { name: 'homepage' });
};

export const signOut: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const addUser: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => user.set(value))
    .then(() => bus.emit('add user finished', undefined))
    .catch((err) => console.error(err));
};

export const cartGetRequest: Callback = () => {
  bus.emit('cart get request', undefined);
};

export const homepageArrayParse: Callback = (response: AjaxResponse) => {
  const { responseText } = response;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((obj: Product[]) => bus.emit('add product array to homepage', obj))
    .catch((err) => console.log(err));
};

export const homepage: Callback = () => {
  bus.emit('homepage state confirmed', { pathname: '/' });
};

export const showCart: Callback = () => {
  bus.emit('show view', { name: 'cart' });
};

export const showProductPage: Callback = (obj: { 'context': Product }) => {
  const { context } = obj;

  bus.emit('show view', { name: 'productPage', context });
};

export const productStateConfirmed: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parseObj: Product) => bus.emit('product state confirmed', { pathname: `/product?id=${parseObj.id}`, context: parseObj }))
    .catch((err) => console.error('product page response parse error', err));
};

export const category: Callback = () => {
  bus.emit('category state confirmed', { pathname: '/category' });
};

export const categoryArrayParse: Callback = (response: AjaxResponse) => {
  const { responseText } = response;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((obj: Product[]) => bus.emit('add product array to category page', obj))
    .catch((err) => console.log(err));
};

export const showCategoryPage: Callback = () => {
  bus.emit('show view', { name: 'categoryPage' });
};
