import { defineStore } from "pinia";
import { ICol, STATUS } from "~/types/col";
import { useBubbleSort } from "~/composables/useBubbleSort";
import { SORT_TYPE } from "~/types/sort";

export const useColsStore = defineStore("cols", () => {
  const cols = ref<ICol[]>([]);
  const rowsLength = ref<number>(40);
  const generateNewCols = () => {
    const newRows: ICol[] = [];
    for (let i = 0; i < rowsLength.value; i++) {
      const rndInt = Math.floor(Math.random() * 250) + 50;
      const newRow: ICol = {
        status: STATUS.DEFAULT,
        height: rndInt,
      };
      newRows.push(newRow);
    }
    cols.value = [...newRows];
  };

  return {
    generateNewCols,
    cols,
  };
});
