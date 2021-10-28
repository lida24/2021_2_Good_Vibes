/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import cart from '../objects/cart.js';
/*import { response } from 'express';*/

/* export const showCart = () => {
  eventBus.emit('profile ajax request');
}; */
export const addToCart = (responseText) => {

  try {
    let cartItems = getCartItems();
    //console.log(cartItems);
    /* if (!cartItems.numbers['213']) {

    } */

    const existItem = cartItems.find((x) => x.id === responseText.id);
    if (existItem) {
      cartItems = cartItems.map((x) =>
        x.id === existItem.id ? responseText : x
      );
    } else {
      cartItems = [...cartItems, responseText];
    }
    cart.setCartItems(cartItems);
   // console.log(cart.length());
  } catch (error) {
    console.error(error);
  }
};


export const request = () => {
  eventBus.emit('product ajax request');
};

// export const showContext = () => {

// };

export const productContextRequest = () => {
  eventBus.emit('product context request');
};