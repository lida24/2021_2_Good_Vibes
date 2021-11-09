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
  numberInput.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('number input', context.id, numberInput.value);
  });
};

export default initEvents;
