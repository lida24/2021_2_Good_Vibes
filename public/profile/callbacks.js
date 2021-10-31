/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import user from '../objects/user.js';


export const mouseEnter = () => {
  const uploadBtn = document.getElementsByClassName('uploadBtn')[0];
  uploadBtn.style.display = "block";
};

export const mouseLeave = () => {
  const uploadBtn = document.getElementsByClassName('uploadBtn')[0];
  uploadBtn.style.display = "none";
}

export const uploadBtnClick = () => {
  const file = document.getElementsByClassName('uploadFile')[0];
  file.style.display = "block";
}

export const changePhoto = (reader) => {
  const img = document.getElementsByClassName('photo')[0];
  img.setAttribute('src', reader.result);
}

export const sendLogin = () => {
  const login = document.getElementsByName('login')[0].value.trim();
  // this.changeLogin(login);

  console.log(user);
};

export const logout = () => {
  eventBus.emit('signout ajax request');
};

export const signoutStateRequest = () => {
  eventBus.emit('signout state request');
};

export const addHomepageToHistory = () => {
  eventBus.emit('history add', 'homepage');
};

export const avatarUploadRequest = () => {
  const file = document.getElementsByClassName('uploadFile')[0];
  const choosedFile = file.files[0];

  if (choosedFile) {
    eventBus.emit('avatar upload request', choosedFile);
  }
};

export const avatarUploadSuccess = (responseText) => {
  console.log('avatar upload success', responseText);
};

export const avatarUploadFail = (responseText) => {
  console.error('avatar upload fail', responseText);
};
