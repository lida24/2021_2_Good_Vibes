/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

// const changeLogin = (login) => {
//   document.getElementsByName('login')[0].value = login;
//   document.getElementById('login').textContent = login;

//   eventBus.emit('update click');
// };

const profileEvents = (element) => {
  const profilePic = element.getElementsByClassName('form__pic')[0];

  profilePic.addEventListener('mouseenter', (event) => {
    event.preventDefault();

    eventBus.emit('mouse enter');
  });

  profilePic.addEventListener('mouseleave', (event) => {
    event.preventDefault();

    eventBus.emit('mouse leave');
  });

  const uploadBtn = element.getElementsByClassName('form__uploadBtn')[0];

  uploadBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('upload button click');
  })

  const file = element.getElementsByClassName('form__uploadFile')[0];

  file.addEventListener('change', (event) => {
    event.preventDefault();
    const choosedFile = file.files[0];

    if (choosedFile) {

      const reader = new FileReader();
      reader.addEventListener('load', function () {

        eventBus.emit('change photo', reader);
      });
      reader.readAsDataURL(choosedFile);
    }
  });
  // --------------------------------
  const updateBtn = element.getElementsByClassName('form__btn-color')[0];

  updateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('update click');
  });

  //-------------------------------
  const logOutBtn = element.getElementsByClassName('form__signout-button')[0];

  logOutBtn.addEventListener('click', (event) => {
    event.preventDefault();

    eventBus.emit('logout');
  });
};

export default profileEvents;