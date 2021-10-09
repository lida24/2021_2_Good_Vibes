/* eslint-disable import/extensions */
import * as model from '../model/model.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: model.logoClick
  },
  {
    event: 'profile-click',
    callback: model.profileClick
  }
];

export default hoodListeners;
