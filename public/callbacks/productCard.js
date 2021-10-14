/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';

export const productPageGenerate = (prodFullData) => {
  // console.log('productPageGenerate', prodFullData);
  eventBus.emit('Product', {
    name: 'Product',
    context: prodFullData
  });
};

export const a = 0;
