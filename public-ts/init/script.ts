import ajaxConnections from '../ajax/connections';
import bus from '../eventbus';
import initConnections from './connections';

const init = () => {
  bus.add(ajaxConnections);

  bus.add(initConnections);

  bus.emit('cookie check request', undefined);
  bus.emit('cart get request', undefined);
  bus.emit('category get request', undefined);
};

export default init;
