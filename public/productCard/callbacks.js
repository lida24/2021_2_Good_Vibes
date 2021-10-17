/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

// export const productPageGenerate = (prodFullData) => {
//   eventBus.emit('showView', {
//     name: 'Product',
//     context: prodFullData
//   });
// };

export const productPageGenerate = (responseText) => {
  const responseObj = JSON.parse(responseText);

  eventBus.emit('showView', {
    name: 'Product',
    context: responseObj
  });
};

export const productAjaxRequest = (id) => {
  // console.log(id);

  eventBus.emit('product ajax request', id);
};

export const a = 0;
