import Vue from 'vue'
import Vuex from 'vuex'
import {
  io
} from "socket.io-client";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    socket: {},
    apiURL: "http://localhost:3000/api",
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    updateUser(state, user) {
      state.user = user;
    },
    socketConnection(state) {
      //initial connection to the server
      state.socket = io.connect("http://localhost:3000", {
        query: `loggedUser = ${state.user}`
      });
      state.socket.on("connect", () => {
        console.log(`You connected with id : ${state.socket.id}`);
      });
      state.socket.emit("login", state.user);
    },
    logout(state) {
      state.user = {}
    }
  }
})