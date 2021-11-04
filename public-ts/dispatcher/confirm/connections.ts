import { Connection } from '../../types';
import * as confirm from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state confirmed',
    callback: confirm.signIn,
  },
  {
    event: 'signUp state confirmed',
    callback: confirm.signUp,
  },
  {
    event: 'profile state confirmed',
    callback: confirm.profile,
  },
];

export default connections;
