import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // -------------------------
  /* const closeBtn = document.getElementsByClassName('burger-close')[0];
  console.log('close', closeBtn);
   closeBtn.addEventListener('click', (event) => {
   event.preventDefault();

   bus.emit('hide aside by button', undefined);
 }); */

  // -------------------------
  const category = <HTMLElement>self.getElementsByClassName('categories')[0];
  category.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('show subcategory', undefined);
  });

  const closeBtn = <HTMLElement>self.getElementsByClassName('menu-burger__close')[0];
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('hide aside by button', undefined);
  });

  // ==================
  const asideContainerNode = <Node>(
    document.getElementsByClassName('aside-container__main')[0]
  );
  // const asideBtnNone = <Node>(
  //   document.getElementsByClassName('header__aside')[0]
  // );

  const asideBtnNone = <Node>(
    document.getElementsByClassName('burger-line')[0]
  );

  document.addEventListener('click', (event) => {
    const targetNode = <Node>event.target;
    const targetElement = <HTMLElement>event.target;

    if (targetElement.tagName === 'A') {
      bus.emit('hide aside by button', undefined);
      return;
    }

    if (
      asideContainerNode.contains(targetNode)
      || asideBtnNone.contains(targetNode)
    ) {
      return;
    }

    bus.emit('hide aside by button', undefined);
  });
};

export default initEvents;
