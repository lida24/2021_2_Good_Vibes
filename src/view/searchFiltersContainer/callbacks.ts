import { Callback, Product } from '../../types';

export const fillInputs: Callback = (array: Product[]) => {
  const minPriceInput = <HTMLInputElement>document.getElementsByClassName('min-price-input')[0];
  const maxPriceInput = <HTMLInputElement>document.getElementsByClassName('max-price-input')[0];
  const minRatingInput = <HTMLInputElement>document.getElementsByClassName('min-rating-input')[0];
  const maxRatingInput = <HTMLInputElement>document.getElementsByClassName('max-rating-input')[0];

  if (!minRatingInput || !maxRatingInput || !minPriceInput || !maxPriceInput) {
    return;
  }

  const priceList = array.map((item) => item.price).sort((a, b) => a - b);
  const ratingList = array.map((item) => item.rating).sort((a, b) => a - b);

  const minPrice = priceList[0];
  const maxPrice = priceList[priceList.length - 1];

  const minRating = ratingList[0];
  const maxRating = ratingList[ratingList.length - 1];

  maxPriceInput.value = maxPrice.toString();
  minPriceInput.value = minPrice.toString();

  maxRatingInput.value = maxRating.toString();
  minRatingInput.value = minRating.toString();
};

export const b = 0;
