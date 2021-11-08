/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const cartpageEvents = (element) => {
  const orderBtn = element.getElementsByClassName('btn')[0];

  orderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('order click');
  });


  /*   const cartpageBtn = element.getElementsByClassName('cart-href')[0];
    
    cartpageBtn.addEventListener('click', (event) => {
      event.preventDefault();
      eventBus.emit('cart ajax request');
    }); */

  eventBus.on('cart clean', () => {
    // const cartList = element.getElementsByClassName('cart-list-container')[0];
    const cartList = element.getElementsByClassName('cart-list__items')[0];
    const subtotal = element.getElementsByClassName('cart__subtotal')[0];

    // cartList.innerHTML = '';

    // cartList.forEach((item) => {
    //   item.remove();
    // });

    // for (const item of cartList) {
    //   item.remove();
    // }

    const array = Array.from(cartList);
    array.forEach((item) => {
      item.remove();
    });

    subtotal.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'cart-list__items';
    element.getElementsByClassName('cart-list__container')[0].appendChild(div);
  });
};

export default cartpageEvents;
