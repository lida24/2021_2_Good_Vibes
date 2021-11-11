import { Callback, Product } from '../../types';
import ProductCatdList from '../productCard/list';

export const addProductArray: Callback = (array: Product[]) => {
  const productContainer = document.getElementsByClassName('product-container')[0];

  productContainer.textContent = '';

  if (!array) {
    productContainer.appendChild(document.createTextNode('Нет товаров в этой категории'));
    return;
  }

  const viewArray = ProductCatdList.viewArray(array);
  viewArray.forEach((cardView) => {
    productContainer.appendChild(cardView.self);
  });
};

export const a = 0;
