<script setup>
const props = defineProps({
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true,
  },
  propD: {
    type: String,
    default: 'default value',
  },
  propE: Object,
  propF: {
    type: String,
    validator: (value) => value === 'omg',
  },
  propG: {
    type: Function,
  },
  disable: Boolean,
})

props.propG()
</script>

<template>
  <p>props from parent: {{ JSON.stringify(props) }}</p>
</template>
