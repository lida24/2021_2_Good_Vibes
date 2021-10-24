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

export const homepageStateRequest = () => {
  eventBus.emit('homepage state request');
};

export const addHomepageToHistory = () => {
  eventBus.emit('history add', 'homepage');
};
