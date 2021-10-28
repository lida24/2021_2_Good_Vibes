/* eslint-disable import/extensions */
import * as router from './callbacks.js';

const routerListeners = [
  // {
  //   event: 'rout',
  //   callback: [
  //     router.rout
  //   ]
  // },
  {
    event: 'history add',
    callback: [
      router.add
    ]
  },
  {
    event: 'hood render finished',
    callback: [
      router.rout
    ]
  }
];

export default routerListeners;
