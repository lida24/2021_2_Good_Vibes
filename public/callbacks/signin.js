/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import validate from '../scripts/inputDataValidation.js';
import user from '../context/user.js';

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

export const signinSuccess = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    user.set(responseObj);
    console.log(user);

    eventBus.emit('showView', {
      name: 'Homepage'
    });
  } catch (error) {
    console.error(error);
  }
};

export const signinFail = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    eventBus.emit('signinDataError', responseObj['error description']);
  } catch (error) {
    console.error(error);
  }
};
