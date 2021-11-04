import router from './router';

const register: () => void = () => {
  router
    .register('/', 'profile')
    .register('/profile', 'profile')
    .register('/signin', 'signIn')
    .register('/signup', 'signUp');
};

export default register;
