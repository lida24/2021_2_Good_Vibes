import { Connection } from '../../types';
import * as cart from './callbacks';

const connections: Connection[] = [
  {
    event: 'checkout button click',
    callback: cart.addressStateRequest,
  },
  {
    event: 'cart shown',
    callback: cart.productArrayRequest,
  },
  {
    event: 'product array request confirmed',
    callback: cart.showCartItems,
  },
];

export default connections;
