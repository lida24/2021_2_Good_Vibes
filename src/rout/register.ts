import router from './router';
import routMap from './routMap';

const register: () => void = () => {
  Object.keys(routMap).forEach((key) => router.register(key, routMap[key]));
};

export default register;
