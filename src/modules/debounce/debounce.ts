type FunctionType = (...args: unknown[]) => void;

const debounce = (f: FunctionType, context: unknown, ms: number): FunctionType => {
  let isCooldown = false;
  return function func(...args: unknown[]) {
    if (isCooldown) return;

    isCooldown = true;

    setTimeout(() => {
      f.call(context, ...args);
      isCooldown = false;
    }, ms);
  };
};

export default debounce;
