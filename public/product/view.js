/* eslint-disable import/extensions */
import View from '../scripts/view.js';
import productEvents from './events.js';
import eventBus from '../scripts/eventBus.js';
import productListeners from './listeners.js';
import cart from '../objects/cart.js';
import compiledTemplate from './template.handlebars';

export default class Product extends View {
  element;

  #context;

  #generateEvents = productEvents;

  constructor(element) {
    super(element);
    this.element = element;
  }

  setContext(context) {
    this.#context = context;
    // this.renderHTML();
  }

  getContext() {
    return this.#context;
  }

  async #renderHTML() {
    const html = compiledTemplate(this.#context);
    this.element.innerHTML = html;
    this.element.setAttribute('name', this.#context.id);
  }

  #createRatingHTML() {
    const ratingParent = this.element.getElementsByClassName('product__rating')[0];
    const ratingElem = document.createElement('div');
    ratingElem.className = 'rating';

    const temp = (rating) => {
      if (!rating) {
        return '<div></div>';
      }
      return `
        <div class="product__rating">
        <span> <i class="${rating >= 1 ? 'fa fa-star' : rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 2 ? 'fa fa-star' : rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 3 ? 'fa fa-star' : rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 4 ? 'fa fa-star' : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 5 ? 'fa fa-star' : rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span>
        </div>
        `;
    };

    ratingElem.innerHTML = temp(this.#context.rating);
    ratingParent.replaceWith(ratingElem);
  }

  #createStatusHTML() {
    const statusParent = this.element.getElementsByClassName('status')[0];
    const statusElem = document.createElement('div');
    statusElem.className = 'status';

    const temp = (count_in_stock) => {
      if (count_in_stock > 0) {
        return `
        Статус: <span class="status__success">В наличии</span>
        `;
      } else {
        return `
        Статус: <span class="status__error">Нет в наличии</span>
        `;
      }
    };
    statusElem.innerHTML = temp(this.#context.count_in_stock);
    statusParent.replaceWith(statusElem);
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(productListeners);
    this.#generateEvents(this.element);
    this.#createRatingHTML();
    this.#createStatusHTML();
    //const cartItems = cart.getCartItems();
    //console.log(cartItems);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}