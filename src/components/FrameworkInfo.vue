<template>
    <div class="card">
        <p>Название: <strong>{{ name }}</strong></p>
        <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>
        <button @click="changeToThree">Change</button>
        <hr />
    </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  emits: ['changeVersion'],
  setup (props, context) {
    const version = inject('version')

    function change () {
      context.emit('changeVersion', 3)
    }

    return {
      doubleVersion: computed(() => {
        return version.value * 2
      }),
      changeToThree: change,
      name: inject('name'),
      version
    }
  }
}
</script>

  <style lang="scss" scoped>

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

  &:hover {
    cursor: pointer;
    background-color: #519c73;
    color: antiquewhite
  }
}
  </style>
