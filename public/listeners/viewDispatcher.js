/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from '../callbacks/viewDispatcher.js';

const viewDispatcherListeners = [
  {
    event: 'Signin',
    callback: [
      model.showView
    ]
  },
  {
    event: 'Signup',
    callback: [
      model.showView
    ]
  },
  {
    event: 'Homepage',
    callback: [
      model.showView,
      () => {
        console.log('! <= Homepage');
      }
    ]
  },
  {
    event: 'Product',
    callback: [
      model.showView
    ]
  }

];

export default viewDispatcherListeners;
