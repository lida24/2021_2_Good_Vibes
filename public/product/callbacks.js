/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import cart from '../objects/cart.js';

/* export const showCart = () => {
  eventBus.emit('profile ajax request');
}; */
export const addToCart = (responseText) => {
  console.log(responseText);

  try {
    let cartItems = responseText.product;
    console.log(cartItems);
    /* if (!cartItems.numbers['213']) {

    } */

    /*const existItem = cartItems.find((x) => x.product === item.product);
    if (existItem) {
      cartItems = cartItems.map((x) =>
        x.product === existItem.product ? item : x
      );
    } else {
      cartItems = [...cartItems, item];
    }
    cart.setCartItems(cartItems);
    console.log(cart.getCartItems().length);*/
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