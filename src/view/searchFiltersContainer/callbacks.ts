/* eslint-disable prefer-destructuring */
import searchParams from '../../object/search/params';
import { Callback, Product } from '../../types';

export const getParams: Callback = (array: Product[]) => {
  const minPriceInput = <HTMLInputElement>document.getElementsByClassName('min-price-input')[0];
  const maxPriceInput = <HTMLInputElement>document.getElementsByClassName('max-price-input')[0];
  const minRatingInput = <HTMLInputElement>document.getElementsByClassName('min-rating-input')[0];
  const maxRatingInput = <HTMLInputElement>document.getElementsByClassName('max-rating-input')[0];
  const orderInput = document.getElementsByClassName('order-radio');

  if (!minRatingInput || !maxRatingInput || !minPriceInput || !maxPriceInput || !orderInput) {
    return;
  }

  // ------------------
  const priceList = array.map((item) => item.price).sort((a, b) => a - b);
  const ratingList = array.map((item) => item.rating).sort((a, b) => a - b);

  searchParams.minPrice = priceList[0];
  searchParams.maxPrice = priceList[priceList.length - 1];

  searchParams.minRating = ratingList[0];
  searchParams.maxRating = ratingList[ratingList.length - 1];

  maxPriceInput.value = searchParams.maxPrice.toString();
  minPriceInput.value = searchParams.minPrice.toString();

  maxRatingInput.value = searchParams.maxRating.toString();
  minRatingInput.value = searchParams.minRating.toString();
};

export const b = 0;
