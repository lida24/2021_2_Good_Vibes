import { Callback } from '../types';
import router from './router';

export const init: Callback = () => {
  const root = <HTMLElement>document.getElementsByClassName('grit-container')[0];
  router.set(root);

  router
    .register('/', 'profile')
    .register('/profile', 'profile')
    .register('/signin', 'signIn')
    .register('/signup', 'signUp');

  router.start();
};

export const a = 0;
