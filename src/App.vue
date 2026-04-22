<script setup>
import { onMounted, ref } from 'vue'

const inputRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <p>Template refs</p>
  <input ref="inputRef" />
</template>
