/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const homepageStateRequest = () => {
  eventBus.emit('homepage state request');
};

export const profileStateRequest = () => {
  eventBus.emit('profile state request');

  // eventBus.emit('signin state request');
};

export const addHomepageToHistory = () => {
  eventBus.emit('history add', 'homepage');
};

export const addProfileToHistory = () => {
  eventBus.emit('history add', 'profile');
};
