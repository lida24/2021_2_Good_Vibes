import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import user from '../../object/user/user';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  if (user.isAutorize()) {
    bus.emit('signIn state denied', undefined);
    return;
  }

  bus.emit('signIn state confirmed', { pathname: '/signin' });
};

export const signUp: Callback = () => {
  if (user.isAutorize()) {
    bus.emit('signUp state denied', undefined);
    return;
  }

  bus.emit('signUp state confirmed', { pathname: '/signup' });
};

export const profile: Callback = () => {
  if (!user.isAutorize()) {
    bus.emit('profile state denied', undefined);
    return;
  }

  bus.emit('profile state confirmed', { pathname: '/profile' });
};

export const homepage: Callback = () => {
  bus.emit('homepage ajax request', undefined);
};

export const product: Callback = (obj: { 'id': number }) => {
  bus.emit('product ajax request', obj);
};

export const cartState: Callback = () => {
  bus.emit('cart state confirmed', { pathname: '/cart' });
};

export const address: Callback = () => {
  if (!user.isAutorize()) {
    bus.emit('address state denied', undefined);
    return;
  }

  if (!cart.isConfirmed() || cart.isEmpty()) {
    bus.emit('address state denied', undefined);
    return;
  }

  bus.emit('address state confirmed', undefined);
};
