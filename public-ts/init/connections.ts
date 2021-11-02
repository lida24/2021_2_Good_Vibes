import { Connection } from '../types';
import * as init from './callbacks';

const connections: Connection[] = [
  {
    event: 'cookie check success',
    callback: init.cookieCheckSuccess,
  },
  {
    event: 'cart get success',
    callback: init.cartGetSuccess,
  },
  {
    event: 'category get success',
    callback: init.categoryGetSuccess,
  },
];

export default connections;
