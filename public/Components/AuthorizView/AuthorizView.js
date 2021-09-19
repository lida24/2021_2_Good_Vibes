import SignInContent from '../SignInContent/SignInContent.js';
import SignUpContent from '../SignUpContent/SignUpContent.js';
import SignUpBlock from '../SignUpBlock/SignUpBlock.js';
import SignInBlock from '../SignInBlock/SignInBlock.js';

export default class AuthorizView {
  #parent;

  constructor(parent) {
    this.#parent = parent;
  }

  render() {
    root.innerHTML = '';

    const container = CreateDiv({
      parent: this.#parent,
      id: 'container',
      classesNames: [
        'container',
      ],
    });
    const row = CreateDiv({
      parent: container,
      classesNames: [
        'row',
      ],
    });

    const signUpBlock = new SignUpBlock(row);
    signUpBlock.generate();

    const signInBlock = new SignInBlock(row);
    signInBlock.generate();

    const contentSectionRow = CreateDiv({
      parent: container,
      classesNames: [
        'row',
        'row-content',
      ],
    });

    const signInContent = new SignInContent(contentSectionRow);
    signInContent.generate();

    const signUpContent = new SignUpContent(contentSectionRow);
    signUpContent.generate();

    authorizViewAction(container);
  }
}
