import { CartItem } from '../../types';

class Cart {
  private self: CartItem[] = [];

  private confirmed = false;

  public isConfirmed() {
    return this.confirmed;
  }

  public setConfirmed(confirmed: boolean) {
    this.confirmed = confirmed;
  }

  public load(obj: CartItem[]) {
    this.self = obj || this.self;
  }

  public set(obj: { id: number, number: number }) {
    const { id, number } = obj;

    const target = this.getItem(id);
    if (!target) {
      this.self.push({
        product_id: id,
        number,
      });
    } else {
      target.number = number;
    }
  }

  public add(obj: { id: number, number: number }) {
    const { id, number } = obj;

    const target = this.getItem(id);
    if (!target) {
      this.self.push({
        product_id: id,
        number,
      });
    } else {
      target.number += number;
    }
  }

  public delete(obj: { id: number, number: number }) {
    const { id, number } = obj;

    const target = this.getItem(id);

    if (target) {
      target.number -= number;

      if (target.number <= 0) {
        const idx = this.self.findIndex((elem) => elem.product_id === id);
        this.self.splice(idx, 1);
      }
    }
  }

  public drop() {
    this.self = [];
    this.confirmed = false;
  }

  public get() {
    return this.self;
  }

  public getItem(id: number): CartItem {
    return this.self.find((elem) => elem.product_id === id);
  }
}

export default new Cart();
