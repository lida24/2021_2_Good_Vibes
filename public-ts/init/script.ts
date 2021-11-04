import ajaxConnections from '../ajax/connections';
import Hood from '../hood/view';
import bus from '../scripts/bus';
import initConnections from './connections';

import dispatcherConnections from '../dispatcher/connections';

const init = () => {
  bus.add(ajaxConnections);
  bus.add(dispatcherConnections);

  bus.add(initConnections);

  bus.emit('cookie check request', undefined);
  bus.emit('cart get request', undefined);
  bus.emit('category get request', undefined);

  const hood = new Hood('grid-container');
  document.getElementsByClassName('grid-container')[0].replaceWith(hood.self);
};

export default init;
