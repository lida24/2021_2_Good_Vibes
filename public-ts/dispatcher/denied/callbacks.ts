import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import user from '../../object/user/user';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  console.error('signIn state denied');

  bus.emit('profile state request', undefined);
};

export const signUp: Callback = () => {
  console.error('signUp state denied');

  bus.emit('profile state request', undefined);
};

export const profile: Callback = () => {
  console.error('profile state denied');

  bus.emit('signIn state request', undefined);
};

export const product: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;

  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => console.error('product request denied', value))
    .catch((err) => console.error('error product request denied response parse', err))
    .then(() => bus.emit('homepage state request', undefined));
};

export const address: Callback = () => {
  console.error('address state denied');

  if (!user.isAutorize()) {
    bus.emit('signIn state request', undefined);
    return;
  }

  if (!cart.isConfirmed()) {
    bus.emit('cart state request', undefined);
    return;
  }

  bus.emit('homepage state request', undefined);
};
