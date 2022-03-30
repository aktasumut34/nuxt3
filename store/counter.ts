import { defineStore } from 'pinia';
export default defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment(x: number): void {
      this.count += x;
    }
  }
});
