<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
  published: true,
})

const unpublish = () => {
  author.published = false
}

// a computed ref - only recompute when author.published changes
// -> prevent unnecessary computations
const isPublished = computed(() => {
  return author.published ? 'Yes' : 'No'
})
</script>

<template>
  <h1>computed properties</h1>
  <p>Author {{ author.name }} has published {{ author.books.length }} books.</p>
  <p>Published: {{ isPublished }}</p>
  <button @click="unpublish">Unpublish</button>
</template>
