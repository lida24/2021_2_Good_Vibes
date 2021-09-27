import HomeModel from './models/HomeModel.js';
// import ProductModel from './models/ProductModel.js';
// import { parseRequestUrl } from './utils.js';
// import Error404Model from './models/Error404Model.js';
// import SigninModel from './models/SigninModel.js';
// import RegisterModel from './models/RegisterModel.js';
// import Catalog from './catalog.js';
import Hood from './models/Hood.js';

const hoodContainer = document.getElementsByClassName("grid-container")[0];
const hood = new Hood(hoodContainer);
hood.render();

const root = document.getElementById('main-container');

const homeModel = new HomeModel(root);
homeModel.render();

const user = coockieCheckRequest();
console.log(user);


