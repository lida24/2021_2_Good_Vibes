import Profile from '../view/profile/view';
import SignIn from '../view/signin/view';
import SignUp from '../view/signup/view';
import { ConstructorInterface } from '../types';

const constructor: { [name: string]: ConstructorInterface } = {
  signup: SignUp,
  signin: SignIn,
  profile: Profile,
};

export default constructor;
