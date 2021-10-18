/* eslint-disable import/extensions */
import * as hood from './callbacks.js';

const hoodListeners = [
  {
    event: 'logo button click',
    callback: [
      // hood.showHomepage
      hood.toHomepageState
    ]
  },
  {
    event: 'profile button click',
    callback: [
      // hood.profileRequest
      hood.toProfileState
    ]
  }
];

export default hoodListeners;
