import bus from '../../init/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signOutBtn = self.getElementsByClassName('logout-btn')[0];
  signOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signOut button click', undefined);
  });

  // ---------------------
  const profilePic = <HTMLElement>self.getElementsByClassName('form__pic')[0];

  const mouseEventHandler = (event: MouseEvent) => {
    const uploadBtn = <HTMLButtonElement>self.getElementsByClassName('form__uploadBtn')[0];
    if (event.type === 'mouseover') {
      uploadBtn.style.display = 'block';
    }
    if (event.type === 'mouseout') {
      uploadBtn.style.display = 'none';
    }
  };

  profilePic.onmouseover = mouseEventHandler;
  profilePic.onmouseout = mouseEventHandler;

  // ---------------------
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
  // const updateBtn = <HTMLButtonElement>self.getElementsByClassName('form__btn-color')[0];
  // updateBtn.addEventListener('click', (event) => {

  const updateBtn = <HTMLButtonElement>self.getElementsByClassName('update-btn')[0];
  updateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('update button click', undefined);
  });
};

export default initEvents;
