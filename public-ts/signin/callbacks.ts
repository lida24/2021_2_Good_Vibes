import SignUp from '../signup/view';

export const SignUpBtnClick = () => {
  console.log('SignUpBtnClick');
};

export const SignUpShow = () => {
  const main = <HTMLElement>document.getElementById('main-container');
  const signup = new SignUp(main);

  signup.render();
};
