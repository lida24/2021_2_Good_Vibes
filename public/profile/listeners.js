/* eslint-disable import/extensions */
import * as model from './callbacks.js';

const profileListeners = [
  {
    event: 'update click',
    callback: [
      model.sendLogin
    ]
  },
  {
    event: 'logout',
    callback: [
      model.logout
    ]
  }
];

export default profileListeners;
