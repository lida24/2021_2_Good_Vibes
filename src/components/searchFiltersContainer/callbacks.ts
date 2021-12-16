/* eslint-disable prefer-destructuring */
import searchParams from "../../services/search/params";
import { Callback, Product } from "../../types";

export const getParams: Callback = (array: Product[]) => {
  console.log("getParams");
  const minPriceInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-amount__from")[0]
  );
  const maxPriceInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-amount__to")[0]
  );
  const minRatingInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-rating__from")[0]
  );
  const maxRatingInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-rating__to")[0]
  );

  if (
    !minRatingInput ||
    !maxRatingInput ||
    !minPriceInput ||
    !maxPriceInput ||
    array.length === 0
  ) {
    return;
  }

  // TODO эта фигня не будет работать с пагинацией: нужно получать мин и макс значения с бэка
  /* 
   if (minPriceInput.value < searchParams.minPrice.toString()) { 
    minPriceInput.value = searchParams.minPrice.toString();
   } 

   if (maxPriceInput.value > searchParams.maxPrice.toString()) {
    maxPriceInput.value = searchParams.maxPrice.toString();
   }  */
};

export const setFiltersParams: Callback = () => {
  console.log("setFiltersParams");

  const minPriceInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-amount__from")[0]
  );
  const maxPriceInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-amount__to")[0]
  );
  const minRatingInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-rating__from")[0]
  );
  const maxRatingInput = <HTMLInputElement>(
    document.getElementsByClassName("search-filter-rating__to")[0]
  );

  /* minPriceInput.value = searchParams.minPrice.toString();
  maxPriceInput.value = searchParams.maxPrice.toString();
  minRatingInput.value = searchParams.minRating.toString();
  maxRatingInput.value = searchParams.maxRating.toString(); */
  if (minPriceInput.value < searchParams.minPrice.toString()) {
    minPriceInput.value = searchParams.minPrice.toString();
  }

  if (maxPriceInput.value > searchParams.maxPrice.toString()) {
    maxPriceInput.value = searchParams.maxPrice.toString();
  }
};
