/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';
import user from '../objects/user.js';

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
