// export default class View {
//   protected self: HTMLElement;

//   protected context: object;

//   constructor(self: HTMLElement) {
//     this.self = self;
//   }

//   public get(): HTMLElement {
//     return this.self;
//   }

//   public isActive(): boolean {
//     if (this.self.style.visibility === 'visible') {
//       return true;
//     }
//     if (this.self.style.visibility === 'hidden') {
//       return false;
//     }
//     return undefined;
//   }

//   public hide(): void {
//     // const a = <HTMLElement>this.self.firstChild;
//     // a.style.visibility = 'hidden';
//     // a.hidden = true;

//     // this.self.style.visibility = 'hidden';
//     // this.self.hidden = true;

//     this.self.firstChild.replaceWith('');
//   }

//   public show(): void {
//     const a = <HTMLElement>this.self.firstChild;
//     a.style.visibility = 'visible';
//     a.hidden = false;

//     // this.self.style.visibility = 'visible';
//     // this.self.hidden = false;

//     // this.self.firstChild.replaceWith(this.self);
//   }

//   public delete(): void {
//     this.self.innerHTML = '';
//   }

//   public setContext(context: object): void {
//     this.context = context;
//   }
// }


export default class View {
  public self: HTMLElement;

  protected context: object;

  // constructor(className: string) {
  //   this.self = <HTMLElement>document.createElement('div');
  //   this.self.className = className;
  // }

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
    this.self.style.visibility = 'hidden';
    // this.self.hidden = true;
  }

  public show(): void {
    this.self.style.visibility = 'visible';
    // this.self.hidden = false;

    // this.self.firstChild.replaceWith(this.self);
  }

  public delete(): void {
    this.self.innerHTML = '';
  }

  public setContext(context: object): void {
    this.context = context;
  }
}
