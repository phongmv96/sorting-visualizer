<template>
  <div class="header-container">
    <v-btn class="bg-primary" @click="generateNewArray">Generate New Array</v-btn>
    <v-btn @click="bubbleSort">Bubble Sort</v-btn>
  </div>
  <div class="body-container">
    <div v-for="(col,index) in cols" :key="index" class="col mx-1" :style="{
      height: col.height  + 'px'}">
      <div class="col-number">{{col.height}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup >
enum STATUS_ROW  {
  PROCESS = 'PROCESS',
  DONE = 'DONE',
  NONE = 'NONE'
}

interface ICol {
  status: STATUS_ROW
  height: number
}
const cols = ref<ICol[]>([])
const rowsLength  = ref<number>(15)

const generateNewArray = () => {
  const newRows:ICol[] = []
  for (let i = 0; i < rowsLength.value; i++) {
      const rndInt = Math.floor(Math.random() * 250) + 50
      const newRow: ICol = {
        status: STATUS_ROW.NONE,
        height: rndInt
      }
      newRows.push(newRow)
  }
  cols.value = [...newRows]
}

const bubbleSort = () => {
  let temp: ICol = {
    height: 0,
    status: STATUS_ROW.NONE
  }
  for (let i = 0; i < cols.value.length - 1; i++) {
    for (let j = 0; j < cols.value.length - i - 1; j++) {
        if(cols.value[j].height > cols.value[j+1].height){
          temp = cols.value[j]
          cols.value[j] = cols.value[j+1]
          cols.value[j+1] = temp
        }
    }
  }
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
.col{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: blue;
}

.col-number{
  color: aliceblue;
  font-weight: 700;
}
</style>
