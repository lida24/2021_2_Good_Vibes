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
    .then(({ responseText }) => JSON.parse(responseText))
    .then((responseObj) => {
      user.set(responseObj);
      console.log(user);    //==========================

      eventBus.emit('showView', {
        name: 'Profile'
      });
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
    .then(({ responseText }) => JSON.parse(responseText))
    .then((responseObj) => {
      user.set(responseObj);
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
