/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import { getCartItems } from '../objects/cart.js';
import { setCartItems } from '../objects/cart.js';

/* export const showCart = () => {
  eventBus.emit('cart ajax request');
}; */

export const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);
  if (existItem) {
      cartItems = cartItems.map((x) =>
      x.product === existItem.product ? item : x
    );
  } else {
    cartItems = [...cartItems, item];
  }
  setCartItems(cartItems);
  eventBus.emit('product ajax request');
}; 

export const request = () => {
    eventBus.emit('profile ajax request');
  };