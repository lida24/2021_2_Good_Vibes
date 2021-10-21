export const rout = (name) => {
  console.log('rout', name);

};

export const add = (name) => {
  console.log('hist add', name);
  console.log(window.location.pathname);

  if (window.location.pathname.slice(1) !== name) {
    const historyState = {
      state: name
    };

    window.history.pushState(
      // window.history.replaceState(
      historyState,
      name,
      name
    );
  }
  // console.log(window.history);
};
