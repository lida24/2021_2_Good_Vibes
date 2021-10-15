/* eslint-disable import/extensions */
import eventBus from './eventBus.js';

const homepageEvents = (element) => {
  eventBus.emit('homepageLoaded');

  // const prodArray = [
  //   {
  //     "id": 1,
  //     "image": "images/shoe2.png",
  //     "name": "Кроссовки adidas голубые",
  //     "price": 250,
  //     "rating": 4
  //   },
  //   {
  //     "id": 2,
  //     "image": "images/phone2.png",
  //     "name": "Смартфон",
  //     "price": 10000,
  //     "rating": 2.5
  //   },
  //   { "id": 3, image: 'images/shirt1.png', "name": "Кофта мужская", "price": 10000, "rating": 2.5 },
  //   { "id": 4, "image": "images/smartphone.png", "name": "Смартфон чёрный цвет", "price": 10000, "rating": 2.5 },
  //   { "id": 5, "image": "images/shirt4.png", "name": "Кофта мужская", "price": 10000, "rating": 2.5 },
  //   { "id": 6, "image": "images/shoe5.png", "name": "Кеды adidas желтые", "price": 10000, "rating": 2.5 },
  //   {
  //     "id": 7, "image": "images/phone3.png", "name": "Смартфон поддержанный", "price": 10000, "rating": 2.5
  //   },
  //   {
  //     "id": 8, "image": "images/shoe1.png", "name": "Кроссовки adidas красные", "price": 10000, "rating": 2.5
  //   },
  //   {
  //     "id": 9, "image": "images/shoe3.png", "name": "Кроссовки adidas черные", "price": 10000, "rating": 2.5
  //   }
  // ];

  // eventBus.emit('renderProdArray', prodArray);
};

export default homepageEvents;
