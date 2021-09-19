(function dataValidation() {
  // ------------------------------
  function signUpValidate({
    username,
    email,
    password,
    confirmPassword,
  }) {
    if (
      !password || !confirmPassword
            || !username || !email
    ) {
      return 'Fill all fields';
    }

    if (!email.match(/@/)) {
      return 'Wrong format of email';
    }

    if (!password.match(/^\S{4,}$/)) {
      return 'Wrong password format';
    }

    if (password !== confirmPassword) {
      return 'Password are not confirmed';
    }

    return undefined;
  }
  window.signUpValidate = signUpValidate;

  // ------------------------------
  function signInValidate({
    username,
    password,
  }) {
    if (!username || !password) {
      return 'Fill all fields';
    }

    if (!password.match(/^\S{4,}$/)) {
      return 'Wrong password format';
    }

    return undefined;
  }
  window.signInValidate = signInValidate;
}()
);
