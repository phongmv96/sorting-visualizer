<template>
  <div class="header-container">
    <v-btn class="bg-primary" @click="generateNewArray"
      >Generate New Array</v-btn
    >
    <v-btn @click="bubbleSort">Bubble Sort</v-btn>
  </div>
  <div class="body-container">
    <div
      v-for="(col, index) in cols"
      :key="index"
      class="col mx-1"
      :style="{
        backgroundColor: getBackgroundColor(col),
        height: col.height + 'px',
      }"
    >
      <div class="col-number">{{ col.height }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ICol, STATUS_ROW } from "~/types";

const cols = ref<ICol[]>([]);
const rowsLength = ref<number>(15);

const getBackgroundColor = (col: ICol) => {
  switch (col.status) {
    case STATUS_ROW.DEFAULT:
      return "blue";
    case STATUS_ROW.PROCESS:
      return "green";
    case STATUS_ROW.IS_SWAP:
      return "red";
    case STATUS_ROW.DONE:
      return "purple";
  }
};
const generateNewArray = () => {
  const newRows: ICol[] = [];
  for (let i = 0; i < rowsLength.value; i++) {
    const rndInt = Math.floor(Math.random() * 250) + 50;
    const newRow: ICol = {
      status: STATUS_ROW.DEFAULT,
      height: rndInt,
    };
    newRows.push(newRow);
  }
  cols.value = [...newRows];
};
const bubbleSort = () => {
  let temp: ICol = {
    height: 0,
    status: STATUS_ROW.DEFAULT,
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
</script>
<style lang="scss" scoped>
.body-container {
  display: flex;
  justify-content: center;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: cornflowerblue;
  height: 80px;
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: blue;
}

.col-number {
  color: aliceblue;
  font-weight: 700;
}
</style>
