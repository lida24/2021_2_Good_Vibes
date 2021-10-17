/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';

export const sendLogin = () => {
    const login = document.getElementsByName('login')[0].value.trim();
    this.changeLogin(login);
};