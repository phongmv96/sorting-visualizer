import { ICol, STATUS } from "~/types";

const bubbleSort = () => {
    let temp: ICol = {
        height: 0,
        status: STATUS.DEFAULT,
    };
    for (let i = 0; i < cols.value.length - 1; i++) {
        for (let j = 0; j < cols.value.length - i - 1; j++) {
            const currentValue = cols.value[j];
            const nextValue = cols.value[j + 1];
            if (currentValue.height > nextValue.height) {
                temp = cols.value[j];
                cols.value[j] = cols.value[j + 1];
                cols.value[j + 1] = temp;
            }
        }
    }
};
