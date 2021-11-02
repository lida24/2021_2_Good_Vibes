import { Callback } from '../types';
import checkList from './checkList';
import bus from '../scripts/eventBus';

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
