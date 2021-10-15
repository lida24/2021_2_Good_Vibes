/* eslint-disable import/extensions */
import * as signin from '../callbacks/signin.js';

const signinListeners = [
  {
    event: 'signup click',
    callback: [
      signin.cleanInputs,
      signin.signup
    ]
  },
  {
    event: 'signinDataCheck',
    callback: signin.dataValidation
  },
  {
    event: 'signinDataError',
    callback: signin.errorHandler
  },
  {
    event: 'hideSinginAlertLabel',
    callback: signin.hideAlertLabel
  },
  {
    event: 'signin success',
    callback: signin.success
  },
  {
    event: 'signin fail',
    callback: signin.fail
  }

];

export default signinListeners;
