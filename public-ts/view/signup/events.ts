import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signUpBtn = <HTMLElement>self.getElementsByClassName('signin-href')[0];
  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signIn button click', undefined);
  });
};

export default initEvents;
