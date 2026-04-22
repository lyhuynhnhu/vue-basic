<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  initCount: Number,
})
const count = ref(props.initCount || 0)
const countPlus = computed(() => props.initCount + 1)
</script>

<template>
  <p>init count: {{ props.initCount }}</p>
  <button type="button" @click="count++">{{ count }}</button>
  <p>init count plus: {{ countPlus }}</p>
</template>
