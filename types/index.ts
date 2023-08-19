export enum STATUS_ROW {
  IS_SWAP = "IS_SWAP",
  DONE = "DONE",
  PROCESS = "PROCESS",
  DEFAULT = "DEFAULT",
}

export interface ICol {
  status: STATUS_ROW;
  height: number;
}
