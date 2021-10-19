/* eslint-disable import/extensions */
import * as product from './callbacks.js';

const productListeners = [
  {
    event: 'backToResult click',
    callback: [
      product.homepageStateRequest,
      product.addHomepageToHistory
    ]
  }
];

export default productListeners;
