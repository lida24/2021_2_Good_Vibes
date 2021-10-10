/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from '../callbacks/viewDispatcher.js';

const viewDispatcherListeners = [
  {
    event: 'profile-click',
    callback: [
      model.showView
      // model.signinView
      // model.viewCheck
    ]
  },
  {
    event: 'logo-click',
    callback: [
      model.showView
      // model.signupView
      // model.viewCheck
    ]
  }

];

export default viewDispatcherListeners;
