import Vue from 'vue'
import Vuex from 'vuex'
import { mapMutations } from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		datalist:[],
		str:'store的str'
	},
	actions:{
		Name: (store,data) => { store.commit("OTHER_END",data) }
	},
	mutations:{
		other:(state,data)=>{
			
			state.datalist=data
		}
	}
})

export default store
