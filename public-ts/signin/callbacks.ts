import bus from '../scripts/bus';
// import SignUp from '../signup/view';

export const SignUpBtnClick = () => {
  console.log('SignUpBtnClick');
};

export const SignUpShow = () => {
  // showView('signup');
  bus.emit('show view', { name: 'signup' });
};
