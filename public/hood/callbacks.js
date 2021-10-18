/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

// export const showHomepage = () => {
//   eventBus.emit('showView', {
//     name: 'Homepage'
//   });
// };

// export const profileRequest = () => {
//   eventBus.emit('profile ajax request');
// };

export const toHomepageState = () => {
  eventBus.emit('homepage state request');
};

export const toProfileState = () => {
  eventBus.emit('profile state request');
};
