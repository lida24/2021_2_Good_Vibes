import init from './init/script';
import router from './rout/router';

const root = <HTMLElement>document.getElementsByClassName('grit-container')[0];

router.set(root);

router
  .register('/', 'profile')
  .register('/profile', 'profile')
  .register('/signin', 'signIn')
  .register('/signup', 'signUp');

router.add(window.location.pathname);

// router.start();

init();
