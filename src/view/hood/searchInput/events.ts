import bus from '../../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // -----------------------
  const searchInput = <HTMLInputElement>self.getElementsByTagName('input')[0];
  searchInput.addEventListener('input', (event) => {
    event.preventDefault();

    const str = searchInput.value;
    console.log('search input value', str);
    bus.emit('suggests ajax request', { str });
  });
};

export default initEvents;
