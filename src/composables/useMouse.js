import { onMounted, onUnmounted, ref } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener('mousedown', update))

  onUnmounted(() => window.removeEventListener('mousedown', update))

  return { x, y }
}
