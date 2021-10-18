/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from './callbacks.js';
// import eventBus from '../scripts/eventBus.js';

const viewDispatcherListeners = [
  {
    event: 'showView',
    callback: [
      model.showView,
      model.rout
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
  },
  {
    event: 'logout success',
    callback: [
      model.showHomepage
    ]
  },



  {
    event: 'to homepage state',
    callback: [
      model.toHomepageState
    ]
  },
  {
    event: 'to profile state',
    callback: [
      model.toProfileState
    ]
  }
];

export default viewDispatcherListeners;
