import { Connection } from '../../../types';
import * as confirmation from './callbacks';

const connections: Connection[] = [
  {
    event: 'confirmationPage shown',
    callback: [
      confirmation.showAddress,
      confirmation.showPayMethod,
      confirmation.showProductArray,
    ],
  },
  {
    event: 'confirm order button click',
    callback: confirmation.confirmAjaxRequest,
  },
];

export default connections;
