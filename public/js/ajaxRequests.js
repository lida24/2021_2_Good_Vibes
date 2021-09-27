import AuthorizView from '../Components/AuthorizView/AuthorizView.js'
import HomeView from '../Components/HomeView/HomeView.js';

const backendAddress = 'https://ozonback.herokuapp.com';

(function ajaxRequests() {
  const AJAX_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    PAGE_NOT_FOUND: 404,
  };   

  // ------------------------------
  function homeViewRequest() {
    root.innerHTML = '';

    Ajax.promisifyGet({ url: `${backendAddress}/profile`,})
      .then( ({status, responseText}) => {
        console.log(responseText);
        const homeView = new HomeView(root);
        homeView.render();
      })
      .catch( ({status, responseText}) => {
        console.log(responseText);
        const authorizView = new AuthorizView(root);
        authorizView.render();
      })


    // Ajax.getUsingFetch({ url: `${backendAddress}/profile`, })
    //   .then(({ status, parsedBody }) => {
    //     const homeView = new HomeView(root);
    //     homeView.user = parsedBody;
    //     homeView.render();
    //   })
    //   .catch(({ status, parsedBody }) => {
    //     const authorizView = new AuthorizView(root);
    //     authorizView.render();
    //   })



  }
  window.homeViewRequest = homeViewRequest;

  // ------------------------------
  function logOutRequest() {
    Ajax.promisifyGet({ url: `${backendAddress}/logout`, })
      .then(({ status, responseText }) => {
        console.log(responseText);
        homeViewRequest();
      })
      .catch(({ status, responseText }) => {
        console.log(responseText);
        alert(responseText);
      })
  }
  window.logOutRequest = logOutRequest;

  // ------------------------------
  function logInRequest({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/login`, body})
      .then(({ status, responseText }) => {
        console.log(responseText);
        homeViewRequest();
        return;
      })
      .catch(({ status, responseText }) => {
        console.log(responseText);
        alertObject.innerText = 'Wrong username or password';
        alertObject.style.visibility = 'visible';
      })
  }
  window.logInRequest = logInRequest;

  // ------------------------------
  function signUpRequest({ body, alertObject }) {

    Ajax.promisifyPost({ url: `${backendAddress}/signup`, body})
      .then(({ status, responseText }) => {
        console.log(responseText);
        homeViewRequest();
        return;
      })
      .catch(({ status, responseText }) => {
        console.log(responseText);
        alertObject.innerText = 'Wrong data for account creating';
        alertObject.style.visibility = 'visible';
      })
  }
  window.signUpRequest = signUpRequest;
}()
);
