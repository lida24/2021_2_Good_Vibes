import bus from '../../init/bus';
import cart from '../../object/cart/cart';
import user from '../../object/user/user';
import { Callback, Comment, Product } from '../../types';
import InfoCardBtn from './button/view';
import CommentsContainer from './commentsContainer/view';
import newCommentContainer from './newCommentContainer/view';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const changeBtn: Callback = () => {
  const addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-card-btn__cart')[0];

  const cartBtnElem = <HTMLButtonElement>document.createElement('button');
  cartBtnElem.className = 'info-card-btn__add-cart';
  cartBtnElem.innerHTML = 'Перейти в корзину';

  /*  const cartBtnElem = new InfoCardBtn(); */
  addBtnParent.replaceWith(cartBtnElem);
  cartBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });
};

export const scrollToTop: Callback = () => {
  document.documentElement.scrollTop = 0;
};

export const productCheckInCart: Callback = (context: Product) => {
  if (cart.getItem(context.id)) {
    changeBtn(undefined);
  }
};

export const commentsRequest: Callback = (context: Product) => {
  const { id } = context;

  console.log('product comments request', id);

  bus.emit('comments ajax request', { id });
};

export const renderCommentContainer: Callback = (comment: Comment) => {
  console.log('render single comment block', comment);

  const commentContainer = new CommentsContainer(comment);
  document.getElementsByClassName('board-bottom')[0].appendChild(commentContainer.self);
};

export const generateCommentsArray: Callback = (array: Comment[]) => {
  console.log('generate commenst array', array);

  array.forEach((comment) => {
    renderCommentContainer(comment);
  });
};

export const newCommentContainerShow: Callback = (context: Product) => {
  if (!user.isAutorize()) {
    newCommentContainer.hide();
    return;
  }

  console.log('new comment block add callback');
  newCommentContainer.show();
};
