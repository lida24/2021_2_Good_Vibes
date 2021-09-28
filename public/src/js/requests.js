/** @module Request */

import SigninModel from '../models/SigninModel.js';
import HomeModel from '../models/HomeModel.js';
import ProductModel from '../models/ProductModel.js';
import Ajax from './ajax.js';

/**
 * Адрес для запросов на бэкенд
 */
const backendAddress = 'https://ozonback.herokuapp.com';

/**
 * Класс для создания запросов на определенные модели
 * @exports
 */
export default class Request {
  /**
   * Запрос страницы профиля
   * В случае неудачи переводит на страницу регистрации
   * @public
   * @static
   */
  static #check = false;

  static profile() {
    Ajax.promisifyGet({ url: `${backendAddress}/profile` })
      .then(() => {
        const root = document.getElementById('main-container');
        root.innerHTML = `
                    <h1>
                        Вы авторизованы!
                        <a href="#" class="logout-link">Выйти из профиля</a>
                    </h1>
                `;

        const logoutLink = root.getElementsByClassName('logout-link')[0];
        logoutLink.addEventListener('click', (e) => {
          e.preventDefault();

          this.logOut();
          Request.homePage();

          this.#check = false;
        });
      })
      .catch(() => {
        if (this.#check === true) {
          return;
        }

        const root = document.getElementById('main-container');
        const signinModel = new SigninModel(root);
        signinModel.render();

        this.#check = true;
      });
  }

  /**
   * @typedef {{username: string,
   * password: string}} logInData
   */
  /**
   * Запрос на авторизацию.
   * В случае успеха отображает домашнюю страницу.
   * В случае неудачи выводит сообщение об ошибке в объект alertObject
   * @static
   * @public
   * @param {{body: logInData,
   * alertObject: HTMLElement}} logInParams - объект с данными для авторизации
   * и элемент страницы для отображения ошибок
   */
  static logIn({ body, alertObject }) {
    Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
      .then(() => {
        Request.homePage();
      })
      .catch(() => {
        alertObject.innerText = 'Неверное имя пользователя или пароль';
        alertObject.style.visibility = 'visible';
      });
  }

  /**
   * @typedef {{username: string,
   * email: string,
   * password: string,
   * comfirmpassword: string}} signUpData
   */
  /**
   * Запрос на регистрацию.
   * В случае успеха отображает домашнюю страницу.
   * В случае неудачи выводит сообщение об ошибке в объект alertObject
   * @static
   * @public
   * @param {{body: signUpData,
   * alertObject: HTMLElemet}} signInParams - объект с данными для регистрации
   * и элемент страницы для отображения ошибок
   */
  static signUp({ body, alertObject }) {
    Ajax.promisifyPost({ url: `${backendAddress}/signup`, body })
      .then(() => {
        Request.homePage();
      })
      .catch(({ responseText }) => {
        alertObject.innerText = 'Пользователь уже существует';
        const responseObject = JSON.parse(responseText);
        console.log(responseObject);
        if (responseObject['error description'] === 'validation error') {
          alertObject.innerHTML = 'Ошибка валидации данных';
        }
        alertObject.style.visibility = 'visible';
      });
  }

  /**
   * Запрос на логаут.
   * В случае успеха переводит на домашнюю страницу
   * @public
   * @static
   */
  static logOut() {
    Ajax.promisifyGet({ url: `${backendAddress}/logout` })
      .then(() => {
        Request.homePage();
      })
      .catch(({ responseText }) => {
        alert(responseText);
      });
  }

  /**
   * Запрос домашней страницы
   * @public
   * @static
   */
  static homePage() {
    Ajax.promisifyGet({ url: `${backendAddress}/homepage` })
      .then(({ responseText }) => {
        const root = document.getElementById('main-container');
        const homeModel = new HomeModel(root);
        homeModel.Catalog = responseText;
        homeModel.render();
      })
      .catch(({ responseText }) => {
        alert(responseText);
      });
  }

  /**
   * Запрос страницы товара
   * @public
   * @static
   * @param {number} id - id-номер товара
   */
  static product(id) {
    Ajax.promisifyGet({ url: `${backendAddress}/product?id=${id}` })
      .then(({ responseText }) => {
        const root = document.getElementById('main-container');
        const productModel = new ProductModel(root);
        productModel.product = JSON.parse(responseText);
        productModel.render();
      })
      .catch(({ responseText }) => {
        alert(responseText);
      });
  }
}
