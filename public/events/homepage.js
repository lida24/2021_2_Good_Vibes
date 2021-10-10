/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const homepageEvents = (element) => {
  console.log('homepageEvents');

  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');
  eventBus.emit('Product');

  // setTimeout(() => {
  //   eventBus.emit('Product');
  // }, 2000);
};

export default homepageEvents;
