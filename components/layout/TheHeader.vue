<script setup lang="ts">
import { useColsStore } from "~/stores/useColsStore";
import { SORT_TYPE } from "~/types/sort";
import {useBubbleSort} from "~/composables/useBubbleSort";

const colsStore = useColsStore();
const sortingType = ref<SORT_TYPE>(SORT_TYPE.BUBBLE_SORT);
const sorting = () => {
  switch (sortingType.value){
    case SORT_TYPE.BUBBLE_SORT:
      useBubbleSort(colsStore.cols)
      break
    default:
        break
  }
};

</script>
<template>
  <div class="header-container">
    <v-btn @click="colsStore.generateNewCols()">Generate New Array</v-btn>
    <div class="select">
      <v-select
        v-model="sortingType"
        label="Select Sort type"
        :items="[
          SORT_TYPE.BUBBLE_SORT,
          'Head Sort',
          'Insertion Sort',
          'Merge Sort',
          'Quick Sort',
          'Radix Sort',
        ]"
      ></v-select>
    </div>
    <v-btn @click.prevent="sorting" color="orange-darken-2">
      <v-icon icon="mdi-checkbox-marked-circle"></v-icon> Sort</v-btn
    >
  </div>
</template>

<style scoped lang="scss">

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: whitesmoke;
  height: 80px;
}

.select {
  width: 300px;
}

:deep(.v-input__details) {
  display: none !important;
}
</style>
