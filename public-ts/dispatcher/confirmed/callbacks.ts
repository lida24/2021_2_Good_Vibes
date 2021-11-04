import bus from '../../init/bus';
import router from '../../rout/router';
import { Callback } from '../../types';

export const signIn: Callback = () => {
  bus.emit('show view', { name: 'signin' });

  router.add('/signin');
};

export const signUp: Callback = () => {
  bus.emit('show view', { name: 'signup' });

  router.add('/signup');
};

export const profile: Callback = () => {
  bus.emit('show view', { name: 'profile' });

  router.add('/profile');
};
