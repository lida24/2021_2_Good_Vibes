export default class Validate {

    static signUp({
        username,
        email,
        password,
        confirmPassword,
    }) {
        if (
            !password || !confirmPassword
            || !username || !email
        ) {
            return 'Заполните все поля';
        }

        if (!email.match(/@/)) {
            return 'Неверный формат электронной почты';
        }

        if (!password.match(/^\S{4,}$/)) {
            return 'Неверный формат пароля';
        }

        if (password !== confirmPassword) {
            return 'Пароли не одинаковые';
        }

        return undefined;
    }

    static signIn({
        username,
        password,
    }) {
        if (!username || !password) {
            return 'Заполните все поля';
        }

        if (!password.match(/^\S{4,}$/)) {
            return 'Неверный формат пароля';
        }

        return undefined;
    }
}
