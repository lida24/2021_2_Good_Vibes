import { Connection } from '../../types';
import * as signIn from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state confirmed',
    callback: [
      signIn.hideAlert,
      signIn.cleanInputs,
    ],
  },
  {
    event: 'signUp button click',
    callback: signIn.SignUpShow,
  },
  {
    event: 'signIn button click',
    callback: signIn.inputDataValidate,
  },
  {
    event: 'show alert',
    callback: signIn.showAlert,
  },
  {
    event: 'hide alert',
    callback: signIn.hideAlert,
  },
  {
    event: 'validation complete',
    callback: signIn.ajaxRequest,
  },
  {
    event: 'signIn ajax denied',
    callback: signIn.handleSignInDenied,
  },
];

export default connections;
