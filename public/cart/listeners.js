/* eslint-disable import/extensions */
import * as model from './callbacks.js';

const cartListeners = [
  {
    event: 'cart response',
    callback: [
      model.cartResponse
    ]
  }
];

export default cartListeners;