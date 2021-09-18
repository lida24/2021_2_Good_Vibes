const root = document.getElementById('root');

// const user = {};

// =======================================

// ----------------------------------------
function ajax(method, url, body = null, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.withCrredentials = true;

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    callback(xhr.status, xhr.responseText);
  });

  if (body) {
    xhr.setRequestHeader('Content-type', 'application/json; charser=utf8');
    xhr.send(JSON.stringify(body));
    return;
  }

  xhr.send();
}
// ----------------------------------------

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

// ----------------------------------------
function CreateObject(parent, type) {
  const obj = document.createElement(type);

  if (parent !== null) {
    parent.appendChild(obj);
  }

  return obj;
}

function ParseClasses(classesName) {
  let classString = classesName[0];

  for (let i = 1; i < classesName.length; i += 1) {
    classString = `${classString} ${classesName[i]}`;
  }

  return classString;
}

function CreateInput(parent, type, placeholder, value, ...classesName) {
  const input = CreateObject(parent, 'input');

  input.type = type;

  if (placeholder !== null) {
    input.placeholder = placeholder;
  }

  if (value !== null) {
    input.value = value;
  }

  if (classesName !== undefined) {
    input.className = ParseClasses(classesName);
  }

  return input;
}

function CreateDiv(parent, id, ...classesName) {
  const div = CreateObject(parent, 'div');

  if (id !== null) {
    div.id = id;
  }

  div.className = ParseClasses(classesName);

  return div;
}

function CreateForm(parent, id, ...classesName) {
  const form = CreateObject(parent, 'form');

  if (id !== null) {
    form.id = id;
  }

  form.className = ParseClasses(classesName);

  return form;
}

function CreateA(parent, id, href = '#') {
  const a = CreateObject(parent, 'a');

  if (id !== null) {
    a.id = id;
  }

  a.href = href;

  return a;
}

function CreateI(parent, id, ...classesName) {
  const i = CreateObject(parent, 'i');

  if (id !== null) {
    i.id = id;
  }

  i.className = ParseClasses(classesName);

  return i;
}
// ----------------------------------------

let siteGenerate = () => {};

// ----------------------------------------
function GenerateSocialList(parent, authorizationType) {
  const socialWrapper = CreateDiv(parent, null, 'form-wrapper');
  const socialList = CreateDiv(socialWrapper, null, authorizationType, 'social-list', 'align-center');

  CreateI(
    CreateDiv(socialList, null, 'align-center', 'facebook-bg'),
    null,
    'bx',
    'bxl-facebook',
  );

  CreateI(
    CreateDiv(socialList, null, 'align-center', 'google-bg'),
    null,
    'bx',
    'bxl-google',
  );

  CreateI(
    CreateDiv(socialList, null, 'align-center', 'twitter-bg'),
    null,
    'bx',
    'bxl-twitter',
  );

  CreateI(
    CreateDiv(socialList, null, 'align-center', 'insta-bg'),
    null,
    'bx',
    'bxl-instagram-alt',
  );
}
// ----------------------------------------

// ----------------------------------------
function signUpBlockGenerate(parent) {
  const sigupFormContainer = CreateDiv(parent, null,
    'col', 'align-center', 'flex-col', 'sign-up');

  const formWrapper = CreateDiv(sigupFormContainer, null, 'form-wrapper', 'align-center');
  const signupForm = CreateForm(formWrapper, null, 'form sign-up');

  CreateObject(signupForm, 'h3').innerText = 'signup';

  const usernameSignUpInput = CreateInput(signupForm, 'text', 'Username', null, 'box');
  const emailSignUpInput = CreateInput(signupForm, 'email', 'Email', null, 'box');
  const passwordSignUpInput = CreateInput(signupForm, 'password', 'Password', null, 'box');
  const confirmPasswordSignUpInput = CreateInput(signupForm, 'password', 'Confirm password', null, 'box');
  const signUpAlert = CreateObject(signupForm, 'p');
  signUpAlert.style.visibility = 'hidden';

  CreateInput(signupForm, 'submit', null, 'signup now', 'btn');

  const alreadyHaveAccountP = CreateObject(signupForm, 'p');
  alreadyHaveAccountP.innerText = 'Already have account?';

  CreateA(alreadyHaveAccountP, 'sign-in', '#').textContent = 'sign in';

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

    ajax(
      'POST',
      '/signup',
      { username, password, email },
      (status, responseText) => {
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
    );
  });
}
// ----------------------------------------

