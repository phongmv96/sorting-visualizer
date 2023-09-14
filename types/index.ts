export enum STATUS {
  IS_SWAP = "IS_SWAP",
  DONE = "DONE",
  PROCESS = "PROCESS",
  DEFAULT = "DEFAULT",
}

export  interface ICol {
  status: STATUS;
  height: number;
}
