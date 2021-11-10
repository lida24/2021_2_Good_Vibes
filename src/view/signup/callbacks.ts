import bus from '../../init/bus';
import { Callback } from '../../types';
import validate from '../../validator/inputData';

export const SignInShow: Callback = () => {
  bus.emit('signIn state request', undefined);
};

export const inputDataValidate: Callback = () => {
  const usernameInput = <HTMLInputElement>document.getElementsByClassName('form__login')[0];
  const emailInput = <HTMLInputElement>document.getElementsByClassName('form__email')[0];
  const passwordInput = <HTMLInputElement>document.getElementsByClassName('form__password')[0];
  const repasswordInput = <HTMLInputElement>document.getElementsByClassName('form__repassword')[0];

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const repassword = repasswordInput.value.trim();

  const data = {
    username,
    email,
    password,
    repassword,
  };

  const error = validate.signUp(data);

  if (error) {
    bus.emit('show alert', { error });
    return;
  }

  bus.emit('hide alert', undefined);

  bus.emit('signUp validation complete', data);
};

export const showAlert: Callback = (obj: { 'error': string }) => {
  const { error } = obj;

  const alertLabel = <HTMLLabelElement>document.getElementsByClassName('form__error')[0];
  alertLabel.style.display = 'block';
  alertLabel.textContent = error;
};

export const hideAlert: Callback = () => {
  const alertLabel = <HTMLLabelElement>document.getElementsByClassName('form__error')[0];
  alertLabel.style.display = 'none';
};

export const ajaxRequest: Callback = (obj: {
  'username': string,
  'email': string,
  'password': string,
  'repassword': string,
}) => {
  bus.emit('signup ajax request', obj);
};

export const handleSignUpDenied: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => bus.emit('show alert', { error: value['error description'] }))
    .catch((error) => console.error('ajax response parse error', error));
};

export const cleanInputs: Callback = () => {
  const usernameInput = <HTMLInputElement>document.getElementsByClassName('form__login')[0];
  const emailInput = <HTMLInputElement>document.getElementsByClassName('form__email')[0];
  const passwordInput = <HTMLInputElement>document.getElementsByClassName('form__password')[0];
  const repasswordInput = <HTMLInputElement>document.getElementsByClassName('form__repassword')[0];

  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  repasswordInput.value = '';
};
