import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // ------------------
  const logoBtn = <HTMLAnchorElement>self.getElementsByClassName('header__logo')[0];
  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('logo button click', undefined);
  });

  // ------------------
  const profileBtn = <HTMLAnchorElement>self.getElementsByClassName('icons__link-avatar')[0];
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
  const asideBtn = <HTMLElement>self.getElementsByClassName('header__aside')[0];
  asideBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('aside button click', undefined);
  });
  const closeBtn = <HTMLElement>self.getElementsByClassName('burger-close')[0];
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('aside button click hide', undefined);
  });

  const searchBtn = <HTMLElement>self.getElementsByClassName('nav-element__search')[0];
  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('search button click', undefined);
  });
};

export default initEvents;
