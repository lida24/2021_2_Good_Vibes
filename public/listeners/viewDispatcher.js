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
      // eventBus.emit('showView', {
      //   name: 'Signin'
      // })
      model.showSignin
    ]
  }
];

export default viewDispatcherListeners;
