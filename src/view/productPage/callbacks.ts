import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import { Callback, Product } from '../../types';
import InfoCardBtn from './button/view';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const changeBtn: Callback = () => {
  const addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-card-btn__cart')[0];

  const cartBtnElem = new InfoCardBtn();
  addBtnParent.replaceWith(cartBtnElem.self);
};

export const scrollToTop: Callback = () => {
  document.documentElement.scrollTop = 0;
};

export const productCheckInCart: Callback = (context: Product) => {
  if (cart.getItem(context.id)) {
    changeBtn(undefined);
  }
};
