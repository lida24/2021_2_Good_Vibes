/* eslint-disable import/extensions */

import eventBus from './eventBus.js';

const signinEvents = (element) => {
  // ----------------------------------------
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';

  // ----------------------------------------
  const signupBtn = document.getElementById('register-href');
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('signupBtn-click');
  });
};
export default signinEvents;
