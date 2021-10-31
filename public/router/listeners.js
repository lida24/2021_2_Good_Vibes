/* eslint-disable import/extensions */
import * as router from './callbacks.js';

const routerListeners = [
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
  },

  // {
  //   event: 'cookie check success',
  //   callback: [
  //     router.rout
  //   ]
  // },
  // {
  //   event: 'cookie check finished',
  //   callback: [
  //     router.rout
  //   ]
  // },



];

export default routerListeners;
