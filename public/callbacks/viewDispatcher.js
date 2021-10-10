/* eslint-disable import/extensions */
import classesNames from '../constants/classesNames.js';
import state from '../constants/state.js';
import constructors from '../constants/constructors.js';

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
      element: new constructors.Hood(root),
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

const viewGenerate = (name) => {
  const main = document.getElementById('main-container');

  const buffView = document.createElement('main');
  buffView.id = 'main-container';

  const buffObj = new constructors[name](buffView);

  add({
    [name]: {
      element: buffObj,
      dom: buffView,
      state: state.hidden
    }
  });

  view[name].state = state.visible;
  main.replaceWith(view[name].dom);
  return view[name].element.render();
};

export const showView = (name) => {
  console.log(`${name} view`);

  if (!view[name]) {
    return viewGenerate(name)
      .then(() => visibleControl(name));
  }

  return visibleControl(name);
};

export const viewCheck = () => {
  console.log(view);
};
