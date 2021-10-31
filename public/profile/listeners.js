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
      profile.sendLogin,
      profile.avatarUploadRequest
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
  },

  {
    event: 'avatar upload success',
    callback: [
      profile.avatarUploadSuccess
    ]
  },
  {
    event: 'avatar upload fail',
    callback: [
      profile.avatarUploadFail
    ]
  }
];

export default profileListeners;
