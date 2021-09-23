class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ id, img, name, price }) => {

            htmlCatalog += `
            <div class="product-card">
                <div class="image">
                <img src="${img}" alt="" />
              </div>
              <div class="content">
                <h3>${name}</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$${price}/-</div>
              </div>
              <div class="overlay">
                <a href="#" style="--i:1" class="fas fa-heart"></a>
                <a href="#" style="--i:2" class="fas fa-info"></a>
                <a href="#" style="--i:3" class="fas fa-shopping-cart"></a>
              </div>
                </div>
                `;
        });
        const html = `
        <h1 class="heading"><span> product gallery </span></h1>
        <div class="product-container">
            ${htmlCatalog}
        </div>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();