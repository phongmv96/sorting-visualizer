export enum STATUS {
  SWAP = "red",
  PROCESS = "green",
  DEFAULT = "rgba(245, 124, 0)",
}

export interface ICol {
  status: STATUS;
  height: number;
}
