import bus from '../../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // --------------------
  const confirmBtn = <HTMLButtonElement>self.getElementsByClassName('confirm-btn')[0];
  confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('confirm order button click', undefined);
  });
};

export default initEvents;
