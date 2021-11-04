import bus from '../../scripts/bus';
import { Callback } from '../../types';

export const SignInBtnClick = () => {
  console.log('SignInBtnClick');
};

export const SignInShow: Callback = () => {
  bus.emit('signIn state request', undefined);
};
