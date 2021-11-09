import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // ------------------
  const logoBtn = <HTMLAnchorElement>self.getElementsByClassName('logo')[0];
  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('logo button click', undefined);
  });

  // ------------------
  const profileBtn = <HTMLAnchorElement>self.getElementsByClassName('profile-href')[0];
  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('profile button click', undefined);
  });

  // ------------------
  const cartBtn = <HTMLAnchorElement>self.getElementsByClassName('cart-href')[0];
  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });

  // ---------------------
  const asideBtn = <HTMLElement>self.getElementsByClassName('aside-open-button')[0];
  asideBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('aside button click', undefined);
  });
};

export default initEvents;
