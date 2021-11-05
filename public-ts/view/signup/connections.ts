import { Connection } from '../../types';
import * as signUp from './callbacks';

const connections: Connection[] = [
  {
    // event: 'signUp state confirmed',
    event: 'signup shown',
    callback: [
      signUp.hideAlert,
      signUp.cleanInputs,
    ],
  },
  {
    event: 'signIn toggle button click',
    callback: signUp.SignInShow,
  },
  {
    event: 'signUp button click',
    callback: signUp.inputDataValidate,
  },
  {
    event: 'show alert',
    callback: signUp.showAlert,
  },
  {
    event: 'hide alert',
    callback: signUp.hideAlert,
  },
  {
    event: 'validation complete',
    callback: signUp.ajaxRequest,
  },
  {
    event: 'signUp ajax denied',
    callback: signUp.handleSignUpDenied,
  },
];

export default connections;
