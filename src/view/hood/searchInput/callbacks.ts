import { Callback, Product, Suggests } from '../../../types';
import ProductSuggestItem from './productItem/view';
import CategorySuggestItem from './categoryItem/view';
import bus from '../../../init/bus';

const suggestList: {
  [name: string]: ProductSuggestItem | CategorySuggestItem,
} = {};

const eraseSuggestList: (suggests: Suggests) => void = (suggests) => {
  const { products, categories } = suggests;
  const list = [];
  products?.forEach((product) => list.push(product.name));
  categories?.forEach((category) => list.push(category.name));

  // if (list.length === 0) {
  //   Object.keys(suggestList).forEach((key) => {
  //     suggestList[key].erase();
  //     delete suggestList[key];
  //   });

  //   return;
  // }

  Object.keys(suggestList).forEach((key) => {
    if (!list.includes(key)) {
      suggestList[key].erase();
      delete suggestList[key];
    }
  });

  // console.log('list', list);
};

export const showSuggests: Callback = (suggests: Suggests) => {
  // console.log('show suggests', suggests);

  const searchContainer = <HTMLElement>document.getElementsByClassName('search-container')[0];

  const { products, categories } = suggests;

  eraseSuggestList(suggests);

  products?.forEach((product) => {
    if (suggestList[product.name]) {
      return;
    }

    const productSuggest = new ProductSuggestItem(product);
    searchContainer.appendChild(productSuggest.self);

    suggestList[product.name] = productSuggest;
  });

  categories?.forEach((category) => {
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

export const parseResponse: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj: Suggests) => bus.emit('show suggests', parsedObj))
    .catch((err) => console.error(err));
};

export const parseSearchResponse: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj: Product[]) => bus.emit('show search results', parsedObj))
    .catch((err) => console.error(err));
};

export const showSearchResults: Callback = (obj: Product[]) => {
  // console.log('show search result', obj);

  bus.emit('add product array to category page', obj);

  // bus.emit('search state request', undefined);
};

export const changeCategoryLabel: Callback = () => {
  console.log('change category label');

  const searchInput = <HTMLInputElement>document.getElementsByClassName('search-input')[0];
  const value = searchInput.value.trim();

  const label = <HTMLSpanElement>document.getElementsByClassName('product-table__title')[0];
  label.textContent = `Поиск по результату '${value}'`;
};
