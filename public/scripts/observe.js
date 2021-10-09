export default class Observe {
  #listeners;

  constructor() {
    this.#listeners = {};
  }

  on(event, callback) {
    this.#listeners[event] = this.#listeners[event] || [];
    this.#listeners[event].push(callback);
  }

  off(event, callback) {
    this.#listeners[event] = this.#listeners[event]
      .filter((listener) => listener !== callback);
  }

  emit(event, data) {
    this.#listeners[event].forEach((listener) => listener(data));
  }
}
