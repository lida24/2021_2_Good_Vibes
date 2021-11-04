// import * as compiledTemplate from './template.handlebars';
// import View from '../scripts/view';
// import initEvents from './events';
// import bus from '../scripts/bus';
// import connections from './connections';
// import { ViewInterface } from '../types';

// export default class SignUp extends View implements ViewInterface {
//   private renderHTML(): void {
//     const html = compiledTemplate(this.context);
//     this.self.innerHTML = html;
//   }

//   public async render(): Promise<void> {
//     await this.renderHTML();
//     bus.add(connections);
//     initEvents(this.self);

//     return this.show();
//   }
// }


import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';
import { ViewInterface } from '../types';
import bus from '../scripts/bus';
import connections from './connections';
import initEvents from './events';

export default class SignUp extends View implements ViewInterface {
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

  // constructor(name: string) {
  //   super(name);
  //   this.render();
  // }

  constructor(classId: string) {
    super();
    this.self = <HTMLElement>document.createElement('main');
    // this.self.id = classId;
    this.self.id = 'main-container';
    this.render();
  }
}
