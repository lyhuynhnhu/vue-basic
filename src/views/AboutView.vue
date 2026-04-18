<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const timer = ref(0)
let timerId = null

onMounted(() => {
  console.log('mounted')
  timerId = setInterval(() => {
    timer.value++
  }, 1000)
})

onUnmounted(() => {
  console.log('unmounted')
  clearInterval(timerId)
})
</script>

<template>
  <p>Timer: {{ timer }}</p>
</template>
