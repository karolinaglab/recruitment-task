import Vue from 'vue'
import Vuex from 'vuex'
import HouseModule from "./modules/houses";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    houses: HouseModule
  }
})