// ----------------------------------------
function signInBlockGenerate(parent) {
  const signinFormContainer = CreateDiv(parent, null, 'col', 'align-center',
    'flex-col', 'sign-in');

  const formWrapper = CreateDiv(signinFormContainer, null, 'form-wrapper', 'align-center');
  const signinForm = CreateForm(formWrapper, null, 'form', 'sign-in');

  CreateObject(signinForm, 'h3').innerText = 'login';

  const usernameSignInInput = CreateInput(signinForm, 'text', 'Username', null, 'box');
  const passwordSignInInput = CreateInput(signinForm, 'password', 'Password', null, 'box');

  const signInAlert = CreateObject(signinForm, 'p');
  signInAlert.innerText = 'alert';
  signInAlert.style.visibility = 'hidden';

  CreateInput(signinForm, 'submit', null, 'sign in', 'btn');

  const rememberMeP = CreateObject(signinForm, 'p');
  CreateInput(rememberMeP, 'checkbox', 'remember', null);
  const rememberMeLabel = CreateObject(rememberMeP, 'label');
  rememberMeLabel.setAttribute('for', 'remember');
  rememberMeLabel.textContent = 'Remember me';

  // forgetPasswordP = CreateObject(signinForm, 'p');
  // forgetPasswordP.innerText = 'forget password?';
  // CreateA(forgetPasswordP, null, '#').textContent = 'click here';

  const dontHaveAccountP = CreateObject(signinForm, 'p');
  dontHaveAccountP.innerText = 'don\'t have account?';
  CreateA(dontHaveAccountP, 'sign-up', '#').textContent = 'signup now';

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

    ajax(
      'POST',
      '/login',
      { username, password },
      (status, responseText) => {
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
    );
  });
}
// ----------------------------------------

// ----------------------------------------
function signInContentGenerate(parent) {
  const signInContent = CreateDiv(parent, null, null, 'col', 'align-center', 'flex-col');

  const textSignIn = CreateDiv(signInContent, null, null, 'text', 'sign-in');

  CreateObject(textSignIn, 'h2').innerText = 'Welcome Back';
  const lorem = CreateObject(textSignIn, 'p');
  lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

  const imgSignIn = CreateDiv(signInContent, null, null, 'img', 'sign-in');
  const img = CreateObject(imgSignIn, 'img');
  img.setAttribute('src', './images/2.png');
  img.setAttribute('alt', '');
}
// ----------------------------------------

// ----------------------------------------
function signUpContentGenerate(parent) {
  const signUpContent = CreateDiv(parent, null, null, 'col', 'align-center', 'flex-col');

  const textSignUp = CreateDiv(signUpContent, null, null, 'text', 'sign-up');

  CreateObject(textSignUp, 'h2').innerText = 'Join with us';
  const lorem = CreateObject(textSignUp, 'p');
  lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

  const imgSignIn = CreateDiv(signUpContent, null, null, 'img', 'sign-up');
  const img = CreateObject(imgSignIn, 'img');
  img.setAttribute('src', './images/1.png');
  img.setAttribute('alt', '');
}
// ----------------------------------------

// ----------------------------------------
function enterPage() {
  root.innerHTML = '';

  const container = CreateDiv(root, 'container', 'container');
  const row = CreateDiv(container, null, 'row');

  signUpBlockGenerate(row);
  signInBlockGenerate(row);

  const contentSectionRow = CreateDiv(container, null, null, 'row', 'row-content');

  signInContentGenerate(contentSectionRow);
  signUpContentGenerate(contentSectionRow);

  scripts(container);
}
// ----------------------------------------

// ----------------------------------------
function homePage({ username, password, email }) {
  root.innerHTML = '';

  const span = document.createElement('span');
  span.textContent = `Authorized user: ${username}\n
     User's email: ${email}\n
     User's password: ${password}\n`;

  root.appendChild(span);

  const back = document.createElement('a');
  back.href = '/';
  back.textContent = 'Log out';

  root.appendChild(back);

  back.addEventListener('click', (e) => {
    e.preventDefault();

    ajax(
      'POST',
      '/logout',
      null,
      (status, responseText) => {
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
    );
  });
}
// ----------------------------------------

// ----------------------------------------
siteGenerate = () => {
  root.innerHTML = '';

  ajax(
    'GET',
    '/me',
    null,
    (status, responseText) => {
      let isAuthorized = false;

      if (status === 200) {
        isAuthorized = true;
      }

      if (isAuthorized) {
        const user = JSON.parse(responseText);
        homePage(user);
        return;
      }

      enterPage();
    },
  );
};
// ----------------------------------------

siteGenerate();
