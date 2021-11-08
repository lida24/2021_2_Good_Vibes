/* eslint-disable import/extensions */
import orderData from '../objects/orderData.js';
import eventBus from '../scripts/eventBus.js';

export const showPayment = () => {
  eventBus.emit('showView', {
    name: 'Payment'
  });
};

export const saveAddress = () => {
  console.log('save address');

  const addressObj = {};

  const addressInput = document.getElementsByClassName('form__address')[0];
  addressObj.street = addressInput.value;

  const cityInput = document.getElementsByClassName('form__city')[0];
  addressObj.city = cityInput.value;

  const postalCodeInput = document.getElementsByClassName('form__postalCode')[0];
  addressObj.index = postalCodeInput.value;

  const countryInput = document.getElementsByClassName('form__country')[0];
  addressObj.country = countryInput.value;

  orderData.setAddress(addressObj);

  // console.log('order data address', orderData.getAddress());
};
