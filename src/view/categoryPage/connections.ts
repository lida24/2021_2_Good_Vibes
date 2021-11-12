import { Connection } from '../../types';
import * as categoryPage from './callbacks';

const connections: Connection[] = [
  {
    event: 'add product array to category page',
    callback: categoryPage.addProductArray,
  },
  {
    event: 'categoryPage hidden',
    callback: categoryPage.savePageYOffset,
  },
  {
    event: 'categoryPage shown',
    callback: [
      categoryPage.saveCurrentCategoryName,
      categoryPage.scrollToPageYOffset,
    ],
  },
];

export default connections;
