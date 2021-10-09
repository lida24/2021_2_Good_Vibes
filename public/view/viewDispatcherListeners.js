/* eslint-disable import/extensions */
import * as model from '../model/viewDispatcherModel.js';
import classesNames from './classesNames.js';

const viewDispatcherListeners = [

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
