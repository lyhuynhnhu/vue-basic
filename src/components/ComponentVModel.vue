<template>
  <p>Component v-model</p>
  <label>Name</label>
  <input type="text" v-model="name" />
  <p>Name: {{ name }}</p>
  <button @click="changeName">Change name</button>
</template>

<script setup>
const name = defineModel()

const changeName = () => {
  name.value = 'John Doe'
}
</script>
