import Hood from './models/Hood.js';
import Request from './js/requests.js';

const hoodContainer = document.getElementsByClassName("grid-container")[0];
const hood = new Hood(hoodContainer);
hood.render();

Request.homePage();



