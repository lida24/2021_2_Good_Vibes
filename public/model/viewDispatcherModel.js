/* eslint-disable import/extensions */
import classesNames from '../view/classesNames.js';
import Hood from '../view/hood.js';
import state from '../view/state.js';
import Signin from '../view/signin.js';
import Signup from '../view/signup.js';

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

const visibleControl = (targetName) => {
  const main = document.getElementById('main-container');

  Object.keys(view).forEach((key) => {
    if (key !== targetName && key !== 'Hood') {
      view[key].element.hide();
      view[key].state = state.hidden;
    }
  });

  if (!view[targetName]) {
    return;
  }

  if (view[targetName].state === state.hidden) {
    view[targetName].element.show();
    view[targetName].state = state.visible;
    main.replaceWith(view[targetName].dom);
  }
};

const signinViewGenerate = () => {
  const main = document.getElementById('main-container');

  const signinView = document.createElement('main');
  signinView.id = 'main-container';

  const signinObj = new Signin(signinView);

  add({
    Signin: {
      element: signinObj,
      dom: signinView,
      state: state.hidden
    }
  });

  view.Signin.state = state.visible;
  main.replaceWith(view.Signin.dom);
  return view.Signin.element.render();
};

const signupViewGenerate = () => {
  const main = document.getElementById('main-container');

  const signupView = document.createElement('main');
  signupView.id = 'main-container';

  const signupObj = new Signup(signupView);

  add({
    Signup: {
      element: signupObj,
      dom: signupView,
      state: state.hidden
    }
  });

  view.Signup.state = state.visible;
  main.replaceWith(view.Signup.dom);
  return view.Signup.element.render();
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

  if (!view.Signup) {
    return signupViewGenerate()
      .then(() => visibleControl('Signup'));
  }

  return visibleControl('Signup');
};

export const viewCheck = () => {
  console.log(view);
};
