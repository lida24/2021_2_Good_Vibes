class Cart {
  #cartItems;

  constructor() {
    this.#cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
  }

  add({ id, number }) {
    const target = this.#cartItems.find((value) => value.product_id === id);

    if (!target) {
      this.#cartItems.push({
        product_id: id,
        number
      });
    } else {
      target.number += number;
    }

    localStorage.setItem('cartItems', JSON.stringify(this.#cartItems));
  }

  delete({ id, number }) {
    const target = this.#cartItems.find((value) => value.product_id === id);

    if (target) {
      target.number -= number;

      if (target.number <= 0) {
        const idx = this.#cartItems.findIndex((value) => value.product_id === id);
        console.log(idx);
        this.#cartItems.splice(idx, 1);
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(this.#cartItems));
  }

  get() {
    return this.#cartItems;
  }
}

export default new Cart();
