import HomeModel from './models/HomeModel.js';
import Hood from './models/Hood.js';
import Request from './js/ajaxRequests.js';

const hoodContainer = document.getElementsByClassName("grid-container")[0];
const hood = new Hood(hoodContainer);
hood.render();

const root = document.getElementById('main-container');

// const homeModel = new HomeModel(root);
// homeModel.render();

Request.homePageRequest();


// let user;
// coockieCheckRequest(user);

// async function f(user) {
//     return coockieCheckRequest(user);
// }

// let user = await f;

// let result = cookieCheckRequest();

// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         resolve(coockieCheckRequest())
//     });

//     let result = await promise; 

// }

// f();

// let response;
// (async () => {
//     let response = await cookieCheckRequest();
//     // let user = await response.json();
//     // let user = await console.log(response);
//     console.log(response);
// })();




// console.log(user);


