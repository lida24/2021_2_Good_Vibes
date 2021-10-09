import Hood from './view/hood.js';

const root = document.getElementsByClassName('grid-container')[0];
const hoodView = new Hood(root);

const wf = new Promise((resolve) => {
  resolve();
});

wf
  .then(() => hoodView.render())
  .then(() => { });
