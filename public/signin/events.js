/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';

const signinEvents = (element) => {
  // ----------------------------------------
  const alertLabel = document.getElementsByClassName('form__error')[0];
  /* alertLabel.style.display = 'block'; */

  // ----------------------------------------
  const signupBtn = document.getElementsByClassName('form__link-signup')[0];
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('signup click');
  });

  // ----------------------------------------
  element.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = element.getElementsByClassName('form__login')[0];
    const passwordInput = element.getElementsByClassName('form__password')[0];

    const signinData = {
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim()
    };

    eventBus.emit('signin submit', signinData);
  });
};
export default signinEvents;
