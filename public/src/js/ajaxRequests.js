// import HomeModel from "../models/HomeModel";

// const backendAddress = 'https://ozonback.herokuapp.com';
// // const backendAddress = 'http://localhost:3000';

// (function ajaxRequests() {
//   const AJAX_STATUS = {
//     OK: 200,
//     CREATED: 201,
//     BAD_REQUEST: 400,
//     PAGE_NOT_FOUND: 404,
//   };   

//   // // ------------------------------
//   // function homeViewRequest() {
//   //   root.innerHTML = '';

//   //   Ajax.promisifyGet({ url: `${backendAddress}/profile`,})
//   //     .then( ({status, responseText}) => {
        // const homeView = new HomeView(root);
        // homeView.render();
//   //     })
//   //     .catch( ({status, responseText}) => {
//   //       const authorizView = new AuthorizView(root);
//   //       authorizView.render();
//   //     })


//   //   // Ajax.getUsingFetch({ url: `${backendAddress}/profile`, })
//   //   //   .then(({ status, parsedBody }) => {
//   //   //     const homeView = new HomeView(root);
//   //   //     homeView.user = parsedBody;
//   //   //     homeView.render();
//   //   //   })
//   //   //   .catch(({ status, parsedBody }) => {
//   //   //     const authorizView = new AuthorizView(root);
//   //   //     authorizView.render();
//   //   //   })


//   // ------------------------------
//   function homeViewRequest() {
//     root.innerHTML = '';

  //   Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
  //     .then(({ status, responseText }) => {
  //       // const homeView = new HomeView(root);
  //       // homeView.render();
  //       console.log('success');

  //     })
  //     .catch(({ status, responseText }) => {
  //       // const authorizView = new AuthorizView(root);
  //       // authorizView.render();
  //       console.log('fail');
  //     })
  // }
//   window.homeViewRequest = homeViewRequest;

//   // // ------------------------------
//   // function logOutRequest() {
//   //   Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
//   //     .then(({ status, responseText }) => {
//   //       homeViewRequest();
//   //     })
//   //     .catch(({ status, responseText }) => {
//   //       alert(responseText);
//   //     })
//   // }
//   // window.logOutRequest = logOutRequest;

//   // // ------------------------------
//   // function logInRequest({ body, alertObject }) {

//   //   Ajax.promisifyPost({ url: `${backendAddress}/login`, body})
//   //     .then(({ status, responseText }) => {
//   //       homeViewRequest();
//   //       return;
//   //     })
//   //     .catch(({ status, responseText }) => {
//   //       alertObject.innerText = 'Wrong username or password';
//   //       alertObject.style.visibility = 'visible';
//   //     })
//   // }
//   // window.logInRequest = logInRequest;


  // // ------------------------------
  // function logInRequest({ body, alertObject }) {

  //   Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
  //     .then(({ status, responseText }) => {
  //       // homeViewRequest();
  //       console.log('success');
  //       return;
  //     })
  //     .catch(({ status, responseText }) => {
  //       alertObject.innerText = 'Wrong username or password';
  //       alertObject.style.visibility = 'visible';
  //       // console.log('error');
  //     })
  // }
  // window.logInRequest = logInRequest;

//   // // ------------------------------
//   // function signUpRequest({ body, alertObject }) {

//   //   Ajax.promisifyPost({ url: `${backendAddress}/signup`, body})
//   //     .then(({ status, responseText }) => {
//   //       homeViewRequest();
//   //       return;
//   //     })
//   //     .catch(({ status, responseText }) => {
//   //       alertObject.innerText = 'Wrong data for account creating';
//   //       alertObject.style.visibility = 'visible';
//   //     })
//   // }
//   // window.signUpRequest = signUpRequest;


  // // ------------------------------
  // function signUpRequest({ body, alertObject }) {

  //   Ajax.promisifyPost({ url: `${backendAddress}/signup`, body})
  //     .then(({ status, responseText }) => {
  //       // homeViewRequest();
  //       console.log('success');
  //       return;
  //     })
  //     .catch(({ status, responseText }) => {
  //       alertObject.innerText = 'Wrong data for account creating';
  //       alertObject.style.visibility = 'visible';
  //     })
  // }
  // window.signUpRequest = signUpRequest;
// }()
// );


const backendAddress = 'https://ozonback.herokuapp.com';

import HomeModel from "../models/HomeModel.js";

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

      })
      .catch(({ status, responseText }) => {

        const root = document.getElementById("main-container");
        const homeModel = new HomeModel(root);
        homeModel.render();

      })
  }
  window.profileRequest = profileRequest;

}()
);