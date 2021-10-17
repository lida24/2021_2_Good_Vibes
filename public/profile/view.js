/* eslint-disable import/extensions */
import View from '../scripts/view.js';
import profileEvents from './events.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import eventBus from '../scripts/eventBus.js';
import profileListeners from './listeners.js';

const profileUrl = './templates/profile.handlebars';

export default class Profile extends View {
  #url = profileUrl;

  element;

  #context;

  #generateEvents = profileEvents;

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
    eventBus.add(profileListeners);
    this.#generateEvents(this.element);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}
