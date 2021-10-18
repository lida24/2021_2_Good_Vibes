class Router {
  static #instance;

  #routes;

  #root;

  constructor() {
    if (Router.#instance) {
      return Router.#instance;
    }
    this.#routes = [];
    Router.#instance = this;
  }

  set(root) {
    this.#root = root;
  }

  add(path, view) {
    this.#routes.push([path, view]);
    return this;
  }

  goBack() {
    window.history.back();
  }

  open(path, params = {
    replaceState: false
  }, pathParams = {}) {
    let route;
    let groups;

    // for (const page of this.#routes) {
    //   if (path.match(page[0])) {
    //     groups = path.match(page[0]).groups;
    //     route = page;
    //   }
    // }

    this.#routes.forEach((page) => {
      if (path.match(page[0])) {
        groups = path.match(page[0]).groups;
        route = page;
      }
    });

    if (!route) {
      this.open('/');
      return;
    }

    path = this.adaptPath(path, pathParams);

    if (window.location.pathname !== path && !params.replaceState) {
      window.history.pushState(
        null,
        '',
        path,
      );
    } else if (window.location.pathname !== path) {
      window.history.replaceState(
        null,
        '',
        path,
      );
    }

    const view = route[1];
    view.IDs = groups || {};
    if (Object.keys(params).length) {
      view.IDs = Object.assign(view.IDs, params);
    }
    Object.assign(pathParams, this.parseSearch(window.location.search));

    view.show(pathParams);
  }

  adaptPath(path, params) {
    if (!Object.keys(params).length) {
      return path;
    }

    path += '?' + Object.keys(params).map((key) => [key, params[key]].join('=')).join('&');
    return path;
  }

  parseSearch(search) {
    if (!search) {
      return null;
    }
    search = search.substr(1).split('&');
    const returnObject = {};
    for (let param of search) {
      param = param.split('=');
      returnObject[param[0]] = decodeURI(param[1]);
    }
    return returnObject;
  }

  start() {
    this.#root.addEventListener('click', (event) => {
      if (!(event.target instanceof HTMLAnchorElement)) {
        return;
      }

      event.preventDefault();
      const link = event.target;
      this.open(link.pathname);
    });

    window.addEventListener('popstate', () => {
      let currentPath = window.location.pathname;
      if (currentPath[0] !== '/') {
        currentPath = '/' + url;
      }
      this.open(currentPath);
    });

    this.open(window.location.pathname);
  }
}

export default Router;
