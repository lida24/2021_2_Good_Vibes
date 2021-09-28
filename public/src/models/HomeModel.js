import Rating from '../components/Rating.js';
import Request from '../js/requests.js';

export default class HomeModel {
  #parent;

  #catalog;

  constructor(parent) {
    this.#parent = parent;
  }

  set Catalog(catalog) {
    this.#catalog = catalog;
  }

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
