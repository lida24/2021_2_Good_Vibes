/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const productCardEvents = ({ element, context }) => {
  // console.log('productCardEvents');

  // ----------------------------
  const productNameBtn = element.getElementsByClassName('productName-href')[0];
  productNameBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('productName-href click', context.id);
    // eventBus.emit('productName-href click', context);
  });

  // ----------------------------
  const productImgBtn = element.getElementsByClassName('productImg-href')[0];

  productImgBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('productImg-href click', context);
  });
};

export default productCardEvents;
