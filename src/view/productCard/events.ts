import bus from '../../init/bus';
import { Product } from '../../types';

const initEvents = (self: HTMLElement, context: Product) => {
  const { id } = context;

  // ------------------
  const productImgHref = <HTMLAnchorElement>self.getElementsByClassName('productImg-href')[0];
  productImgHref.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('image click', { id });
  });

  // ------------------
  const productNameHref = <HTMLAnchorElement>self.getElementsByClassName('productName-href')[0];
  productNameHref.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('product name click', { id });
  });
};

export default initEvents;
