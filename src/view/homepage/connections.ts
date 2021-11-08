import { Connection } from '../../types';
import * as homepage from './callbacks';

const connections: Connection[] = [
  {
    event: 'add product array to homepage',
    callback: homepage.addProductArray,
  },
];

export default connections;
