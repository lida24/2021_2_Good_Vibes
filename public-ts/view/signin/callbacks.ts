import bus from '../../scripts/bus';
import { Callback } from '../../types';

export const SignUpBtnClick = () => {
  console.log('SignUpBtnClick');
};

export const SignUpShow: Callback = () => {
  bus.emit('signUp state request', undefined);
};
