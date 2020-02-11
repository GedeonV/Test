import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vp = new VuexPersist({
	key: 'store',
	storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vp.plugin],
  
  state: {
    user: null
    //members: false
  },

  mutations: {

    members(state, data){
     state.members = data;
    },

    user(state, data){
      state.user = data;
    },

    logout(state){
      state.user_token = "";
      state.member = false;
      //state.members = false;
    }
  }
})
