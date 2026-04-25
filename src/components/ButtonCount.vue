<script setup>
const emits = defineEmits(['increase', 'decrease', 'increase-by'])

const callIncrease = () => {
  emits('increase')
}

const callDecrease = () => {
  emits('decrease')
}

const increaseBy = () => {
  emits('increase-by', 5)
}
</script>

<template>
  <button type="button" @click="callIncrease">
    <slot name="increase"></slot>
  </button>
  <button type="button" @click="callDecrease">
    <slot name="decrease"></slot>
  </button>
  <button type="button" @click="increaseBy">
    <slot name="increase-by"></slot>
  </button>
</template>
