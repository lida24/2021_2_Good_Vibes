export const rout = (name) => {
  console.log('rout', name);

};

export const add = (name) => {
  console.log('hist add', name);
  console.log(window.location.pathname);

  if (window.location.pathname !== name) {
    const historyState = {
      state: name
    };

    window.history.pushState(
      historyState,
      name,
      name
    );
  }
  // console.log(window.history);
};
