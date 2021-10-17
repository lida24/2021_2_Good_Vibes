/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';

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
