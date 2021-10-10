/* eslint-disable import/extensions */
import classesNames from '../view/classesNames.js';
import Hood from '../view/hood.js';
import state from '../view/state.js';
import Signin from '../view/signin.js';

export const hide = {};
export const show = {};

let view = {};

classesNames.forEach((className) => {
  hide[className] = () => {
    view[className].element.hide();
    view[className].state = state.hidden;
  };

  show[className] = () => {
    view[className].element.show();
    view[className].state = state.visible;
  };
});

const add = (obj) => {
  view = Object.assign(view, obj);
};

const remove = (name) => {
  view[name].delete();
  delete view[name];
};

export const init = () => {
  const root = document.getElementsByClassName('grid-container')[0];

  add({
    Hood: {
      element: new Hood(root),
      state: state.hidden
    }
  });
  view.Hood.element.render();
  view.Hood.state = state.visible;
};

const signinViewGenerate = () => {
  const main = document.getElementById('main-container');

  add({
    Signin: {
      element: new Signin(main),
      state: state.hidden
    }
  });

  view.Signin.state = state.visible;
  return view.Signin.element.render();
};

const visibleControl = (targetName) => {
  Object.keys(view).forEach((key) => {
    if (key !== targetName && key !== 'Hood') {
      view[key].element.hide();
      view[key].state = state.hidden;
    }
  });

  if (!view[targetName]) {
    return;
  }

  view[targetName].element.show();
  view[targetName].state = state.visible;
};

export const signinView = () => {
  console.log('signinView');

  if (!view.Signin) {
    return signinViewGenerate()
      .then(() => visibleControl('Signin'));
  }

  return visibleControl('Signin');
};

export const signupView = () => {
  console.log('signupView');

  visibleControl('signupView');
};
