import bus from '../../modules/bus/bus';
import cart from '../../services/cart/cart';
import user from '../../services/user/user';
import { AjaxResponse, Callback, Comment, NewComment, Product } from '../../types';
import InfoCardBtn from './button/view';
import CommentsContainer from './commentsContainer/view';
import newCommentContainer from './newCommentContainer/view';

export const backToCategoryPage: Callback = () => {
  bus.emit('homepage state request', undefined);
};

export const changeBtn: Callback = (context: Product) => {
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

  const container = <HTMLElement>document.getElementsByClassName('info-card-btn__wrap')[0];
  const numberElement = <HTMLInputElement>document.createElement('input');
  numberElement.type = 'number';
  numberElement.className = 'product-page-spinner__count count__current-calc g-input count__current ';

  const { id } = context;
  const { number } = cart.getItem(context.id);

  debugger;
  numberElement.value = number.toString();

  numberElement.onchange = event => {
    event.preventDefault();

    let value = +numberElement.value;
    if (value < 0) {
      value = 0;
    }
    if (value > context.count_in_stock) {
      value = context.count_in_stock;
    }
    value = Math.floor(value);
    if (value === 0) {
      // change button to add to cart
      showDefaultAddToCartBtn(context);

      bus.emit('delete product from cart', { id, number });
      numberElement.remove();
      return;
    }


    bus.emit('put product to cart request', { id, number: value });
  }

  container.prepend(numberElement);
};

export const changeBtnMobile: Callback = (context: Product) => {
  // const addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-card-mobile-btn__cart')[0];

  // const cartBtnElem = <HTMLButtonElement>document.createElement('button');
  // cartBtnElem.className = 'info-card-btn__add-cart';
  // cartBtnElem.innerHTML = 'Перейти в корзину';

  // /*  const cartBtnElem = new InfoCardBtn(); */
  // addBtnParent.replaceWith(cartBtnElem);
  // cartBtnElem.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   bus.emit('cart button click', undefined);
  // });

  const addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-card-mobile-btn__cart')[0];

  const cartBtnElem = <HTMLButtonElement>document.createElement('button');
  cartBtnElem.className = 'info-card-btn__add-cart';
  cartBtnElem.innerHTML = 'Перейти в корзину';

  /*  const cartBtnElem = new InfoCardBtn(); */
  addBtnParent.replaceWith(cartBtnElem);
  cartBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('cart button click', undefined);
  });

  const container = <HTMLElement>document.getElementsByClassName('info-card-mobile-btn__wrap')[0];
  const numberElement = <HTMLInputElement>document.createElement('input');
  numberElement.type = 'number';
  numberElement.className = 'product-page-mobile-spinner__count count__current-calc g-input count__current';

  const { id } = context;
  const { number } = cart.getItem(context.id);

  debugger;
  numberElement.value = number.toString();

  numberElement.onchange = event => {
    event.preventDefault();

    let value = +numberElement.value;
    if (value < 0) {
      value = 0;
    }
    if (value > context.count_in_stock) {
      value = context.count_in_stock;
    }
    value = Math.floor(value);
    if (value === 0) {
      // change button to add to cart
      showDefaultAddToCartMobileBtn(context);

      bus.emit('delete product from cart', { id, number });
      numberElement.remove();
      return;
    }


    bus.emit('put product to cart request', { id, number: value });
  }

  container.prepend(numberElement);
};

export const scrollToTop: Callback = () => {
  document.documentElement.scrollTop = 0;
};

export const showDefaultAddToCartBtn: Callback = (context: Product) => {
  const target = <HTMLElement>document.getElementsByClassName('info-card-btn__wrap')[0];
  target.textContent = '';

  const btn = document.createElement('button');
  btn.className = 'info-card-btn__cart';
  btn.textContent = 'Добавить в корзину';

  const { id } = context;

  btn.onclick = event => {
    event.preventDefault();
    bus.emit('add product to cart', { id, number: 1 });
  }

  target.appendChild(btn);
}

export const showDefaultAddToCartMobileBtn: Callback = (context: Product) => {
  const target = <HTMLElement>document.getElementsByClassName('info-card-mobile-btn__wrap')[0];
  target.textContent = '';

  const btn = document.createElement('button');
  btn.className = 'info-card-mobile-btn__cart';
  btn.textContent = 'Добавить в корзину';

  const { id } = context;

  btn.onclick = event => {
    event.preventDefault();
    bus.emit('add product to cart mobile', { id, number: 1 });
  }

  target.appendChild(btn);
}

