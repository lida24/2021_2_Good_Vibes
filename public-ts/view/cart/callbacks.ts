import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import { Callback, Product } from '../../types';

export const addressStateRequest: Callback = () => {
  bus.emit('address state request', undefined);
};

export const productArrayRequest: Callback = () => {
  bus.emit('produc array request', cart.get());
};

export const show: Callback = (obj: Product[]) => {
  console.log(obj);
};
