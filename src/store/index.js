import Vue from "vue";
import Vuex from "vuex";
import Todo from "./components/Todo";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Todo,
  },
});
