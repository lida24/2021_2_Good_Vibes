/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const cartEvents = (element) => {
  eventBus.emit('cart ajax request');
};

export default cartEvents;
