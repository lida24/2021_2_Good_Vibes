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
};

export default initEvents;
