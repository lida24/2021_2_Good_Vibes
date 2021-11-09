import { Connection } from '../../types';
import * as productPage from './callbacks';

const connections: Connection[] = [
  {
    event: 'back to result button click',
    callback: productPage.backToCategoryPage,
  },
  {
    event: 'add product to cart',
    callback: productPage.addProductToCart,
  },
];

export default connections;
