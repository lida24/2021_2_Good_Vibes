(function actionScrip() {
  // ----------------------------------------
  function authorizViewAction(parent) {
    const signIn = document.getElementById('sign-in');
    const signUp = document.getElementById('sign-up');

    setTimeout(() => {
      parent.classList.add('sign-in');
    }, 200);

    const toggle = () => {
      parent.classList.toggle('sign-in');
      parent.classList.toggle('sign-up');
    };

    signIn.addEventListener('click', toggle);
    signUp.addEventListener('click', toggle);
  }
  window.authorizViewAction = authorizViewAction;
}()
);
