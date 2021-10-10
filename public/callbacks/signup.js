/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import Validate from '../scripts/inputDataValidation.js';

export const signupDataValidation = (signupData) => {
  const response = Validate.signUp(signupData);

  if (response) {
    eventBus.emit('signupDataError', response);
    return;
  }

  eventBus.emit('hideSingupAlertLabel');
  console.log('signup Ajax request');
};

export const signupErrorHandler = (response) => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.innerText = response;
  alertLabel.style.visibility = 'visible';
};

export const hideSingupAlertLabel = () => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};
