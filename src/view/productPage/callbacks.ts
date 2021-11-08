import bus from '../../init/bus';
import { Callback } from '../../types';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const addProductToCart: Callback = (obj: { 'id': number, 'number': number }) => {
  console.log('add product to cart', obj);
};

export const a = 0;
