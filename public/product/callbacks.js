/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const homepageStateRequest = () => {
  eventBus.emit('homepage state request');
};

export const addHomepageToHistory = () => {
  eventBus.emit('history add', 'homepage');
};

export const a = 0;
