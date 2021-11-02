import { Connection } from '../types';
import * as signIn from './callbacks';

const connections: Connection[] = [
  {
    event: 'signUp button click',
    callback: signIn.SignUpShow,
  },
];

export default connections;
