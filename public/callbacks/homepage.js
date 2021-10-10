/* eslint-disable import/extensions */
import Product from '../views/product.js';
import state from '../constants/state.js';

export const a = () => {
  console.log('a');
};

export const productLoad = () => {
  console.log('product load');

  const root = document.getElementsByClassName('product-container')[0];
  const buffView = document.createElement('div');
  buffView.className = 'product-card';
  const buffObj = new Product(buffView);

  buffObj.render();

  root.appendChild(buffView);
  // root.appendChild(buffObj.innerHTML);
};

// const viewGenerate = (name) => {
//   const main = document.getElementById('main-container');

//   const buffView = document.createElement('main');
//   buffView.id = 'main-container';

//   const buffObj = new Product[name](buffView);

//   add({
//     [name]: {
//       element: buffObj,
//       dom: buffView,
//       state: state.hidden
//     }
//   });

//   view[name].state = state.visible;
//   main.replaceWith(view[name].dom);
//   return view[name].element.render();
// };
