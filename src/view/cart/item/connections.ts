import { Connection } from '../../../types';
import * as item from './callbacks';

const connections: Connection[] = [
  {
    event: 'delete button click',
    callback: item.deleteCartItem,
  },
];

export default connections;
