/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import Validate from '../scripts/inputDataValidation.js';
import user from '../objects/user.js';

export const signupDataValidation = (signupData) => {
  const response = Validate.signUp(signupData);

  if (response) {
    eventBus.emit('signupDataError', response);
    return;
  }

  eventBus.emit('hideSingupAlertLabel');


  eventBus.emit('signup ajax request', signupData);
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

export const signupSuccess = (responseText) => {
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

export const signupFail = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    eventBus.emit('signupDataError', responseObj['error description']);
  } catch (error) {
    console.error(error);
  }
};
