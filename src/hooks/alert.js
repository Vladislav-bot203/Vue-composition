import { ref } from 'vue'

export default function useAlert (visibility = false) {
  const alert = ref(visibility)

  const toggleAlert = () => { alert.value = !alert.value }
  const closeAlert = () => { alert.value = false }

  return [alert, toggleAlert, closeAlert]
}
