/* eslint-disable import/extensions */
import View from './view.js';
import productEvents from '../events/product.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import eventBus from '../events/eventBus.js';
import productListeners from '../listeners/product.js';

const productUrl = './templates/product.handlebars';

export default class Product extends View {
  #url = productUrl;

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

  async #renderHTML() {
    const html = await generateContentHTML({
      url: this.#url,
      context: this.#context
    });
    this.element.innerHTML = html;
  }

  #createRatingHTML() {
    const ratingParent = this.element.getElementsByClassName('rating')[0];
    const ratingElem = document.createElement('div');
    ratingElem.className = 'rating';

    const temp = (rating) => {
      if (!rating) {
        return '<div></div>';
      }
      return `
        <div class="rating">
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

  async render() {
    await this.#renderHTML();
    eventBus.add(productListeners);
    this.#generateEvents(this.element);
    this.#createRatingHTML();
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
