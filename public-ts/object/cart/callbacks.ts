import { AjaxResponse, Callback } from '../../types';
import cart from './cart';

export const load: Callback = (obj: AjaxResponse) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => cart.load(value))
    .then(() => console.log(cart))
    .catch((err) => console.error('cart get error', err));
};

export const drop: Callback = () => {
  cart.drop();
  console.log(cart);
};
