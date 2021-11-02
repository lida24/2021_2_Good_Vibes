import View from '../scripts/view';

type ShowViewSignature = (name: string) => void;

const viewMap: { [name: string]: View } = {};

const add: (name: string, view: View) => void = (name: string, view: View) => {
  viewMap[name] = view;
};

const viewGenerate: ShowViewSignature = (name: string) => {

};

const showView: ShowViewSignature = (name: string) => {
  if (!viewMap[name]) {
    viewGenerate();
  }

  viewMap[name].show();
};

export default showView;
