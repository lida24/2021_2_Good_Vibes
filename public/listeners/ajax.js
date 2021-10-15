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
  },
  {
    event: 'signout ajax request',
    callback: ajax.signout
  },
  {
    event: 'profile ajax request',
    callback: ajax.profile
  }
];

export default ajaxListeners;
