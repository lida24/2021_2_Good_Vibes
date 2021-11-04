export default class View {
  protected self: HTMLElement;

  protected context: object;

  constructor(self: HTMLElement) {
    this.self = self;
  }

  public get(): HTMLElement {
    return this.self;
  }

  public isActive(): boolean {
    if (this.self.style.visibility === 'visible') {
      return true;
    }
    if (this.self.style.visibility === 'hidden') {
      return false;
    }
    return undefined;
  }

  public hide(): void {
    // const a = <HTMLElement>this.self.firstChild;
    // a.style.visibility = 'hidden';
    // a.hidden = true;

    // this.self.style.visibility = 'hidden';
    // this.self.hidden = true;

    this.self.firstChild.replaceWith('');
  }

  public show(): void {
    const a = <HTMLElement>this.self.firstChild;
    a.style.visibility = 'visible';
    a.hidden = false;

    // this.self.style.visibility = 'visible';
    // this.self.hidden = false;

    // this.self.firstChild.replaceWith(this.self);
  }

  public delete(): void {
    this.self.innerHTML = '';
  }

  public setContext(context: object): void {
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
