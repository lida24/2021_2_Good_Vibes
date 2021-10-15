/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import validate from '../scripts/inputDataValidation.js';
import user from '../context/user.js';

export const dataValidation = (signinData) => {
  const response = validate.signIn(signinData);

  if (response) {
    eventBus.emit('signinDataError', response);
    return;
  }

  eventBus.emit('hideSinginAlertLabel');

  eventBus.emit('signin ajax request', signinData);
};

export const errorHandler = (response) => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.innerText = response;
  alertLabel.style.visibility = 'visible';
};

export const hideAlertLabel = () => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};

export const fail = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    eventBus.emit('signinDataError', responseObj['error description']);
  } catch (error) {
    console.error(error);
  }
};

export const showSignup = () => {
  eventBus.emit('showView', {
    name: 'Signup'
  });
};

export const showHomepage = () => {
  eventBus.emit('showView', {
    name: 'Homepage'
  });
};

export const cleanInputs = () => {
  const usernameInput = document.getElementsByClassName('login')[0];
  const passwordInput = document.getElementsByClassName('password')[0];

  usernameInput.value = '';
  passwordInput.value = '';
};

export const inputCheck = (data) => {
  const response = validate.signIn(data);

  if (response) {
    eventBus.emit('validation fail', response);
    return;
  }

  eventBus.emit('validation success', data);
};

export const request = (data) => {
  eventBus.emit('signin ajax request', data);
};

export const showError = (error) => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.innerText = error;
  alertLabel.style.visibility = 'visible';
};

export const hideError = () => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};

export const handleFail = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    showError(responseObj['error description']);
  } catch (error) {
    console.error(error);
  }
};

export const addUser = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    user.set(responseObj);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};


export const success = (responseText) => {
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
