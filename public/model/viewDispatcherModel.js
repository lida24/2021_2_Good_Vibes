/* eslint-disable import/extensions */
import classesName from '../view/classesName.js';
import Hood from '../view/hood.js';
import state from '../view/state.js';

export const hide = {};
export const show = {};

let view = {};

classesName.forEach((className) => {
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

export const init = (root) => {
  add({
    Hood: {
      element: new Hood(root),
      state: 'hide'
    }
  });
  view.Hood.element.render();
  view.Hood.state = state.visible;
};
