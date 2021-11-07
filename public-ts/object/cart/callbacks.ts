import bus from '../../init/bus';
import { AjaxResponse, Callback, CartItem } from '../../types';
import user from '../user/user';
import cart from './cart';

export const load: Callback = (obj: AjaxResponse) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => cart.load(value))
    .then(() => cart.get())
    .catch((err) => console.error('cart get error', err));
};

export const drop: Callback = () => {
  cart.drop();
};

export const put: Callback = (obj: { 'id': number, 'number': number }) => {
  cart.set(obj);
};

export const handleResponse: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parseObj: CartItem) => bus.emit('put product to cart', { id: parseObj.product_id, number: parseObj.number }))
    .catch((err) => console.error('put product response parse error', err));
};

export const addProductMiddleware: Callback = (obj: { 'id': number, 'number': number }) => {
  let { number } = obj;
  const { id } = obj;

  number += cart.getItem(id)?.number || 0;

  if (!user.isAutorize()) {
    bus.emit('put product to cart', { id, number });
    return;
  }

  bus.emit('put product to cart request', { id, number });
};

export const setConfirmed: Callback = () => {
  cart.setConfirmed(true);
};
