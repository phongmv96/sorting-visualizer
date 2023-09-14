import { ICol, STATUS } from "~/types/col";

export const useBubbleSort = (cols: ICol[]) => {
  let temp: ICol = {
    height: 0,
    status: STATUS.DEFAULT,
  };

  for (let i = 0; i < cols.length - 1; i++) {

    for (let j = 0; j < cols.length - i - 1; j++) {
      const currentValue = cols[j];
      const nextValue = cols[j + 1];
      if (currentValue.height > nextValue.height) {
        temp = cols[j];
        cols[j] = cols[j + 1];
        cols[j + 1] = temp;
      }
    }
  }
};
