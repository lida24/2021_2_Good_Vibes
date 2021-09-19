import SocialList from '../SocialList/SocialList.js';

export default class SignUpBlock {
    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    generate() {
        const sigupFormContainer = CreateDiv({
            parent: this.#parent,
            classesNames: [
                'col',
                'align-center',
                'flex-col',
                'sign-up',
            ],
        });

        const formWrapper = CreateDiv({
            parent: sigupFormContainer,
            classesNames: [
                'form-wrapper',
                'align-center',
            ],
        });

        const signupForm = CreateForm({
            parent: formWrapper,
            classesNames: [
                'form',
                'sign-up',
            ]
        });

        CreateObject({
            parent: signupForm,
            type: 'h3',
        }).innerText = 'signup';

        const usernameSignUpInput = CreateInput({
            parent: signupForm,
            placeholder: 'Username',
            classesNames: [
                'box',
            ]
        });

        const emailSignUpInput = CreateInput({
            parent: signupForm,
            type: 'email',
            placeholder: 'Email',
            classesNames: [
                'box',
            ]
        });

        const passwordSignUpInput = CreateInput({
            parent: signupForm,
            type: 'password',
            placeholder: 'Password',
            classesNames: [
                'box',
            ],
        });

        const confirmPasswordSignUpInput = CreateInput({
            parent: signupForm,
            type: 'password',
            placeholder: 'Confirm password',
            classesNames: [
                'box',
            ],
        });

        const signUpAlertObject = CreateObject({
            parent: signupForm,
            type: 'p',
        });
        signUpAlertObject.style.visibility = 'hidden';

        CreateInput({
            parent: signupForm,
            type: 'submit',
            value: 'signup now',
            classesNames: [
                'btn',
            ],
        });

        const alreadyHaveAccountP = CreateObject({
            parent: signupForm,
            type: 'p',
        });
        alreadyHaveAccountP.innerText = 'Already have account?';

        CreateA({
            parent: alreadyHaveAccountP,
            id: 'sign-in',
        }).textContent = 'sign in';

        const SignUpSocialList = new SocialList(sigupFormContainer);
        SignUpSocialList.className = 'sign-up'
        SignUpSocialList.generate();

        sigupFormContainer.addEventListener('submit', (e) => {
            signUpAlertObject.style.visibility = 'hidden';

            e.preventDefault();

            const userData = {
                username: usernameSignUpInput.value.trim(),
                email: emailSignUpInput.value.trim(),
                password: passwordSignUpInput.value.trim(),
                confirmPassword: confirmPasswordSignUpInput.value.trim(),
            }

            const validationResult = signUpValidate(userData);

            if (validationResult !== undefined) {
                signUpAlertObject.innerText = validationResult;
                signUpAlertObject.style.visibility = 'visible';
                return;
            }

            signUpRequest({
                body: userData, 
                alertObject: signUpAlertObject,
            });

        });
    }
}
