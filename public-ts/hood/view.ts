import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
// import hoodEvents from './events.js';
// import hoodListeners from './listeners.js';
import bus from '../scripts/eventBus';
// import '*.hadnlebars';
// import compiledTemplate from './template.handlebars';

export default class Hood extends View {
  public async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  public async render() {
    await this.renderHTML();
    return this.show();
  }
}