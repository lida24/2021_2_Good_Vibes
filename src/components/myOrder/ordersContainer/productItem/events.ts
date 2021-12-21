import bus from "../../../../modules/bus/bus";

const initEvents: (self: HTMLElement) => void = (self) => {
  const href = self.getElementsByClassName('product-item__href')[0];
  href.addEventListener('click', (event) => {
      event.preventDefault();
      bus.emit('item click', undefined);
  })
};

export default initEvents;
