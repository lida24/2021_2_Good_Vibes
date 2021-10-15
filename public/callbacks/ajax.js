/* eslint-disable import/extensions */
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
      console.error(error['error description']);
    });
};

export const a = 9;
