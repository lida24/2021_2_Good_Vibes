/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import validate from '../scripts/inputDataValidation.js';
import user from '../objects/user.js';

export const signupDataValidation = (signupData) => {
  const response = validate.signUp(signupData);

  if (response) {
    eventBus.emit('signupDataError', response);
    return;
  }

  eventBus.emit('hideSingupAlertLabel');


  eventBus.emit('signup ajax request', signupData);
};


export const inputCheck = (data) => {
  const response = validate.signUp(data);

  if (response) {
    eventBus.emit('signup validation fail', response);
    return;
  }

  eventBus.emit('signup validation success', data);
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


export const showSignin = () => {
  eventBus.emit('showView', {
    name: 'Signin'
  });
};

export const hideError = () => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};

export const cleanInputs = () => {
  const usernameInput = document.getElementsByClassName('login')[0];
  const emailInput = document.getElementsByClassName('email')[0];
  const passwordInput = document.getElementsByClassName('password')[0];
  const repasswordInput = document.getElementsByClassName('repassword')[0];

  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  repasswordInput.value = '';
};

export const request = (data) => {
  eventBus.emit('signup ajax request', data);
};

export const showError = (error) => {
  const alertLabel = document.getElementById('alert-label');
  alertLabel.innerText = error;
  alertLabel.style.visibility = 'visible';
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

export const showHomepage = () => {
  eventBus.emit('showView', {
    name: 'Homepage'
  });
};

export const handleFail = (responseText) => {
  try {
    const responseObj = JSON.parse(responseText);
    showError(responseObj['error description']);
  } catch (error) {
    console.error(error);
  }
};
