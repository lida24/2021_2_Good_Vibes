export type Callback = (arg0: object) => void;

export type Connection = {
  event: string,
  callback: Callback
};
