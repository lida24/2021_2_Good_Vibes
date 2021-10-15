/* eslint-disable import/extensions */
import state from '../constants/state.js';
import constructors from '../constants/constructors.js';
import eventBus from '../events/eventBus.js';

export const hide = {};
export const show = {};

let view = {};

const add = (obj) => {
  view = Object.assign(view, obj);
};

const remove = (name) => {
  view[name].delete();
  delete view[name];
};

const visibleControl = (targetName) => {
  const main = document.getElementById('main-container');

  if (view[targetName]) {
    if (view[targetName].state === state.hidden) {
      view[targetName].element.show();
      view[targetName].state = state.visible;
      main.replaceWith(view[targetName].dom);
    }
  }

  Object.keys(view).forEach((key) => {
    if (key !== targetName && key !== 'Hood') {
      view[key].element.hide();
      view[key].state = state.hidden;
    }
  });
};

const viewGenerate = ({ name, context }) => {
  const main = document.getElementById('main-container');

  const buffView = document.createElement('main');
  buffView.id = 'main-container';

  const buffObj = new constructors[name](buffView);

  let viewName = name;
  if (context?.id) {
    viewName += context.id;
  }

  add({
    [viewName]: {
      element: buffObj,
      dom: buffView,
      state: state.hidden
    }
  });

  view[viewName].state = state.visible;
  main.replaceWith(view[viewName].dom);

  if (view[viewName].element?.setContext) {
    view[viewName].element.setContext(context);
  }
  // console.log(view[viewName].element.setContext);

  return view[viewName].element.render();
};

export const showView = ({ name, context }) => {
  console.log(`${name} view`);

  let viewName = name;
  if (context?.id) {
    viewName += context.id;
  }

  if (!view[viewName]) {
    return viewGenerate({ name, context })
      .then(() => visibleControl(viewName));
  }

  return visibleControl(viewName);
};

export const viewCheck = () => {
  console.log(view);
};

export const init = () => {
  const root = document.getElementsByClassName('grid-container')[0];
  const buffObj = new constructors.Hood(root);
  add({
    Hood: {
      element: buffObj,
      dom: root,
      state: state.hidden
    }
  });

  view.Hood.state = state.visible;
  return view.Hood.element.render()
    .then(() => viewGenerate({ name: 'Homepage' }));
  // .then(() => {
  //   eventBus.emit('homepage ajax request');
  // });
};
