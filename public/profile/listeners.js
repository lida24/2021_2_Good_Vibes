/* eslint-disable import/extensions */
import * as profile from './callbacks.js';

const profileListeners = [
  {
    event: 'update click',
    callback: [
      profile.sendLogin
    ]
  },
  {
    event: 'logout',
    callback: [
      // profile.signoutStateRequest
      profile.logout,
      profile.addHomepageToHistory
    ]
  }
];

export default profileListeners;
