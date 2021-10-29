/* eslint-disable import/extensions */
import View from '../scripts/view.js';
import cartEvents from './events.js';
import eventBus from '../scripts/eventBus.js';
import cartListeners from './listeners.js';
import compiledTemplate from './template.handlebars';

export default class Cart extends View {
  element;

  #context;

  #generateEvents = cartEvents;

  constructor(element) {
    super(element);
    this.element = element;
  }

  async #renderHTML() {
    const html = compiledTemplate(this.#context);
    this.element.innerHTML = html;
    // this.element.setAttribute('name', this.#context.id);
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(cartListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}