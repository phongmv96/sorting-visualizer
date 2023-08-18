<template>
  <div class="header-container">
    <v-btn @click="generateNewArray">Generate New Array</v-btn>
    <v-btn>Bubble Sort</v-btn>
    <v-btn>Sort</v-btn>
  </div>
  <div class="body-container">
    <div v-for="row in rows" :key="row.height" class="row mx-2" :style="{ height: row.height * 3 + 'px'}"></div>
  </div>
</template>
<script lang="ts" setup >
enum STATUS_ROW  {
  PROCESS = 'PROCESS',
  DONE = 'DONE',
  NONE = 'NONE'
}

interface IRow {
  status: STATUS_ROW
  height: number
}
const rows = ref<IRow[]>([])
const rowsLength  = ref<number>(10)
const generateNewArray = () => {
  const newRows:IRow[] = []
  for (let i = 0; i < rowsLength.value; i++) {
      const rndInt = Math.floor(Math.random() * 100) + 10
      const newRow: IRow = {
        status: STATUS_ROW.NONE,
        height: rndInt
      }
      newRows.push(newRow)
  }
  rows.value = [...newRows]
}


</script>
<style lang="scss" scoped>
.body-container{
  display: flex;
  justify-content: center;
}

.header-container{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: cornflowerblue;
  height: 80px;
}
.row{
  width: 30px;
  background-color: blue;
}
</style>