export const productCheckInCart: Callback = (context: Product) => {
  if (cart.getItem(context.id)) {
    changeBtn(context);
    changeBtnMobile(context);
    return;
  }

  showDefaultAddToCartMobileBtn(context);
  showDefaultAddToCartBtn(context);
};

export const commentsRequest: Callback = (context: Product) => {
  const { id } = context;

  // console.log('product comments request', id);

  bus.emit('comments ajax request', { id });
};

export const renderCommentContainer: Callback = (comment: Comment) => {
  // console.log('render single comment block', comment);
  const commentContainer = new CommentsContainer(comment);
  document.getElementsByClassName('board-bottom')[0].appendChild(commentContainer?.self);
};

// export const generateCommentsArray: Callback = (array: Comment[]) => {
//   // console.log('generate commenst array', array);

// array.forEach((comment) => {
//   renderCommentContainer(comment);
// });
// };

export const generateCommentsArray: Callback = (obj: { 'responseText': string }) => {
  // console.log('generate commenst array', array);

  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .catch((err) => console.error(err))
    .then((parsedObj: Comment[]) => parsedObj.forEach((comment) => {
      renderCommentContainer(comment);
    }));
};

export const newCommentContainerShow: Callback = (context: Product) => {
  if (!user.isAutorize()) {
    newCommentContainer.hide();
    return;
  }

  console.log('new comment block add callback', context);
  newCommentContainer.setContext(context);
  newCommentContainer.show();
};

export const addCommentRequest: Callback = () => {
  const { id } = newCommentContainer.context;

  const ratingNumber = <HTMLElement>newCommentContainer.self.getElementsByClassName('rating__value')[0];
  const rating = +ratingNumber.textContent;
  /* const estimate = ratingInput.ariaLabel; */

  const textInput = <HTMLTextAreaElement>newCommentContainer.self.getElementsByClassName('add-comment-text')[0];
  const text = textInput.value.trim();

  const comment: NewComment = {
    product_id: id,
    rating,
    text,
  };

  bus.emit('add comment request', comment);
};

export const showError: Callback = (error: string) => {
  const errorLabel = <HTMLLabelElement>document.getElementsByClassName('new-comment-alert-label')[0];
  errorLabel.textContent = error;
  errorLabel.style.visibility = 'visible';
};

export const hideError: Callback = (error: string) => {
  const errorLabel = <HTMLLabelElement>document.getElementsByClassName('new-comment-alert-label')[0];
  errorLabel.style.visibility = 'hidden';
};

export const handleResponse: Callback = (obj: { 'responseText': string }) => {
  const { responseText } = obj;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj) => {
      if (parsedObj['error description']) {
        showError(parsedObj['error description']);
        return;
      }
      renderCommentContainer(parsedObj);
    })
    .catch((err) => console.error(err))
};

export const changeBtnOnDelFavorite: Callback = (obj: { 'id': number }) => {
  const { id } = obj;
  let addBtnParent = <HTMLButtonElement>document.getElementsByClassName('info-favorite-btn__favorite')[0];
  const favoriteBtnElem = <HTMLButtonElement>document.createElement('button');
  favoriteBtnElem.innerHTML = 'Удалить из избранного'
  favoriteBtnElem.className = 'info-favorite-btn__favorite flagIsFavorite_true'
  addBtnParent.replaceWith(favoriteBtnElem);
  favoriteBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('del product from favorite', { id });
  });
};

export const changeBtnToAddFavorite: Callback = (obj: { 'id': number }) => {
  const { id } = obj;
  let addBtnParent = <HTMLButtonElement>document.querySelector('.info-favorite-btn__favorite');
  const favoriteBtnElem = <HTMLButtonElement>document.createElement('button');
  favoriteBtnElem.innerHTML = 'Добавить в избранное'
  console.log(addBtnParent);
  favoriteBtnElem.className = 'info-favorite-btn__favorite flagIsFavorite_false'

  // const productCardOnFavoritePage = <HTMLElement>document.getElementsByName(id.toString())[0];

  // console.warn(productCardOnFavoritePage);
  // productCardOnFavoritePage?.remove();

  /*  const cartBtnElem = new InfoCardBtn(); */
  addBtnParent.replaceWith(favoriteBtnElem);
  favoriteBtnElem.addEventListener('click', (event) => {
    event.preventDefault();

    bus.emit('add product to favorite', { id });

    // bus.emit('add product to favorite local remote', { id });
  });
};

export const setMainImg: Callback = ({ src }: { src: string }) => {
  const mainImg = <HTMLImageElement>document.getElementsByClassName('slider-preview__picture')[0];
  mainImg.src = src;
};
