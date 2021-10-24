/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const showCart = () => {
  eventBus.emit('cart ajax request');
};

export const request = () => {
    eventBus.emit('profile ajax request');
  };