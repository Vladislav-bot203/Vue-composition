<template>
    <the-alert
      v-if="simpleAlert"
      title="Работает с Composition" type="success"
      @close="closeAlert"
    ></the-alert>
    <div class="card">
        <h1>Переиспользование</h1>
        <pre>{{ alert }}</pre>
        <button @click="toggleAlert">{{ simpleAlert ? 'Спрятать сообщение' : 'Показать сообщение' }}</button>
        <button @click="navigate">Перейти на главную</button>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import TheAlert from '@/components/TheAlert.vue'
import useAlert from '@/hooks/alert'
import { reactive } from 'vue'

export default {
  components: { TheAlert },
  setup () {
    const alert = reactive({
      type: 'error',
      title: 'Reactive Alert'
    })
    const [simpleAlert, toggleAlert, closeAlert] = useAlert()
    const router = useRouter()
    const route = useRoute()

    console.log(route.path)

    const navigate = () => router.push('/home')

    return {
      alert,
      navigate,
      closeAlert,
      toggleAlert,
      simpleAlert
    }
  }
}

</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgb(230, 225, 220);
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}

.card {
  width: 60%;
  padding: 20px;
  background-color: rgb(230, 225, 220);
  margin: 30px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

button {
  background-color: rgb(230, 225, 220);
  border-radius: 10px;
  border: 2px solid #519c73;
  padding: 8px;
  color: #519c73;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #519c73;
    color: antiquewhite
  }
}
</style>
