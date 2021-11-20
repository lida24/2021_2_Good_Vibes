import bus from '../../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const searchInput = <HTMLInputElement>self.getElementsByTagName('input')[0];

  // -----------------------
  searchInput.addEventListener('focus', (event) => {
    event.preventDefault();

    const str = searchInput.value.trim();
    console.log('search input value', str);
    bus.emit('suggests ajax request', { str });
  });

  // -----------------------
  searchInput.addEventListener('input', (event) => {
    event.preventDefault();

    const str = searchInput.value;
    console.log('search input value', str);
    bus.emit('suggests ajax request', { str });
  });

  // ----------------------
  document.addEventListener('click', (event) => {
    // event.preventDefault();

    const targetNode = <Node>event.target;
    const searchInputNode = <Node>self.getElementsByTagName('input')[0];

    if (searchInputNode.contains(targetNode)) return;
    bus.emit('delete suggests list', undefined);
  });
};

export default initEvents;
