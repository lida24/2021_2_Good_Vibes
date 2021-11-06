import { Connection } from '../../types';
import * as denied from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state denied',
    callback: denied.signIn,
  },
  {
    event: 'signUp state denied',
    callback: denied.signUp,
  },
  {
    event: 'profile state denied',
    callback: denied.profile,
  },
  {
    event: 'product request denied',
    callback: denied.product,
  }
];

export default connections;
