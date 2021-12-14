/* eslint-disable prefer-destructuring */
import searchParams from '../../services/search/params';
import { Callback, Product } from '../../types';

export const getParams: Callback = (array: Product[]) => {
  console.log("getParams");
  const minPriceInput = <HTMLInputElement>document.getElementsByClassName('search-filter-amount__from')[0];
  const maxPriceInput = <HTMLInputElement>document.getElementsByClassName('search-filter-amount__to')[0];
  const minRatingInput = <HTMLInputElement>document.getElementsByClassName('search-filter-rating__from')[0];
  const maxRatingInput = <HTMLInputElement>document.getElementsByClassName('search-filter-rating__to')[0];
/*   const orderInput = document.getElementsByClassName('order-radio');
  const orderTypeInput = document.getElementsByClassName('order-type-radio'); */

  if (
    !minRatingInput
    || !maxRatingInput
    || !minPriceInput
    || !maxPriceInput
/*     || !orderInput
    || !orderTypeInput */
    || array.length === 0
  ) {
    return;
  }

  // ------------------

  console.warn(searchParams);

  /* const priceList = array.map((item) => item.price).sort((a, b) => a - b);
  const ratingList = array.map((item) => item.rating).sort((a, b) => a - b);

  searchParams.minPrice = priceList[0];
  searchParams.maxPrice = priceList[priceList.length - 1];

  searchParams.minRating = ratingList[0];
  searchParams.maxRating = ratingList[ratingList.length - 1]; */
/* 
  searchParams.minPrice = priceList[0];
  searchParams.maxPrice = priceList[priceList.length - 1]; */


  // TODO эта фигня не будет работать с пагинацией: нужно получать мин и макс значения с бэка

   if (minPriceInput.value < searchParams.minPrice.toString()) { 
    minPriceInput.value = searchParams.minPrice.toString();
   } 

   if (maxPriceInput.value > searchParams.maxPrice.toString()) {
    maxPriceInput.value = searchParams.maxPrice.toString();
   } 

 /*  if (!minRatingInput.value) {
    minRatingInput.value = searchParams.minRating.toString();
  }

  if (!maxRatingInput.value) {
    maxRatingInput.value = searchParams.maxRating.toString();
  } */
};

export const b = 0;
