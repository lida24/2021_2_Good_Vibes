// import axios from 'axios';
// const axios = require('axios');

import Rating from "../components/Rating.js"
import Catalog from "../catalog.js"
import ProductModel from "./ProductModel.js";


// const HomeModel = {
//   render: async () => {
//     const response = await axios({
//       url: 'http://localhost:3000/api/products',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response || response.statusText !== 'OK') {
//       return `<div>Error in getting data</div>`;
//     }

//     const products = await response.data;

//     return `
//         <div class="product-container">
//         ${products.map(
//       (products) => `
//             <div class="product-card">
//             <a href="/product/${products.id}">
//               <div class="image">
//                 <img src="${products.image}" alt="${products.name}" />
//               </div>
//             </a>
//             <div class="content">
//               <h3><a href="/product/1">${products.name}</a></h3>
//               <div class="rating">
//               ${Rating.render({
//         value: products.rating,
//       })}
//               </div>
//               <div class="price">$${products.price}/-</div>
//             </div>
//           </div>
//           `
//     )
//       }
        
//         `;

//   },
// };
// export default HomeModel;


export default class HomeModel {

    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    render() {

        homePageRequest();

        const products = Catalog.products;

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