import BaseView from './BaseView.js';
import HoodContext from '../HoodContext.js';
import generateContentHTML from '../loadTemplates.js';
import bus from './EventBus.js';

const HoodViewUrl = './templates/hood.handlebars';

export default class HoodView extends BaseView {
  #context = HoodContext;

  #url = HoodViewUrl;

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

          // console.log('click');
          // this.#observe.emit('click', 'hello');
          bus.emit('logo-click', 'logo-click hello');
        })
      })


      .then(() => this.show())
      .catch((error) => alert(error));
  }
}
