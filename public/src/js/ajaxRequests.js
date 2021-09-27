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

// import HomeModel from "../models/HomeModel";

(function ajaxRequests() {

  function coockieCheckRequest(user) {
    Ajax.promisifyGet({ url: `${backendAddress}/profile`, })
      .then(({ status, responseText }) => {
        // const homeView = new HomeView(root);
        // homeView.render();
        console.log(responseText);
        user = responseText;
        // window.user = user;
        return responseText;

      })
      .catch(({ status, responseText }) => {
        // const authorizView = new AuthorizView(root);
        // authorizView.render();
        console.log('fail');
      })
  }
  window.coockieCheckRequest = coockieCheckRequest;
  


  // ------------------------------
  function logInRequest({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/login`, body })
      .then(({ status, responseText }) => {
        // homeViewRequest();

        const homeModel = new HomeModel(root);
        homeModel.render();

        console.log('success');
        return;
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
        // homeViewRequest();
        console.log('success');
        return;
      })
      .catch(({ status, responseText }) => {
        alertObject.innerText = 'Пользователь уже существует';
        alertObject.style.visibility = 'visible';
      })
  }
  window.signUpRequest = signUpRequest;

}()
);