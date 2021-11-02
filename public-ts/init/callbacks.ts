import { Callback } from '../types';
import checkList from './state';
import bus from '../eventbus';

export const initRequestsCheck: () => void = () => {
  let res = true;

  Object.keys(checkList).forEach((key) => {
    if (checkList[key] === false) {
      res = false;
      return false;
    }
    return true;
  });

  if (res) {
    bus.emit('init check success', undefined);
  }
};

export const cookieCheckSuccess: Callback = () => {
  console.log('cookieCheck');

  checkList.cookie = true;
  initRequestsCheck();
};

export const cartGetSuccess: Callback = () => {
  console.log('cartGet');

  checkList.cart = true;
  initRequestsCheck();
};

export const categoryGetSuccess: Callback = () => {
  console.log('categoryGet');

  checkList.category = true;
  initRequestsCheck();
};
