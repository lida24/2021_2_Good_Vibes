/* eslint-disable import/extensions */
import * as profile from './callbacks.js';

const profileListeners = [
  {
    event: 'mouse enter',
    callback: [
      profile.mouseEnter
    ]
  },
  {
    event: 'mouse leave',
    callback: [
      profile.mouseLeave
    ]
  },
  {
    event: 'upload button click',
    callback: [
      profile.uploadBtnClick
    ]
  },
  {
    event: 'change photo',
    callback: [
      profile.changePhoto
    ]
  },
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
      // profile.addHomepageToHistory,
      // profile.
    ]
  }
];

export default profileListeners;
