/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const showCart = () => {
  eventBus.emit('showView', {
    name: 'Cart'
  });
};

export const request = () => {
    eventBus.emit('profile ajax request');
  };