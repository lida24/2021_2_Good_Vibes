import AuthorizView from '../Components/AuthorizView/AuthorizView.js'
import HomeView from '../Components/HomeView/HomeView.js';

(function ajaxRequests() {
  const AJAX_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
  };   

  // ------------------------------
  function homeViewRequest() {
    root.innerHTML = '';

    Ajax.promisifyGet({url: 'https://ozonback.herokuapp.com/profile',})
      .then( ({status, responseText}) => {
        const homeView = new HomeView(root);
        homeView.render();
      })
      .catch( ({status, responseText}) => {
        const authorizView = new AuthorizView(root);
        authorizView.render();
      })


    // Ajax.getUsingFetch({ url: 'https://ozonback.herokuapp.com/profile', })
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

  // // ------------------------------
  // function logOutRequest() {
  //   Ajax.ajaxGet({
  //     url: 'https://ozonback.herokuapp.com/logout',
  //     callback: (status, responseText) => {
  //       if (status === AJAX_STATUS.OK) {
  //         homeViewRequest();
  //         return;
  //       }

  //       JSON.parse(responseText, (key, value) => {
  //         if (key !== '') {
  //           alert(value);
  //         }
  //       });
  //     },
  //   });
  // }
  // window.logOutRequest = logOutRequest;


  // ------------------------------
  function logOutRequest() {
    // Ajax.ajaxGet({
    //   url: 'https://ozonback.herokuapp.com/logout',
    //   callback: (status, responseText) => {
    //     if (status === AJAX_STATUS.OK) {
    //       homeViewRequest();
    //       return;
    //     }

    //     JSON.parse(responseText, (key, value) => {
    //       if (key !== '') {
    //         alert(value);
    //       }
    //     });
    //   },
    // });

    Ajax.promisifyGet({ url: 'https://ozonback.herokuapp.com/logout', })
      .then(({ status, responseText }) => {
        // const homeView = new HomeView(root);
        // homeView.render();
        homeViewRequest();
      })
      .catch(({ status, responseText }) => {
        // const authorizView = new AuthorizView(root);
        // authorizView.render();
        alert(responseText);
      })


  }
  window.logOutRequest = logOutRequest;

  // ------------------------------
  function logInRequest({ body, alertObject }) {
    Ajax.ajaxPost({
      url: 'https://ozonback.herokuapp.com/login',
      body,
      callback: (status, responseText) => {

        console.log(status);
        console.log(responseText);

        if (status === AJAX_STATUS.BAD_REQUEST) {
          alertObject.innerText = 'Wrong username or password';
          alertObject.style.visibility = 'visible';
          return;
        }

        if (status === AJAX_STATUS.OK) {
          homeViewRequest();
          return;
        }

        // JSON.parse(responseText, (key, value) => {
        //   if (key !== '') {
            // alertObject.innerText = value;
            // alertObject.style.visibility = 'visible';
        //   }
        // });

      },
    });
  }
  window.logInRequest = logInRequest;

  // ------------------------------
  function signUpRequest({ body, alertObject }) {
    Ajax.ajaxPost({
      url: 'https://ozonback.herokuapp.com/signup',
      body,
      callback: (status, responseText) => {
        if (status === AJAX_STATUS.CREATED) {
          homeViewRequest();
          return;
        }

        JSON.parse(responseText, (key, value) => {
          if (key !== '') {
            alertObject.innerText = value;
            alertObject.style.visibility = 'visible';
          }
        });
      },
    });
  }
  window.signUpRequest = signUpRequest;
}()
);
