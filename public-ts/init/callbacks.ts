import { Callback } from '../types';
import checkList from './checkList';
import bus from '../scripts/bus';
import SignIn from '../signin/view';

export const initRequestsCheck: () => void = () => {
  let res = true;

  Object.keys(checkList).forEach((key) => {
    if (checkList[key] === false) {
      res = false;
      return false;
    }
    return true;
  });

  if (!res) {
    return;
  }

  bus.emit('init check success', undefined);

  Object.keys(checkList).forEach((key) => {
    checkList[key] = false;
  });
};

export const cookieCheckFinished: Callback = () => {
  // console.log('cookieCheck');

  checkList.cookie = true;
  initRequestsCheck();
};

export const cartGetFinished: Callback = () => {
  // console.log('cartGet');

  checkList.cart = true;
  initRequestsCheck();
};

export const categoryGetFinished: Callback = () => {
  // console.log('categoryGet');

  checkList.category = true;
  initRequestsCheck();
};

export const signInShow: Callback = () => {
  // const main = <HTMLElement>document.getElementById('main-container');
  const signin = new SignIn('main');

  // signin.render();
  document.getElementById('main-container').replaceWith(signin.self);
};
