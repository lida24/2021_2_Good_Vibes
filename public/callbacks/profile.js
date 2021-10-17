/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import user from '../context/user.js';

export const sendLogin = () => {
    const login = document.getElementsByName('login')[0].value.trim();
    // this.changeLogin(login);

    console.log(user);
};

export const logout = () => {
    eventBus.emit('signout ajax request');
}

