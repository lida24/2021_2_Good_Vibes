/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';

const signupEvents = (element) => {
  // ----------------------------------------
  const alertLabel = document.getElementsByClassName('form__error')[0];
  /* alertLabel.style.visibility = 'hidden'; */

  // ----------------------------------------
  const signinBtn = document.getElementsByClassName('form__link-signin')[0];
  signinBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('signin click');
  });

  // ----------------------------------------
  element.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = element.getElementsByClassName('form__login')[0];
    const emailInput = element.getElementsByClassName('form__email')[0];
    const passwordInput = element.getElementsByClassName('form__password')[0];
    const repasswordInput = element.getElementsByClassName('form__repassword')[0];

    const signupData = {
      username: usernameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      repassword: repasswordInput.value.trim()
    };

    eventBus.emit('signup submit', signupData);
  });
};
export default signupEvents;
