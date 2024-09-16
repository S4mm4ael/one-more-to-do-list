import Vue from "vue";
import Vuex from "vuex";
import {messageStore} from "./message-store";
import {productsStore} from "./product-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messageStore,
    productsStore,
  },
});
