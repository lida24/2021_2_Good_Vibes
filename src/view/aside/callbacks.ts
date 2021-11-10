import bus from '../../init/bus';
import { AjaxResponse, Callback, Category } from '../../types';

export const show: Callback = () => {
  const asideObj = <HTMLElement>document.getElementsByClassName('aside-container')[0];
  asideObj.classList.add('open');
};

export const hide: Callback = () => {
  const asideObj = <HTMLElement>document.getElementsByClassName('aside-container')[0];
  asideObj.classList.remove('open');
};

// export const addCategory: (obj: Category, parent: HTMLElement) => HTMLElement = (obj, parent) => {
//   const { name, description } = obj;

//   const child = <HTMLLIElement>document.createElement('li');

//   const href = <HTMLAnchorElement>document.createElement('a');
//   href.href = '#';
//   // href.innerHTML = name;
//   href.className = 'categories__link';
//   href.text = `${name} ${description}`;

//   const span = <HTMLSpanElement>document.createElement('span');
//   span.className = 'categories__span-fa';

//   const i = <HTMLElement>document.createElement('i');
//   i.className = 'fa fa-chevron-right';

//   span.appendChild(i);

//   href.appendChild(span);

//   child.appendChild(href);

//   parent.appendChild(child);

//   href.addEventListener('click', (event) => {
//     event.preventDefault();

//     // eventBus.emit('category request', name);
//     bus.emit('category state request', { name });
//   });

//   return child;
// };

export const addLiEvents: (li: HTMLLIElement, obj: Category) => void = (li, obj) => {
  const { name } = obj;

  li.addEventListener('click', (event) => {
    event.preventDefault();

    const target = <HTMLElement>event.target;

    if (target.tagName === 'A') {
      bus.emit('category state request', { name });
      return;
    }

    // if (target.tagName !== 'SPAN') return;

    const ulCollection = li.parentElement.getElementsByTagName('ul');

    // const ulCollection = li.parentNode.querySelector('ul');

    if (!ulCollection) return;

    // ulCollection.hidden = !ulCollection.hidden;

    // if (ulCollection.hidden) {
    //   target.classList.add('hide');
    //   target.classList.remove('show');
    // } else {
    //   target.classList.add('show');
    //   target.classList.remove('hide');
    // }

    Array.from(ulCollection).forEach((child) => {
      // eslint-disable-next-line no-param-reassign

      child.hidden = !child.hidden;

      // child.hidden = true;
    });

    // const ul = li.parentNode.querySelector('ul');
    // ul.hidden = false;
    // let nextSubling = ul.nextSibling;
    // while (nextSubling) {
    //   nextSubling
    // }
  });
};

export const addCategory: (obj: Category, parent: HTMLElement) => HTMLElement = (obj, parent) => {
  const { name, description } = obj;

  const child = <HTMLUListElement>document.createElement('ul');

  const li = <HTMLLIElement>document.createElement('li');
  addLiEvents(li, obj);
  child.appendChild(li);

  const link = <HTMLSpanElement>document.createElement('a');
  link.innerHTML = description;
  link.className = 'categories__span-fa';
  li.appendChild(link);

  if (obj.children) {
    const span = <HTMLAnchorElement>document.createElement('span');
    li.appendChild(span);
    // span.innerHTML = 'развернуть';
    const i = <HTMLElement>document.createElement('i');
    i.className = 'fa fa-chevron-right';
    span.appendChild(i);
  }

  parent.appendChild(child);
  return child;
};

export const handleObj: (obj: Category, parent: HTMLElement) => void = (obj, parent) => {
  const child = addCategory(obj, parent);

  if (obj.children) {
    obj.children.forEach((element) => {
      handleObj(element, child);
    });
  }
};

export const parseCategoryObject: Callback = (obj: Category) => {
  // console.log('parseCategoryObject');

  // console.log(obj);

  const parent = <HTMLElement>document.getElementsByClassName('categories')[0];

  handleObj(obj, parent);
};

export const showSubCategory: Callback = () => {
  /*   const subcategory = document.getElementsByClassName('categories')[0];
    const subcategory1 = document.getElementsByClassName('categories')[1];
    subcategory.classList.toggle('subcategory');
    subcategory1.classList.toggle('subcategory'); */
};

export const parse: Callback = (response: AjaxResponse) => {
  console.log('parse category list', response);

  const { responseText } = response;
  Promise.resolve()
    .then(() => JSON.parse(responseText))
    .then((parsedObj: Category) => parseCategoryObject(parsedObj))

    .catch((err) => console.error('category response parse error', err));
};
