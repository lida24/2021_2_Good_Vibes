import { Product } from '../../../types';
import CartItemClass from './view';

class ProductCardList {
  private list: {
    [id: number]: {
      'context': Product,
      'view': CartItemClass,
    }
  } = {};

  private addArray(array: Product[]) {
    array.forEach((productContext) => {
      this.add(productContext);
    });
  }

  private add(productContext: Product) {
    if (!this.list[productContext.id]) {
      this.create(productContext);
      return;
    }

    this.modify(productContext);
  }

  private create(productContext: Product) {
    const productCard = new CartItemClass(productContext);
    this.list[productContext.id] = {
      context: productContext,
      view: productCard,
    };
  }

  private modify(productContext: Product) {
    const { view } = this.list[productContext.id];
    view.setContext(productContext);
    view.render();
  }

  public viewArray(array: Product[]): CartItemClass[] {
    const result: CartItemClass[] = [];

    this.addArray(array);
    array.forEach((productContext) => {
      result.push(this.list[productContext.id].view);
    });

    return result;
  }

  public deleteItem(id: number) {
    delete this.list[id];
  }
}

export default new ProductCardList();
