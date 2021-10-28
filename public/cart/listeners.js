/* eslint-disable import/extensions */
import * as cart from './callbacks.js';

const cartListeners = [
  {
    event: 'order click',
    callback: [
      cart.showOrder
    ]
  },
  {
    event: 'renderItemCart',
    callback: [
      cart.renderItemCart
    ]
  },
];

export default cartListeners;