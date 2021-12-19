
import { Callback, Product } from '../../types';
import ProductCatdList from '../productCard/list';

export const addProductArrayNew: Callback = (array: Product[]) => {
    const productContainer = document.getElementById('product-table-body');
    /* productContainer.textContent = '';
  
    array.sort((a, b) => a.id - b.id); */
    debugger;
    const viewArray = ProductCatdList.viewArray(array);
    viewArray?.forEach((cardView) => {
      productContainer.appendChild(cardView?.self);
    });
  };
  
 