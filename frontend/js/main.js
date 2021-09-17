console.log('lol kek')

const root = document.getElementById('container');

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

// =======================================

function Page() {

    row = CreateDiv(root, null, 'row');  // row starts

    sigupFormContainer = CreateDiv(row, null, 
        'col', 'align-center', 'flex-col', 'sign-up');  // signup form container

// -----------------
    formWrapper = CreateDiv(sigupFormContainer, null, 'form-wrapper', 'align-center');

    signupForm = CreateForm(formWrapper, null, 'form sign-up');

    CreateObject(signupForm, 'h3').innerText = 'signup';

    CreateInput(signupForm, 'text',     'Username',         null,           'box');
    CreateInput(signupForm, 'email',    'Email',            null,           'box');
    CreateInput(signupForm, 'password', 'Password',         null,           'box');
    CreateInput(signupForm, 'password', 'Confirm password', null,           'box'); 
    CreateInput(signupForm, 'submit',   null,               'signup now',   'btn'); 

    alreadyHaveAccountP = CreateObject(signupForm, 'p')
    alreadyHaveAccountP.innerText = 'Already have account?';

    CreateA(alreadyHaveAccountP, 'sign-in', '#').textContent = 'sign in';

// -----------------
    socialWrapper = CreateDiv(sigupFormContainer, null, 'form-wrapper');

    socialList = CreateDiv(socialWrapper, null, 'social-list', 'align-center', 'sign-up');

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

// -----------------
    signinFormContainer = CreateDiv(row, null, 'col', 'align-center',
        'flex-col', 'sign-in');

    formWrapper = CreateDiv(signinFormContainer, null, 'form-wrapper', 'align-center');

    signinForm = CreateForm(formWrapper, null, 'form', 'sign-in');

    CreateObject(signinForm, 'h3').innerText = 'login';

    CreateInput(signinForm, 'text',     'Username',         null,           'box');
    CreateInput(signinForm, 'password', 'Password',         null,           'box');
    CreateInput(signinForm, 'submit',   null,               'sign in',   'btn'); 

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
    CreateA(dontHaveAccountP, 'sign-up', '#').textContent = 'signup now';


// -----------------
    formWrapper = CreateDiv(signinFormContainer, null, 'form-wrapper');

    socialList = CreateDiv(formWrapper, null, 'social-list', 'align-center', 'sign-in');

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

// -----------------

    contentSectionRow = CreateDiv(root, null, null, 'row', 'row-content');

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

}

Page();