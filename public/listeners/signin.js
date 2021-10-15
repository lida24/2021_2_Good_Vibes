/* eslint-disable import/extensions */
import * as model from '../callbacks/signin.js';
import eventBus from '../events/eventBus.js';

const signinListeners = [
  {
    event: 'signupBtn-click',
    callback: [
      model.signup
    ]
  },
  {
    event: 'signinDataCheck',
    callback: [
      model.signinDataValidation
    ]
  },
  {
    event: 'signinDataError',
    callback: model.signinErrorHandler
  },
  {
    event: 'hideSinginAlertLabel',
    callback: model.hideAlertLabel
  },
  {
    event: 'signin success',
    callback: model.signinSuccess
  },
  {
    event: 'signin fail',
    callback: model.signinFail
  }

];

export default signinListeners;
