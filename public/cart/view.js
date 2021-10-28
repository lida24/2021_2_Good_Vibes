/* eslint-disable import/extensions */
import View from '../scripts/view.js';
/* import cartEvents from './events.js'; */
import generateContentHTML from '../scripts/loadTemplates.js';
import eventBus from '../scripts/eventBus.js';
import cartListeners from './listeners.js';
import cart from '../objects/cart.js';

const cartUrl = './cart/template.handlebars';

export default class Cart extends View {
  #url = cartUrl;

  element;

  #context;

  #generateEvents = cartEvents;

  constructor(element) {
    super(element);
    this.element = element;
  }

  async #renderHTML() {
    const html = await generateContentHTML({
      url: this.#url,
      context: this.#context
    });
    this.element.innerHTML = html;
  }

  #createItemsHTML() {
    const itemParent = this.element.getElementsByClassName('items')[0];
    const itemElem = document.createElement('div');
    itemElem.className = 'items';

    const cartItems = cart.getCartItems();

    cartItems.length === 0
      ? '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
      : cartItems

    if (cartItems.length === 0) {
      itemElem.innerHTML = '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
    } else {
      itemElem.innerHTML = cartItems
        .map(
          (item) => `
            <li>
              <div class="cart-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="cart-name">
                <div>
                  <a href="/#/product/${item.id}">
                    ${item.name}
                  </a>
                </div>
                <div>
                  Кол-во:
                  <select class="qty-select" id="${item.id}">
                    <option value="1">1</option>
                  </select>
                  <button type="button" class="delete-button" id="${item.id}">
                    Удалить
                  </button>
                </div>
              </div>
              <div class="cart-price">
                $${item.price}
              </div>
            </li>
            `

        )
        .join('\n');
    }
    itemParent.appendChild(itemElem);
  }

  #createSubtotalHTML() {
    const subParent = this.element.getElementsByClassName('subtotal')[0];
    const subElem = document.createElement('div');
    subElem.className = 'subtotal';

    const cartItems = cart.getCartItems();

    subElem.innerHTML = `
    <h3>
            Итого (${cartItems.reduce((a, c) => a + c.count_in_stock, 0)} товаров)
            :
            $${cartItems.reduce((a, c) => a + c.price * c.count_in_stock, 0)}
          </h3>
          `;
    subParent.appendChild(subElem);
  }


  async render() {
    await this.#renderHTML();
    eventBus.add(cartListeners);
    this.#generateEvents(this.element);
    //this.#createItemsHTML();
    //this.#createSubtotalHTML();
    //console.log(cartItems);
    return this.show();
  }

  delete() {
    // eventBus.delete(signinListeners);
    this.element.innerHTML = '';
  }
}