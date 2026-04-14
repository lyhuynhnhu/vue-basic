<script setup>
import { ref } from 'vue'

const fruits = ref([
  {
    id: 1,
    name: 'apple',
    amount: 5,
  },
  {
    id: 2,
    name: 'banana',
    amount: 10,
  },
  {
    id: 3,
    name: 'orange',
    amount: 15,
  },
])
</script>

<template>
  <h3>v-for</h3>
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }} - {{ fruit.amount }}</li>
  </ul>
  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>

<style>
.button {
  border: 1px solid green;
  background: #f5f5f5;
  color: green;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
