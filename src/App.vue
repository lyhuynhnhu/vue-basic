<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')
const content = ref('')
const fruits = ref([])
const gender = ref('')
const selected = ref('')
const checked = ref(false)

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])

const handleInput = (event) => {
  name.value = event.target.value
}
</script>

<template>
  <h1>Form input bindings</h1>
  <p>Curent name: {{ name }}</p>
  <input :value="name" @input="handleInput" />
  <p>Current content: {{ content }}</p>
  <textarea v-model="content"></textarea>

  <p>Fruits: {{ fruits }}</p>
  <input id="apple" type="checkbox" v-model="fruits" value="apple" />
  <label for="apple">Apple</label>
  <input id="banana" type="checkbox" v-model="fruits" value="banana" />
  <label for="banana">Banana</label>
  <input id="grape" type="checkbox" v-model="fruits" value="grape" />
  <label for="grape">Grape</label>

  <p>Gender selected: {{ gender }}</p>
  <input id="male" type="radio" v-model="gender" value="male" />
  <label for="male">Male</label>
  <input id="female" type="radio" v-model="gender" value="female" />
  <label for="female">Female</label>

  <p>Selected: {{ selected }}</p>
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">{{ option.text }}</option>
  </select>

  <p>Checked: {{ checked }}</p>
  <input id="checking" type="checkbox" v-model="checked" true-value="yes" false-value="no" />
</template>
