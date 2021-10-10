/* eslint-disable import/extensions */
import eventBus from '../events/eventBus.js';
// import * as model from '../callbacks/homepage.js';
import * as model from '../callbacks/homepage.js';

const homepageListeners = [
  {
    event: 'Product',
    callback: [
      model.productLoad
    ]
  }
];

export default homepageListeners;
