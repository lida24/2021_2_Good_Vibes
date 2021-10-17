/* eslint-disable import/extensions */
import eventBus from './scripts/eventBus.js';
import { init } from './viewDispatcher/callbacks.js';
import viewDispatcherListeners from './viewDispatcher/listeners.js';
import ajaxListeners from './ajax/listeners.js';

eventBus.on('init', init);
eventBus.emit('init');
eventBus.add(viewDispatcherListeners);
eventBus.add(ajaxListeners);
