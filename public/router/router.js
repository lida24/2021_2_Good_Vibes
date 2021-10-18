/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

class Router {
  root;

  constructor() {
    this.routes = {};
  }

  set(root) {
    this.root = root;
  }

  // /**
  //  * @param {string} path
  //  * @param {BaseView} View
  //  */
  // register(path, View) {
  //   this.routes[path] = {
  //     View,
  //     view: null,
  //     el: null
  //   };

  register(path, state) {
    this.routes[path] = {
      state
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

    // if (window.location.pathname !== path) {
    //   window.history.pushState(
    //     null,
    //     '',
    //     path
    //   );
    // }





    // if (window.location.pathname !== path) {

    //   const historyState = {
    //     state: this.routes[path].state
    //   };

    //   window.history.pushState(
    //     historyState,
    //     this.routes[path].state,
    //     path
    //   );
    // }

    // eventBus.emit('showView', {
    //   name: 'Homepage'
    // });


    eventBus.emit('history add', route);





    // // -------------------------

    // if (path === '/profile') {
    //   console.log('profile');
    //   // eventBus.emit('profile ajax request');
    // }

    // if (path === '/signup') {
    //   console.log('signup');
    //   // eventBus.emit('signup click');
    // }

    // console.log(route);

    // // -------------------------

    eventBus.emit('rout', this.routes[path].state);
    console.log(window.history);





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

  hrefget = (target) => {
    if (target instanceof HTMLAnchorElement) {
      return target;
    }

    const result = target.closest('a');
    if (!result) return undefined;
    if (!this.root.contains(result)) return undefined;

    return result;
  }

  start() {
    this.root.addEventListener('click', (event) => {

      // if (event.target instanceof HTMLAnchorElement) {
      //   console.log(event.target);
      // }

      // const target = event.target.closest('a');
      // if (!target) return;
      // if (!this.root.contains(target)) return;

      const target = this.hrefget(event.target);
      if (!target) return;

      console.log(target.pathname);


      this.open(target.pathname);

      // console.log(window.history);

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

    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;

      console.log('popstate');

      // this.open(currentPath);
      eventBus.emit('showView', {
        name: this.routes[currentPath].state
      });
    });

    const currentPath = window.location.pathname;

    console.log(currentPath);

    this.open(currentPath);
  }
}

export default new Router();
