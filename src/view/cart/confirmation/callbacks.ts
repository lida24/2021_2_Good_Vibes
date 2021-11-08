import { Callback } from '../../../types';
import productCardList from '../list';

export const showProductArray: Callback = () => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('items')[0];
  productCardList.views.forEach((view) => {
    itemsContainer.appendChild(view.self);
  });
};

export const a = 0;
