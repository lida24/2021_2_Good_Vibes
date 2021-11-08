import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import { Callback, Product } from '../../types';
import CartItemList from './list';

export const addressStateRequest: Callback = () => {
  bus.emit('address state request', undefined);
};

export const productArrayRequest: Callback = () => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('items')[0];
  itemsContainer.textContent = '';
  bus.emit('product array request', cart.get());
};

export const showCartItems: Callback = (array: Product[]) => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('items')[0];

  const viewArray = CartItemList.viewArray(array);
  viewArray.forEach((itemView, index) => {
    itemsContainer.appendChild(itemView.self);
    const { number } = cart.getItem(array[index].id);
    // const 
  });

  // array.forEach((product) => {
  //   product.id
  // })
};
