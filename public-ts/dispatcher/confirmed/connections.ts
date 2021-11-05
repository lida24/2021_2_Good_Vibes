import { addToHistory } from '../../rout/callbacks';
import { Connection } from '../../types';
import * as confirm from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state confirmed',
    callback: [
      confirm.showSignIn,
      addToHistory,
    ],
  },
  {
    event: 'signUp state confirmed',
    callback: [
      confirm.showSignUp,
      addToHistory,
    ],
  },
  {
    event: 'profile state confirmed',
    callback: [
      confirm.showProfile,
      addToHistory,
    ],
  },
  {
    event: 'signout confirmed',
    callback: [
      confirm.signOut,
    ],
  },
  {
    event: 'signIn ajax confirmed',
    callback: [
      confirm.addUser,
      confirm.cartGetRequest,
    ],
  },
  {
    event: 'signUp ajax confirmed',
    callback: [
      confirm.addUser,
      confirm.cartGetRequest,
    ],
  },
];

export default connections;
