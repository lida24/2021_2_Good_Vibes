/* eslint-disable import/extensions */
import ViewDispatcher from './view/viewDispatcher.js';

const root = document.getElementsByClassName('grid-container')[0];
const viewDispatcher = new ViewDispatcher(root);
viewDispatcher.startPage();
