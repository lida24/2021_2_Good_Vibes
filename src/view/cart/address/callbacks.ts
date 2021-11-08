import bus from '../../../init/bus';
import { Callback } from '../../../types';

export const paymentPageRequest: Callback = () => {
  bus.emit('payment state request', undefined);
};

export const a = 0;
