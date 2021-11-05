import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signUpBtn = <HTMLElement>self.getElementsByClassName('signin-href')[0];
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signIn toggle button click', undefined);
  });

  const singUpBtn = <HTMLElement>self.getElementsByClassName('primary')[0];
  singUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signUp button click', { self });
  });
};

export default initEvents;
