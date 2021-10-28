class Cart {
    getCartItems = () => {
        const cartItems = this.getItem('cartItems')
            ? JSON.parse(this.getItem('cartItems'))
            : [];
        return cartItems;
    };

    setCartItems = (cartItems) => {
        this.setItem('cartItems', JSON.stringify(cartItems));
    };

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
