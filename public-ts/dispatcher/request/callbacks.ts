import bus from '../../init/bus';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  bus.emit('signIn state confirmed', undefined);
};

export const signUp: Callback = () => {
  bus.emit('signUp state confirmed', undefined);
};

export const profile: Callback = () => {
  bus.emit('profile state confirmed', undefined);
};
