import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
import { ViewInterface } from '../types';
// import bus from '../scripts/bus';
// import connections from '../view/signin/connections';
// import initEvents from '../view/signin/events';

export default class Hood extends View implements ViewInterface {
  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;

    console.log(this.self);
  }

  private async render() {
    await this.renderHTML();
    // bus.add(connections);
    // initEvents(this.self);
    return this.show();
  }

  constructor(className: string) {
    super();
    this.self = <HTMLElement>document.createElement('div');
    this.self.className = className;
    this.render();
  }
}
