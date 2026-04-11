<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

const decrement = () => count.value--

const object = reactive({
  name: 'Nhu',
  age: 18,
  array: [1, 2, 3],
})

const change = () => {
  object.name = 'Huynh Nhu'
  object.age++
  object.array.push(4)
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="decrement">Decrement</button>

  <p>Name: {{ object.name }} - Age: {{ object.age }}</p>
  <p>Array: {{ object.array }}</p>
  <button @click="change">Change user value</button>
</template>
