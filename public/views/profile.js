/* eslint-disable import/extensions */
import View from './view.js';
import profileEvents from '../events/profile.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import eventBus from '../events/eventBus.js';
import profileListeners from '../listeners/profile.js';

const profileUrl = './templates/homepage.handlebars';

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
