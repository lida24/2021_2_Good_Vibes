/* eslint-disable import/extensions */
import * as product from './callbacks.js';
import eventBus from '../scripts/eventBus.js';

const productListeners = [
  {
    event: 'backToResult click',
    callback: [
      product.homepageStateRequest,


      // product.addHomepageToHistory
    ]
    //     callback: () => {
    //       console.log('backToResult click');
    //       eventBus.emit('showView', {
    //         name: 'Homepage'
    //       });
    //     }
  },
  {
    event: 'cart click',
    callback:
      // product.addToCart
      [
        product.productContextRequest,
      ]

    // product.productContextRequest
    // product.showContext
  },
  {
    event: 'product context response',
    callback: [
      // product.addToCart,
      product.addToCartRequest
    ]
  },

  // {
  //   event: 'add product to cart success',
  //   callback: [
  //     product.handleResponse
  //   ]
  // },

  // {
  //   event: 'add to cart',
  //   callback: [
  //     product.addToCart
  //   ]
  // }
];

export default productListeners;
