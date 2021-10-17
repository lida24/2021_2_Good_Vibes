/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

// const changeLogin = (login) => {
//   document.getElementsByName('login')[0].value = login;
//   document.getElementById('login').textContent = login;

//   eventBus.emit('update click');
// };

const profileEvents = (element) => {
  // --------------------------------
  const updateBtn = element.getElementsByClassName('update-button')[0];

  updateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('update click');
  });
};

export default profileEvents;