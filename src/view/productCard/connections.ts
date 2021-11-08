import { Connection } from '../../types';
import * as productCard from './callbacks';

const connections: Connection[] = [
  {
    event: 'image click',
    callback: productCard.productStateRequest,
  },
  {
    event: 'product name click',
    callback: productCard.productStateRequest,
  },
];

export default connections;
