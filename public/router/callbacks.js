export const rout = (name) => {
  console.log('rout', name);

  if (window.location.pathname !== path) {
    const historyState = {
      state: this.routes[path].state
    };

    window.history.pushState(
      historyState,
      this.routes[path].state,
      path
    );
  }

};

export const add = (name) => {
  console.log('hist add', name);
};
