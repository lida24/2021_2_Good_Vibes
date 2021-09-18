console.log('lol kek')

const root = document.getElementById('root');

// =======================================
function ajax(method, url, body = null, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.withCrredentials = true;

    xhr.addEventListener('readystatechange', function() {
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

// const toggle = () => {
//   container.classList.toggle('sign-in');
//   container.classList.toggle('sign-up');
// };


// ----------------------------------------

function CreateObject(parent, type) {
    const obj = document.createElement(type)

    if (parent !== null) {
        parent.appendChild(obj)
    }

    return obj  
}

function ParseClasses(classesName) {
    let classString = classesName[0];

    for (i = 1; i < classesName.length; i++) {
        classString = `${classString} ${classesName[i]}`
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

    if (classesName != undefined) {
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

    return div   
}

function CreateForm(parent, id, ...classesName) {
    const form = CreateObject(parent, 'form');

    if (id !== null) {
        form.id = id;
    }

    form.className = ParseClasses(classesName);

    return form   
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

function GenerateSocialList(parent, authorizationType) {
    socialWrapper = CreateDiv(parent, null, 'form-wrapper');

    socialList = CreateDiv(socialWrapper, null, authorizationType, 'social-list', 'align-center');

    CreateI(
        CreateDiv(socialList, null, 'align-center', 'facebook-bg'),
        null,
        'bx',
        'bxl-facebook');

    CreateI(
        CreateDiv(socialList, null, 'align-center', 'google-bg'),
        null,
        'bx',
        'bxl-google');

    CreateI(
        CreateDiv(socialList, null, 'align-center', 'twitter-bg'),
        null,
        'bx',
        'bxl-twitter');

    CreateI(
        CreateDiv(socialList, null, 'align-center', 'insta-bg'),
        null,
        'bx',
        'bxl-instagram-alt');

}




function signUpContainerGenerate(parent) {
    sigupFormContainer = CreateDiv(parent, null, 
        'col', 'align-center', 'flex-col', 'sign-up');  // signup form container

    formWrapper = CreateDiv(sigupFormContainer, null, 'form-wrapper', 'align-center');

    signupForm = CreateForm(formWrapper, null, 'form sign-up');

    CreateObject(signupForm, 'h3').innerText = 'signup';

    usernameInput = CreateInput(signupForm, 'text',     'Username',         null,           'box');
    emailInput = CreateInput(signupForm, 'email',    'Email',            null,           'box');
    passwordInput = CreateInput(signupForm, 'password', 'Password',         null,           'box');
    CreateInput(signupForm, 'password', 'Confirm password', null,           'box'); 
    CreateInput(signupForm, 'submit',   null,               'signup now',   'btn'); 

    alreadyHaveAccountP = CreateObject(signupForm, 'p')
    alreadyHaveAccountP.innerText = 'Already have account?';

    CreateA(alreadyHaveAccountP, 'sign-in', '#').textContent = 'sign in';

    GenerateSocialList(sigupFormContainer, 'sign-up');





    sigupFormContainer.addEventListener('submit', (e) => {
        console.log('kek sign-up');

        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput.value.trim();

        // console.log(email);
        // console.log(password);

        ajax(
          'POST',
          '/signup',
            {username, password, email},
            (status) => {
              if (status === 201) {
                  homePage();
                  return;
              }

              alert('НЕ получилось не фартануло');
            }
        );

    });


}






function signInContainerGenerate(parent) {

    signinFormContainer = CreateDiv(parent, null, 'col', 'align-center',
        'flex-col', 'sign-in');

    // signinFormContainer.action = '/signin';

    formWrapper = CreateDiv(signinFormContainer, null, 'form-wrapper', 'align-center');

    signinForm = CreateForm(formWrapper, null, 'form', 'sign-in');

    CreateObject(signinForm, 'h3').innerText = 'login';

    usernameInput1 = CreateInput(signinForm, 'text',     'Username',         null,           'box');
    passwordInput1 = CreateInput(signinForm, 'password', 'Password',         null,           'box');
    submitBtn = CreateInput(signinForm, 'submit',   null,               'sign in',   'btn'); 

    rememberMeP = CreateObject(signinForm, 'p')
    CreateInput(rememberMeP, 'checkbox', 'remember', null);
    rememberMeLabel = CreateObject(rememberMeP, 'label');
    rememberMeLabel.setAttribute('for', 'remember');
    rememberMeLabel.textContent = 'Remember me';

    forgetPasswordP = CreateObject(signinForm, 'p');
    forgetPasswordP.innerText = 'forget password?';
    CreateA(forgetPasswordP, null, '#').textContent = 'click here';

    dontHaveAccountP = CreateObject(signinForm, 'p');
    dontHaveAccountP.innerText = 'don\'t have account?';
    signUpBtn = CreateA(dontHaveAccountP, 'sign-up', '#').textContent = 'signup now';

    // signUpBtn.addEventListener('click', toggle);

    GenerateSocialList(signinFormContainer, 'sign-in');

    signinFormContainer.addEventListener('submit', (e) => {
        console.log('kek sign-in');

        e.preventDefault();

        const username = usernameInput1.value.trim();
        const password = passwordInput1.value.trim();

        // console.log(username);
        // console.log(password);

        ajax(
          'POST',
          '/login',
            {username, password},
            (status) => {
              if (status === 200) {
                  homePage();
                  return;
              }

              alert('НЕ получилось не фартануло');
            }
        );

    });
}


function homePage() {
    root.innerHTML = '';

    ajax(
        'GET',
        '/me',
        null,
        (status, responseText) => {
            let isAuthorized = false;

            if (status == 200) {
                isAuthorized = true;
            }

            if (isAuthorized) {
                const {age, score, images} = JSON.parse(responseText);

                const span = document.createElement('span');
                span.textContent = `мне ${age} и я крутой на ${score} очков`;

                root.appendChild(span);

                const back = document.createElement('a');
                back.href = '/';
                back.textContent = 'back';
                back.dataset.section = 'menu';

                root.appendChild(back);

                back.addEventListener('click', (e) => {
                    e.preventDefault();

                    ajax(
                        'POST',
                        '/logout',
                        null,
                        (status, responseText) => {
                            if (status != 200) {
                                alert('logout error');
                                return;
                            }

                            EnterPage();
                        }
                    );
                });


                console.log('authorized');

                return;
            }

            alert('not authorized');
            EnterPage();
        }
    );

    // root.textContent = 'homePage';

}


// =======================================

function EnterPage() {

    // root.innerHTML = '';

    // root.textContent = 'enterPage';

// -------------------------------

    root.innerHTML = '';

    // row = CreateDiv(root, null, 'row');  // row starts

    const container = CreateDiv(root, 'container', 'container');

    const row = CreateDiv(container, null, 'row');


    signUpContainerGenerate(row);



// -----------------
    signInContainerGenerate(row);



    contentSectionRow = CreateDiv(container, null, null, 'row', 'row-content');

// -----------------
    signInContent = CreateDiv(contentSectionRow, null, null, 'col', 'align-center', 'flex-col');

    textSignIn = CreateDiv(signInContent, null, null, 'text', 'sign-in');

    CreateObject(textSignIn, 'h2').innerText = 'Welcome Back';
    lorem = CreateObject(textSignIn, 'p')
    lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

    imgSignIn = CreateDiv(signInContent, null, null, 'img', 'sign-in');
    img = CreateObject(imgSignIn, 'img');
    img.setAttribute('src', './images/2.png');
    img.setAttribute('alt', '');


// -----------------
    signUpContent = CreateDiv(contentSectionRow, null, null, 'col', 'align-center', 'flex-col');

    textSignUp = CreateDiv(signUpContent, null, null, 'text', 'sign-up');

    CreateObject(textSignUp, 'h2').innerText = 'Join with us';
    lorem = CreateObject(textSignUp, 'p')
    lorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel error perspiciatis illum impedit deleniti modi labore perferendis, incidunt ab sapiente?';

    imgSignIn = CreateDiv(signUpContent, null, null, 'img', 'sign-up');
    img = CreateObject(imgSignIn, 'img');
    img.setAttribute('src', './images/1.png');
    img.setAttribute('alt', '');




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

// EnterPage();

homePage();


// ==============================================

// const container = document.getElementById('container');
// const signIn = document.getElementById('sign-in');
// const signUp = document.getElementById('sign-up');

// setTimeout(() => {
//   container.classList.add('sign-in');
// }, 200);

// const toggle = () => {
//   container.classList.toggle('sign-in');
//   container.classList.toggle('sign-up');
// };

// signIn.addEventListener('click', toggle);
// signUp.addEventListener('click', toggle);