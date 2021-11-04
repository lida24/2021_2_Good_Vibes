import bus from '../scripts/bus';

export const SignUpBtnClick = () => {
  console.log('SignUpBtnClick');
};

export const SignUpShow = () => {
  bus.emit('show view', { name: 'signup' });
};
