import bus from '../../modules/bus/bus';
import { Brand } from '../../types';

const initEvents: (self: HTMLElement, context: Brand) => void = (self, context) => {
  const { name } = context;

  // ------------------
  const productImgHref = <HTMLElement>self.getElementsByClassName('product-card')[0];
  productImgHref.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('card brand click', { name });
  });
};

export default initEvents;
