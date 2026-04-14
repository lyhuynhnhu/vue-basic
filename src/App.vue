<script setup>
import { ref } from 'vue'

const fruits = ref([
  {
    id: 1,
    name: 'apple',
    amount: 5,
    isStocked: true,
  },
  {
    id: 2,
    name: 'banana',
    amount: 10,
    isStocked: false,
  },
  {
    id: 3,
    name: 'orange',
    amount: 15,
    isStocked: true,
  },
])

const user = ref({
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
})
</script>

<template>
  <h3>v-for for array</h3>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="fruit.id">
      {{ index }}. {{ fruit.name }} - {{ fruit.amount }}
    </li>
  </ul>
  <span v-for="n in 10" :key="n">{{ n }}</span>

  <h3>v-for for object</h3>
  <ul>
    <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
  </ul>

  <p>Fruits in stock:</p>
  <ul>
    <template v-for="(fruit, index) in fruits">
      <li v-if="fruit.isStocked" :key="fruit.id">
        {{ fruit.name }} - {{ fruit.amount }} (index: {{ index }})
      </li>
    </template>
  </ul>
</template>
