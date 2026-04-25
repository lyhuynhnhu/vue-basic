<script setup>
import ComponentVModel from '@/components/ComponentVModel.vue'
import { inject, ref, watchEffect } from 'vue'

const name = ref('')
const address = ref('')

const { locale } = inject('locale')
const msg = inject('msgFromMain')

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
    <ComponentVModel v-model:name.uppercase="name" v-model:address="address" />
    <br />
    <button @click="setDefaultName">Set default name</button>
    <button @click="setDefaultAddress">Set default address</button>
    <p>locale: {{ locale }}</p>
    <p>msg from main: {{ msg }}</p>
  </main>
</template>
