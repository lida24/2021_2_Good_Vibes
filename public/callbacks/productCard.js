/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';

export const productPageGenerate = (prodFullData) => {
  eventBus.emit('showView', {
    name: 'Product',
    context: prodFullData
  });
};

export const productAjaxRequest = (id) => {
  // console.log(id);

  eventBus.emit('product ajax request', id);
};

export const a = 0;
