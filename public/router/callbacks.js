export const rout = (name) => {
  console.log('rout', name);


  if (window.location.pathname !== path) {
    window.history.pushState(
      null,
      '',
      path
    );
  }

};

export const add = (name) => {
  console.log('hist add', name);
};
