import orderData from '../../../object/orderData/orderData';
import { Callback } from '../../../types';
import productCardList from '../list';

export const showProductArray: Callback = () => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('items')[0];
  productCardList.views.forEach((view) => {
    itemsContainer.appendChild(view.self);
  });
};

export const showAddress: Callback = () => {
  const {
    country,
    city,
    index,
    street,
  } = orderData.address;

  const address = `${index}, ${country}, ${city}, ${street}`;

  const addressField = <HTMLElement>document.getElementsByClassName('address')[0];
  addressField.textContent = address;
};

export const showPayMethod: Callback = () => {
  const payMethod = <HTMLElement>document.getElementsByClassName('payMethod')[0];
  payMethod.textContent = orderData.payMethod;
};
