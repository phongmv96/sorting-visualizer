import { ICol, STATUS } from "~/types/col";

export const useBubbleSort = (cols: ICol[]) => {
  let temp: ICol = {
    height: 0,
    status: STATUS.DEFAULT,
  };

  let speed = 0;
  //
  // for (let i = 0; i < cols.length - 1; i++) {
  //   setTimeout(() => {
  //     for (let j = 0; j < cols.length - i - 1; j++) {
  //       speed++;
  //       setTimeout(() => {
  //         const currentValue = cols[j];
  //         const nextValue = cols[j + 1];
  //         currentValue.status = STATUS.PROCESS;
  //         nextValue.status = STATUS.PROCESS;
  //         if (currentValue.height > nextValue.height) {
  //           currentValue.status = STATUS.SWAP;
  //           nextValue.status = STATUS.SWAP;
  //           temp = cols[j];
  //           cols[j] = cols[j + 1];
  //           cols[j + 1] = temp;
  //         }
  //       }, speed * 30);
  //     }
  //   }, i * 20);
  // }
  for (let i = 0; i < cols.length - 1; i++) {
    for (let j = 0; j < cols.length - i - 1; j++) {
      speed++;
      setTimeout(() => {
        const currentValue = cols[j];
        const nextValue = cols[j + 1];
        if (currentValue.height > nextValue.height) {
          currentValue.status = STATUS.SWAP;
          nextValue.status = STATUS.SWAP;
          temp = cols[j];
          cols[j] = cols[j + 1];
          cols[j + 1] = temp;
        }
      }, speed * i);
    }
  }
};
