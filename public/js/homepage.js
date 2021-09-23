// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formClose = document.querySelector('#form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// window.onscroll = () => {
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// };

// menu.addEventListener('click', () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

// searchBtn.addEventListener('click', () => {
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// });

// videoBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
//         document.querySelector('#video-slider').src = src;
//     });
// });

// const root = document.getElementById('root');

// homeViewRequest();



// -------------------------------
const CATALOG = [
    {
        id: 'el1',
        img: 'images/shoe1.png',
        name: 'shoe 1',
        price: 550,
    },
    {
        id: 'el2',
        img: 'images/shoe2.png',
        name: 'shoe 2',
        price: 550,
    },
    {
        id: 'el3',
        img: 'images/shoe3.png',
        name: 'shoe 3',
        price: 550,
    },
    {
        id: 'el4',
        img: 'images/shoe4.png',
        name: 'shoe 4',
        price: 550,
    },
    {
        id: 'el5',
        img: 'images/shoe5.png',
        name: 'shoe 5',
        price: 550,
    },
    {
        id: 'el6',
        img: 'images/shirt1.png',
        name: 'shirt 1',
        price: 550,
    },
    {
        id: 'el7',
        img: 'images/shirt2.png',
        name: 'shirt 2',
        price: 550,
    },
    {
        id: 'el8',
        img: 'images/shirt3.png',
        name: 'shirt 3',
        price: 550,
    },
    {
        id: 'el9',
        img: 'images/shirt4.png',
        name: 'shirt 4',
        price: 550,
    },

];

// -----------------------------

class Header {

    render() {
        const html = `
        <div id="menu-bar" class="fas fa-bars"></div>

      <a href="#" class="logo"><span>O</span>zon2.0</a>

      <nav class="navbar">
        <a href="#home">home</a>
        <a href="#arrival">arrival</a>
        <a href="#packages">featured</a>
        <a href="#services">services</a>
        <a href="#products">products</a>
        <a href="#review">deal</a>
        <a href="#contact">contact</a>
      </nav>

      <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <i class="fas fa-user" id="login-btn"></i>
      </div>

      <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here..." />
        <label for="search-bar" class="fas fa-search"></label>
      </form>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

// const headerPage = new Header();
// headerPage.render();

// ----------------------------------

class Home {

    render() {
        const html = `
        <div class="content">
        <h3>Latest Gadgets</h3>
        <p>discover new places with us, adventures awaits</p>
        <a href="#" class="btn">buy now</a>
      </div>

      <div class="controls">
        <span class="vid-btn active" data-src="images/vid-1.mp4"></span>
        <span class="vid-btn" data-src="images/vid-2.mp4"></span>
        <span class="vid-btn" data-src="images/vid-3.mp4"></span>
        <span class="vid-btn" data-src="images/vid-4.mp4"></span>
        <span class="vid-btn" data-src="images/vid-5.mp4"></span>
      </div>

      <div class="video-container">
        <video
          src="images/vid-1.mp4"
          id="video-slider"
          loop
          autoplay
          muted
        ></video>
      </div>
        `;
        ROOT_HOME.innerHTML = html;
    }
}

// const homePage = new Home();
// homePage.render();

// -------------------------------
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

// const productsPage = new Products();
// productsPage.render();

function homepageRender() {


    const homePage = new Home();
    homePage.render();

    const productsPage = new Products();
    productsPage.render();

    const headerPage = new Header();
    headerPage.render();
}