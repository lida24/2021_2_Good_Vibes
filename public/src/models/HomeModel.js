import Rating from "../components/Rating.js"
import Catalog from "../catalog.js"
import ProductModel from "./ProductModel.js";


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

        

        // const products = Catalog.products;

      const products = JSON.parse(this.#catalog);

        console.log(products);

        this.#parent.innerHTML = `
        <div class="product-container">
        ${products.map(
            (products) => `
            <div class="product-card">
            <a href="#" name="${products.id}">
              <div class="image">
                <img src="${products.image}" alt="${products.name}" />
              </div>
            </a>
            <div class="content">
              <h3><a href="#" name="${products.id}">${products.name}</a></h3>
              <div class="rating">
              ${Rating.render({
                value: products.rating,
            })}
              </div>
              <div class="price">$${products.price}/-</div>
            </div>
          </div>
          `
        )
            }
        
        `;

        products.map(
            (products) => {
                const link = document.getElementsByName(products.id).forEach( (item) => {
                  item.addEventListener('click', (e) => {
                    e.preventDefault();

                    const productModel = new ProductModel(this.#parent);
                    productModel.product = products;
                    productModel.render();

                  });
                });
            }
        )

       


    }

}