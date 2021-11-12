import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import { Callback, Product } from '../../types';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const changeBtn: Callback = () => {
  const addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-card-btn__cart')[0];
  const cartBtnElem = <HTMLButtonElement>document.createElement('button');
  cartBtnElem.className = 'info-card-btn__add-cart';
  cartBtnElem.innerHTML = 'Перейти в корзину';
  addBtnParent.replaceWith(cartBtnElem);
  cartBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });
};

export const scrollToTop: Callback = () => {
  document.documentElement.scrollTop = 0;
};

export const productCheckInCart: Callback = (context: Product) => {
  console.log('product check in cart', context);

  if (cart.getItem(context.id)) {
    changeBtn(undefined);
  }
};
