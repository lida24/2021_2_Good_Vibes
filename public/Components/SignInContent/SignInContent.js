export default class SignInContent {
    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    generate() {
        const signInContent = CreateDiv({
            parent: this.#parent,
            classesNames: [
                'col',
                'align-center',
                'flex-col',
            ],
        });

        const textSignIn = CreateDiv({
            parent: signInContent,
            classesNames: [
                'text',
                'sign-in'
            ],
        });

        CreateObject({
            parent: textSignIn,
            type: 'h2',
        }).innerText = 'Welcome Back';

        const lorem = CreateObject({
            parent: textSignIn,
            type: 'p',
        });
        lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

        const imgSignIn = CreateDiv({
            parent: signInContent,
            classesNames: [
                'img',
                'sign-in',
            ],
        });
        const img = CreateObject({
            parent: imgSignIn,
            type: 'img',
        });
        img.setAttribute('src', './images/2.png');
        img.setAttribute('alt', '');
    }
}
