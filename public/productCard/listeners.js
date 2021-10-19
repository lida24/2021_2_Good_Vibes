/* eslint-disable import/extensions */
import * as product from './callbacks.js';
// import eventBus from '../scripts/eventBus.js';

const productCardListeners = [
  // {
  //   event: 'productName-href click',
  //   callback: [
  //     // model.productPageGenerate
  //     model.productAjaxRequest
  //   ]
  // },
  // {
  //   event: 'productImg-href click',
  //   callback: [
  //     model.productAjaxRequest
  //   ]
  // },
  // {
  //   event: 'product response',
  //   callback: [
  //     model.productPageGenerate
  //   ]
  // },

  // =======================
  {
    event: 'productName-href click',
    callback: [
      product.productStateRequest
    ]
  },
  {
    event: 'productImg-href click',
    callback: [
      product.productStateRequest
    ]
  }

];

export default productCardListeners;
