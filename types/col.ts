export enum STATUS {
  SWAP = "swap",
  PROCESS = "process",
  DEFAULT = "default",
}

export interface ICol {
  status: STATUS;
  height: number;
}
