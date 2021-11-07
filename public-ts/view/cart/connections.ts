import { Connection } from '../../types';
import * as cart from './callbacks';

const connections: Connection[] = [
  {
    event: 'checkout button click',
    callback: cart.addressStateRequest,
  },
];

export default connections;
