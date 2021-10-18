/* eslint-disable import/extensions */
import * as hood from './callbacks.js';

const hoodListeners = [
  {
    event: 'logo button click',
    callback: [
      hood.showHomepage
    ]
  },
  {
    event: 'profile button click',
    callback: [
      hood.profileRequest
    ]
  }
];

export default hoodListeners;
