import bus from '../../modules/bus/bus';
import { Brand } from '../../types';

const initEvents: (self: HTMLElement, context: Brand) => void = (self, context) => {
  const { name } = context;

  // ------------------
  const productImgHref = <HTMLElement>self.getElementsByClassName('brand-card')[0];
  productImgHref.addEventListener('click', (event) => {
    event.preventDefault();
    debugger;
    bus.emit('card brand click', { name });
  });
};

export default initEvents;
