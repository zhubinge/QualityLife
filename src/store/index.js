import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'
// import state from './state'

Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     state,
//     getters,
//     actions,
//     mutations
//   }
// })
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production'
})

export default store
