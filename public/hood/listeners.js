/* eslint-disable import/extensions */
import * as hood from './callbacks.js';

const hoodListeners = [
  {
    event: 'logo button click',
    callback: [
      hood.homepageStateRequest
    ]
  },
  {
    event: 'profile button click',
    callback: [
      hood.profileStateRequest
    ]
  }
];

export default hoodListeners;
