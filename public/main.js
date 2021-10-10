/* eslint-disable import/extensions */
import eventBus from './events/eventBus.js';
import { init } from './callbacks/viewDispatcher.js';
import viewDispatcherListeners from './listeners/viewDispatcher.js';

eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
