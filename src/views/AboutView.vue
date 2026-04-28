<script setup>
import { inject } from 'vue'

const { locale } = inject('locale')

// Async component
// const AsyncComp = defineAsyncComponent({
//   // Hàm import component
//   loader: () => import('./components/MyHeavyComponent.vue'),

//   // Component hiện ra trong khi đang tải
//   loadingComponent: LoadingSpinner,
//   delay: 200, // Độ trễ trước khi hiện loading (ms)

//   // Component hiện ra nếu tải thất bại
//   errorComponent: ErrorComponent,
//   timeout: 3000 // Hủy nếu quá thời gian này (ms)
// })
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>locale: {{ locale }}</p>
    <GlobalCompB />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
