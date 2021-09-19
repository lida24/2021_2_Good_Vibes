(function () {

    // ------------------------------
    function signUpValidate({
        username,
        email,
        password,
        confirmPassword,
    }) {
        username = username.trim();
        email = email.trim();
        password = password.trim();
        confirmPassword = confirmPassword.trim();

        if (
            !password || !confirmPassword || 
            !username || !email
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
        
    }
    window.signUpValidate = signUpValidate;

    // ------------------------------
    function signInValidate({
        username,
        password,
    }) {
        username = username.trim();
        password = password.trim();

        if (!username || !password) {
            return 'Fill all fields';
        }

        if (!password.match(/^\S{4,}$/)) {
            return 'Wrong password format';
        }
    }
    window.signInValidate = signInValidate;

}()
);