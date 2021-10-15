/* eslint-disable import/extensions */
import * as signin from '../callbacks/signin.js';

const signinListeners = [
  {
    event: 'signup click',
    callback: [
      signin.cleanInputs,
      signin.hideAlertLabel,
      signin.signup
    ]
  },


  {
    event: 'signin submit',
    callback: [
      signin.inputCheck
    ]
  },
  {
    event: 'validation success',
    callback: [
      signin.hideAlertLabel,
      // signin.request
    ]
  },
  {
    event: 'validation fail',
    callback: [
      signin.showError
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
