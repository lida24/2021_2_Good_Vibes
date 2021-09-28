/** @module Validate */

/**
 * Класс для валидации данных с форм регистации и авторизации
 * @exports
 */
export default class Validate {
  /**
   * @typedef {{username: string,
   * email: string,
   * password: string,
   * confirmPassword: string}} SignUpData
   */
  /**
   * Валидация данных для регистрации
   * @static
   * @param {SignUpData} SignUpData - данные для регистрации
   * @returns {string} строка с описанием ошибки
   */
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

  /**
   * @typedef {{username: string,
   * password: string}} SignInData
   */
  /**
   * Валидация данных для авторизации
   * @static
   * @param {SignInData} SignInData - данные для авторизации
   * @returns {string} строка с описанием ошибки
   */
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
