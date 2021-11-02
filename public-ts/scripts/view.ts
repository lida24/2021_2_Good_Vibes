export default class View {
  protected self: HTMLElement;

  protected context: object;

  constructor(self: HTMLElement) {
    this.self = self;
  }

  public get() {
    return this.self;
  }

  public isActive() {
    if (this.self.style.visibility === 'visible') {
      return true;
    }
    if (this.self.style.visibility === 'hidden') {
      return false;
    }
    return undefined;
  }

  public hide() {
    const a = <HTMLElement>this.self.firstChild;
    a.style.visibility = 'hidden';
    a.hidden = true;
  }

  public show() {
    this.self.style.visibility = 'visible';
    this.self.hidden = false;
  }

  public delete() {
    this.self.innerHTML = '';
  }

  public setContext(context: object) {
    this.context = context;
  }

  // public async renderHTML() {
  //   const html = compiledTemplate(this.context);
  //   this.self.innerHTML = html;
  // }

  // public async render() {
  //   await this.renderHTML();
  //   return this.show();
  // }






  // hide() {
  //   // this.element.style.visibility = 'hidden';
  //   // this.element.hidden = true;

  //   this.element.children[0].style.visibility = 'hidden';
  //   this.element.children[0].hidden = true;
  // }

  // show() {
  //   // this.element.style.visibility = 'visible';
  //   // this.element.hidden = false;

  //   this.element.children[0].style.visibility = 'visible';
  //   this.element.children[0].hidden = false;
  // }

  // delete() {
  //   this.element.innerHTML = '';
  // }
}
