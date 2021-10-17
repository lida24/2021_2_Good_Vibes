/* eslint-disable import/extensions */
import * as model from '../callbacks/signup.js';
import eventBus from '../scripts/eventBus.js';

const signupListeners = [
  {
    event: 'signinBtn-click',
    callback: [
      () => {
        eventBus.emit('showView', {
          name: 'Signin'
        });
      }
    ]
  },
  {
    event: 'signupDataCheck',
    callback: [
      model.signupDataValidation
    ]
  },
  {
    event: 'signupDataError',
    callback: model.signupErrorHandler
  },
  {
    event: 'hideSingupAlertLabel',
    callback: model.hideSingupAlertLabel
  },
  {
    event: 'signup success',
    callback: model.signupSuccess
  },
  {
    event: 'signup fail',
    callback: model.signupFail
  }

];

export default signupListeners;
