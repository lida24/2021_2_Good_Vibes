/* eslint-disable import/extensions */

import eventBus from './eventBus.js';

const signupEvents = (element) => {
  // ----------------------------------------
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';

  // ----------------------------------------
  const signinBtn = document.getElementById('signin-href');
  signinBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('signinBtn-click');
  });
};
export default signupEvents;