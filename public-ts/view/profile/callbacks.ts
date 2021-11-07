import bus from '../../init/bus';
import user from '../../object/user/user';
import { Callback } from '../../types';

export const signOutRequest: Callback = () => {
  bus.emit('signout ajax request', undefined);
};

export const fieldsFill: Callback = () => {
  const loginInput = <HTMLInputElement>document.getElementById('login');
  const emailInput = <HTMLInputElement>document.getElementById('email');
  const photo = <HTMLImageElement>document.getElementsByClassName('photo')[0];

  loginInput.value = user.username;
  emailInput.value = user.email;
  photo.src = user.avatar;
};

export const profileUploadRequest: Callback = () => {
  const usernameInput = <HTMLInputElement>document.getElementById('login');
  const emailInput = <HTMLInputElement>document.getElementById('email');

  const obj = {
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  bus.emit('profile upload request', obj);
};

export const avatarUploadRequest: Callback = () => {
  const file = <HTMLInputElement>document.getElementsByClassName('uploadFile')[0];
  const choosedFile = file.files[0];

  if (choosedFile) {
    bus.emit('avatar upload request', choosedFile);
  }
};
