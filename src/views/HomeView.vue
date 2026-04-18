<script setup>
import { onBeforeUpdate, onUpdated, ref } from 'vue'

const count = ref(0)

const increase = () => count.value++

onBeforeUpdate(() => {
  console.log('beforeUpdate', document.getElementById('count').textContent)
})

onUpdated(() => {
  console.log('updated', document.getElementById('count').textContent)
})
</script>

<template>
  <p id="count">Count: {{ count }}</p>
  <button @click="increase">Increase</button>
</template>
