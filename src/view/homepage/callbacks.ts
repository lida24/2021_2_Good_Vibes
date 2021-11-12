import { Callback, Product } from '../../types';
import ProductCatdList from '../productCard/list';

let pageYOffset: number;

export const addProductArray: Callback = (array: Product[]) => {
  const productContainer = document.getElementsByClassName('product-container')[0];
  productContainer.textContent = '';

  const viewArray = ProductCatdList.viewArray(array);
  viewArray.forEach((cardView) => {
    productContainer.appendChild(cardView.self);
  });
};

export const savePageYOffset: Callback = () => {
  pageYOffset = window.pageYOffset;
};

export const scrollToPageYOffset: Callback = () => {
  document.documentElement.scrollTop = pageYOffset || 0;
}