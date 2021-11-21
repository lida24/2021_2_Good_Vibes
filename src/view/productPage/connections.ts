import { product } from '../../ajax/callbacks';
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
    event: 'productPage shown',
    callback: [
      productPage.productCheckInCart,
      productPage.newCommentContainerShow,
      productPage.scrollToTop,
      productPage.commentsRequest,
    ],
  },
  {
    event: 'comments request confirmed',
    callback: [
      productPage.generateCommentsArray,
    ],
  },
];

export default connections;
