<script setup>
import ComponentVModel from '@/components/ComponentVModel.vue'
import { ref, watchEffect } from 'vue'

const name = ref('')

const setDefaultName = () => {
  name.value = 'Huynh Nhu'
}

watchEffect(() => {
  console.log(name.value)
})
</script>

<template>
  <main>
    <GlobalCompA />
    <ComponentVModel v-model="name" />
    <button @click="setDefaultName">Set default name</button>
  </main>
</template>
