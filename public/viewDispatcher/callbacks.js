/* eslint-disable import/extensions */
import state from './states.js';
import constructors from './constructors.js';
import eventBus from '../scripts/eventBus.js';
import user from '../objects/user.js';

export const hide = {};
export const show = {};

let view = {};

let currentState = '';

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
  console.log(view[viewName].element.setContext);

  return view[viewName].element.render();
};

export const showView = ({ name, context }) => {
  console.log(`${name} view`);

  eventBus.emit('history add', name);

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

  eventBus.emit('cookie check request');

  view.Hood.state = state.visible;
  return view.Hood.element.render()
    .then(() => viewGenerate({ name: 'Homepage' }));
  // .then(() => {
  //   eventBus.emit('homepage ajax request');
  // });
};

export const showSignin = () => {
  eventBus.emit('showView', {
    name: 'Signin'
  });
};

export const showProfile = () => {
  eventBus.emit('showView', {
    name: 'Profile'
  });
};

export const showHomepage = () => {
  eventBus.emit('showView', {
    name: 'Homepage'
  });
};

export const rout = ({ name, context }) => {
  // console.log(name, context);
  eventBus.emit('rout', name);
};


// export const toHomepageState = () => {
//   // console.log('toHomepageState');
//   showHomepage();
// };

// export const toProfileState = () => {
//   // console.log('toProfileState');
//   eventBus.emit('profile ajax request');
// };

// ==================================
export const homepageStateRequest = () => {
  eventBus.emit('homepage state confirmed');
};

export const homepageStateConfirmed = () => {
  showHomepage();

  currentState = 'Homepage';
};

export const homepageStateDenied = () => {
  console.error('homepage state denied');
};

// ==================================
export const profileStateRequest = () => {
  if (user.username) {
    eventBus.emit('profile state confirmed');
    return;
  }

  eventBus.emit('profile ajax request');
};

export const profileStateConfirmed = () => {
  showProfile();

  currentState = 'Profile';
};

export const profileStateDenied = () => {
  eventBus.emit('signin state request');

  // showSignin();
};

// ==================================
export const addUser = (responseText) => {
  // try {
  //   const responseObj = JSON.parse(responseText);
  //   user.set(responseObj);
  //   console.log(user);
  // } catch (error) {
  //   console.error(error);
  // }
  console.log(responseText);

  user.username = responseText;
  console.log(user);
};

export const cookieCheckFail = () => {
};


// ==================================
export const signinStateRequest = () => {
  // console.log(user);

  if (user.username) {
    eventBus.emit('signin state denied');
    return;
  }

  const callback = ({ responseText }) => {
    addUser(responseText);
    eventBus.emit('signin state denied');
    eventBus.off('cookie check success', callback);
    // console.log(eventBus);
  };
  eventBus.on('cookie check success', callback);

  const callback2 = () => {
    eventBus.emit('signin state confirmed');
    eventBus.off('cookie check fail', callback2);
    // console.log(eventBus);
  };
  eventBus.on('cookie check fail', callback2);

  eventBus.emit('cookie check request');
};

export const signinStateDenied = () => {
  console.error('signin state denied');

  eventBus.emit('homepage state request');
};

export const signinStateConfirmed = () => {
  showSignin();

  currentState = 'Signin';
};
