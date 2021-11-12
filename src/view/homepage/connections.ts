import { Connection } from '../../types';
import * as homepage from './callbacks';

const connections: Connection[] = [
  {
    event: 'add product array to homepage',
    callback: homepage.addProductArray,
  },
  {
    event: 'homepage hidden',
    callback: homepage.savePageYOffset,
  },
  {
    event: 'homepage shown',
    callback: homepage.scrollToPageYOffset,
  },
];

export default connections;
