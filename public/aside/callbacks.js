export const showAside = () => {
    const asideObj = document.getElementById('aside-container');
    asideObj.classList.add('open');
}

export const hideAside = () => {
    const asideObj = document.getElementById('aside-container');
    asideObj.classList.remove('open');
}