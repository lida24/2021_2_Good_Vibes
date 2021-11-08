import router from './router';

const register: () => void = () => {
  router
    .register('/', 'homepage')
    .register('/profile', 'profile')
    .register('/signin', 'signIn')
    .register('/signup', 'signUp')
    .register('/homepage', 'homepage')
    .register('/product', 'product')
    .register('/cart', 'cart')
    .register('/category', 'category')
    .register('/address', 'address')
    .register('/payment', 'payment')
    .register('/confirmation', 'confirmation');
};

export default register;
