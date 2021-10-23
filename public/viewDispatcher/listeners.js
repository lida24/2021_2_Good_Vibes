/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from './callbacks.js';
import eventBus from '../scripts/eventBus.js';

const viewDispatcherListeners = [
  {
    event: 'showView',
    callback: [
      model.showView
    ]
  },
  {
    event: 'no authorization',
    callback: [
      model.showSignin,
      model.showCart
    ]
  },
  {
    event: 'authorization',
    callback: [
      model.showProfile
    ]
  },
  {
    event: 'logout success',
    callback: [
      model.showHomepage
    ]
  }
];

export default viewDispatcherListeners;
