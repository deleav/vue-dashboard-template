import Vue from 'vue';
import Vuex from 'vuex';

// modules
import login from '@/store/modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  },
  strict: debug
});