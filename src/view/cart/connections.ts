import { Connection } from '../../types';
import * as cart from './callbacks';

const connections: Connection[] = [
  {
    event: 'checkout button click',
    callback: cart.addressStateRequest,
  },
  {
    event: 'cart shown',
    callback: [
      cart.productArrayRequest,
      cart.calculateSubtotal,
    ],
  },
  {
    event: 'product array request confirmed',
    callback: [
      cart.showCartItems,
    ],
  },
  {
    event: 'delete product',
    callback: [
      cart.deleteView,
      cart.calculateSubtotal,
    ],
  },
];

export default connections;
