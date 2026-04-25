<script setup>
import { computed, inject, ref } from 'vue'

const props = defineProps({
  initCount: Number,
})
const count = ref(props.initCount || 0)
const countPlus = computed(() => props.initCount + 1)
const { locale, updateLocale } = inject('locale')
</script>

<template>
  <p>init count: {{ props.initCount }}</p>
  <button type="button" @click="count++">{{ count }}</button>
  <p>init count plus: {{ countPlus }}</p>
  <p>locale: {{ locale }}</p>
  <button type="button" @click="updateLocale">Update locale</button>
</template>
