/* eslint-disable max-len */
const initEvents: (self: HTMLElement) => void = (self) => {
  const minPrice = <HTMLInputElement>self.getElementsByClassName('min-price-input')[0];
  const maxPrice = <HTMLInputElement>self.getElementsByClassName('max-price-input')[0];
  const minRating = <HTMLInputElement>self.getElementsByClassName('min-rating-input')[0];
  const maxRating = <HTMLInputElement>self.getElementsByClassName('max-rating-input')[0];

  const input: {
    minPrice: HTMLInputElement,
    maxPrice: HTMLInputElement,
    minRating: HTMLInputElement,
    maxRating: HTMLInputElement,
  } = {
    minPrice,
    maxPrice,
    minRating,
    maxRating,
  };

  // console.log(input);

  // ----------------
  Object.values(input).forEach((inputElement) => {
    inputElement.addEventListener('change', (event) => {
      event.preventDefault();

      // eslint-disable-next-line no-param-reassign
      if (+inputElement.value < 0) inputElement.value = '0';

      if (+input.minRating.value > 5) input.minRating.value = '5';
      if (+input.maxRating.value > 5) input.maxRating.value = '5';
    });
  });

  input.minPrice.addEventListener('change', () => {
    if (input.minPrice.value > input.maxPrice.value) input.minPrice.value = input.maxPrice.value;
  });

  input.maxPrice.addEventListener('change', () => {
    if (input.maxPrice.value < input.minPrice.value) input.maxPrice.value = input.minPrice.value;
  });

  input.minRating.addEventListener('change', () => {
    if (input.minRating.value > input.maxRating.value) input.minRating.value = input.maxRating.value;
  });

  input.maxRating.addEventListener('change', () => {
    if (input.maxRating.value < input.minRating.value) input.maxRating.value = input.minRating.value;
  });
};

export default initEvents;
