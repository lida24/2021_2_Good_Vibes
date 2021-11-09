import bus from '../../init/bus';

const initEvents = (self: HTMLElement) => {
  // -----------------
  const checkoutBtn = <HTMLButtonElement>self.getElementsByClassName('btn')[0];
  checkoutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('checkout button click', undefined);
  });
};

export default initEvents;
