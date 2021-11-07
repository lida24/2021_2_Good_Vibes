import bus from '../../init/bus';
import { Callback } from '../../types';

export const addressStateRequest: Callback = () => {
  bus.emit('address state request', undefined);
};

export const a = 0;
