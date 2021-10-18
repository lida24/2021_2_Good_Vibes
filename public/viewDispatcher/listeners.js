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

  // ================================
  {
    event: 'homepage state request',
    callback: [
      model.homepageStateRequest
    ]
  },
  {
    event: 'homepage state confirmed',
    callback: [
      model.homepageStateConfirmed
    ]
  },
  {
    event: 'hompage state denied',
    callback: [
      model.homepageStateDenied
    ]
  },

  // ================================
  {
    event: 'profile state request',
    callback: [
      model.profileStateRequest
    ]
  },
  {
    event: 'no authorization',
    callback: [
      model.profileStateDenied
    ]
  },
  {
    event: 'authorization',
    callback: [
      model.profileStateConfirmed
    ]
  },

  // ================================
  {
    event: 'signin state request',
    callback: [
      model.signinStateRequest
    ]
  },
  {
    event: 'signin state confirmed',
    callback: [
      model.signinStateConfirmed
    ]
  },
  {
    event: 'signin state denied',
    callback: [
      model.signinStateDenied
    ]
  },

  // ================================
  {
    event: 'cookie check success',
    callback: [
      model.addUser
    ]
  },

];

export default viewDispatcherListeners;
