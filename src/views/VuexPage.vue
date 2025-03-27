<template>
    <div class="card">
        <h1>{{ appTitle }}</h1>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      appTitle: store.getters.appTitle.toUpperCase()
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 70%;
  padding: 20px;
  background-color: rgb(230, 225, 220);
  margin: 30px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
