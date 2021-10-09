// import HoodView from './HoodView.js';

// const root = document.getElementsByClassName('grid-container')[0];
// HoodView.setParent(root);

// HoodView.show();

import HoodView from './scripts/HoodView.js';
const root = document.getElementsByClassName('grid-container')[0];
const hoodView = new HoodView(root);

const wf = new Promise((resolve) => {
  resolve();
});

wf
  .then(() => hoodView.render())


// import Observe from './scripts/observe.js';

// const observe = new Observe();

// const foo = (data) => console.log(data);
// const foo2 = (data) => console.log('cli1dsafck');

// observe.on('click', foo);
// observe.on('click', foo2);

// observe.on('close', foo2);

// // observe.off('click', foo);

// observe.emit('click', 'datadatadata');
