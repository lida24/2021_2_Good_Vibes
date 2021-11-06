import * as compiledTemplate from './template.handlebars';
import View from '../view';
import { ViewInterface } from '../../types';
import bus from '../../init/bus';
import ProductCard from '../productCard/view';
import connections from './connections';
// import initEvents from './events';
// import productCardConnections from '../productCard/init/connections';

export default class Homepage extends View implements ViewInterface {
  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  private async render() {
    await this.renderHTML();
    bus.add(connections);
    // bus.add(productCardConnections);
    // initEvents(this.self);
    return this.show();
  }

  constructor(classId: string) {
    super();
    this.self = <HTMLElement>document.createElement('main');
    this.self.id = 'main-container';
    this.render();
  }
}
