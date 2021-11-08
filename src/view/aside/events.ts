import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // -------------------------
  const closeBtn = <HTMLElement>self.getElementsByClassName('aside-close-button')[0];
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('hide aside', undefined);
  });

  // -------------------------
  const category = <HTMLElement>self.getElementsByClassName('title-category')[0];
  category.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('show subcategory', undefined);
  });

  // // -------------------------
  // const category1 = <HTMLElement>self.getElementsByClassName('category subcategory')[0];
  // category1.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   bus.emit('show subcategory', undefined);
  // });
};

export default initEvents;
