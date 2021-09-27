const backendAddress = 'https://ozonback.herokuapp.com';

import SigninModel from "../models/SigninModel.js";
import HomeModel from "../models/HomeModel.js";
import ProductModel from "../models/ProductModel.js";

export default class Request {

    // ------------------------------
    static profile() {
        Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
            .then(() => {

                const root = document.getElementById("main-container");
                root.innerHTML = `
        <h1>
          Вы авторизованы!
          <a href="#" class="logout-link">Выйти из профиля</a>
        </h1>
        `;

                const logoutLink = root.getElementsByClassName("logout-link")[0];
                logoutLink.addEventListener('click', (e) => {
                    e.preventDefault();

                    this.logOut();

                    Request.homePage();

                })

            })
            .catch(() => {

                const root = document.getElementById("main-container");
                const signinModel = new SigninModel(root);
                signinModel.render();

            })
    }

    static cookieCheck() {
        Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
            .then(({ status, responseText }) => {
                // const homeView = new HomeView(root);
                // homeView.render();
                console.log(responseText);
                // user = responseText;
                // window.user = user;
                return responseText;

            })
            .catch(({ status, responseText }) => {
                // const authorizView = new AuthorizView(root);
                // authorizView.render();
                console.log('fail');
            })
    }

    static logIn({ body, alertObject }) {

        Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
            .then(() => {

                Request.homePage();

                return;
            })
            .catch(() => {
                alertObject.innerText = 'Неверное имя пользователя или пароль';
                alertObject.style.visibility = 'visible';
                console.log('error');
            })
    }


    static signUp({ body, alertObject }) {

        Ajax.promisifyPost({ url: `${backendAddress}/signup`, body })
            .then(() => {

                Request.homePage();


                console.log('success');
                return;
            })
            .catch(() => {
                alertObject.innerText = 'Пользователь уже существует';
                alertObject.style.visibility = 'visible';
            })
    }

    static logOut() {
        Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
            .then(() => {

                Request.homePage();

            })
            .catch(({ responseText }) => {
                alert(responseText);
            })
    }

    static homePage() {
        Ajax.promisifyGet({ url: `${backendAddress}/homepage`, })
            .then(({ responseText }) => {

                const root = document.getElementById("main-container");
                const homeModel = new HomeModel(root);
                homeModel.Catalog = responseText;
                homeModel.render();
            })
            .catch(({ responseText }) => {
                alert(responseText);
            })
    }

    static product(id) {
        Ajax.promisifyGet({ url: `${backendAddress}/product?id=${id}`, })
            .then(({ responseText }) => {

                console.log(responseText);

                const root = document.getElementById("main-container");
                const productModel = new ProductModel(root);
                productModel.product = JSON.parse(responseText);
                productModel.render();
            })
            .catch(({ responseText }) => {
                alert(responseText);
            })
    }

}