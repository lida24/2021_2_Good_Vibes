class Cart {
  #cartItems;

  constructor() {
    this.#cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    // return cartItems;
  }

  getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
    return cartItems;
  };

  setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  addToCart = (obj) => {
    this.#cartItems.push(obj);  // !!!!!!!!!!!!!!!!!!

    localStorage.setItem('cartItems', JSON.stringify(this.#cartItems));
  }

  /* addToCart = (item, forceUpdate = false) => {
      let cartItems = getCartItems();
      const existItem = cartItems.find((x) => x.product === item.product);
      if (existItem) {
          cartItems = cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        cartItems = [...cartItems, item];
      }
      setCartItems(cartItems);
    };  */
}

export default new Cart();
