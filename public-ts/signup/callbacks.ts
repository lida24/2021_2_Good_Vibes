import SignIn from '../signin/view';

export const SignInBtnClick = () => {
  console.log('SignInBtnClick');
};

export const SignInShow = () => {
  const main = <HTMLElement>document.getElementById('main-container');
  const signin = new SignIn(main);

  signin.render();
};
