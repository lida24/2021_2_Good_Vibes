import RegisterModel from "./RegisterModel.js";
import Validate from "../js/inputDataValidation.js";


export default class SigninModel {

  #parent;

  constructor(parent) {
    this.#parent = parent;
  }

  after_render() { };
  render() {
    this.#parent.innerHTML = `
      <div class="form-container">
        <form id="signin-form">
          <ul class="form-items">
            <li>
              <h1>Вход</h1>
            </li>
            <li>
              <label for="login">Имя пользователя</label>
              <input type="login" name="login" id="login" />
            </li>
            <li>
              <label for="password">Пароль</label>
              <input type="password" name="password" id="password" />
            </li>
            <li>
              <label id="alert-label">error</label>
            </li>
            <li>
              <button type="submit" class="primary">Войти</button>
            </li>
            <li>
              <div>
                Новый пользователь?
                <a href="#" id="register-href">Создать аккаунт </a>
              </div>
            </li>
          </ul>
        </form>
      </div>
      `;

    const alert = document.getElementById('alert-label');
    alert.style.visibility = 'hidden';

    const register = document.getElementById('register-href');
    register.addEventListener('click', (e) => {
      e.preventDefault();
      const registerModel = new RegisterModel(this.#parent);
      registerModel.render();
    });


    this.#parent.addEventListener('submit', (e) => {
      alert.style.visibility = 'hidden';

      e.preventDefault();

      const usernameSignInInput = document.getElementsByName('login')[0];
      const passwordSignInInput = document.getElementsByName('password')[0];

      const userData = {
        username: usernameSignInInput.value.trim(),
        password: passwordSignInInput.value.trim(),
      }

      const validationResult = Validate.signIn(userData);

      if (validationResult !== undefined) {
        alert.innerText = validationResult;
        alert.style.visibility = 'visible';
        return;
      }

      logInRequest({
        body: userData,
        alertObject: alert,
      });

    });

  }
};
