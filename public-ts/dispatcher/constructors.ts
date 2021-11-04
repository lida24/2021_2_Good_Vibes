import SignIn from '../signin/view';
import SignUp from '../signup/view';
import { ConstructorInterface } from '../types';

const constructor: { [name: string]: ConstructorInterface } = {
  signup: SignUp,
  signin: SignIn,
};

export default constructor;
