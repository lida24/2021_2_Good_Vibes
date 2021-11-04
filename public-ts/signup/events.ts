import bus from '../scripts/bus';

const initEvents = (parent: HTMLElement) => {
  const signUpBtn = document.getElementById('signin-href');
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signIn button click', undefined);
  });
};

export default initEvents;
