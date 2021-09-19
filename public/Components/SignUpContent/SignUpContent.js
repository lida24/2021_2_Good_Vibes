export default class SignUpContent {
    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    generate() {
        const signUpContent = CreateDiv({
            parent: this.#parent,
            classesNames: [
                'col',
                'align-center',
                'flex-col'
            ],
        });

        const textSignUp = CreateDiv({
            parent: signUpContent,
            classesNames: [
                'text',
                'sign-up',
            ],
        });

        CreateObject({
            parent: textSignUp,
            type: 'h2',
        }).innerText = 'Join with us';
        const lorem = CreateObject({
            parent: textSignUp,
            type: 'p',
        });
        lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

        const imgSignIn = CreateDiv({
            parent: signUpContent,
            classesNames: [
                'img',
                'sign-up',
            ],
        });
        const img = CreateObject({
            parent: imgSignIn,
            type: 'img',
        });
        img.setAttribute('src', './images/1.png');
        img.setAttribute('alt', '');
    }

}