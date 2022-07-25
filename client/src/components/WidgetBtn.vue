<template>
  <m-typography>
    <div>
      <div class="notification dropdown">
        <span v-if="notifications.total != 0" class="badge">{{
          notifications.total
        }}</span>
        <button class="toolt1p" @click="myFunction()">
          <Icon
            :style="{ color: color }"
            icon="mdi:account-group-outline"
            class="dropbtn big-icon"
          />
          <span class="toolt1ptext">Collaboration {{ documents }}</span>
        </button>
        <div ref="myDropdown" class="dropdown-content" style="display: none">
          <WidgetCard></WidgetCard>
        </div>
      </div>
    </div>
    <div style="display: none">
      {{ snack }}
    </div>
    <div
      id="snackbar"
      ref="snackbar"
      :style="{ 'background-color': snackColor }"
    >
      {{ snackText }} <m-button @click="closeSnack">Close</m-button>
    </div>
  </m-typography>
</template>
<script>
import axios from "axios";
import store from "@/store";
import WidgetCard from "./WidgetWc/WidgetCard.vue";
import { Icon } from "@iconify/vue2";
import { io } from "socket.io-client";
import Button from "material-components-vue/dist/button";
import Snackbar from "material-components-vue/dist/snackbar";
import Checkbox from "material-components-vue/dist/checkbox";
import List from "material-components-vue/dist/list";
import Tab from "material-components-vue/dist/tabs";
import Card from "material-components-vue/dist/card";
import TextField from "material-components-vue/dist/text-field";
import LineRipple from "material-components-vue/dist/line-ripple";
import FloatingLabel from "material-components-vue/dist/floating-label";
import Dialog from "material-components-vue/dist/dialog";
import Typography from "material-components-vue/dist/typography";
import Chips from "material-components-vue/dist/chips";
import Select from "material-components-vue/dist/select";
import Vue from "vue";
Vue.use(Button);
Vue.use(Snackbar);
Vue.use(Checkbox);
Vue.use(List);
Vue.use(Tab);
Vue.use(Card);
Vue.use(TextField);
Vue.use(LineRipple);
Vue.use(FloatingLabel);
Vue.use(Dialog);
Vue.use(Chips);
Vue.use(Typography);
Vue.use(Select);
export default {
  io,
  axios,
  store,
  components: {
    WidgetCard,
    Icon,
  },
  mounted() {
    console.log(this.documents);
    this.$store.commit("setModules", {
      chat: this.chat,
      bookmarks: this.bookmarks,
      settings: this.settings,
      tasks: this.tasks,
      snippets: this.snippets,
      activity: this.activity,
      people: this.people,
      feed: this.feed,
      documents: this.documents,
    });
  },
  created() {
    if (localStorage.getItem("token") || localStorage.getItem("auth_token")) {
      axios
        .get(this.$store.state.apiURL + "/user/", {
          headers: {
            token: localStorage.getItem("token"),
            auth_token: localStorage.getItem("auth_token"),
            user: localStorage.getItem("currentUser"),
          },
        })
        .then((res) => {
          this.$store.commit("updateUser", res.data.user);
          this.$store.commit("updateNeuroneUser", res.data.userNeurone);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }

          this.getNotifications();
          //Get the groups
          axios
            .get(
              this.$store.state.apiURL +
                "/group/user/" +
                this.$store.state.user._id,
              {
                headers: {
                  token: localStorage.getItem("token"),
                  auth_token: localStorage.getItem("auth_token"),
                },
              }
            )
            .then((res) => {
              this.$store.commit("updateGroups", res.data);
              this.$store.commit("socketConnection");
              this.socket = this.$store.state.socket;
              this.socket.on("notification", () => {
                console.log("NEW NOTIFICATION");
                this.getNotifications();
              });
            });
        });
    }
  },
  computed: {
    snack: {
      get() {
        const value = this.$store.state.snack;
        return value;
      },
      set(newValue) {
        this.$store.commit("setSnackFalse");
        return newValue;
      },
    },
    snackText() {
      return this.$store.state.snackText;
    },
    snackColor() {
      return this.$store.state.snackColor;
    },
    apiURL() {
      return this.$store.state.apiURL;
    },
    notifications() {
      return this.$store.state.notifications;
    },
  },
  props: {
    color: { type: String, default: "white" },
    //Modules as framework
    chat: {
      type: Boolean,
      default: true,
    },
    bookmarks: {
      type: Boolean,
      default: false,
    },
    settings: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Boolean,
      default: false,
    },
    snippets: {
      type: Boolean,
      default: false,
    },
    documents: {
      type: Boolean,
      default: false,
    },
    feed: {
      type: Boolean,
      default: false,
    },
    people: {
      type: Boolean,
      default: false,
    },
    activity: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      socket: {},
    };
  },
  methods: {
    myFunction() {
      var element = this.$refs.myDropdown;
      if (this.open == false) {
        element.style.display = "block";
        this.open = true;
      } else {
        element.style.display = "none";
        this.open = false;
      }
      element.classList.toggle("show");
    },
    closeSnack() {
      var x = document.getElementById("snackbar");
      x.className.replace("show", "");
      this.snack = false;
    },
    getNotifications() {
      axios
        .get(
          this.$store.state.apiURL +
            "/notification/user/" +
            this.$store.state.user._id,
          {
            headers: {
              token: localStorage.getItem("token"),
              auth_token: localStorage.getItem("auth_token"),
            },
          }
        )
        .then((res) => {
          this.$store.commit("updateNotifications", res.data);
        });
    },
  },
  updated() {
    if (this.snack == true) {
      var x = this.$refs.snackbar;
      // Add the "show" class to DIV
      x.className = "show";
      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      this.snack = false;
    }
  },
};
</script>

<style lang="stylus">
@import '@/styles/widget.styl';
</style>
<style>
@import "@/styles/Tooltip.css";
@import "@/styles/DropDown.css";
@import "@/styles/Icon.css";
@import "@/styles/Notification.css";
@import "@/styles/Button.css";
@import "@/styles/Snack.css";
</style>
<style>
@import "material-components-vue/dist/button/button.min.css";
@import "material-components-vue/dist/list/list.min.css";
@import "material-components-vue/dist/card/card.min.css";
@import "material-components-vue/dist/tabs/tabs.min.css";
@import "material-components-vue/dist/snackbar/snackbar.min.css";
@import "material-components-vue/dist/checkbox/checkbox.min.css";
@import "material-components-vue/dist/text-field/text-field.min.css";
@import "material-components-vue/dist/floating-label/floating-label.min.css";
@import "material-components-vue/dist/line-ripple/line-ripple.min.css";
@import "material-components-vue/dist/dialog/dialog.min.css";
@import "material-components-vue/dist/typography/typography.min.css";
@import "material-components-vue/dist/chips/chips.min.css";
@import "material-components-vue/dist/select/select.min.css";
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
