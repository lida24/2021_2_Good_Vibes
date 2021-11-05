import bus from '../../init/bus';
import { Callback } from '../../types';
import validate from '../../validator/inputData';

export const SignUpShow: Callback = () => {
  bus.emit('signUp state request', undefined);
};

export const showAlert: Callback = (obj: { 'error': string }) => {
  const { error } = obj;

  const alertLabel = <HTMLLabelElement>document.getElementById('alert-label');
  alertLabel.style.visibility = 'visible';
  alertLabel.textContent = error;
};

export const hideAlert: Callback = () => {
  const alertLabel = <HTMLLabelElement>document.getElementById('alert-label');
  alertLabel.style.visibility = 'hidden';
};

export const inputDataValidate: Callback = (obj: { 'self': HTMLElement }) => {
  console.log('signin input data validate', obj);

  const { self } = obj;

  const usernameInput = <HTMLInputElement>self.getElementsByClassName('login')[0];
  const passwordInput = <HTMLInputElement>self.getElementsByClassName('password')[0];

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const error = validate.signIn({ username, password });

  if (error) {
    bus.emit('show alert', { error });
    return;
  }

  bus.emit('hide alert', undefined);

  bus.emit('validation complete', { username, password });
};

export const ajaxRequest: Callback = (obj: {
  'username': string,
  'password': string,
}) => {
  const { username, password } = obj;

  bus.emit('signin ajax request', { username, password });
};

export const cleanInputs: Callback = (obj: { 'self': HTMLElement }) => {
  const { self } = obj;

  const usernameInput = <HTMLInputElement>self.getElementsByClassName('login')[0];
  const passwordInput = <HTMLInputElement>self.getElementsByClassName('password')[0];

  usernameInput.value = '';
  passwordInput.value = '';
};

export const handleSignInDenied: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((value) => bus.emit('show alert', { error: value['error description'] }))
    .catch((error) => console.error('ajax response parse error', error));
};
