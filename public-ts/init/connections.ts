import { Connection } from '../types';
import * as init from './callbacks';

const connections: Connection[] = [
  {
    event: 'cookie check request',
    callback: init.cookieCheck,
  },
  {
    event: 'cart get request',
    callback: init.cartGet,
  },
  {
    event: 'category get request',
    callback: init.categoryGet,
  },
];

export default connections;
