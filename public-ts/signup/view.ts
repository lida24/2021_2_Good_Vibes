import * as compiledTemplate from './template.handlebars';
import View from '../scripts/view';

export default class SignUp extends View {
  public async renderHTML() {
    const html = compiledTemplate(this.context);
    this.self.innerHTML = html;
  }

  public async render() {
    await this.renderHTML();
    return this.show();
  }
}
