<script setup lang="ts">
import { useColsStore } from "~/stores/useColsStore";
const colsStore = useColsStore();
</script>

<template>
  <div class="body-container">
    <common-col :col="col" v-for="col in colsStore.cols" :key="col" />
  </div>
</template>
<style lang="scss" scoped>
.body-container {
  display: flex;
  justify-content: center;
  background-color: #eeeded;
  height: 100vh;
}
</style>
