/* eslint-disable import/extensions */
import eventBus from '../controller/eventBus.js';
import * as model from '../model/viewDispatcherModel.js';
import classesNames from './classesNames.js';

const viewDispatcherListeners = [
  {
    event: 'profile-click',
    callback: [
      model.signinView
    ]
  },
  {
    event: 'logo-click',
    callback: [
      model.signupView
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
