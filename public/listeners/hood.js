/* eslint-disable import/extensions */
import * as hood from '../callbacks/hood.js';
import eventBus from '../events/eventBus.js';

const hoodListeners = [
  {
    event: 'logo-click',
    callback: [
      hood.logoClick,
      // () => {
      //   eventBus.emit('showView', {
      //     name: 'Homepage'
      //   });
      // }
    ]
  },
  {
    event: 'hood-click',
    callback: [
      hood.request

      // hood.showProfile

      // () => {
      //   eventBus.emit('showView', {
      //     name: 'Signin'
      //   });
      // }
    ]
  },
  {
    event: 'authorization',
    callback: [
      () => {
        console.console.log('authorization');
      }
    ]
  },
  {
    event: 'no authorization',
    callback: [
      () => {
        console.console.log('no authorization');
      }
    ]
  },
];

export default hoodListeners;
