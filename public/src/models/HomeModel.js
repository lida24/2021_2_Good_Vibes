/** @module HomeModel */

import Rating from "../components/Rating.js"
import Request from "../js/requests.js";

/**
 * Класс для создания модели домашней страницы
 * @exports
 */
export default class HomeModel {
  /**
   * @typedef {{id: number,
   * image: string,
   * name: string,
   * price: number,
   * rating: number}} product
   */
  /**
   * Элемент, в котором отрисовывается контент
   * @type {Element}
   * @private
   */
  #parent;

  /**
   * Массив с данными о продуктах
   * @type {product[]}
   * @private
   */
  #catalog;

  /**
   * Создание модели домашней страницы
   * @class HomeModel
   * @param {Element} parent - элемент, в котором будет отрисовываться контент
   */
  constructor(parent) {
    this.#parent = parent;
  }

  /**
   * Передача в класс HomeModel массива с данными о продуктах
   * @param {product[]} catalog
   * @public
   */
  set Catalog(catalog) {
    this.#catalog = catalog;
  }

  /**
  * Отрисовка модели домашней страницы
  * @public
  */
  render() {
    const products = JSON.parse(this.#catalog);

    this.#parent.innerHTML = `
        <div class="product-container">
        ${products.map(
    (product) => `
            <div class="product-card">
            <a href="#" name="${product.id}">
              <div class="image">
                <img src="${product.image}" alt="${product.name}" />
              </div>
            </a>
            <div class="content">
              <h3><a href="#" name="${product.id}">${product.name}</a></h3>
              <div class="rating">
              ${Rating.render({
    value: product.rating,
  })}
              </div>
              <div class="price">$${product.price}/-</div>
            </div>
          </div>
          `,
  )}
        `;

    products.map(
      (product) => {
        document.getElementsByName(product.id).forEach((link) => {
          link.addEventListener('click', (e) => {
            e.preventDefault();

            Request.product(product.id);
          });
        });
      },
    );
  }
}
