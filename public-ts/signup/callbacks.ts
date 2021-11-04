import bus from '../scripts/bus';

export const SignInBtnClick = () => {
  console.log('SignInBtnClick');
};

export const SignInShow = () => {
  // showView('signin');
  bus.emit('show view', { name: 'signin' });
};
