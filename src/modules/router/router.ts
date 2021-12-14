import bus from '../bus/bus';
import routMap from '../../rout/routMap';
import { SearchParamsType } from '../../types';
import SearchParams from '../../services/search/params';
// import searchParams from '../../services/search/params';

class Router {
  /* private site = 'https://dreamy-yonath-26f2eb.netlify.app'; */

  private list: { [pathname: string]: string } = {};

  private root: HTMLElement;

  public set(root: HTMLElement) {
    this.root = root;
  }

  private addToList(pathname: string, state: string) {
    this.list[pathname] = state;
    return this;
  }

  public register() {
    Object.keys(routMap).forEach((key) => this.addToList(key, routMap[key]));
  }

  public add(obj: { 'pathname': string, 'searchParams'?: SearchParamsType }): void {
    console.warn(obj?.searchParams);



    const { pathname, searchParams } = obj;



    let uri = pathname;
    const reg = pathname.match(/(\/.*)\?/);
    if (reg) {
      [, uri] = reg;
    }

    // if (pathname === `${window.location.pathname}${window.location.search}`) {
    //   return;
    // }

    if (pathname === `${window.location.pathname}`) {
      return;
    }

    let path = pathname;

    // console.warn(path);

    if (searchParams) {
      path = path.concat('?');
      Object.keys(searchParams).forEach((key) => {
        path = path.concat(`${key}=${searchParams[key]}&`);
      });
      path = path.slice(0, path.length - 1);

      // console.warn(path);
    }



    // window.history.pushState(
    //   {
    //     state: this.list[uri],
    //     searchParams,
    //   },
    //   pathname,
    //   pathname,
    // );

    window.history.pushState(
      {
        state: this.list[uri],
        searchParams,
      },
      pathname,
      path,
    );

  }

  private handlePathname(pathname: string): string {
    const temp = pathname.match(/\/category\/(.+)/);

    if (temp !== null) {
      return 'category';
    }

    if (!this.list[pathname]) {
      return this.list['/'];
    }

    return this.list[pathname];
  }

  private rout: () => void = () => {
    const { pathname, search } = window.location;
    const state = this.handlePathname(pathname);

    const idReg = search.match(/.*id=(\d+)/);
    let id: number;
    if (idReg) {
      id = +idReg[1];
    }

    const nameReg = pathname.match(/\/category\/(.+)/u);
    let name = '';
    if (nameReg) {
      name = name.concat(nameReg[1]);
    }

    const a = new URL(window.location.href);
    a.searchParams.forEach((key, value) => {
      // console.log(a.searchParams.getAll('minPrice'), item);
      console.log(value, key);
      SearchParams[value] = key;
    });

    // SearchParams.minPrice = 666;

    console.warn({ id, name, pathname, search });
    console.warn(SearchParams);

    bus.emit(`${state} state request`, { id, name, pathname, search });
  };

  public start(): void {
    window.addEventListener('popstate', this.rout);

    this.rout();
  }

  public getRoutList(): { [pathname: string]: string } {
    return this.list;
  }
}

export default new Router();
