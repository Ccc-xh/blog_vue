import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as mutations from './mutations';
Vue.use(Vuex)

const state = ({
  Authorization:'',
  userName:'',
})

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    userName : localStorage.getItem('userName') ? localStorage.getItem('userName') : ''
  },
  mutations: {
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization)
    },
    changeUser(state,user) {
      state.userName = user.userName;
      localStorage.setItem('userName', user.userName)
    }
  },
  actions: {

  },
  modules: {
  }

})
