import { Connection } from '../../types';
import * as productPage from './callbacks';

const connections: Connection[] = [
  {
    event: 'back to result button click',
    callback: productPage.backToCategoryPage,
  },
  {
    event: 'add product to cart',
    callback: productPage.changeBtn,

  },
  {
    event: 'cart button click',
    callback: productPage.cartStateRequest,
  },
  {
    event: 'productPage shown',
    callback: productPage.scrollToTop,
  },
];

export default connections;
