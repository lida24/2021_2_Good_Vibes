export default class View {
  #element;

  get() {
    return this.#element;
  }

  constructor(element) {
    this.#element = element;

    this.#element.dataset.view = this.constructor.name;
    this.#element.hidden = true;
  }

  isActive() {
    if (this.#element.style.visibility === 'visible') {
      return true;
    }
    if (this.#element.style.visibility === 'hidden') {
      return false;
    }
    return undefined;
  }

  hide() {
    this.#element.style.visibility = 'hidden';
  }

  show() {
    this.#element.style.visibility = 'visible';
  }
}
