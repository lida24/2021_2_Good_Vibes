/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init, rout } from './viewDispatcher/callbacks.js';
import viewDispatcherListeners from './viewDispatcher/listeners.js';
import ajaxListeners from './ajax/listeners.js';
// import Router from './scripts/router.js';
import router from './router/router.js';
import routerListeners from './router/listeners.js';

// import route from './scripts/_router.js';


eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);
eventBus.on('init', init);
eventBus.emit('init');

const root = document.getElementsByClassName('grid-container')[0];

// const router = new Router();
router.set(root);
router
  .register('/', 'homepage')
  .register('/homepage', 'homepage')
  .register('/login', 'signin')
  .register('/signup', 'signup')
  .register('/profile', 'profile')
  .register('/logout', 'signout')
  .register('/product', 'product');
router.start();

eventBus.add(routerListeners);





// const router = new Router();
// router.set(document.getElementsByClassName('grid-container')[0]);
// router
//   .add('/', 'Homepage')
//   .add('/homepage', 'Homepage')
//   .add('/login', 'Signin')
//   .add('/signup', 'Signup')
//   .add('/profile', 'Profile')
//   .add('/logout', 'Signout')
//   .add('/product', 'Product');
// router.start();