import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
import initEvents from './events';
import bus from '../scripts/bus';
import connections from './connections';
import { ViewInterface } from '../types';

export default class SignUp extends View implements ViewInterface {
  private renderHTML(): void {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  public async render(): Promise<void> {
    await this.renderHTML();
    bus.add(connections);
    initEvents(this.self);

    return this.show();
  }
}
