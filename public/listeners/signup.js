/* eslint-disable import/extensions */
import * as model from '../callbacks/signup.js';
import eventBus from '../events/eventBus.js';

const signupListeners = [
  {
    event: 'signinBtn-click',
    callback: [
      () => {
        eventBus.emit('Signin', 'Signin');
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
  }

];

export default signupListeners;
