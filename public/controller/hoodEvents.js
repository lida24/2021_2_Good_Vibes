/* eslint-disable import/extensions */
import bus from './eventBus.js';

const hoodEvents = (element) => {
  const logoBtn = element.getElementsByClassName('logo')[0];

  logoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bus.emit('logo-click', 'logo-click hello');
  });
};
export default hoodEvents;
