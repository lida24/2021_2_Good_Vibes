import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signUpBtn = <HTMLElement>self.getElementsByClassName('register-href')[0];
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signUp button click', undefined);
  });
};

export default initEvents;
