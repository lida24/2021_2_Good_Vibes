import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
import initEvents from './events';
import bus from '../scripts/bus';
import connections from './connections';

export default class SignUp extends View {
  public async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  public async render() {
    await this.renderHTML();
    bus.add(connections);
    initEvents(this.self);

    return this.show();
  }
}
