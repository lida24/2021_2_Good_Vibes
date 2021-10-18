/* eslint-disable import/extensions */
import * as model from './callbacks.js';
// import eventBus from '../scripts/eventBus.js';

const productCardListeners = [
  {
    event: 'productName-href click',
    callback: [
      // model.productPageGenerate
      model.productAjaxRequest
    ]
  },
  {
    event: 'productImg-href click',
    callback: [
      model.productAjaxRequest
    ]
  },
  {
    event: 'product response',
    callback: [
      model.productPageGenerate
    ]
  }
];

export default productCardListeners;
