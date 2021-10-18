/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const logoClick = () => {
  console.log('logo click');

  // eventBus.emit('homepage ajax request');

  eventBus.emit('showView', {
    name: 'Homepage'
  });


};

export const showProfile = () => {
  eventBus.emit('showView', {
    name: 'Profile'
  });
};

export const request = () => {
  eventBus.emit('profile ajax request');
};

export const logoClick = () => {
  eventBus.emit('cart ajax request');
  };