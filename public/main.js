/* eslint-disable import/extensions */
import eventBus from './controller/eventBus.js';
import { init } from './model/viewDispatcherModel.js';
import viewDispatcherListeners from './view/viewDispatcherListeners.js';

// const root = document.getElementsByClassName('grid-container')[0];
eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
