/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import validate from '../scripts/inputDataValidation.js';

export const signinDataValidation = (signinData) => {
  const response = validate.signIn(signinData);

  if (response) {
    eventBus.emit('signinDataError', response);
    return;
  }

  eventBus.emit('hideSinginAlertLabel');

  eventBus.emit('signin ajax request', signinData);
};

export const signinErrorHandler = (response) => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.innerText = response;
  alertLabel.style.visibility = 'visible';
};

export const hideAlertLabel = () => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};
