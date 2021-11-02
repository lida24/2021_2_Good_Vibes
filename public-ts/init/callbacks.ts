import { Callback } from '../types';

export const cookieCheck: Callback = () => {
  console.log('cookieCheck');
  return 5;
};



// export const cookieCheck = () => {
//   console.log('cookieCheck');
// };

export const cartGet = () => {
  console.log('cartGet');
};

export const categoryGet = () => {
  console.log('categoryGet');
};
