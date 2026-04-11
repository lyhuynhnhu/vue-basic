<script setup>
import { ref } from 'vue'

const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

const decrement = () => count.value--
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="decrement">Decrement</button>
</template>
