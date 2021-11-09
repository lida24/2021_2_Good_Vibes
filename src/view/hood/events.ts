import bus from '../../init/bus';

const initEvents = (self: HTMLElement) => {
  // ------------------
  const logoBtn = <HTMLAnchorElement>self.getElementsByClassName('logo')[0];
  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('logo button click', undefined);
  });

  // ------------------
  const profileBtn = <HTMLAnchorElement>self.getElementsByClassName('icons__link-profile')[0];
  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('profile button click', undefined);
  });

  // ------------------
  const cartBtn = <HTMLAnchorElement>self.getElementsByClassName('icons__link-cart')[0];
  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });

  // ---------------------
  const asideBtn = <HTMLElement>self.getElementsByClassName('aside__button')[0];
  asideBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('aside button click', undefined);
  });
};

export default initEvents;
