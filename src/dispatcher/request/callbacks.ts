import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import user from '../../object/user/user';
import { Callback } from '../../types';
import redirect from '../redirect';

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
    bus.emit('address state denied', { state: 'address' });
    return;
  }

  console.log(cart);
  console.log(cart.isEmpty());

  if (!cart.isConfirmed() || cart.isEmpty()) {
    bus.emit('address state denied', { state: 'address' });
    return;
  }

  bus.emit('address state confirmed', { pathname: '/address' });
};

export const category: Callback = (obj: { name: string }) => {
  bus.emit('category ajax request', obj);
};

export const payment: Callback = () => {
  // bus.emit('payment state confirmed', { pathname: '/payment' });
  if (!user.isAutorize()) {
    bus.emit('payment state denied', { state: 'payment' });
    return;
  }

  if (!cart.isConfirmed() || cart.isEmpty()) {
    bus.emit('payment state denied', { state: 'payment' });
    return;
  }

  bus.emit('payment state confirmed', { pathname: '/payment' });
};

export const confirmation: Callback = () => {
  // bus.emit('confirmation state confirmed', { pathname: '/confirmation' });
  if (!user.isAutorize()) {
    bus.emit('confirmation state denied', { state: 'confirmation' });
    return;
  }

  if (!cart.isConfirmed() || cart.isEmpty()) {
    bus.emit('confirmation state denied', { state: 'confirmation' });
    return;
  }

  bus.emit('confirmation state confirmed', { pathname: '/confirmation' });
};

export const savedState: Callback = () => {
  const state = redirect.popSavedState();

  bus.emit(`${state} state request`, undefined);
};
