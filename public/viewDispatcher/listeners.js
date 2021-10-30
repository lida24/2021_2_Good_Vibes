/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from './callbacks.js';
// import eventBus from '../scripts/eventBus.js';
import * as history from './history.js';

const viewDispatcherListeners = [
  {
    event: 'showView',
    callback: [
      model.showView
    ]
  },

  {
    event: 'logout success',
    callback: [
      model.showSavedState,
      model.deleteUser,
      model.dropCart
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
      history.add
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
      model.saveCurrentState,
      model.profileStateRequest,

    ]
  },
  {
    event: 'no authorization',
    callback: [
      //       model.showSignin,
      model.profileStateDeniedEmit
    ]
  },
  {
    event: 'authorization',
    callback: [
      model.profileStateConfirmedEmit,
      // historyAdd
    ]
  },
  {
    event: 'profile state denied',
    callback: [
      model.profileStateDenied
    ]
  },
  {
    event: 'profile state confirmed',
    callback: [
      model.profileStateConfirmed,
      history.add
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
      history.add
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
      model.addUser,
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
      history.add
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
      model.productStateRequest,
      history.addProduct,
    ]
  },
  {
    event: 'product state confirmed',
    callback: [
      model.productStateConfirmed,
    ]
  },
  {
    event: 'product state denied',
    callback: [
      model.productStateDenied
    ]
  },

  {
    event: 'show saved state',
    callback: [
      model.showSavedState
    ]
  },


  // =============================
  {
    event: 'product context request',
    callback: [
      model.productContextRequest
    ]
  },

  // ==============================

  {
    event: 'add product to cart success',
    callback: [
      model.addToCart
    ]
  },
  {
    event: 'add product to cart fail',
    callback: [
      model.saveCurrentState,
      model.signinStateRequest
    ]
  },

  // ==================================
  {
    event: 'cart state request',
    callback: [
      model.saveCurrentState,
      model.cartStateRequest
    ]
  },
  {
    event: 'cart state confirmed',
    callback: [
      model.cartStateConfirmed,
      history.add
    ]
  },
  {
    event: 'cart state denied',
    callback: [
      model.cartStateDenied
    ]
  },

  // ==========================
  {
    event: 'cart get success',
    callback: [
      model.cartGetSuccess
    ]
  },
  {
    event: 'cart get fail',
    callback: [
      // model.cartGetFail
      // model.saveCurrentState,
      // model.signinStateRequest

      // model.cartStateDenied
    ]
  },

  {
    event: 'product array request success',
    callback: [
      model.productArrayRequestSuccess
    ]
  },
  {
    event: 'product array request fail',
    callback: [
      model.productArrayRequestFail
    ]
  }
];

export default viewDispatcherListeners;
