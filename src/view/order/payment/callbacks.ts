import bus from '../../../init/bus';
import { Callback } from '../../../types';

export const confirmationStateRequest: Callback = () => {
  bus.emit('confirmation state request', undefined);
};

export const a = 0;
