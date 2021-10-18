/* eslint-disable import/extensions */
import * as signin from './callbacks.js';

const signinListeners = [
  {
    event: 'signup click',
    callback: [
      signin.cleanInputs,
      signin.hideError,
      signin.showSignup
    ]
  },
  {
    event: 'signin submit',
    callback: [
      signin.inputCheck
    ]
  },
  {
    event: 'signin validation success',
    callback: [
      signin.hideError,
      signin.request
    ]
  },
  {
    event: 'signin validation fail',
    callback: [
      signin.showError
    ]
  },
  {
    event: 'signin success',
    callback: [
      signin.addUser,
      signin.showHomepage
    ]
  },
  {
    event: 'signin fail',
    callback: signin.handleFail
  }
];

export default signinListeners;
