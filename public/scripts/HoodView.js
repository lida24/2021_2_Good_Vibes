import BaseView from './BaseView.js';
import HoodContext from '../HoodContext.js';
import generateContentHTML from '../loadTemplates.js';
import Observe from './observe.js';

const HoodViewUrl = './templates/hood.handlebars';

export default class HoodView extends BaseView {
  #context = HoodContext;

  #url = HoodViewUrl;

  #observe;

  constructor(element) {
    super(element);
    this.#observe = new Observe();
  }

  renderHTML() {
    generateContentHTML({
      url: this.#url,
      context: this.#context
    })
      .then((html) => {
        this.get().innerHTML = html;
      })
      .catch((error) => alert(error));
  }

  setContext(context) {
    this.#context = context;
    this.renderHTML();
  }

  render() {
    this.renderHTML();
    this.show();

    const a = this.get();

    console.log(a);
  }
}
