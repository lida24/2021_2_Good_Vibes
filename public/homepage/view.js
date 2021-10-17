/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import View from '../views/view.js';
import homepageEvents from './events.js';
import homepageListeners from './listeners.js';

const homepageUrl = './templates/homepage.handlebars';

export default class Homepage extends View {
  #url = homepageUrl;

  element;

  #context;

  #generateEvents = homepageEvents;

  constructor(element) {
    super(element);
    this.element = element;
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
    eventBus.add(homepageListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
