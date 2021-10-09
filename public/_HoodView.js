import generateContentHTML from "./loadTemplates.js";

const HoodViewUrl = './templates/example.handlebars';

class HoodView {
  #url;

  #parent;

  #generateHTML = ({ context }) => generateContentHTML({
    context,
    url: this.#url
  });

  constructor(url) {
    this.#url = url;

    // this.#generateHTML({
    //   context: {
    //     name: 'asdfa'
    //   }
    // })
    //   .then((res) => console.log(res));
  }

  hide() {
    this.#parent.style.visibility = 'hidden';
  }

  show() {
    this.#parent.style.visibility = 'visible';
  }

  /**
   * @param {Element} parent
   */
  setParent(parent) {
    this.#parent = parent;
    this.#generateHTML({
      context: {
        name: 'nameeee'
      }
    })
      .then((html) => {
        this.#parent.innerHTML = html;
      })
      .catch((error) => alert(error));
    this.hide();
  }
}

export default new HoodView(HoodViewUrl);
