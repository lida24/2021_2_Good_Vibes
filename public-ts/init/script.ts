import bus from '../eventbus';
import connections from './connections';

const init = () => {
  bus.add(connections);

  bus.emit('cookie check request', undefined);
  bus.emit('cart get request', undefined);
  bus.emit('category get request', undefined);
};

export default init;
