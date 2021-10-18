export default class Router {
  root;

  constructor(root) {
    this.routes = {};

    this.root = root;
  }

  /**
   * @param {string} path
   * @param {BaseView} View
   */
  register(path, View) {
    this.routes[path] = {
      View,
      view: null,
      el: null
    };

    return this;
  }

  /**
   * @param {string} path
   */
  open(path) {
    const route = this.routes[path];

    if (!route) {
      this.open('/');
      return;
    }

    if (window.location.pathname !== path) {
      window.history.pushState(
        null,
        '',
        path
      );
    }

    // console.log(route);

    // let { View, view, el } = route;

    // if (!el) {
    //   el = document.createElement('section');
    //   this.root.appendChild(el);
    // }

    // if (!view) {
    //   view = new View(el);
    // }

    // if (!view.active) {
    //   Object.values(this.routes).forEach(({ view }) => {
    //     if (view && view.active) {
    //       view.hide();
    //     }
    //   });

    //   view.show();
    // }

    // this.routes[path] = { View, view, el };
  }

  start() {
    this.root.addEventListener('click', (event) => {

      // console.log(event.target);


      const a = event.target.closest('a'); // (1)

      if (!a) return; // (2)

      if (!this.root.contains(a)) return; // (3)

      console.log(a);

      // if (!(event.target instanceof HTMLAnchorElement)) {
      //   return;
      // }

      // console.log(event.target);

      // event.preventDefault();
      // const link = event.target;

      // console.log({
      //   pathname: link.pathname
      // });

      // this.open(link.pathname);
    });

    //   window.addEventListener('popstate', () => {
    //     const currentPath = window.location.pathname;

    //     this.open(currentPath);
    //   });

    //   const currentPath = window.location.pathname;

    //   this.open(currentPath);
  }
}
