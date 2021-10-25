/* eslint-disable import/extensions */
import View from '../scripts/view.js';
import generateContentHTML from '../scripts/loadTemplates.js';

const orderUrl = './order/template.handlebars';

export default class Order extends View {
  #url = orderUrl;

  element;

  #context;

  //#generateEvents = orderEvents;

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
    //eventBus.add(orderListeners);
    //this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}