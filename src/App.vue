<script setup>
import { reactive, ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark')
const isLoading = ref(false)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    isLoading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      isLoading.value = false
    }
  }
})

const x = ref(0)
const y = ref(0)

const increase = () => {
  x.value++
  y.value++
}

watch([x, y], ([newX, newY], [oldX, oldY]) => {
  console.log(`x changed from ${oldX} to ${newX}`)
  console.log(`y changed from ${oldY} to ${newY}`)
})

watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum: ${sum}`)
  },
)

const obj = reactive({
  count: 0,
  user: {
    name: 'John',
    age: 30,
  },
})

watch(
  obj,
  (newObj, oldObj) => {
    console.log('oldObj: ', JSON.stringify(oldObj))
    console.log('newObj: ', JSON.stringify(newObj))
  },
  { deep: true, immediate: true },
)

const change = () => {
  // obj.count++
  obj.user.age++
}
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="isLoading" />
  </p>
  <p>{{ answer }}</p>

  <p>x: {{ x }}, y: {{ y }}</p>
  <button @click="increase">Increment</button>

  <p>obj: {{ obj }}</p>
  <button @click="change">Change</button>
</template>
