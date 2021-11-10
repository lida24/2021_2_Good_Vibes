import bus from '../../init/bus';
import { add } from '../../object/productContextList/callbacks';
import { Callback } from '../../types';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const addProductToCart: Callback = (obj: { 'id': number, 'number': number }) => {
  console.log('add product to cart', obj);
};

export const changeBtn: Callback = () => {
  const addBtnParent =  <HTMLButtonElement>document.getElementsByClassName('btn')[0];
  const cartBtnElem = <HTMLButtonElement>document.createElement('button');
  cartBtnElem.className = 'btn go-to-cart';
  cartBtnElem.innerHTML = "Перейти в корзину";
  addBtnParent.replaceWith(cartBtnElem);
  cartBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });
}

export const cartStateRequest: Callback = () => {
  bus.emit('cart state request', undefined);
};

export const a = 0;
