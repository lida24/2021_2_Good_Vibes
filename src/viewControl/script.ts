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

let currentView: string;

const add: (name: string, view: ViewInterface) => void = (name: string, view: ViewInterface) => {
  viewMap[name] = {
    view,
    visibility: true,
  };
};

const viewGenerate: (name: string) => void = (name: string) => {
  if (!constructor[name]) {
    console.error('haven\'t constructor for name', name);
    return;
  }

  const view = new constructor[name](name);

  add(name, view);
  viewMap[name].visibility = false;
};

export const showView: ShowViewSignature = (obj: { 'name': string, 'context': Product }) => {
  const { name, context } = obj;

  // Object.keys(viewMap).forEach((key) => {
  //   viewMap[key].visibility = false;
  // });

  if (currentView) {
    Promise.resolve()
      .then(() => bus.emit(`${currentView} hidden`, undefined))
      .then(() => { viewMap[currentView].visibility = false; });
  }

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

  let fullName = name;
  if (context) {
    fullName += ` ${context.id}`;
  }

  Promise.resolve()
    .then(() => document.getElementById('layout').replaceWith(view.self))
    .then(() => { currentView = name; })
    .then(() => { if (fullName !== name) bus.emit(`${name} shown`, context); })
    .then(() => bus.emit(`${fullName} shown`, context));
};

export const a = 0;
