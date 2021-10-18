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
  // {
  //   event: 'no authorization',
  //   callback: [
  //     model.showSignin
  //   ]
  // },
  // {
  //   event: 'authorization',
  //   callback: [
  //     model.showProfile
  //   ]
  // },
  {
    event: 'logout success',
    callback: [
      model.showHomepage
    ]
  },



  {
    event: 'homepage state request',
    callback: [
      model.homepageStateRequest
    ]
  },
  {
    event: 'authorization',
    callback: [
      model.homepageStateConfirmed
    ]
  },
  {
    event: 'no authorization',
    callback: [
      model.homepageStateDenied
    ]
  }
  {
    event: 'profile state request',
    callback: [
      model.profileStateRequest
    ]
  }
];

export default viewDispatcherListeners;
