/* eslint-disable import/extensions */
import * as model from '../callbacks/hood.js';
import eventBus from '../events/eventBus.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: [
      model.logoClick,
      () => {
        eventBus.emit('Homepage', 'Homepage');
      }
    ]
  },
  {
    event: 'profile-click',
    // callback: () => {
    //   eventBus.emit('hide-Hood');
    // }
    callback: [
      model.profileClick,
      () => {
        eventBus.emit('Signin', 'Signin');
      }
    ]
  }
];

export default hoodListeners;
