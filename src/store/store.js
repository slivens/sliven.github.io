import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: ''
  },
  getters: {

  },
  mutations: {
    saveId (state, data) {
      console.log('ididi', data)
      state.id = data
    }
  },
  actions: {

  },
  modules: {

  }

})
