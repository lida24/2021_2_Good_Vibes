import bus from '../../../init/bus';
import { Product } from '../../../types';

const initEvents: (self: HTMLElement, context: Product) => void = (self, context) => {
  // ----------------
  const deleteBtn = <HTMLButtonElement>self.getElementsByClassName('cart__delete')[0];
  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('delete button click', context);

    self.remove();
  });

  // --------------
  // const nameHref = <HTMLAnchorElement>self.getElementsByClassName('cart__link')[0].firstChild;
  const nameHref = <HTMLAnchorElement>self.getElementsByClassName('link')[0];

  nameHref.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('product name href click', context);
  });

  // ----------------
  const numberInput = <HTMLInputElement>self.getElementsByClassName('cart__qty-select')[0];
  numberInput.addEventListener('change', (event) => {
    event.preventDefault();

    let value = +numberInput.value;
    if (value < 0) {
      value = 0;
    }
    value = Math.floor(value);
    if (value === 0) {
      bus.emit('delete button click', context);
      self.remove();
      return;
    }

    numberInput.value = value.toString();

    bus.emit('put product to cart request', { id: context.id, number: value });
  });
};

export default initEvents;
