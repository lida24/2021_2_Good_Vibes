/* eslint-disable import/extensions */

import eventBus from '../events/eventBus.js';
import signinEvents from '../events/signin.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import View from './view.js';
import signinListeners from '../listeners/signin.js';

const signinUrl = './templates/signin.handlebars';

export default class Signin extends View {
  #url = signinUrl;

  element;

  #context;

  #generateEvents = signinEvents;

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
    eventBus.add(signinListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
