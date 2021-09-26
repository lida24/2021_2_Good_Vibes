export default class HomeView {

    #parent;

    #username;
    #password;
    #email;

    constructor(parent) {
        this.#parent = parent;
    }

    set user({ username, password, email }) {
        this.#username = username;
        this.#password = password;
        this.#email = email;
    }

    render() {
        root.innerHTML = '';

        const homeView = document.createElement('div');

        const span = document.createElement('span');
        span.textContent = `Authorized user: ${this.#username}\n
                            User's email: ${this.#email}\n
                            User's password: ${this.#password}\n`;

        homeView.appendChild(span);

        const back = document.createElement('a');
        back.href = '/';
        back.textContent = 'Log out';

        homeView.appendChild(back);

        back.addEventListener('click', (e) => {
            e.preventDefault();

            logOutRequest();
        });

        // homepageRender();

        this.#parent.appendChild(homeView);
    }

}
