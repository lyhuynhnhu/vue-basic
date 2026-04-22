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
  <button type="button" @click="callIncrease">Increase</button>
  <button type="button" @click="callDecrease">Decrease</button>
  <button type="button" @click="increaseBy">Increase by 5</button>
</template>
