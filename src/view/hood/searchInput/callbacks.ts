import { Callback, Suggests } from '../../../types';
import ProductSuggestItem from './productItem/view';
import CategorySuggestItem from './categoryItem/view';

const suggestList: {
  [name: string]: ProductSuggestItem | CategorySuggestItem,
} = {};

const eraseSuggestList: (suggests: Suggests) => void = (suggests) => {
  const { products, categories } = suggests;
  const list = [];
  products.forEach((product) => list.push(product.name));
  categories.forEach((category) => list.push(category.name));

  Object.keys(suggestList).forEach((key) => {
    if (!list.includes(key)) {
      suggestList[key].erase();
      delete suggestList[key];
    }
  });

  console.log('list', list);
};

export const showSuggests: Callback = (suggests: Suggests) => {
  console.log('show suggests', suggests);

  const searchContainer = <HTMLElement>document.getElementsByClassName('search-container')[0];

  const { products, categories } = suggests;

  eraseSuggestList(suggests);

  products.forEach((product) => {
    if (suggestList[product.name]) {
      return;
    }

    const productSuggest = new ProductSuggestItem(product);
    searchContainer.appendChild(productSuggest.self);

    suggestList[product.name] = productSuggest;
  });

  categories.forEach((category) => {
    if (suggestList[category.name]) {
      return;
    }

    const categorySuggest = new CategorySuggestItem(category);
    searchContainer.appendChild(categorySuggest.self);

    suggestList[category.name] = categorySuggest;
  });
};

export const deleteSuggests: Callback = () => {
  Object.keys(suggestList).forEach((key) => {
    suggestList[key].erase();
    delete suggestList[key];
  });
};
