/* eslint-disable import/extensions */
import * as model from '../model/model.js';
import eventBus from './eventBus.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: model.logoClick
    // callback: () => {
    //   eventBus.emit('show-Hood');
    // }
  },
  {
    event: 'profile-click',
    callback: () => {
      eventBus.emit('hide-Hood');
    }
  }
];

export default hoodListeners;
