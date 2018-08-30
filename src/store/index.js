import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    messageFlg: false,
    messageContext: ""
  },
  
  mutations: {
    messageShow: function(state) {
      state.messageFlg = true;
    },
    messageClose: function(state) {
      state.messageFlg = false;
    },
    messageContestSet: function(state, messageBody) {
      state.messageContext = messageBody;
    },
    messageContestClean: function(state) {
      state.messageContext = "";
    }
  }
});

export default store;