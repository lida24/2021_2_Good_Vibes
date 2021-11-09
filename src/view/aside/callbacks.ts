import bus from '../../init/bus';
import { AjaxResponse, Callback } from '../../types';

export const show: Callback = () => {
  const asideObj = <HTMLElement>document.getElementsByClassName('aside-container')[0];
  asideObj.classList.add('open');
};

export const hide: Callback = () => {
  const asideObj = <HTMLElement>document.getElementsByClassName('aside-container')[0];
  asideObj.classList.remove('open');
};

export const addCategory: (name: string, parent: HTMLElement) => HTMLElement = (name, parent) => {
  const child = <HTMLLIElement>document.createElement('li');

  const href = <HTMLAnchorElement>document.createElement('a');
  href.href = '#';
  // href.innerHTML = name;
  href.text = name;

  const span = <HTMLSpanElement>document.createElement('span');

  const i = <HTMLElement>document.createElement('i');
  i.className = 'fa fa-chevron-right';

  span.appendChild(i);

  href.appendChild(span);

  child.appendChild(href);

  parent.appendChild(child);

  href.addEventListener('click', (event) => {
    event.preventDefault();

    // eventBus.emit('category request', name);
    bus.emit('category state request', { name });
  });

  return child;
};

type Category = {
  'name': string,
  'children'?: Category[],
};

export const handleObj: (obj: Category, parent: HTMLElement) => void = (obj, parent) => {
  // console.log(obj.name);

  const child = addCategory(obj.name, parent);

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
    .then((parsedObj) => parseCategoryObject(parsedObj))

    .catch((err) => console.error('category response parse error', err));
};
