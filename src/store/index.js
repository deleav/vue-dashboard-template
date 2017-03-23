import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vue.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {

  },
  strict: debug
});