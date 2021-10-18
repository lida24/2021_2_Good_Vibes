/* eslint-disable import/extensions */
import * as signup from './callbacks.js';
import eventBus from '../scripts/eventBus.js';

const signupListeners = [
  // {
  //   event: 'signin click',
  //   callback: [
  //     () => {
  //       eventBus.emit('showView', {
  //         name: 'Signin'
  //       });
  //     }
  //   ]
  // },

  {
    event: 'signin click',
    callback: [
      signup.cleanInputs,
      signup.hideError,
      signup.showSignin
    ]
  },

  // {
  //   event: 'signup submit',
  //   callback: [
  //     model.signupDataValidation
  //   ]
  // },

  {
    event: 'signup submit',
    callback: [
      signup.inputCheck
    ]
  },
  {
    event: 'signup validation success',
    callback: [
      signup.hideError,
      signup.request
    ]
  },
  {
    event: 'signup validation fail',
    callback: [
      signup.showError
    ]
  },
  {
    event: 'signup success',
    callback: [
      signup.addUser,
      signup.showHomepage
    ]
  },
  {
    event: 'signup fail',
    callback: signup.handleFail
  }


  // {
  //   event: 'signupDataError',
  //   callback: model.signupErrorHandler
  // },
  // {
  //   event: 'hideSingupAlertLabel',
  //   callback: model.hideSingupAlertLabel
  // },
  // {
  //   event: 'signup success',
  //   callback: model.signupSuccess
  // },
  // {
  //   event: 'signup fail',
  //   callback: model.signupFail
  // }

];

export default signupListeners;
