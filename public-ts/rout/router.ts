import bus from '../init/bus';

class Router {
  private site = 'https://peaceful-bell-d76220.netlify.app';

  private list: { [path: string]: string } = {};

  private root: HTMLElement;

  // private parse: () => string = () => {
  //   // const a = window.location;
  //   // a.toString();

  //   // const res = window.location.toString();

  //   // console.log(res);

  //   // console.log(res.match(/.*netlify\.app\/(.*)/));

  //   // console.log('url', window.location.toString());
  //   return res;
  // };

  public set(root: HTMLElement) {
    this.root = root;
  }

  public register(path: string, state: string): Router {
    this.list[path] = state;
    return this;
  }

  public add(path: string): void {
    if (!this.list[path]) {
      console.error('router add error');
      return;
    }

    window.history.pushState(
      {
        state: this.list[path],
      },
      '',
      window.location.toString(),
    );
  }

  // private hrefget(target: any): HTMLAnchorElement {
  //   if (target instanceof HTMLAnchorElement) {
  //     return target;
  //   }

  //   const result = target.closest('a');
  //   if (!result) return undefined;
  //   if (!this.root.contains(result)) return undefined;

  //   return result;
  // }

  private handlePathname(pathname: string): string {
    if (!this.list[pathname]) {
      return this.list['/'];
    }

    return this.list[pathname];
  }

  private rout: () => void = () => {
    const { pathname, search } = window.location;
    const state = this.handlePathname(pathname);

    console.log(state, search);

    bus.emit(`${state} state request`, { params: search });
  };

  public start(): void {
    console.log('router start');

    // this.root.addEventListener('click', (event) => {
    //   const target = this.hrefget(event.target);
    //   if (!target) return;

    //   console.log(target.pathname);

    // })

    // window.addEventListener('popstate', (event) => {
    //   // event.preventDefault();

    //   this.rout();
    // });

    window.addEventListener('popstate', this.rout);

    this.rout();
  }
}

export default new Router();
