/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';
/* import itemCartEvents from './events.js'; */
/* import itemCartListeners from './listeners.js'; */
import generateContentHTML from '../scripts/loadTemplates.js';
import View from '../scripts/view.js';

const itemUrl = './template.handlebars';

export default class ItemCart extends View {
  #url = itemUrl;

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
    const html = await generateContentHTML({
      url: this.#url,
      context: this.#context
    });
    this.element.innerHTML = html;
    this.element.setAttribute('name', this.#context.id);
  }

  async render() {
    await this.#renderHTML();
    eventBus.add(itemCartListeners);
    this.#generateEvents({
      element: this.element,
      context: this.#context            // Временно прокидываю контекс из самого контейнера, по хорошему я должен брать данные из сервера
    });
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}