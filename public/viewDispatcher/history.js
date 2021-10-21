/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

export const add = (path) => {
  eventBus.emit('history add', path);
};

export const addProduct = (responseText) => {
  // eventBus.emit('history add', `product/?id=${path.match(/.*?id=(\d+)*/)[1]}`);
  // console.log(path.match(/.*?id=(\d+)*/));
  console.log(JSON.parse(responseText));
  const { id } = JSON.parse(responseText);
  eventBus.emit('history add', `product?id=${id}`);
  // eventBus.emit('history add', 'product');
  console.log(id);
};
