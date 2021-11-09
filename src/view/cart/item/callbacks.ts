import bus from '../../../init/bus';
import { Callback, Product } from '../../../types';
import cart from '../../../object/cart/cart';

export const deleteCartItem: Callback = (context: Product) => {
  const { id } = context;
  const { number } = cart.getItem(id);
  bus.emit('delete product from cart', { id, number });
};

export const productStateRequest: Callback = (obj: { 'id': number }) => {
  bus.emit('product state request', obj);
};
