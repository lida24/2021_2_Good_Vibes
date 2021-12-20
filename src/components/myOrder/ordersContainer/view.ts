import * as compiledTemplate from './template.handlebars';
// import bus from '../../../init/bus';
// import initEvents from './events';
// import connections from './connections';
import { myOrder } from '../../../types';
import './ordersContainer.scss';

export default class OrdersContainer {
  public self: HTMLElement;

  public context: myOrder;

  private async renderHTML() {
   /*  const html = compiledTemplate({ ...this.context.address, ...this.context.products }); */
   const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
    // initEvents(this.self);
  }

  public async render(): Promise<void> {
    await this.renderHTML();
    return this.show();
  }

  constructor(context: myOrder) {
    this.setContext(context);
    this.self = <HTMLElement>document.createElement('ul');
    this.self.className = 'orders-container';
    // bus.add(connections);
    this.render();
  }

  public setContext(context: myOrder): void {
    this.context = context;
  }

  public hide(): void {
    this.self.style.visibility = 'hidden';
    this.self.hidden = true;
  }

  public show(): void {
    this.self.style.visibility = 'visible';
    this.self.hidden = false;
  }
}
