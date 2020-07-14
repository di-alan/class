import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginModelVisible:false,
    isLogin:false,
    userInfo:{

    }
  },
  mutations: {
    changeLoginModelVisible(state,{isShow}){
      state.loginModelVisible=isShow
    },
    setIsLogin(state,payload){
      state.isLogin=payload.isLogin
    },
    setUserInfo(state,payload){
      state.userInfo=payload.userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
