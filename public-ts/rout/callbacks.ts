import { Callback } from '../types';
import router from './router';

export const init: Callback = () => {
  router.start();
};

export const a = 0;
