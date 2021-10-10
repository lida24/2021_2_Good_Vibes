/* eslint-disable import/extensions */

import eventBus from '../controller/eventBus.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import View from './view.js';

const authorizUrl = './templates/signin.handlebars';

export default class Signin extends View {
  #url = authorizUrl;

  element;

  #context;

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
    return this.show();
    // .catch((error) => alert(error));
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
