/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import cart from '../objects/cart.js';

/* export const showCart = () => {
  eventBus.emit('profile ajax request');
}; */
export const addToCart = (responseText) => {

  try {
    let cartItems = responseText;
    console.log(cartItems);
    /* if (!cartItems.numbers['213']) {

    } */

    const existItem = cartItems.find((x) => x.id === responseText.id);
    if (existItem) {
      cartItems = cartItems.map((x) =>
        x.id === existItem.id ? item : x
      );
    } else {
      cartItems = [...cartItems, responseText];
    }
    cart.setCartItems(cartItems);
    console.log(cart.length());
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