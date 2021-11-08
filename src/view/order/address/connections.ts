import { Connection } from '../../../types';
import * as address from './callbacks';

const connecions: Connection[] = [
  {
    event: 'address page continue button click',
    callback: address.paymentPageRequest,
  },
];

export default connecions;
