import { Connection } from '../types';
import * as dispatcher from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state request',
    callback: dispatcher.signIn,
  },
  {
    event: 'signUp state request',
    callback: dispatcher.signUp,
  },
  {
    event: 'profile state request',
    callback: dispatcher.profile,
  },
];

export default connections;
