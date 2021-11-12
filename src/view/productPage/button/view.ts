import * as compiledTemplate from './template.handlebars';
// import bus from '../../../init/bus';
import initEvents from './events';
// import connections from './connections';
import View from '../../view';

export default class InfoCardBtn extends View {
  private async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
    initEvents(this.self);
  }

  public async render(): Promise<void> {
    await this.renderHTML();
    return this.show();
  }

  constructor() {
    super();
    this.self = <HTMLElement>document.createElement('class');
    this.self.className = 'layout layout__main';
    this.self.id = 'layout';
    // bus.add(connections);
    this.render();
  }
}
