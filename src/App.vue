<script setup>
import { ref, reactive, nextTick } from 'vue'

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
  object.array.push(object.array.length + 1)
}

const num = ref(0)

const increase = async () => {
  num.value++
  console.log(document.getElementById('number').innerText) // still previous value
  await nextTick()
  console.log(document.getElementById('number').innerText) // new value
}
</script>

<template>
  <h1>Reactivity fundamentals</h1>
  <p>Count: {{ count }}</p>
  <button @click="count++">Increment</button>
  <button @click="decrement">Decrement</button>

  <p>Name: {{ object.name }} - Age: {{ object.age }}</p>
  <p>Array: {{ object.array }}</p>
  <button @click="change">Change user value</button>

  <p>DOM update timing</p>
  <div id="number">Number: {{ num }}</div>
  <button @click="increase">Increment</button>
</template>
