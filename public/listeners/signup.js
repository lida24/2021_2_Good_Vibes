/* eslint-disable import/extensions */
import * as model from '../callbacks/signin.js';
import eventBus from '../events/eventBus.js';

const signupListeners = [
  {
    event: 'signinBtn-click',
    callback: [
      () => {
        eventBus.emit('Signin', 'Signin');
      }
    ]
  }

];

export default signupListeners;