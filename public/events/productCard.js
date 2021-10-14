/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const productCardEvents = (element) => {
  // console.log('productCardEvents');

  const productId = element.getAttribute('name');

  // ----------------------------
  const productNameBtn = element.getElementsByClassName('productName-href')[0];
  productNameBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('productName-href click', productId);
  });

  // ----------------------------
  const productImgBtn = element.getElementsByClassName('productImg-href')[0];

  productImgBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('productImg-href click', productId);
  });
};

export default productCardEvents;
