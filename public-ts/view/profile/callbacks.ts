import bus from '../../init/bus';
import { Callback } from '../../types';

export const signInStateRequest: Callback = () => {
  bus.emit('signIn state request', undefined);
};

export const a = 0;
