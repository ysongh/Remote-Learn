import Vuex from 'vuex';
import Vue from 'vue';
import tasksBlockchain from './tasksBlockchain';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasksBlockchain
  }
});