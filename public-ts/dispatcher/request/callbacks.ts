import bus from '../../init/bus';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  bus.emit('signIn state confirmed', { state: 'signin' });
};

export const signUp: Callback = () => {
  bus.emit('signUp state confirmed', { state: 'signup' });
};

export const profile: Callback = () => {
  bus.emit('profile state confirmed', { state: 'profile' });
};
