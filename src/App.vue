<script setup>
import { onMounted, ref } from 'vue'

const inputRef = ref(null)
const list = ref(['orange', 'apple', 'banana', 'kiwi'])
const listRef = ref([])

onMounted(() => {
  inputRef.value.focus()

  listRef.value.forEach((item) => {
    item.style.transition = 'opacity 3s'
    item.style.opacity = 1
  })
})
</script>

<template>
  <p>Template refs</p>
  <input ref="inputRef" />

  <p>Ref trong v-for</p>
  <ul>
    <li v-for="item in list" :key="item" ref="listRef" style="opacity: 0">
      {{ item }}
    </li>
  </ul>
</template>
