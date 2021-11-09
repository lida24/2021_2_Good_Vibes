import bus from '../../init/bus';
import { Callback } from '../../types';

export const homepageStateRequest: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const profileStateRequest: Callback = () => {
  bus.emit('profile state request', undefined);
};

export const cartStateRequest: Callback = () => {
  bus.emit('cart state request', undefined);
};

export const showAside: Callback = () => {
  bus.emit('show aside', undefined);
};
