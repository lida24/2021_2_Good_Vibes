import bus from '../../../modules/bus/bus';
import { Product } from '../../../types';

const initEvents: (self: HTMLElement) => void = (self) => {
  // ---------------------------
  const addCommentBtn = <HTMLButtonElement>self.getElementsByClassName('add-comment-btn')[0];
  // addCommentBtn.addEventListener('click', () => {
  //   bus.emit('add comment button click', undefined);
  // });

  self.addEventListener('submit', (event) => {
    event.preventDefault();

    bus.emit('add comment button click', undefined);
  });

  const ratingStar = self.getElementsByClassName('rating__star')[0];
  ratingStar.addEventListener('click', () => {
    ratingStar.classList.add('clicked');
  })
};

export default initEvents;
