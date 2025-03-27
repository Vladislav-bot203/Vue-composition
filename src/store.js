import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      title: 'This is Vuex + Composition     '
    }
  },
  getters: {
    appTitle (state) {
      return state.title.trim()
    }
  }
})

export default store
