/* eslint-disable import/extensions */
import * as model from '../callbacks/productCard.js';
import eventBus from '../scripts/eventBus.js';

const productListeners = [
  {
    event: 'backToResult click',
    callback: () => {
      console.log('backToResult click');
      eventBus.emit('showView', {
        name: 'Homepage'
      });
    }
  }
];

export default productListeners;
