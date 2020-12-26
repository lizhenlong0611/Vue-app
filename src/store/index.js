import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isindex:JSON.parse(localStorage.getItem("lists")),
    phone:JSON.parse(localStorage.getItem("phone")),
    password:JSON.parse(localStorage.getItem("password")),
  },
  mutations: {
    setindex(statu, isindex){
      statu.isindex = isindex
    },
    setphone(statu, phone){
      statu.phone = phone
    },
    setpassword(statu, password){
      statu.password = password
    }
  },
  actions: {
  },
  modules: {
  }
})
