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
    .then((responseText) => {
      console.log(responseText);
    })
    .catch(({ responseText }) => {
      const response = JSON.parse(responseText);
      eventBus.emit('signinDataError', response['error description']);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const a = 9;
