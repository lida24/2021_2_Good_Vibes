export type Callback = (arg0: object) => void;

export type Connection = {
  event: string,
  callback: (Callback | Callback[])
};

export interface ViewInterface {
  self: HTMLElement;
  get(): HTMLElement;
  isActive(): boolean;
  hide(): void;
  show(): void;
  delete(): void;
  setContext(context: object): void;
  // render(): Promise<void>;
}

export interface ConstructorInterface {
  new(classId: string): ViewInterface;
}
