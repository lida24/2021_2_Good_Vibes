/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

const hoodEvents = (element) => {
  const asideBtn = element.getElementsByClassName('aside__button')[0];

  asideBtn.addEventListener('click', (event) => {
    event.preventDefault();
   /*  element.getElementsByClassName('aside-container'); */
    eventBus.emit('aside button click');
  });

/*   console.log('aside event'); */

  // ----------------------------------------
  const logoBtn = element.getElementsByClassName('logo__link')[0];

  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('logo button click');
  });

  // ----------------------------------------
  const profileBtn = element.getElementsByClassName('icons__link-profile')[0];

  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('profile button click');
  });
  //----------------------------------------------------
  const cartBtn = element.getElementsByClassName('icons__link-cart')[0];

  cartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('cart-click');
  });
};
export default hoodEvents;
