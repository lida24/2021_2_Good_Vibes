import bus from '../../../init/bus';
import cart from '../../../object/cart/cart';
import orderData from '../../../object/orderData/orderData';
import { Address, Callback, CartItem, OrderRequest } from '../../../types';
import productCardList from '../list';

export const showProductArray: Callback = () => {
  const itemsContainer = <HTMLElement>document.getElementsByClassName('items')[0];

  itemsContainer.textContent = '';

  cart.get().forEach((cartItem) => {
    const view = productCardList.list[cartItem.product_id].view.self;

    itemsContainer.appendChild(view);

    const { number } = cartItem;
    const numberElem = <HTMLInputElement>view.getElementsByClassName('number')[0];
    numberElem.value = number.toString();
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

export const confirmAjaxRequest: Callback = () => {
  const obj: OrderRequest = {
    address: orderData.address,
    products: cart.get(),
  };

  bus.emit('cart confirm request', obj);
};
