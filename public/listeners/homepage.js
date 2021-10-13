/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
import * as model from '../callbacks/homepage.js';

const homepageListeners = [
  {
    event: 'renderSingleProd',
    callback: [
      model.renderSingleProd
    ]
  },
  {
    event: 'renderProdArray',
    callback: [
      model.renderProdArray
    ]
  }
];

export default homepageListeners;
