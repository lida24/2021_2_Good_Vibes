import { Connection } from '../../types';
import * as aside from './callbacks';

const connections: Connection[] = [
  {
    event: 'hide aside',
    callback: aside.hide,
  },
  {
    event: 'show aside',
    callback: aside.show,
  },
  // {
  //   event: 'parse category obj',
  //   callback: aside.parseCategoryObject,
  // },
  {
    event: 'category get confirmed',
    callback: aside.parse,
  },
  {
    event: 'show subcategory',
    callback: aside.showSubCategory,
  },
];

export default connections;
