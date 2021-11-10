import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signOutBtn = self.getElementsByClassName('form__signout-button')[0];
  signOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signOut button click', undefined);
  });

  // ---------------------
  const profilePic = <HTMLImageElement>self.getElementsByClassName('form__photo')[0];

  profilePic.addEventListener('mouseenter', (event) => {
    event.preventDefault();

    const uploadBtn = <HTMLButtonElement>self.getElementsByClassName('form__uploadBtn')[0];
    uploadBtn.style.display = 'block';
  });

  profilePic.addEventListener('mouseleave', (event) => {
    event.preventDefault();

    const uploadBtn = <HTMLButtonElement>self.getElementsByClassName('form__uploadBtn')[0];
    uploadBtn.style.display = 'none';
  });

  const uploadBtn = <HTMLButtonElement>self.getElementsByClassName('form__uploadBtn')[0];

  uploadBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const file = <HTMLInputElement>document.getElementsByClassName('form__uploadFile')[0];
    file.style.display = 'block';
  });

  const file = <HTMLInputElement>self.getElementsByClassName('form__uploadFile')[0];

  file.addEventListener('change', (event) => {
    event.preventDefault();

    const choosedFile = file.files[0];
    if (choosedFile) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const img = <HTMLImageElement>document.getElementsByClassName('form__photo')[0];
        img.setAttribute('src', <string>reader.result);
      });
      reader.readAsDataURL(choosedFile);
    }
  });

  // --------------------------
  const updateBtn = <HTMLButtonElement>self.getElementsByClassName('form__btn-color')[0];
  updateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('update button click', undefined);
  });
};

export default initEvents;
