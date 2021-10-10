/* eslint-disable import/extensions */
import * as model from '../callbacks/hood.js';
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
      model.profileClick
    ]
  }
];

export default hoodListeners;
