/* eslint-disable import/extensions */
import * as model from '../callbacks/homepage.js';

const homepageListeners = [
  {
    event: 'renderProdCard',
    callback: [
      model.renderProdCard
    ]
  },
  {
    event: 'renderProdArray',
    callback: [
      model.renderProdArray
    ]
  },
  {
    event: 'homepageLoaded',
    callback: [
      model.homepageLoaded
    ]
  }
];

export default homepageListeners;
