<script setup lang="ts">
import { ICol } from "~/types/col";
import { useColsStore } from "~/stores/useColsStore";
defineProps<{
  col: ICol;
}>();
</script>
<template>
  <div
    :id="`col-${col.height}`"
    class="col"
    :style="{
      width: 500 / useColsStore().colLength + 'px',
      height: col?.height + 'px',
      backgroundColor: `${col.status}`,
    }"
  ></div>
</template>

<style scoped lang="scss">
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 124, 0);
  margin-right: 3px;
}
</style>
