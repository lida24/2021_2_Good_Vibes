import bus from '../../init/bus';
import { Product } from '../../types';

const initEvents: (self: HTMLElement, context: Product) => void = (self, context) => {
  const { id } = context;

  // // ------------------
  // const productImgHref = <HTMLAnchorElement>self.getElementsByClassName('product__link-img')[0];
  // productImgHref.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   bus.emit('image click', { id });
  // });

  // // ------------------
  // const productNameHref = <HTMLAnchorElement>self.getElementsByClassName('product__link-name')[0];
  // productNameHref.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   bus.emit('product name click', { id });
  // });

  // ------------------
  self.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('product name click', { id });
  });
};

export default initEvents;
