export const showAside = () => {
    const asideObj = document.getElementById('aside-container');
    asideObj.classList.add('open');
}

export const hideAside = () => {
    const asideObj = document.getElementById('aside-container');
    asideObj.classList.remove('open');
}

export const showSubCategory = () => {
    const subcategory = document.getElementsByClassName('category')[0];
    const subcategory1 = document.getElementsByClassName('category')[1];

    subcategory.classList.toggle("subcategory");
    subcategory1.classList.toggle("subcategory");
}