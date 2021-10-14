/* eslint-disable import/extensions */
import * as model from '../callbacks/productCard.js';
import eventBus from '../events/eventBus.js';

const productCardListeners = [
  {
    event: 'productName-href click',
    callback: [
      model.productPageGenerate
    ]
  },
  {
    event: 'productImg-href click',
    callback: [
      model.productPageGenerate
    ]
  }
];

export default productCardListeners;
