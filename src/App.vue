<script setup>
import { computed, reactive, ref } from 'vue'

const isActive = ref(false)
const hasError = ref(true)
const background = ref('blue')

const classObj = reactive({
  active: true,
  'has-error': false,
})

const stylesObj = reactive({
  color: '#fff',
  cursor: 'pointer',
})

const comptedClass = computed(() => ({
  active: isActive.value && !hasError.value,
  'has-error': hasError.value,
}))

const changeStatus = () => (hasError.value = !hasError.value)
</script>

<template>
  <h3>Binding class</h3>

  <button class="button" :class="{ active: isActive, 'has-error': hasError }">
    {{ hasError ? 'Error' : 'Normal' }}
  </button>
  <br /><br />
  <button class="button" :class="classObj">Reactive class</button>
  <br /><br />
  <button class="button" :class="comptedClass">Computed class</button>
  <br /><br />
  <button
    @click="changeStatus"
    class="button"
    :class="[isActive ? 'active' : '', { 'has-error': hasError }]"
  >
    Binding array
  </button>

  <h3>Binding style</h3>

  <button
    :style="[
      {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        background,
      },
      stylesObj,
    ]"
  >
    Button
  </button>
</template>

<style>
.button {
  border: 1px solid green;
  background: #f5f5f5;
  color: green;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.active {
  border: none;
  background: green;
  color: #fff;
  &:hover {
    background: darkgreen;
  }
}

.has-error {
  border: none;
  background: rgb(229, 57, 57);
  color: #fff;
  &:hover {
    background: rgb(196, 31, 31);
  }
}
</style>
