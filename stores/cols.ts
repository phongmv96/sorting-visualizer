import { defineStore } from "pinia";
import { ICol } from "~/types";
export const useCols = defineStore("cols", () => {
  const cols = ref<ICol[]>([]);
  const getCols = computed(() => {
    return cols.value;
  });
  const update = (newValue: ICol[]) => {
    cols.value = [...newValue];
  };

  return {
    getCols,
    update,
  };
});
