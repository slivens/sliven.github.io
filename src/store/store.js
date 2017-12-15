import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    allinfo: '',
    answerinfo: '',
    goodinfo: '',
    shareinfo: '',
    jobinfo: ''
  },
  getters: {

  },
  mutations: {
    saveAll (state, data) {
      state.allinfo = data
      console.log('allinfo', state.allinfo)
    },
    saveAnswer (state, data) {
      state.answerinfo = data
    },
    saveGood (state, data) {
      state.goodinfo = data
    },
    saveShare (state, data) {
      state.shareinfo = data
    },
    saveJob (state, data) {
      state.jobinfo = data
    }
  },
  actions: {

  },
  modules: {

  }

})
