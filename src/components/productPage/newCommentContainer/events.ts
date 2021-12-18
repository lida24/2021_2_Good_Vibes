import bus from '../../../modules/bus/bus';
import { Product } from '../../../types';

const initEvents: (self: HTMLElement) => void = (self) => {
  // ---------------------------
  const addCommentBtn = <HTMLButtonElement>self.getElementsByClassName('add-comment-btn')[0];
  // addCommentBtn.addEventListener('click', () => {
  //   bus.emit('add comment button click', undefined);
  // });

  // self.addEventListener('submit', (event) => {

  addCommentBtn.addEventListener('click', (event) => {
    event.preventDefault();

    console.warn('asdfasdf');

    bus.emit('add comment button click', undefined);
  });
};

export default initEvents;
