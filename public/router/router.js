/* eslint-disable import/extensions */
import eventBus from '../scripts/eventBus.js';

// const requests = {
//   homepage
// }

class Router {
  root;

  constructor() {
    this.routes = {};
  }

  set(root) {
    this.root = root;
  }

  register(path, state) {
    this.routes[path] = {
      state
    };

    return this;
  }

  open(path) {
    const route = this.routes[path];

    if (!route) {
      this.open('/');
      return;
    }

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

    // console.log(window.history);
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
      const target = this.hrefget(event.target);
      if (!target) return;

      console.log(target.pathname);


      this.open(target.pathname);
    });


    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;

      console.log('popstate');

      this.open(currentPath);

      // eventBus.emit('showView', {
      //   name: this.routes[currentPath].state
      // });

      eventBus.emit(`${this.routes[currentPath].state} state request`);



    });

    const currentPath = window.location.pathname;

    console.log(currentPath);

    this.open(currentPath);
  }
}

export default new Router();
