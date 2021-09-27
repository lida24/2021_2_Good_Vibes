const backendAddress = 'https://ozonback.herokuapp.com';

import SigninModel from "../models/SigninModel.js";
import HomeModel from "../models/HomeModel.js";
import ProductModel from "../models/ProductModel.js";
// import Ajax from "./ajax.js";

export default class Request {

  // ------------------------------
  static profile() {
    Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
        .then(({ status, responseText }) => {

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

                // const root = document.getElementById("main-container");
                // const homeModel = new HomeModel(root);
                // homeModel.render();

                Request.homePage();

                // homePageRequest();
            })

        })
        .catch(({ status, responseText }) => {

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
        .then(({ status, responseText }) => {

            // const root = document.getElementById("main-container");
            // const homeModel = new HomeModel(root);
            // homeModel.render();

            Request.homePage();


            return;
        })
        .catch(({ status, responseText }) => {
            alertObject.innerText = 'Неверное имя пользователя или пароль';
            alertObject.style.visibility = 'visible';
            console.log('error');
        })
}


  static signUp({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/signup`, body })
        .then(({ status, responseText }) => {

            // const root = document.getElementById("main-container");
            // const homeModel = new HomeModel(root);
            // homeModel.render();
            
            Request.homePage();


            console.log('success');
            return;
        })
        .catch(({ status, responseText }) => {
            alertObject.innerText = 'Пользователь уже существует';
            alertObject.style.visibility = 'visible';
        })
}

static logOut() {
    Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
        .then(({ status, responseText }) => {
            // const root = document.getElementById("main-container");
            // const homeModel = new HomeModel(root);
            // homeModel.render();

            Request.homePage();

        })
        .catch(({ status, responseText }) => {
            alert(responseText);
        })
}

  static homePage() {
    Ajax.promisifyGet({ url: `${backendAddress}/homepage`, })
        .then(({ status, responseText }) => {

            // console.log(responseText);

            const root = document.getElementById("main-container");
            const homeModel = new HomeModel(root);
            homeModel.Catalog = responseText;
            homeModel.render();
        })
        .catch(({ status, responseText }) => {
            alert(responseText);
        })
}

    static product(id) {
        Ajax.promisifyGet({ url: `${backendAddress}/product?id=${id}`, })
            .then(({ status, responseText }) => {

                console.log(responseText);

                // const root = document.getElementById("main-container");
                // const homeModel = new HomeModel(root);
                // homeModel.Catalog = responseText;
                // homeModel.render();

                const root = document.getElementById("main-container");
                const productModel = new ProductModel(root);
                productModel.product = JSON.parse(responseText);
                productModel.render();
            })
            .catch(({ status, responseText }) => {
                alert(responseText);
            })
    }

}