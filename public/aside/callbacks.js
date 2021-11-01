export const showAside = () => {
  const asideObj = document.getElementById('aside-container');
  asideObj.classList.add('open');
};

export const hideAside = () => {
  const asideObj = document.getElementById('aside-container');
  asideObj.classList.remove('open');
};

export const addCategory = (name, parent) => {
  const child = document.createElement('li');

  const href = document.createElement('a');
  href.href = '#';
  href.innerHTML = name;

  const span = document.createElement('span');

  const i = document.createElement('i');
  i.className = 'fa fa-chevron-right';

  span.appendChild(i);

  href.appendChild(span);

  child.appendChild(href);

  parent.appendChild(child);
  return child;
};

export const handleObj = (obj, parent) => {
  console.log(obj.name);

  const child = addCategory(obj.name, parent);

  if (obj.children) {
    obj.children.forEach((element) => {
      handleObj(element, child);
    });
  }
};

export const parseCategoryObject = (obj) => {
  console.log('parseCategoryObject');

  console.log(obj);

  const parent = document.getElementsByClassName('categories')[0];

  handleObj(obj, parent);
};
