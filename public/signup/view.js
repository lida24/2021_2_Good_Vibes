/* eslint-disable import/extensions */
import signupEvents from './events.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import View from '../scripts/view.js';
import signupListeners from './listeners.js';
import eventBus from '../scripts/eventBus.js';

const signupUrl = './signup/template.handlebars';

export default class Signup extends View {
  #url = signupUrl;

  element;

  #context;

  #generateEvents = signupEvents;

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

  // render() {
  //   this.#renderHTML()
  //     .then(() => {
  //       // eventBus.add(signinListeners);
  //       // this.#generateEvents(this.element);
  //     })
  //     .then(() => this.show())
  //     .catch((error) => alert(error));
  // }

  async render() {
    await this.#renderHTML();
    eventBus.add(signupListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
