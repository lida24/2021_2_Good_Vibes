/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';
import itemCartEvents from './events.js';
import itemCartListeners from './listeners.js';
import View from '../scripts/view.js';
import compiledTemplate from './template.handlebars';

export default class ItemCart extends View {
  element;

  #context;

  #generateEvents = itemCartEvents;

  constructor(element) {
    super(element);
    this.element = element;
  }

  setContext(context) {
    this.#context = context;
  }

  async #renderHTML() {
    const html = compiledTemplate(this.#context);
    this.element.innerHTML = html;
  }

  #createQtyHTML() {
    const qtyParent = this.element.getElementsByClassName('qty-select')[0];
    const qtyElem = document.createElement('div');
    //   subElem.className = 'subtotal';

    //   const cartItems = cart.getCartItems();

    subElem.innerHTML = `
    ${[...Array(count_in_stock).keys()].map((x) =>
      number === x + 1
        ? `<option selected value ="${x + 1}">${x + 1}</option>`
        : `<option value="${x + 1}">${x + 1}</option>`
    )};
         `;
    qtyParent.appendChild(qtyElem);
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(itemCartListeners);
    this.#generateEvents({
      element: this.element,
      context: this.#context
    });
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}