<script setup>
import ComponentVModel from '@/components/ComponentVModel.vue'
import { ref, watchEffect } from 'vue'

const name = ref('')
const address = ref('')

const setDefaultName = () => {
  name.value = 'Huynh Nhu'
}

const setDefaultAddress = () => {
  address.value = 'Ho Chi Minh'
}

watchEffect(() => {
  console.log(name.value)
})
</script>

<template>
  <main>
    <GlobalCompA />
    <ComponentVModel v-model:name="name" v-model:address="address" />
    <br />
    <button @click="setDefaultName">Set default name</button>
    <button @click="setDefaultAddress">Set default address</button>
  </main>
</template>
