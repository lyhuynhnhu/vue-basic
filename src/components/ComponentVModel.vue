<template>
  <p>Component v-model</p>
  <label>Name</label>
  <input type="text" v-model="name" />
  <p>Name: {{ name }}</p>
  <button @click="changeName">Change name</button>

  <p>Address</p>
  <input type="text" v-model="address" />
  <p>Address: {{ address }}</p>
  <button @click="changeAddress">Change address</button>
</template>

<script setup>
const name = defineModel('name', { type: String })
const address = defineModel('address', { type: String })

const changeName = () => {
  name.value = 'John Doe'
}

const changeAddress = () => {
  address.value = 'New York'
}
</script>
