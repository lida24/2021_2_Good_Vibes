import bus from '../../../init/bus';
import { Product } from '../../../types';

const initEvents: (self: HTMLElement, context: Product) => void = (self, context) => {
  // ----------------
  const deleteBtn = <HTMLButtonElement>self.getElementsByClassName('delete-button')[0];
  deleteBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('delete button click', context);

    self.remove();
  });

  // --------------
  const nameHref = <HTMLAnchorElement>self.getElementsByClassName('name-href')[0];
  nameHref.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('product name href click', context);
  });

  // ----------------
  const numberInput = <HTMLInputElement>self.getElementsByClassName('number')[0];
  numberInput.addEventListener('change', (event) => {
    event.preventDefault();

    // const { value } = numberInput;

    let value = +numberInput.value;

    if (value < 0) {
      value = 0;
    }
    value = Math.floor(value);

    numberInput.value = value.toString();

    // console.log('number input', context.id, value);

    if (value === 0) {
      bus.emit('delete button click', context);
      // self.remove();
      return;
    }

    bus.emit('put product to cart request', { id: context.id, number: value });
  });
};

export default initEvents;
