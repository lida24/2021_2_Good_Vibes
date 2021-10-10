/* eslint-disable import/extensions */
import * as model from '../callbacks/hood.js';
import eventBus from '../events/eventBus.js';
// import eventBus from '../controller/eventBus.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: [
      model.logoClick
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
