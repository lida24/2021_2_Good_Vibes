import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import { Callback, Product } from '../../types';
import CartItemList from './list';

export const addressStateRequest: Callback = () => {
  bus.emit('address state request', undefined);
};

export const productArrayRequest: Callback = () => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('cart-list__items')[0];
  itemsContainer.textContent = '';
  bus.emit('product array request', cart.get());
};

export const calculateSubtotal: Callback = () => {
  let totalNumber = 0;
  let totalPrice = 0;

  if (!cart.isEmpty()) {
    cart.get().forEach((cartElem) => {
      const { number } = cartElem;
      totalNumber += number;

      const { price } = CartItemList.list[cartElem.product_id].context;
      totalPrice += number * price;
    });
  }

  // <<<<<<< HEAD
  //   const subElem = <HTMLElement>document.getElementsByClassName('subtotal')[0];
  //   if (!subElem) {
  //     return;
  //   }
  // =======
  //   const subElem = <HTMLElement>document.getElementsByClassName('cart__subtotal')[0];
  // >>>>>>> 0b511cea9ffbd83ba014236bfb32bbf8173798db
  //   subElem.innerHTML = `<h3>Итого (${totalNumber} товаров): $${totalPrice}</h3>`;

  const subElem = <HTMLElement>document.getElementsByClassName('cart__subtotal')[0];
  if (!subElem) {
    return;
  }
  subElem.innerHTML = `<h3>Итого (${totalNumber} товаров): $${totalPrice}</h3>`;
};

export const showCartItems: Callback = (array: Product[]) => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('cart-list__items')[0];

  const viewArray = CartItemList.viewArray(array);
  viewArray.forEach((itemView, index) => {
    itemsContainer.appendChild(itemView.self);
    const { number } = cart.getItem(array[index].id);
    const numberElem = <HTMLInputElement>itemView.self.getElementsByClassName('number')[0];
    numberElem.value = number.toString();
  });
  calculateSubtotal(undefined);
};

export const deleteView: Callback = (obj: { 'id': number }) => {
  const { id } = obj;
  delete CartItemList.list[id];
};
