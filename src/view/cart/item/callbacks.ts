import bus from '../../../init/bus';
import { Callback, Product } from '../../../types';
import cart from '../../../object/cart/cart';
import list from './list';

export const deleteCartItem: Callback = (context: Product) => {
  const { id } = context;
  const { number } = cart.getItem(id);
  bus.emit('delete product from cart', { id, number });

  list.deleteItem(id);
};

export const a = 0;
