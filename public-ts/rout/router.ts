import bus from '../init/bus';

class Router {
  private site = 'https://peaceful-bell-d76220.netlify.app';

  private list: { [path: string]: string } = {};

  private root: HTMLElement;

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

    if (path === window.location.pathname) {
      return;
    }

    window.history.pushState(
      {
        state: this.list[path],
      },
      path,
      path,
    );
  }

  private handlePathname(pathname: string): string {
    if (!this.list[pathname]) {
      return this.list['/'];
    }

    return this.list[pathname];
  }

  private rout: () => void = () => {
    const { pathname, search } = window.location;
    const state = this.handlePathname(pathname);

    bus.emit(`${state} state request`, { params: search });
  };

  public start(): void {
    window.addEventListener('popstate', this.rout);

    this.rout();
  }
}

export default new Router();
