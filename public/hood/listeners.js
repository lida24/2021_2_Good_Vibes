/* eslint-disable import/extensions */
import * as hood from './callbacks.js';
import eventBus from '../scripts/eventBus.js';

const hoodListeners = [
  {
    event: 'aside button click',
    callback: [
     /*  hood.addAsideConteiner, */
      
        hood.showAside
      
      // hood.addHomepageToHistory
    ]
  },
  {
    event: 'logo button click',
    callback: [
      hood.homepageStateRequest,
      // hood.addHomepageToHistory
    ]
  },
  {
    event: 'profile button click',
    callback: [
      hood.profileStateRequest,

      // hood.addProfileToHistory
    ]
  },
  // {
  //   event: 'authorization',
  //   callback: [
  //     () => {
  //       console.log('authorization');
  //     }
  //   ]
  // },
  // {
  //   event: 'no authorization',
  //   callback: [
  //     () => {
  //       console.log('no authorization');
  //     }
  //   ]
  // },
  {
    event: 'cart-click',
    callback: [
      // hood.showCart,

      // hood.cartGetRequest

     hood.cartStateRequest,

      // () => {
      //   eventBus.emit('product add request');
      // }
    ]
  },
];

export default hoodListeners;
