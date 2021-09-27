const backendAddress = 'https://ozonback.herokuapp.com';

import HomeModel from "../models/HomeModel.js";
import SigninModel from "../models/SigninModel.js";
import Ajax from "./ajax.js";

// export default class Request{


//     static cookieCheckRequest() {
//     Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
//       .then(({ status, responseText }) => {
//         // const homeView = new HomeView(root);
//         // homeView.render();
//         console.log(responseText);
//         // user = responseText;
//         // window.user = user;
//         return responseText;

//       })
//       .catch(({ status, responseText }) => {
//         // const authorizView = new AuthorizView(root);
//         // authorizView.render();
//         console.log('fail');
//       })
//   }


//   static logInRequest({ body, alertObject }) {

//     Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
//       .then(({ status, responseText }) => {

//         const root = document.getElementById("main-container");
//         const homeModel = new HomeModel(root);
//         homeModel.render();
//         // homePageRequest();

//         return ;
//       })
//       .catch(({ status, responseText }) => {
//         alertObject.innerText = 'Неверное имя пользователя или пароль';
//         alertObject.style.visibility = 'visible';
//         console.log('error');
//       })
//   }

//   static signUpRequest({ body, alertObject }) {

//   Ajax.promisifyPost({ url: `${backendAddress}/signup`, body })
//     .then(({ status, responseText }) => {

//       const root = document.getElementById("main-container");
//       const homeModel = new HomeModel(root);
//       homeModel.render();
//       // homePageRequest();


//       console.log('success');
//       return;
//     })
//     .catch(({ status, responseText }) => {
//       alertObject.innerText = 'Пользователь уже существует';
//       alertObject.style.visibility = 'visible';
//     })
// }

//   // ------------------------------
//   static profileRequest() {
//   Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
//     .then(({ status, responseText }) => {

//       const root = document.getElementById("main-container");
//       root.innerHTML = `
//         <h1>
//           Вы авторизованы!
//           <a href="#" class="logout-link">Выйти из профиля</a>
//         </h1>
//         `;

//       const logoutLink = root.getElementsByClassName("logout-link")[0];
//       logoutLink.addEventListener('click', (e) => {
//         e.preventDefault();

//         logOutRequest();

//         const root = document.getElementById("main-container");
//         const homeModel = new HomeModel(root);
//         homeModel.render();

//         // homePageRequest();
//       })

//     })
//     .catch(({ status, responseText }) => {

//       const root = document.getElementById("main-container");
//       const signinModel = new SigninModel(root);
//       signinModel.render();

//     })
// }

// // ------------------------------
//   static logOutRequest() {
//   Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
//     .then(({ status, responseText }) => {
//       const root = document.getElementById("main-container");
//       const homeModel = new HomeModel(root);
//       homeModel.render();
//       // homePageRequest();
//     })
//     .catch(({ status, responseText }) => {
//       alert(responseText);
//     })
// }

//     static homePageRequest() {
//     Ajax.promisifyGet({ url: `${backendAddress}/homepage`, })
//       .then(({ status, responseText }) => {

//         // console.log(responseText);

//         const root = document.getElementById("main-container");
//         const homeModel = new HomeModel(root);
//         // homeModel.Catalog = responseText;
//         homeModel.render();
//       })
//       .catch(({ status, responseText }) => {
//         alert(responseText);
//       })
//     }

// }

(function ajaxRequests() {

  function cookieCheckRequest() {
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
  window.cookieCheckRequest = cookieCheckRequest;
  


  // ------------------------------
  function logInRequest({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
      .then(({ status, responseText }) => {

        const root = document.getElementById("main-container");
        const homeModel = new HomeModel(root);
        homeModel.render();
        // homePageRequest();

        return ;
      })
      .catch(({ status, responseText }) => {
        alertObject.innerText = 'Неверное имя пользователя или пароль';
        alertObject.style.visibility = 'visible';
        console.log('error');
      })
  }
  window.logInRequest = logInRequest;

  // ------------------------------
  function signUpRequest({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/signup`, body })
      .then(({ status, responseText }) => {
        
        const root = document.getElementById("main-container");
        const homeModel = new HomeModel(root);
        homeModel.render();
        // homePageRequest();


        console.log('success');
        return;
      })
      .catch(({ status, responseText }) => {
        alertObject.innerText = 'Пользователь уже существует';
        alertObject.style.visibility = 'visible';
      })
  }
  window.signUpRequest = signUpRequest;


  // ------------------------------
  function profileRequest() {
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

          logOutRequest();

          const root = document.getElementById("main-container");
          const homeModel = new HomeModel(root);
          homeModel.render();

          // homePageRequest();
        })

      })
      .catch(({ status, responseText }) => {

        const root = document.getElementById("main-container");
        const signinModel = new SigninModel(root);
        signinModel.render();

      })
  }
  window.profileRequest = profileRequest;


// ------------------------------
  function logOutRequest() {
    Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
      .then(({ status, responseText }) => {
        const root = document.getElementById("main-container");
        const homeModel = new HomeModel(root);
        homeModel.render();
        // homePageRequest();
      })
      .catch(({ status, responseText }) => {
        alert(responseText);
      })
  }
  window.logOutRequest = logOutRequest;


  // ------------------------------
  function homePageRequest() {
    Ajax.promisifyGet({ url: `${backendAddress}/homepage`, })
      .then(({ status, responseText }) => {

        // console.log(responseText);

        const root = document.getElementById("main-container");
        const homeModel = new HomeModel(root);
        // homeModel.Catalog = responseText;
        homeModel.render();
      })
      .catch(({ status, responseText }) => {
        alert(responseText);
      })
  }
  window.homePageRequest = homePageRequest;

}()
);