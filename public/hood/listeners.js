/* eslint-disable import/extensions */
import * as hood from './callbacks.js';

const hoodListeners = [
  {
    event: 'logo button click',
    callback: [
      hood.homepageStateRequest,
      // hood.addHomepageToHistory
    ]
  },
  {
    event: 'profile button click',
    callback: [
      hood.profileStateRequest,
      // hood.addProfileToHistory
    ]
  }
];

export default hoodListeners;
