/* eslint-disable import/extensions */
import * as signup from './callbacks.js';

const signupListeners = [
  {
    event: 'signin click',
    callback: [
      signup.cleanInputs,
      signup.hideError,
      signup.signinStateRequest
    ]
  },
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
      signup.homepageStateRequest
    ]
  },
  {
    event: 'signup fail',
    callback: signup.handleFail
  }
];

export default signupListeners;
