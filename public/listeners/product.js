/* eslint-disable import/extensions */
import * as model from '../callbacks/productCard.js';
import eventBus from '../events/eventBus.js';

const productListeners = [
  {
    event: 'backToResult click',
    callback: () => {
      console.log('backToResult click');
      eventBus.emit('Homepage', {
        name: 'Homepage'
      });
    }
  }
];

export default productListeners;
