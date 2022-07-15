<template>
  <m-typography>
    <div>
      <div class="notification dropdown">
        <span v-if="notifications != 0" class="badge">{{ notifications }}</span>
        <button class="toolt1p" @click="myFunction()">
          <Icon
            :style="{ color: 'black' }"
            icon="mdi:account-group-outline"
            class="dropbtn big-icon"
          />
          <span class="toolt1ptext">Collaboration</span>
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
Vue.use(Typography);
export default {
  io,
  axios,
  store,
  components: {
    WidgetCard,
    Icon,
  },
  created() {
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
    //Modules as framework
    chat: {
      type: Boolean,
      default: true,
    },
    bookmarks: {
      type: Boolean,
      default: true,
    },
    settings: {
      type: Boolean,
      default: true,
    },
    tasks: {
      type: Boolean,
      default: true,
    },
    snippets: {
      type: Boolean,
      default: true,
    },
    documents: {
      type: Boolean,
      default: true,
    },
    feed: {
      type: Boolean,
      default: true,
    },
    people: {
      type: Boolean,
      default: true,
    },
    activity: {
      type: Boolean,
      default: true,
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
<style lang="scss">
$mdc-theme-primary: #2196f3;
$mdc-theme-secondary: black;
$mdc-theme-background: #f5f5f5;
@import "material-components-vue/dist/theme/styles";
@import "material-components-vue/dist/button/styles";
@import "material-components-vue/dist/list/styles";
@import "material-components-vue/dist/card/styles";
@import "material-components-vue/dist/tabs/styles";
@import "material-components-vue/dist/snackbar/styles";
@import "material-components-vue/dist/checkbox/styles";
@import "material-components-vue/dist/text-field/styles";
@import "material-components-vue/dist/floating-label/styles";
@import "material-components-vue/dist/line-ripple/styles";
@import "material-components-vue/dist/dialog/styles";
@import "material-components-vue/dist/typography/styles";
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
