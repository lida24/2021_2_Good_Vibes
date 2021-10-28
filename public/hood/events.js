/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const hoodEvents = (element) => {
  // ----------------------------------------
  const logoBtn = element.getElementsByClassName('logo')[0];

  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('logo button click');
  });

  // ----------------------------------------
  const profileBtn = element.getElementsByClassName('profile-href')[0];

  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('profile button click');
  });
  //----------------------------------------------------
  const cartBtn = element.getElementsByClassName('cart-href')[0];

  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('cart-click');
  });
};
export default hoodEvents;
