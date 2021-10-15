/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const homepageEvents = (element) => {
  eventBus.emit('homepage ajax request');
};

export default homepageEvents;
