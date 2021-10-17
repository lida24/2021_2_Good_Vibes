import eventBus from "../events/eventBus";

export const sendLogin = () => {
    const login = document.getElementsByName('login')[0].value.trim();
    this.changeLogin(login);
};