import bus from '../../modules/bus/bus';

const initEvents: (self: HTMLElement) => void = (self) => {
  const signOutBtn = self.getElementsByClassName('logout-btn')[0];
  signOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('signOut button click', undefined);
  });

  // ---------------------
 const profilePic = <HTMLElement>self.getElementsByClassName('b2m4')[0];
 const uploadBtn = <HTMLElement>self.getElementsByClassName('b2m6')[0];

 console.log(profilePic);

  const mouseEventHandler = (event: MouseEvent) => {
    if (event.type === 'mouseover') {
      console.log(event.type);
      uploadBtn.style.opacity = '1';
    }
    if (event.type === 'mouseout') {
      console.log(event.type);
      uploadBtn.style.opacity = '0';
    }
  };

  profilePic.onmouseover = mouseEventHandler;
  profilePic.onmouseout = mouseEventHandler;

  // ---------------------
  /* const uploadBtn = <HTMLImageElement>self.getElementsByClassName('form__photo')[0];

  uploadBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('uload btn');
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
    } */
/*   }); */

  // --------------------------
  // const updateBtn = <HTMLButtonElement>self.getElementsByClassName('form__btn-color')[0];
  // updateBtn.addEventListener('click', (event) => {

/*   const updateBtn = <HTMLButtonElement>self.getElementsByClassName('update-btn')[0];
  updateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('update button click', undefined);
  }); */

  // -------------------------
  /*  const ordersLink = <HTMLAnchorElement>self.getElementsByClassName('orders-link')[0];
   // console.log(ordersLink);
   ordersLink.addEventListener('click', (event) => {
     event.preventDefault();
 
     bus.emit('orders link click', undefined);
   });
 
   // -------------------------
   const profileLink = <HTMLAnchorElement>self.getElementsByClassName('profile-link')[0];
   // console.log(ordersLink);
   profileLink.addEventListener('click', (event) => {
     event.preventDefault();
 
     bus.emit('profile link click', undefined);
   }); */
};

export default initEvents;
