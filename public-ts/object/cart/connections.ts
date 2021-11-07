import { Connection } from '../../types';
import * as cart from './callbacks';

const connections: Connection[] = [
  {
    event: 'cart get confirmed',
    callback: cart.load,
  },
  {
    event: 'signout confirmed',
    callback: cart.drop,
  },
  {
    event: 'add product to cart',
    callback: cart.addProductMiddleware,
  },
  {
    event: 'put product to cart confirmed',
    callback: cart.handleResponse,
  },
  {
    event: 'put product to cart',
    callback: cart.put,
  },
];

export default connections;
