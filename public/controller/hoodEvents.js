/* eslint-disable import/extensions */
import bus from './eventBus.js';

const hoodEvents = (element) => {
  // ----------------------------------------
  const logoBtn = element.getElementsByClassName('logo')[0];

  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bus.emit('logo-click', 'logo-click');
  });

  // ----------------------------------------
  const profileBtn = element.getElementsByClassName('profile-href')[0];

  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bus.emit('profile-click', 'profile-click');
  });
};
export default hoodEvents;
