/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const productEvents = (element) => {
  console.log('productEvents');

  // -------------------------------
  const backToResultBtn = element.getElementsByClassName('back-to-result')[0];

  backToResultBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('backToResult click');
  });
};

export default productEvents;
