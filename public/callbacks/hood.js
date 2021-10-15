/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';

export const logoClick = (data) => {
  console.log(data);
};

export const profileClick = () => {
  console.log('profile click');

  eventBus.emit('profile ajax request');
};
