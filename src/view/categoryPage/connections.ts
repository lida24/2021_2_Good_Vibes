import { Connection } from '../../types';
import * as categoryPage from './callbacks';

const connections: Connection[] = [
  {
    event: 'add product array to category page',
    callback: categoryPage.addProductArray,
  },
];

export default connections;
