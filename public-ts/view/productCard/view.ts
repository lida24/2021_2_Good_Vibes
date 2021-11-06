import * as compiledTemplate from './template.handlebars';
import View from '../view';
import { Product, ViewInterface } from '../../types';
// import bus from '../../init/bus';
// import connections from './connections';
// import initEvents from './events';

export default class ProductCard extends View implements ViewInterface {
  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  public async render() {
    await this.renderHTML();
    // bus.add(connections);
    // initEvents(this.self);
    return this.show();
  }

  constructor(className: string, context: Product) {
    super();
    this.setContext(context);
    this.self = <HTMLElement>document.createElement('div');
    this.self.className = className;
    this.render();
  }
}
