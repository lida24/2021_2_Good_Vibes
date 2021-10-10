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
  }

];

export default signinListeners;