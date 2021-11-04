import bus from '../../init/bus';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  bus.emit('show view', { name: 'signin' });
};

export const signUp: Callback = () => {
  bus.emit('show view', { name: 'signup' });
};

export const profile: Callback = () => {
  bus.emit('show view', { name: 'profile' });
};
