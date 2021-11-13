import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  // -------------------------
  const ordersLink = <HTMLAnchorElement>self.getElementsByClassName('orders-link')[0];
  // console.log(ordersLink);
  ordersLink.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('orders link click', undefined);
  });

  // -------------------------
  const profileLink = <HTMLAnchorElement>self.getElementsByClassName('profile-link')[0];
  // console.log(profileLink);
  profileLink.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('profile link click', undefined);
  });
};

export default initEvents;
