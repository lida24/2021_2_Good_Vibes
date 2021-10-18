/* eslint-disable import/extensions */
import View from '../scripts/view.js';
import productEvents from './events.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import eventBus from '../scripts/eventBus.js';
import productListeners from './listeners.js';

const productUrl = './product/template.handlebars';

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

  #createStatusHTML() {
    const statusParent = this.element.getElementsByClassName('status')[0];
    const statusElem = document.createElement('div');
    statusElem.className = 'status';

    const temp = (countInStock) => {
      if (countInStock > 0) {
        return `
        <span class="success">In Stock</span>
        `;
      } else {
        return `
        <span class="error">Unavailable</span>
        `;
      }
    };
    statusElem.innerHTML = temp(this.#context.countInStock);
    statusParent.replaceWith(statusElem);
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(productListeners);
    this.#generateEvents(this.element);
    this.#createRatingHTML();
    this.#createStatusHTML();
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
