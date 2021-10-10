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

  // view.Signin.element.render()
  //   .then(() => view.Signin.element.hide())
  //   .then(() => {
  //     view.Signin.state = state.hidden;
  //   });

  view.Signin.state = state.visible;
  return view.Signin.element.render();
};

// const visibleControl = (targetName) => new Promise((resolve) => {
//   Object.keys(view).forEach((key) => {
//     if (key !== targetName && key !== 'Hood') {
//       view[key].element.hide();
//       view[key].state = state.hidden;
//     }
//   });

//   // view[targetName].element.show();
//   // view[targetName].state = state.visible;
//   console.log(view[targetName].element.show);
//   console.log(view[targetName].state);

//   resolve();
// });

const visibleControl = (targetName) => {
  const wf = new Promise((resolve) => resolve());

  wf
    .then(() => {
      Object.keys(view).forEach((key) => {
        if (key !== targetName && key !== 'Hood') {
          view[key].element.hide();
          view[key].state = state.hidden;
        }
      });
    })
    .then(() => {
      // view[targetName].element.show();
      // view[targetName].state = state.visible;

      // console.log(view[targetName].element.show);
      // console.log(view[targetName].state);

      // console.log(view);
      // console.log(targetName);
      // console.log(view[targetName].element.show);
      view[targetName].element.show();
      view[targetName].state = state.visible;
    })
  // .catch((error) => alert(error));
}

// const wf = new Promise((resolve) => resolve());

// wf
//   .then(() => {
//     Object.keys(view).forEach((key) => {
//       if (key !== targetName && key !== 'Hood') {
//         view[key].element.hide();
//         view[key].state = state.hidden;
//       }
//     });
//   })
//   .then(() => {
//     // view[targetName].element.show();
//     // view[targetName].state = state.visible;
//     console.log(view[targetName].element.show);
//     console.log(view[targetName].state);
//   })
// // .catch((error) => alert(error));

export const signinView = () => {
  console.log('signinView');

  // if (!view.Signin) {
  //   signinViewGenerate();
  // }

  // // if (view.Signin.state === state.hidden) {
  // //   view.Signin.element.render();
  // // }

  // visibleControl('Signin');

  // const wf = new Promise((resolve) => resolve());
  // wf
  //   .then(() => {
  //     if (!view.Signin) {
  //       signinViewGenerate();
  //     }
  //   })
  //   .then(() => {
  //     visibleControl('Signin');
  //   });

  // if (view.Signin) {
  //   return;
  // }
  // signinViewGenerate()
  //   .then(() => visibleControl('Signin'));

  if (!view.Signin) {
    return signinViewGenerate()
      .then(() => visibleControl('Signin'));
  }

  return visibleControl('Signin');
};

export const logo = () => {
  console.log('logo');

  // if (!view.Signin) {
  //   return;
  // }
  // if (view.Signin.state === state.visible) {
  //   view.Signin.element.hide();
  //   view.Signin.state = state.hidden;
  // }

  visibleControl('logo');
};
