<script setup lang="ts">

</script>

<template>
  <div class="header-container">
    <v-btn  @click="generateNewArray">Generate New Array</v-btn>
    <div class="select">
      <v-select
          label="Select"
          :items="['Bubble sort', 'Head sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Radix Sort']"
      ></v-select>
    </div>
    <v-btn color="orange-darken-2"><v-icon icon="mdi-checkbox-marked-circle"></v-icon> Sort</v-btn>
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

.select{
  width: 300px;
}

:deep(.v-input__details){
  display: none !important;
}
</style>
