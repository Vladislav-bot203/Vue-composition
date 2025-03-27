<template>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>Data, Methods, Computed, Watch</small>
    <framework-info
      @change-version="changeVersion"
    >
      <template #footer>
        <p>This is footer</p>
      </template>
    </framework-info>
    <form>
      <input type="text" ref="textInput" v-model="firstName">
    </form>

    <button class="btn" @click="changeInfo">Изменить</button>
  </div>
</template>

<script>
import {
  ref,
  isRef,
  isReactive,
  reactive,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
  // computed,
  // watch
  // toRefs
} from 'vue'

import FrameworkInfo from './components/FrameworkInfo.vue'

export default {
  setup () {
    // !!! for all not objects
    // const a = ref('a')
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    console.log(isRef(name))
    console.log(isRef(version.value))

    // !!! for only objects
    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log(isReactive(framework))
    console.log(isReactive(framework.name))

    // !!! computed method
    // const doubleVersion = computed(() => version.value * 2)

    // !!! watch method
    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version:', newValues[0])
    //   console.log('new name:', newValues[1])
    //   console.log('old version', oldValues[0])
    //   console.log('old name', oldValues[1])
    // })

    function changeInfo () {
      name.value = 'VueJS!!!'
      version.value = 42
      // framework.name = 'VueJS!'
      // framework.version = 42
    }

    function changeVersion (prop) {
      name.value = prop
    }

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdated')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    provide('name', name)
    provide('version', version)

    return {
      // !!! these values are not reactive, they are plain values
      // name: framework.name,
      // version: framework.version,
      // name,
      // version,
      // doubleVersion,
      textInput,
      firstName,
      // !!! this function makes plain values as reactive ones
      // ...toRefs(framework),
      // !!! these ones are reactive
      // framework,
      // a,
      changeInfo,
      changeVersion
    }
  },
  components: { FrameworkInfo }
  // data () {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo () {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
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
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #519c73;
    color: antiquewhite
  }
}
</style>
