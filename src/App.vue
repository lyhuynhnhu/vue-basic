<script setup>
import { reactive, computed, ref } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
  published: true,
})

const unpublish = () => {
  author.published = false
}

// a computed ref - only recompute when author.published changes
// value is read-only
// -> prevent unnecessary computations
const isPublished = computed(() => {
  return author.published ? 'Yes' : 'No'
})

const firstName = ref('Nguyen Van')
const lastName = ref('A')
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(newValue) {
    ;[firstName.value, lastName.value] = newValue.split(',')
  },
})

const changeFullName = () => {
  fullName.value = 'Tran Van,B'
}
</script>

<template>
  <h1>computed properties</h1>
  <p>Author {{ author.name }} has published {{ author.books.length }} books.</p>
  <p>Published: {{ isPublished }}</p>
  <button @click="unpublish">Unpublish</button>

  <h4>* Writable computed</h4>
  <p>First name: {{ firstName }}</p>
  <p>Last name: {{ lastName }}</p>
  <p>Full name: {{ fullName }}</p>
  <button @click="changeFullName">Change fullname</button>
</template>
