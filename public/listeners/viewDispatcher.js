/* eslint-disable import/extensions */
// import eventBus from '../events/eventBus.js';
import * as model from '../callbacks/viewDispatcher.js';
import classesNames from '../constants/classesNames.js';

const viewDispatcherListeners = [
  {
    event: 'profile-click',
    callback: [
      model.showView
      // model.signinView
      // model.viewCheck
    ]
  },
  {
    event: 'logo-click',
    callback: [
      model.showView
      // model.signupView
      // model.viewCheck
    ]
  }

];

classesNames.forEach((className) => {
  viewDispatcherListeners.push({
    event: `hide-${className}`,
    callback: model.hide[className]
  });

  viewDispatcherListeners.push({
    event: `show-${className}`,
    callback: model.show[className]
  });
});

export default viewDispatcherListeners;
