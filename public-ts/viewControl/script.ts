import { ViewInterface } from '../types';
import constructor from './constructors';

type ShowViewSignature = (obj: { [name: string]: string }) => void;

const viewMap: {
  [name: string]: {
    'view': ViewInterface,
    'visibility': boolean,
  }
} = {};

const add: (name: string, view: ViewInterface) => void = (name: string, view: ViewInterface) => {
  viewMap[name] = {
    view,
    visibility: true,
  };
};

const viewGenerate: (name: string) => void = (name: string) => {
  if (!constructor[name]) {
    console.log('haven\'t constructor for name', name);
    return;
  }

  const view = new constructor[name](name);

  add(name, view);
  viewMap[name].visibility = false;
};

export const showView: ShowViewSignature = (obj) => {
  console.log(obj);

  const { name } = obj;

  Object.keys(viewMap).forEach((key) => {
    viewMap[key].visibility = false;
  });

  if (!viewMap[name]) {
    viewGenerate(name);
  }

  document.getElementById('main-container').replaceWith(viewMap[name].view.self);
  viewMap[name].visibility = true;

  console.log(name);
};

export const a = 0;
