/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import ajax from '../scripts/ajax.js';
import user from '../context/user.js';

const backendAddress = 'https://ozonback.herokuapp.com';

export const signin = (data) => {
  console.log(data);
  ajax.post({
    url: `${backendAddress}/login`,
    body: data
  })
    .then((responseText) => {
      user.set(JSON.parse(responseText));
      console.log(user);    //==========================
    })
    .catch(({ responseText }) => {
      const response = JSON.parse(responseText);
      eventBus.emit('signinDataError', response['error description']);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const signup = (data) => {
  console.log(data);
  ajax.post({
    url: `${backendAddress}/signup`,
    body: data
  })
    .then((responseText) => {
      user.set(JSON.parse(responseText));
      console.log(user);    //==========================
    })
    .catch(({ responseText }) => {
      const response = JSON.parse(responseText);
      eventBus.emit('signupDataError', response['error description']);
    })
    .catch((error) => {
      console.error(error);
    });
};