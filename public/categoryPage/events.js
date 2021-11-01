/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const categoryPageEvents = (element) => {
  // eventBus.emit('categoryPage ajax request');
  eventBus.emit('category request', element.getAttribyte());
};

export default categoryPageEvents;
