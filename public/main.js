/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init } from './callbacks/viewDispatcher.js';
import viewDispatcherListeners from './listeners/viewDispatcher.js';
import ajaxListeners from './ajax/listeners.js';

eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);
