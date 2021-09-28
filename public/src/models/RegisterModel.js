/** @module RegisterModel */

import SigninModel from './SigninModel.js';
import Validate from '../js/inputDataValidation.js';
import Request from '../js/requests.js';

/**
 * Класс для создания модели регистрации
 * @exports
 */
export default class RegisterModel {
  /**
   * Элемент, в котором отрисовывается контент
   * @type {Element}
   * @private
   */
  #parent;

  /**
   * Создание модели для регистрации
   * @class RegisterModel
   * @param {Element} parent - элемент, в котором будет отрисовываться контент
   */
  constructor(parent) {
    this.#parent = parent;
  }

  /**
  * Отрисовка модели регистрации
  * @public
  */
  render() {
    this.#parent.innerHTML = `
    <div class="form-container">
      <form id="register-form">
        <ul class="form-items">
          <li>
            <h1>Создать аккаунт</h1>
          </li>
          <li>
            <label for="login">Имя пользователя</label>
            <input type="login" name="login" id="login" />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </li>
          <li>
            <label for="password">Пароль</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label for="repassword">Подтвердить пароль</label>
            <input type="password" name="repassword" id="repassword" />
          </li>
          <li>
            <label id="alert-label">error</label>
          </li>
          <li>
            <button type="submit" class="primary">Зарегистрироваться</button>
          </li>
          <li>
            <div>
              Уже есть аккаунт?
              <a href="#" id="signin-href">Войти</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;

    // const alert = document.getElementById('alert-label');
    // alert.style.visibility = 'hidden';

    // const signin = document.getElementById('signin-href');
    // signin.addEventListener('click', (e) => {
    //   e.preventDefault();

    //   this.#parent.innerHTML = ``;
    //   const signinModel = new SigninModel(this.#parent);
    //   signinModel.render();
    // });

    // this.#parent.addEventListener('submit', (e) => {
    //   alert.style.visibility = 'hidden';

    //   e.preventDefault();

    //   const usernameSignUpInput = document.getElementsByName('login')[0];
    //   const emailSignUpInput = document.getElementsByName('email')[0];
    //   const passwordSignUpInput = document.getElementsByName('password')[0];
    //   const confirmPasswordSignUpInput = document.getElementsByName('repassword')[0];

    //   const userData = {
    //     username: usernameSignUpInput.value.trim(),
    //     email: emailSignUpInput.value.trim(),
    //     password: passwordSignUpInput.value.trim(),
    //     confirmPassword: confirmPasswordSignUpInput.value.trim(),
    //   };

    //   const validationResult = Validate.signUp(userData);

    //   if (validationResult !== undefined) {
    //     alert.innerText = validationResult;
    //     alert.style.visibility = 'visible';
    //     return;
    //   }

    //   Request.signUp({
    //     body: userData,
    //     alertObject: alert,
    //   });
    // });

    const alert = document.getElementById('alert-label');
    alert.style.visibility = 'hidden';

    const listener = function(e) {
      alert.style.visibility = 'hidden';

      e.preventDefault();

      const usernameSignUpInput = document.getElementsByName('login')[0];
      const emailSignUpInput = document.getElementsByName('email')[0];
      const passwordSignUpInput = document.getElementsByName('password')[0];
      const confirmPasswordSignUpInput = document.getElementsByName('repassword')[0];

      const userData = {
        username: usernameSignUpInput.value.trim(),
        email: emailSignUpInput.value.trim(),
        password: passwordSignUpInput.value.trim(),
        confirmPassword: confirmPasswordSignUpInput.value.trim(),
      };

      const validationResult = Validate.signUp(userData);

      if (validationResult !== undefined) {
        alert.innerText = validationResult;
        alert.style.visibility = 'visible';
        return;
      }

      Request.signUp({
        body: userData,
        alertObject: alert,
      });

    }

    this.#parent.removeEventListener('submit', listener);
    this.#parent.addEventListener('submit', listener);


    // const alert = document.getElementById('alert-label');
    // alert.style.visibility = 'hidden';

    const signin = document.getElementById('signin-href');
    signin.addEventListener('click', (e) => {
      this.#parent.removeEventListener('submit', listener);
      
      e.preventDefault();

      this.#parent.innerHTML = ``;
      const signinModel = new SigninModel(this.#parent);
      signinModel.render();
    });

    // this.#parent.addEventListener('submit', (e) => {
    //   alert.style.visibility = 'hidden';

    //   e.preventDefault();

    //   const usernameSignUpInput = document.getElementsByName('login')[0];
    //   const emailSignUpInput = document.getElementsByName('email')[0];
    //   const passwordSignUpInput = document.getElementsByName('password')[0];
    //   const confirmPasswordSignUpInput = document.getElementsByName('repassword')[0];

    //   const userData = {
    //     username: usernameSignUpInput.value.trim(),
    //     email: emailSignUpInput.value.trim(),
    //     password: passwordSignUpInput.value.trim(),
    //     confirmPassword: confirmPasswordSignUpInput.value.trim(),
    //   };

    //   const validationResult = Validate.signUp(userData);

    //   if (validationResult !== undefined) {
    //     alert.innerText = validationResult;
    //     alert.style.visibility = 'visible';
    //     return;
    //   }

    //   Request.signUp({
    //     body: userData,
    //     alertObject: alert,
    //   });
    // });
  }
}
