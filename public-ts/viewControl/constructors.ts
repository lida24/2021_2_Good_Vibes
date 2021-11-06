import Profile from '../view/profile/view';
import SignIn from '../view/signin/view';
import SignUp from '../view/signup/view';
import { ConstructorInterface } from '../types';
import Homepage from '../view/homepage/view';
import ProductPage from '../view/productPage/view';

const constructor: { [name: string]: ConstructorInterface } = {
  signup: SignUp,
  signin: SignIn,
  profile: Profile,
  homepage: Homepage,
  productPage: ProductPage,
};

export default constructor;
