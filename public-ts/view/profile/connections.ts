import { Connection } from '../../types';
import * as profile from './callbacks';

const connections: Connection[] = [
  {
    event: 'signOut button click',
    callback: profile.signInStateRequest,
  },
];

export default connections;
