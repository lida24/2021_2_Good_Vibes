// import { parseRequestUrl } from '../utils.js';
// import { getProduct } from '../api.js';
import Rating from '../components/Rating.js';
// import Catalog from '../catalog.js';
import HomeModel from './HomeModel.js';

export default class ProductModel {

  #parent;
  #product;

  constructor(parent) {
    this.#parent = parent;
  }

  set product(product) {
    this.#product = product
  }

  render() {

    // const product = Catalog.products[0];
    const product = this.#product;


    this.#parent.innerHTML = `
        <div class="content">
      <div class="back-to-result">
        <a href="/">Вернуться в каталог</a>
      </div>
      <div class="details">
        <div class="details-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="details-info">
          <ul>
            <li>
              <h1>${product.name}</h1>
            </li>
            <li>
            ${Rating.render({
      value: product.rating,
    })}
            </li>
            <li>
              Цена: <strong>$${product.price}</strong>
            </li>
            <li>
              Описание:
              <div>
                ${product.description}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

    const backBtn = document.getElementsByClassName('back-to-result')[0];
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const homeModel = new HomeModel(this.#parent);
      homeModel.render();

    });

  }

}