/* eslint-disable import/extensions */
import * as model from '../model/viewDispatcherModel.js';
import classesName from './classesName.js';

const viewDispatcherListeners = [

];

classesName.forEach((className) => {
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
