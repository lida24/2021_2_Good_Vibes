/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const hoodEvents = (element) => {
  // ----------------------------------------
  const logoBtn = element.getElementsByClassName('logo')[0];

  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    eventBus.emit('logo-click');
    // bus.emit('logo-click', 'Signup');
  });

  // ----------------------------------------
  const profileBtn = element.getElementsByClassName('profile-href')[0];

  profileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // bus.emit('profile-click', 'profile-click');
    // bus.emit('profile-click', 'Signin');
    eventBus.emit('profile-click');
  });
};
export default hoodEvents;
