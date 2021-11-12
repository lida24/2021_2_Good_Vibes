import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signInBtn = <HTMLElement>self.getElementsByClassName('auth-content-form-signin__link')[0];
  signInBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signIn toggle button click', undefined);
  });

  const singUpBtn = <HTMLButtonElement>self.getElementsByClassName('form__btn-color')[0];
  self.addEventListener('submit', (event) => {
    event.preventDefault();

    bus.emit('signUp submit', undefined);
  });
};

export default initEvents;
