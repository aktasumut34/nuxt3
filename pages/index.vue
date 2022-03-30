<template>
  <div class="m-4 flex items-center gap-2">
    <button class="bg-blue-500 p-2 text-white" @click="counter.increment(-1)">
      -
    </button>
    <span>{{ counter.count }}</span>
    <button class="bg-blue-500 p-2 text-white" @click="counter.increment(1)">
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '~~/store';
const counter = useCounter();
console.log(counter.count);
</script>

<style scoped></style>
