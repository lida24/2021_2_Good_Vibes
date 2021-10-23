/* eslint-disable import/extensions */
import * as product from './callbacks.js';
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
    callback: [
      product.showCart,
      product.showCart,
    ]
  },
];

export default productListeners;
