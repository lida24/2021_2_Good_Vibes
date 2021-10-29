/* eslint-disable import/extensions */

import eventBus from '../scripts/eventBus.js';
import signinEvents from './events.js';
import View from '../scripts/view.js';
import signinListeners from './listeners.js';
import compiledTemplate from './template.handlebars';

export default class Signin extends View {
  element;

  #context;

  #generateEvents = signinEvents;

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
    eventBus.add(signinListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
