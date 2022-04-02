<template>
  <div class="m-4 flex items-center gap-2">
    <button
      id="decrementButton"
      class="bg-blue-500 p-2 text-white"
      @click="counter.increment(-1)"
    >
      -
    </button>
    <span>{{ counter.count }}</span>
    <button
      id="incrementButton"
      class="bg-blue-500 p-2 text-white"
      @click="counter.increment(1)"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '~~/store';
const counter = useCounter();
</script>

<style scoped></style>
