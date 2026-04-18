<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'

const timer = ref(0)
let timerId = null

onBeforeMount(() => {
  console.log('beforeMount')
})

onMounted(() => {
  console.log('mounted')
  timerId = setInterval(() => {
    timer.value++
  }, 1000)
})

onBeforeUnmount(() => {
  console.log('beforeUnmount')
  clearInterval(timerId)
})

onUnmounted(() => {
  console.log('unmounted')
})
</script>

<template>
  <p>Timer: {{ timer }}</p>
</template>
