/* eslint-disable import/extensions */
import * as ajax from '../callbacks/ajax.js';

const ajaxListeners = [
  {
    event: 'signin ajax request',
    callback: ajax.signin
  }
];

export default ajaxListeners;
