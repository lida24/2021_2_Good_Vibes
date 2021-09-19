import SocialList from '../SocialList/SocialList.js';

export default class SignInBlock {
    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    generate() {
        const signinFormContainer = CreateDiv({
            parent: this.#parent,
            classesNames: [
                'col',
                'align-center',
                'flex-col',
                'sign-in',
            ],
        });

        const formWrapper = CreateDiv({
            parent: signinFormContainer,
            classesNames: [
                'form-wrapper',
                'align-center',
            ],
        });
        const signinForm = CreateForm({
            parent: formWrapper,
            classesNames: [
                'form',
                'sign-in',
            ]
        });

        CreateObject({
            parent: signinForm,
            type: 'h3',
        }).innerText = 'login';

        const usernameSignInInput = CreateInput({
            parent: signinForm,
            placeholder: 'Username',
            classesNames: [
                'box',
            ],
        });

        const passwordSignInInput = CreateInput({
            parent: signinForm,
            type: 'password',
            placeholder: 'Password',
            classesNames: [
                'box',
            ],
        });

        const signInAlertObject = CreateObject({
            parent: signinForm,
            type: 'p',
        });
        signInAlertObject.innerText = 'alert';
        signInAlertObject.style.visibility = 'hidden';


        CreateInput({
            parent: signinForm,
            type: 'submit',
            value: 'sign in',
            classesNames: [
                'btn',
            ],
        });

        const rememberMeP = CreateObject({
            parent: signinForm,
            type: 'p',
        });
        CreateInput({
            parent: rememberMeP,
            type: 'checkbox',
            placeholder: 'remember',
        });

        const rememberMeLabel = CreateObject({
            parent: rememberMeP,
            type: 'label',
        });
        rememberMeLabel.setAttribute('for', 'remember');
        rememberMeLabel.textContent = 'Remember me';

        // forgetPasswordP = CreateObject(signinForm, 'p');
        // forgetPasswordP.innerText = 'forget password?';
        // CreateA(forgetPasswordP, null, '#').textContent = 'click here';

        const dontHaveAccountP = CreateObject({
            parent: signinForm,
            type: 'p',
        });
        dontHaveAccountP.innerText = 'don\'t have account?';

        CreateA({
            parent: dontHaveAccountP,
            id: 'sign-up',
        }).textContent = 'signup now';

        const SignInSocialList = new SocialList(signinFormContainer);
        SignInSocialList.className = 'sign-in'
        SignInSocialList.generate();

        signinFormContainer.addEventListener('submit', (e) => {
            signInAlertObject.style.visibility = 'hidden';

            e.preventDefault();

            const userData = {
                username: usernameSignInInput.value.trim(),
                password: passwordSignInInput.value.trim(),
            }

            const validationResult = signInValidate(userData);

            if (validationResult !== undefined) {
                signInAlertObject.innerText = validationResult;
                signInAlertObject.style.visibility = 'visible';
                return;
            }

            logInRequest({
                body: userData, 
                alertObject: signInAlertObject,
            });

        });
    }

}
