export type Callback = (arg0: object) => void;

export type Connection = {
  event: string,
  callback: (Callback | Callback[])
};

export interface ViewInterface {
  self: HTMLElement;
  isActive(): boolean;
  hide(): void;
  show(): void;
  delete(): void;
  setContext(context: object): void;
}

export interface ConstructorInterface {
  new(classId: string): ViewInterface;
}

export type AjaxResponse = {
  'responseText': string,
  'status': number,
};

export type CartItem = {
  'product_id': number,
  'number': number,
};

export type Product = {
  category: string,
  count_in_stock: number,
  description: string,
  id: number,
  image: string,
  name: string,
  price: number,
  rating: number,
};
