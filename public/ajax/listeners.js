/* eslint-disable import/extensions */
import * as ajax from './callbacks.js';

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
  },
  {
    event: 'homepage ajax request',
    callback: ajax.homepage
  },
  {
    event: 'product ajax request',
    callback: ajax.product
  },
  {
    event: 'cookie check requset',
    callback: ajax.cookieCheck
  }
];

export default ajaxListeners;
