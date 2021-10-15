/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import Validate from '../scripts/inputDataValidation.js';

// export const signinRequest = (data) => {

// };

export const signinDataValidation = (signinData) => {
  const response = Validate.signIn(signinData);

  if (response) {
    eventBus.emit('signinDataError', response);
    return;
  }

  eventBus.emit('hideSinginAlertLabel');

  // console.log('signin Ajax request');
  eventBus.emit('signin ajax request', signinData);
  // signinRequest(signinData);
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
