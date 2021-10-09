import View from './view.js';
import HoodContext from '../context/hood.js';
import generateContentHTML from '../scripts/loadTemplates.js';
import bus from '../scripts/eventBus.js';

const HoodUrl = './templates/hood.handlebars';

export default class Hood extends View {
  #context = HoodContext;

  #url = HoodUrl;

  #element;

  constructor(element) {
    super(element);
    this.#element = this.get();
  }

  async renderHTML() {
    const html = await generateContentHTML({
      url: this.#url,
      context: this.#context
    });
    this.#element.innerHTML = html;
  }

  setContext(context) {
    this.#context = context;
    this.renderHTML();
  }

  render() {
    this.renderHTML()

      .then(() => {
        const logoBtn = this.#element.getElementsByClassName('logo')[0];

        const callback = (data) => console.log(data);
        bus.on('logo-click', callback);

        logoBtn.addEventListener('click', (event) => {
          event.preventDefault();
          bus.emit('logo-click', 'logo-click hello');
        });
      })

      .then(() => this.show())
      .catch((error) => alert(error));
  }
}
