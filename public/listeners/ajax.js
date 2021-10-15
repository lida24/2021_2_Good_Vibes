/* eslint-disable import/extensions */
import * as ajax from '../callbacks/ajax.js';

const ajaxListeners = [
  {
    event: 'signin ajax request',
    callback: ajax.signin
  },
  {
    event: 'signup ajax request',
    callback: ajax.signup
  }
];

export default ajaxListeners;
