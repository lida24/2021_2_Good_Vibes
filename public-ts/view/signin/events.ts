import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signUpBtn = <HTMLElement>self.getElementsByClassName('register-href')[0];
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signUp toggle button click', undefined);
  });

  const singInBtn = <HTMLElement>self.getElementsByClassName('primary')[0];
  singInBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signIn button click', { self });
  });
};

export default initEvents;
