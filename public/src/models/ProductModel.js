/** @module ProductModel */

import Rating from '../components/Rating.js';
import Request from '../js/requests.js';
import ProductModelTemplate from './ProductModel.hbs'

/**
 * Класс для создания модели продукта
 * @exports
 */
export default class ProductModel {
  /**
   * @typedef {{id: number,
   * image: string,
   * name: string, price:
   * number,
   * rating: number}} product
   */
  /**
   * Элемент, в котором отрисовывается контент
   * @type {Element}
   * @private
   */
  #parent;

  /**
   * Данные о продукте
   * @type {product}
   * @private
   */
  #product;

  /**
   * Создание модели для продукта
   * @class ProductModel
   * @param {Element} parent - элемент, в котором будет отрисовываться контент
   */
  constructor(parent) {
    this.#parent = parent;
  }

  /**
   * Передача в класс ProductModel объекта с данными о продукте
   * @param {product} product
   * @public
   */
  set product(product) {
    this.#product = product;
  }

  /**
  * Отрисовка модели страницы продукта
  * @public
  */
  render() {
    const product = this.#product;


    this.#parent.innerHTML = ProductModelTemplate();


    
    /*var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
*/
    /*
    
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
                    Здесь будет прекрасное описание товара
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>`;*/

    const backBtn = document.getElementsByClassName('back-to-result')[0];
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();

      Request.homePage();
    });
  }
}
