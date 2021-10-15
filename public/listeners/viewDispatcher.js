/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from '../callbacks/viewDispatcher.js';
import eventBus from '../events/eventBus.js';

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
      model.showSignin
    ]
  },
  {
    event: 'authorization',
    callback: [
      model.showProfile
    ]
  }
];

export default viewDispatcherListeners;
