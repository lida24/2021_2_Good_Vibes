/* eslint-disable import/extensions */
import bus from '../controller/eventBus.js';
import Hood from './hood.js';

export default class ViewDispatcher {
  #root;

  #views = {};

  constructor(root) {
    this.#root = root;
  }

  add(obj) {
    this.#views = Object.assign(this.#views, obj);
  }

  remove(name) {
    this.#views[name].delete();
    delete this.#views[name];
  }

  startPage() {
    this.add({
      hood: new Hood(this.#root)
    });
    this.#views.hood.render();

    bus.on('hood-hide', () => {
      this.#views.hood.hide();
    });
  }
}
