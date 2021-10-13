/* eslint-disable import/extensions */
import Product from '../views/product.js';
import state from '../constants/state.js';
import productContext from '../context/product.js';

export const a = () => {
  console.log('a');
};

// ----------------------------------
let prodList = {};

const add = (obj) => {
  prodList = Object.assign(prodList, obj);
};

const remove = (name) => {
  prodList[name].delete();
  delete prodList[name];
};

// ----------------------------------
export const renderSingleProd = (prodData) => {
  if (prodList[prodData.id]) {
    return;
  }

  const root = document.getElementsByClassName('product-container')[0];
  const prodCard = document.createElement('div');
  prodCard.className = 'product-card';
  const prodObj = new Product(prodCard);

  add({
    [prodData.id]: {
      element: prodCard,
      object: prodObj,
      state: state.hidden
    }
  });

  prodObj.setContext(prodData);
  prodList[prodData.id].state = state.visible;
  root.appendChild(prodCard);

  prodObj.render()
    .then(() => {
      const ratingParent = prodCard.getElementsByClassName('rating')[0];

      const ratingElem = document.createElement('div');
      ratingElem.className = 'rating';

      const temp = (rating) => {
        if (!rating) {
          return '<div></div>';
        }
        return `
        <div class="rating">
        <span> <i class="${rating >= 1 ? 'fa fa-star' : rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 2 ? 'fa fa-star' : rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 3 ? 'fa fa-star' : rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 4 ? 'fa fa-star' : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span> 
        <span> <i class="${rating >= 5 ? 'fa fa-star' : rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}"></i></span>
        </div>
        `;
      };

      ratingElem.innerHTML = temp(prodData.rating);
      ratingParent.replaceWith(ratingElem);
    });
};

// ----------------------------------
export const renderProdArray = (prodArray) => {
  if (!Array.isArray(prodArray)) {
    console.log('wrong prodArray');
    return;
  }

  prodArray.forEach((item) => {
    renderSingleProd(item);
  });

  renderSingleProd(productContext);
};
