const root = document.getElementById('root');

import HomePageComponent from '../Components/HomePage/HomePage.js'

const AJAX_STATUS = {
  OK: 200,
}  // доделать

// const user = {};

// =======================================


// ----------------------------------------
function scripts(container) {
  const signIn = document.getElementById('sign-in');
  const signUp = document.getElementById('sign-up');

  setTimeout(() => {
    container.classList.add('sign-in');
  }, 200);

  const toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  };

  signIn.addEventListener('click', toggle);
  signUp.addEventListener('click', toggle);
}
// ----------------------------------------

let siteGenerate = () => {};

// ----------------------------------------
function GenerateSocialList(parent, authorizationType) {

  const socialWrapper = CreateDiv({
    parent: parent,
    classesNames: [
      'form-wrapper',
    ],
  });

  const socialList = CreateDiv({
    parent: socialWrapper,
    classesNames: [
      authorizationType,
      'social-list', 
      'align-center',
    ],
  });

  CreateI({
    parent: CreateDiv({
        parent: socialList,
        classesNames: [
          'align-center', 
          'facebook-bg',
        ],
      }),
    classesNames: [
      'bx',
      'bxl-facebook',
    ]
  });
  
  CreateI({
    parent: CreateDiv({
      parent: socialList,
      classesNames: [
        'align-center',
        'google-bg',
      ],
    }),
    classesNames: [
      'bx',
      'bxl-google',
    ]
  });

  CreateI({
    parent: CreateDiv({
      parent: socialList,
      classesNames: [
        'align-center',
        'twitter-bg',
      ],
    }),
    classesNames: [
      'bx',
      'bxl-twitter',
    ]
  });

  CreateI({
    parent: CreateDiv({
      parent: socialList,
      classesNames: [
        'align-center',
        'insta-bg',
      ],
    }),
    classesNames: [
      'bx',
      'bxl-instagram-alt',
    ]
  });

}
// ----------------------------------------

// ----------------------------------------
function signUpBlockGenerate(parent) {
  const sigupFormContainer = CreateDiv({
    parent: parent,
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

  const signUpAlert = CreateObject({
    parent: signupForm,
    type: 'p',
  });
  signUpAlert.style.visibility = 'hidden';

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

  GenerateSocialList(sigupFormContainer, 'sign-up');

  sigupFormContainer.addEventListener('submit', (e) => {
    signUpAlert.style.visibility = 'hidden';

    e.preventDefault();

    const username = usernameSignUpInput.value.trim();
    const email = emailSignUpInput.value.trim();

    const password = passwordSignUpInput.value.trim();
    const confirmPassword = confirmPasswordSignUpInput.value.trim();

    if (
      !password || !confirmPassword
            || !username || !email
    ) {
      signUpAlert.innerText = 'Fill all fields';
      signUpAlert.style.visibility = 'visible';
      return;
    }

    if (!email.match(/@/)) {
      signUpAlert.innerText = 'Wrong format of email';
      signUpAlert.style.visibility = 'visible';
      return;
    }

    if (!password.match(/^\S{4,}$/)) {
      signUpAlert.innerText = 'Wrong password format';
      signUpAlert.style.visibility = 'visible';
      return;
    }

    if (password !== confirmPassword) {
      signUpAlert.innerText = 'Password are not confirmed';
      signUpAlert.style.visibility = 'visible';
      return;
    }

    Ajax.ajaxPost({
      url: '/signup',
      body: { username, password, email },
      callback: (status, responseText) => {
        if (status === 201) {
          siteGenerate();
          return;
        }

        JSON.parse(responseText, (key, value) => {
          if (key !== '') {
            signUpAlert.innerText = value;
            signUpAlert.style.visibility = 'visible';
          }
        });
      },
    });
  });
}
// ----------------------------------------

// ----------------------------------------
function signInBlockGenerate(parent) {
  const signinFormContainer = CreateDiv({
    parent: parent,
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

  const signInAlert = CreateObject({
    parent: signinForm, 
    type: 'p',
  });
  signInAlert.innerText = 'alert';
  signInAlert.style.visibility = 'hidden';


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

  GenerateSocialList(signinFormContainer, 'sign-in');

  signinFormContainer.addEventListener('submit', (e) => {
    signInAlert.style.visibility = 'hidden';

    e.preventDefault();

    const username = usernameSignInInput.value.trim();
    const password = passwordSignInInput.value.trim();

    if (!username || !password) {
      signInAlert.innerText = 'Fill all fields';
      signInAlert.style.visibility = 'visible';
      return;
    }

    if (!password.match(/^\S{4,}$/)) {
      signInAlert.innerText = 'Wrong password format';
      signInAlert.style.visibility = 'visible';
      return;
    }

    Ajax.ajaxPost({
      url: '/login',
      body: { username, password },
      callback: (status, responseText) => {
        if (status === 200) {
          siteGenerate();
          return;
        }

        JSON.parse(responseText, (key, value) => {
          if (key !== '') {
            signInAlert.innerText = value;
            signInAlert.style.visibility = 'visible';
          }
        });
      },
    });
  });
}
// ----------------------------------------

// ----------------------------------------
function signInContentGenerate(parent) {
  const signInContent = CreateDiv({
    parent: parent,
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
// ----------------------------------------

// ----------------------------------------
function signUpContentGenerate(parent) {
  const signUpContent = CreateDiv({
    parent: parent,
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
// ----------------------------------------

// ----------------------------------------
function enterPage() {
  root.innerHTML = '';

  const container = CreateDiv({
    parent: root,
    id: 'container',
    classesNames: [
      'container',
    ]
  });
  const row = CreateDiv({
    parent: container,
    classesNames: [
      'row',
    ],
  });

  signUpBlockGenerate(row);
  signInBlockGenerate(row);

  const contentSectionRow = CreateDiv({
    parent: container,
    classesNames: [
      'row', 
      'row-content',
    ],
  });

  signInContentGenerate(contentSectionRow);
  signUpContentGenerate(contentSectionRow);

  scripts(container);
}
// ----------------------------------------

// // ----------------------------------------
// function homePage({ username, password, email }) {
//   root.innerHTML = '';

//   const span = document.createElement('span');
//   span.textContent = `Authorized user: ${username}\n
//      User's email: ${email}\n
//      User's password: ${password}\n`;

//   root.appendChild(span);

//   const back = document.createElement('a');
//   back.href = '/';
//   back.textContent = 'Log out';

//   root.appendChild(back);

//   back.addEventListener('click', (e) => {
//     e.preventDefault();

//     Ajax.ajaxPost({
//       url: '/logout',
//       callback: (status, responseText) => {
//         if (status === 200) {
//           siteGenerate();
//           return;
//         }

//         JSON.parse(responseText, (key, value) => {
//           if (key !== '') {
//             alert(value);
//           }
//         });
//       },
//     });
//   });
// }
// // ----------------------------------------

// ----------------------------------------
siteGenerate = () => {
  root.innerHTML = '';

  Ajax.ajaxGet({
    url: '/me',
    callback: (status, responseText) => {
      let isAuthorized = false;

      if (status === AJAX_STATUS.OK) {
        isAuthorized = true;
      }

      if (isAuthorized) {
        try {
          const user = JSON.parse(responseText);
          const homePage = new HomePageComponent(root);
          homePage.user = user;
          homePage.render();
        } catch (e) {
          alert('JSON parse error');  // обработать ошибки
          enterPage();
          return;
        }
        return;
      }

      enterPage();
    },
  });
};
// ----------------------------------------

siteGenerate();
