export default class HomePageComponent {

    #parent;

    #username;
    #password;
    #email;

    constructor(parent) {
        this.#parent = parent;
    }

    set user({ username, password, email }) {
        // валидацию данных можно сюда

        this.#username = username;
        this.#password = password;
        this.#email = email;
    }

    render() {
        root.innerHTML = '';

        const homePageView = document.createElement('div');

        const span = document.createElement('span');
        span.textContent = `Authorized user: ${this.#username}\n
                            User's email: ${this.#email}\n
                            User's password: ${this.#password}\n`;

        homePageView.appendChild(span);

        const back = document.createElement('a');
        back.href = '/';
        back.textContent = 'Log out';

        homePageView.appendChild(back);

        back.addEventListener('click', (e) => {
            e.preventDefault();

            Ajax.ajaxPost({
                url: '/logout',
                callback: (status, responseText) => {
                    if (status === 200) {
                        siteGenerate();
                        return;
                    }

                    JSON.parse(responseText, (key, value) => {
                        if (key !== '') {
                            alert(value);
                        }
                    });
                },
            });
        });

        this.#parent.appendChild(homePageView);
    }

}

// TODO при нажатии логаут должен переходить на страницу регистрации
