import Hood from './models/Hood';
import Request from './js/requests';

const hoodContainer = document.getElementsByClassName("grid-container")[0];
const hood = new Hood(hoodContainer);
hood.render();

Request.homePage();



