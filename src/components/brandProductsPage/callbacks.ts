import { Callback, Product } from '../../types';
import ProductCatdList from '../productCard/list';

export const addProductArrayBrand: Callback = (array: Product[]) => {

  debugger;

  // const productContainer = document.getElementById('table-brand');

  const productContainer = document.getElementsByClassName('product-table-inner')[0];

  productContainer.textContent = '';

  /*array.sort((a, b) => a.id - b.id); */
  const viewArray = ProductCatdList.viewArray(array);
  viewArray?.forEach((cardView) => {
    productContainer.appendChild(cardView?.self);
  });
};