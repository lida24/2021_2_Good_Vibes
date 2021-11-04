import bus from '../../init/bus';
import router from '../../rout/router';
import { Callback } from '../../types';

export const showSignIn: Callback = () => {
  bus.emit('show view', { name: 'signin' });
};

export const showSignUp: Callback = () => {
  bus.emit('show view', { name: 'signup' });
};

export const showProfile: Callback = () => {
  bus.emit('show view', { name: 'profile' });
};
