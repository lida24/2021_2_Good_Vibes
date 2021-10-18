/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init, rout } from './viewDispatcher/callbacks.js';
import viewDispatcherListeners from './viewDispatcher/listeners.js';
import ajaxListeners from './ajax/listeners.js';
// import Router from './scripts/router.js';
import router from './router/router.js';
import routerListeners from './router/listeners.js';

// import route from './scripts/_router.js';

eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);

const root = document.getElementsByClassName('grid-container')[0];

// const router = new Router();
router.set(root);
router
  .register('/', 'Homepage')
  .register('/homepage', 'Homepage')
  .register('/login', 'Signin')
  .register('/signup', 'Signup')
  .register('/profile', 'Profile')
  .register('/logout', 'Signout')
  .register('/product', 'Product');
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