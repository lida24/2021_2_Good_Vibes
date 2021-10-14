/* eslint-disable import/extensions */
import * as model from '../callbacks/hood.js';
import eventBus from '../events/eventBus.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: [
      model.logoClick,
      () => {
        eventBus.emit('Homepage', {
          name: 'Homepage'
        });
      }
    ]
  },
  {
    event: 'profile-click',
    callback: [
      model.profileClick,
      () => {
        eventBus.emit('Signin', {
          name: 'Signin'
        });
      }
    ]
  }
];

export default hoodListeners;
