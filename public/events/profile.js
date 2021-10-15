/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const profileEvents = (element) => {
  // ------------------------------
  const signoutBtn = element.getElementsByClassName('logout-link')[0];

  signoutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('signout ajax request');
  });
};

export default profileEvents;
