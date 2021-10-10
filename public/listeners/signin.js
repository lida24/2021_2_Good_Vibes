/* eslint-disable import/extensions */
import * as model from '../callbacks/signin.js';
import eventBus from '../events/eventBus.js';

const signinListeners = [
  {
    event: 'signupBtn-click',
    callback: [
      () => {
        eventBus.emit('Signup', 'Signup');
      }
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
  }

];

export default signinListeners;
