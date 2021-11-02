import { Connection } from '../types';
import * as signUp from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn button click',
    callback: signUp.SignInShow,
  },
];

export default connections;
