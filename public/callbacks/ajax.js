/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import ajax from '../scripts/ajax.js';

const backendAddress = 'https://ozonback.herokuapp.com';

export const signin = (data) => {
  console.log(data);
  ajax.post({
    url: `${backendAddress}/login`,
    body: data
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error['error description']);
      eventBus.emit('signinDataError', error);
    });
};

export const a = 9;
