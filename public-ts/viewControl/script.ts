import bus from '../init/bus';
import { Product, ViewInterface } from '../types';
import constructor from './constructors';

type ShowViewSignature = (obj: { 'name': string, 'context': Product }) => void;

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

export const showView: ShowViewSignature = (obj: { 'name': string, 'context': Product }) => {
  const { name, context } = obj;

  Object.keys(viewMap).forEach((key) => {
    viewMap[key].visibility = false;
  });

  if (!viewMap[name]) {
    viewGenerate(name);
  }

  // --------------------

  const { view } = viewMap[name];

  if (context) {
    view.setContext(context);
    view.render();
  }

  // --------------------

  viewMap[name].visibility = true;

  Promise.resolve()
    .then(() => document.getElementById('main-container').replaceWith(view.self))
    .then(() => bus.emit(`${name} ${context?.id} shown`, undefined))
};

export const a = 0;
