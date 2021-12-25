import { Callback, Product } from '../../types';
import ProductCatdList from '../productCard/list';


export const addProductArrayBrand: Callback = (obj: { 'Products': Product[], 'BrandName': string }) => {
  const productContainer = document.getElementById('product-table-body');
  productContainer.textContent = '';

  const title = <HTMLSpanElement>document.getElementsByClassName('product-table__title')[0];
  title.textContent = obj.BrandName;

  const viewArray = ProductCatdList.viewArray(obj.Products);
  viewArray?.forEach((cardView) => {
    productContainer.appendChild(cardView?.self);
  });
};

export const changeName: Callback = (obj: { 'brand'?: string }) => {
  console.warn(obj);
}
