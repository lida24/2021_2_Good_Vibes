/* eslint-disable import/extensions */
import * as model from '../productCard/callbacks.js';
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
  },
  {
    event: 'cart click',
    callback: product.request
  }
];

export default productListeners;
