import { Connection } from '../../types';
import * as denied from './callbacks';

const connections: Connection[] = [
  {
    event: 'signIn state denied',
    callback: denied.signIn,
  },
  {
    event: 'signUp state denied',
    callback: denied.signUp,
  },
  {
    event: 'profile state denied',
    callback: denied.profile,
  },
  {
    event: 'product request denied',
    callback: denied.product,
  },
  {
    event: 'address state denied',
    callback: denied.address,
  },
  {
    event: 'payment state denied',
    callback: denied.payment,
  },
  {
    event: 'confirmation state denied',
    callback: denied.confirmation,
  },
];

export default connections;
