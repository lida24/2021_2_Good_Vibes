// import { ViewInterface } from '../types';
// import constructor from './constructors';

// type ShowViewSignature = (obj: { [name: string]: string }) => void;

// const viewMap: {
//   [name: string]: {
//     'view': ViewInterface,
//     'visibility': boolean,
//   }
// } = {};

// const add: (name: string, view: ViewInterface) => void = (name: string, view: ViewInterface) => {
//   console.log('add', name);

//   viewMap[name] = {
//     view,
//     visibility: true,
//   };
// };

// const viewGenerate: (name: string) => void = (name: string) => {
//   if (!constructor[name]) {
//     console.log('haven\'t constructor for name', name);
//     return;
//   }

//   const root = document.getElementById('main-container');
//   const view = new constructor[name](root);

//   view.render();
//   add(name, view);
//   viewMap[name].visibility = true;
// };

// export const showView: ShowViewSignature = (obj) => {
//   console.log(viewMap);
//   console.log(obj);

//   const { name } = obj;

//   Object.keys(viewMap).forEach((key) => {
//     viewMap[key].view.hide();
//     viewMap[key].visibility = false;
//   });

//   if (!viewMap[name]) {
//     viewGenerate(name);
//     return;
//   }

//   console.log(viewMap[name]);

//   const main = document.getElementById('main-container');

//   const target = <HTMLElement>main.firstChild;
//   // target.replaceWith(viewMap[name].view.get());

//   main.replaceWith(viewMap[name].view.get());

//   // <HTMLElement>main.firstChild.replaceWith(viewMap[name].view);

//   viewMap[name].view.show();
//   viewMap[name].visibility = true;
// };

// export const a = 0;


import { ViewInterface } from '../types';
import constructor from './constructors';

type ShowViewSignature = (obj: { [name: string]: string }) => void;

const viewMap: {
  [name: string]: {
    'view': ViewInterface,
    'visibility': boolean,
  }
} = {};

const add: (name: string, view: ViewInterface) => void = (name: string, view: ViewInterface) => {
  console.log('add', name);

  viewMap[name] = {
    view,
    visibility: true,
  };
};

const viewGenerate: (name: string) => void = (name: string) => {
  if (!constructor[name]) {
    console.log('haven\'t constructor for name', name);
    return;
  }

  const view = new constructor[name](name);

  add(name, view);
  viewMap[name].visibility = false;
};

export const showView: ShowViewSignature = (obj) => {

  const { name } = obj;

  Object.keys(viewMap).forEach((key) => {
    // viewMap[key].view.hide();
    viewMap[key].visibility = false;
  });

  if (!viewMap[name]) {
    viewGenerate(name);
  }

  // viewMap[name].view.show();
  document.getElementById('main-container').replaceWith(viewMap[name].view.self);
  viewMap[name].visibility = true;

  console.log(viewMap);
};

export const a = 0;
