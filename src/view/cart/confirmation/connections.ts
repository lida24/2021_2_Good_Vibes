import { Connection } from '../../../types';
import * as confirmation from './callbacks';

const connections: Connection[] = [
  {
    event: 'confirmationPage shown',
    callback: confirmation.showProductArray,
  },
];

export default connections;
