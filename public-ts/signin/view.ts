import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
import { ViewInterface } from '../types';
import bus from '../scripts/bus';
import connections from './connections';
import initEvents from './events';

export default class SignIn extends View implements ViewInterface {
  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;

    console.log(this.self);
  }

  private async render() {
    await this.renderHTML();
    bus.add(connections);
    initEvents(this.self);
    return this.show();
  }

  constructor(classId: string) {
    super();
    this.self = <HTMLElement>document.createElement('main');
    this.self.id = 'main-container';
    this.render();
  }
}
