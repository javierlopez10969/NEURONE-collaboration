import Vue from 'vue'
import Vuex from 'vuex'
import {
  io
} from "socket.io-client";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: 'none',
    neuroneUser: 'none',
    notifications: {total :0},
    token: "",
    authToken: "",
    socket: {},
    //Id of the groups
    groups: [],
    group: {},
    modules: [],
    snack: false,
    snackText: '',
    snackColor: '',
    apiURL: "http://localhost:3000/api",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAuthToken(state, token) {
      state.authToken = token;
    },
    updateUser(state, user) {
      state.user = user;
    },
    updateNeuroneUser(state, user) {
      state.neuroneUser = user;
    },
    updateGroups(state, groups) {
      state.groups = groups;
    },
    updateNotifications(state, notifications) {
      state.notifications = notifications;
    },
    updateNotification(state, notification) {      
      var index = state.notifications.findIndex(function(not) {
        return not._id ==  notification._id
      });
      state.notifications[index] = notification;
    },
    updateGroup(state, index) {
      state.group = state.groups[index];
    },
    pushGroup(state, group) {
      state.groups.push(group);
    },
    socketConnection(state) {
      //initial connection to the server
      state.socket = io.connect(state.apiURL);
      state.socket.on("connect", () => {
        console.log(`You connected with id : ${state.socket.id}`);
      });
      state.socket.emit("login", state.user, state.groups);
    },
    logout(state) {
      state.user = {}
      state.token = ""
    },
    setSnackFalse(state) {
      state.snack = false;
    },
    setSnack(state, snackInfo) {
      state.snack = true;
      state.snackColor = snackInfo.color;
      state.snackText = snackInfo.text;
    },
    setModules(state, modules) {
      state.modules = modules;
    }
  }
})