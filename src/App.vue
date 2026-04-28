<script setup>
import { useCounter } from './composables/useCounter'
import { useMouse } from './composables/useMouse'

const { count, increment, decrement } = useCounter()
const { x, y } = useMouse()
</script>

<template>
  <h1>Composables</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">Increase</button>
  <button @click="decrement">Decrease</button>
  <p>Mouse: {{ x }}, {{ y }}</p>
</template>
