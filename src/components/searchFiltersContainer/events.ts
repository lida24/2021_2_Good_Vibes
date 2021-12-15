import bus from '../../modules/bus/bus';
import searchParams from '../../services/search/params';

/* eslint-disable max-len */
const initEvents: (self: HTMLElement) => void = (self) => {
  const minPrice = <HTMLInputElement>self.getElementsByClassName('search-filter-amount__from')[0];
  const maxPrice = <HTMLInputElement>self.getElementsByClassName('search-filter-amount__to')[0];
  const minRating = <HTMLInputElement>self.getElementsByClassName('search-filter-rating__from')[0];
  const maxRating = <HTMLInputElement>self.getElementsByClassName('search-filter-rating__to')[0];

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

  minPrice.value = searchParams.minPrice.toString();
  maxPrice.value = searchParams.maxPrice.toString();
  minRating.value = searchParams.minRating.toString();
  maxRating.value = searchParams.maxRating.toString();

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

  // input.minPrice.addEventListener('change', () => {
  //   if (input.minPrice.value > input.maxPrice.value) input.minPrice.value = input.maxPrice.value;
  // });

  // input.maxPrice.addEventListener('change', () => {
  //   if (input.maxPrice.value < input.minPrice.value) input.maxPrice.value = input.minPrice.value;
  // });

  // input.minRating.addEventListener('change', () => {
  //   if (input.minRating.value > input.maxRating.value) input.minRating.value = input.maxRating.value;
  // });

  // input.maxRating.addEventListener('change', () => {
  //   if (input.maxRating.value < input.minRating.value) input.maxRating.value = input.minRating.value;
  // });

  Object.entries(input).forEach(([key, inputElement]) => {
    inputElement.addEventListener('change', (event) => {
      event.preventDefault();
      searchParams[key] = +inputElement.value;

      // const currentCategory = window.location.search.match(/.*name=(\w+)/u)[1];

      const currentCategory = window.location.pathname.match(/\/category\/(.+)/u)[1];

      bus.emit('category ajax request', { name: currentCategory });
    });
  });

  const priceToggle = self.querySelector('#sort-price-toggle');
  priceToggle?.addEventListener('click', (event) => {
    const target = event.target as HTMLSpanElement;
    let status = target.getAttribute('data-status');
    switch (true) {
      case status === 'asc':
        status = 'desc';
        break;
      case status === 'desc':
        status = 'asc';
        break;
      case status === 'off':
      default:
        status = 'desc';
    }
    target.setAttribute('data-status', status);
    if (status === 'asc' || status === 'desc') {
      searchParams.type = status;
      searchParams.orderType = 'price';
      const currentCategory = window.location.pathname.match(/\/category\/(.+)/u)[1];
      bus.emit('category ajax request', { name: currentCategory });
      const ratingToggle = self.querySelector('#sort-rating-toggle') as HTMLSpanElement;
      ratingToggle.setAttribute('data-status', 'off');
    }
  });

  const ratingToggle = self.querySelector('#sort-rating-toggle');
  ratingToggle?.addEventListener('click', (event) => {
    const target = event.target as HTMLSpanElement;
    let status = target.getAttribute('data-status');
    switch (true) {
      case status === 'asc':
        status = 'desc';
        break;
      case status === 'desc':
        status = 'asc';
        break;
      case status === 'off':
      default:
        status = 'desc';
    }
    target.setAttribute('data-status', status);
    if (status === 'asc' || status === 'desc') {
      searchParams.type = status;
      searchParams.orderType = 'rating';
      const currentCategory = window.location.pathname.match(/\/category\/(.+)/u)[1];
      bus.emit('category ajax request', { name: currentCategory });
      const priceToggle = self.querySelector('#sort-price-toggle') as HTMLSpanElement;
      priceToggle.setAttribute('data-status', 'off');
    }
  });

  // ------------------
  /*  const radioArray = self.getElementsByClassName('sort-price-toggle');
   const firstRadio = <HTMLInputElement>radioArray[0];
   firstRadio.checked = true;

    Array.from(radioArray).forEach((element: HTMLInputElement) => {
     element.addEventListener('change', () => {
       if (element.checked) {
         const type = <'asc' | 'desc'>element.value.toString();
         searchParams.type = type;

         // const currentCategory = window.location.search.match(/.*name=(\w+)/u)[1];

         const currentCategory = window.location.pathname.match(/\/category\/(.+)/u)[1];

         bus.emit('category ajax request', { name: currentCategory });
         return false;
       }
       return true;
     });
   });  */

  // ------------------
  /*   const orderTypeInputArray = self.getElementsByClassName('order-type-radio');
    const firstOrderTypeInputArray = <HTMLInputElement>radioArray[0];
    firstOrderTypeInputArray.checked = true;
   */
  /* Array.from(orderTypeInputArray).forEach((element: HTMLInputElement) => {
    element.addEventListener('change', () => {
      if (element.checked) {
        const type = <'price' | 'rating'>element.value.toString();
        searchParams.orderType = type;

        // const currentCategory = window.location.search.match(/.*name=(\w+)/u)[1];

        const currentCategory = window.location.pathname.match(/\/category\/(.+)/u)[1];

        bus.emit('category ajax request', { name: currentCategory });
        return false;
      }
      return true;
    });
  }); */
};

export default initEvents;
