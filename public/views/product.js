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

  async render() {
    await this.#renderHTML();
    eventBus.add(productListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
