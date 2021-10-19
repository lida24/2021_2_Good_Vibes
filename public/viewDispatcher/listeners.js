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
      model.homepageStateRequest
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
      model.homepageStateConfirmed,
      // model.histAdd
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
      model.signinStateConfirmed,
      // model.histAdd
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
  {
    event: 'cookie check fail',
    callback: [
      model.cookieCheckFail
    ]
  },

  // ================================
  {
    event: 'signup state request',
    callback: [
      model.signupStateRequest
    ]
  },
  {
    event: 'signup state confirmed',
    callback: [
      model.signupStateConfirmed,
      // model.histAdd
    ]
  },
  {
    event: 'signup state denied',
    callback: [
      model.signupStateDenied
    ]
  },

  // ================================
  {
    event: 'product state request',
    callback: [
      model.productStateRequest
    ]
  },
  {
    event: 'product state confirmed',
    callback: [
      model.productStateConfirmed
      // model.histAdd
    ]
  },
  {
    event: 'product state denied',
    callback: [
      model.productStateDenied
    ]
  },

];

export default viewDispatcherListeners;
