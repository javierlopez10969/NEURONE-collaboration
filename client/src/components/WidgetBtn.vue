<template>
  <div>
    <div>
      <div class="notification">
        <span class="badge">3</span>
      </div>
    </div>

    <m-snackbar
      v-model="snack"
      :label-text="snackText"
      style="back-ground: color: green"
    ></m-snackbar>
    <button id="menu-surface-button" @click="open = true">
      <Icon
        :style="{ color: 'black' }"
        icon="mdi:account-group-outline"
        class="drowpdownbtn big-icon"
      />
    </button>
    <Dropdown></Dropdown>
    <m-menu-anchor>
      <m-menu-surface :anchorCorner="'BOTTOM_END'" v-model="open">
        <WidgetCard></WidgetCard>
      </m-menu-surface>
    </m-menu-anchor>
  </div>
</template>
<script>
import axios from "axios";
import store from "@/store";
import WidgetCard from "./WidgetWc/WidgetCard.vue";
import Dropdown from "./UI/DropdownE.vue";
Vue.use(Dropdown);
import { Icon } from "@iconify/vue2";
import { io } from "socket.io-client";
import Button from "material-components-vue/dist/button";
import Snackbar from "material-components-vue/dist/snackbar";
import Checkbox from "material-components-vue/dist/checkbox";
import Menu from "material-components-vue/dist/menu";
import List from "material-components-vue/dist/list";
import Tab from "material-components-vue/dist/tabs";
import Card from "material-components-vue/dist/card";
import IconButton from "material-components-vue/dist/icon-button";
import TextField from "material-components-vue/dist/text-field";
import IconM from "material-components-vue/dist/icon";
import LineRipple from "material-components-vue/dist/line-ripple";
import FloatingLabel from "material-components-vue/dist/floating-label";
import Vue from "vue";
Vue.use(Button);
Vue.use(Snackbar);
Vue.use(Checkbox);
Vue.use(Tab);
Vue.use(Card);
Vue.use(List);
Vue.use(Menu);
Vue.use(IconButton);
Vue.use(IconM);
Vue.use(TextField);
Vue.use(LineRipple);
Vue.use(FloatingLabel);
export default {
  io,
  axios,
  store,
  components: {
    WidgetCard,
    Icon,
  },
  computed: {
    snack: {
      get() {
        return this.$store.state.snack;
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
    activity: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    //Set the the modules values
    this.$store.commit("setModules", {
      chat: this.chat,
      bookmarks: this.bookmarks,
      settings: this.settings,
      tasks: this.tasks,
      snippets: this.snippets,
      activity: this.activity,
    });
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
};
</script>

<style lang="stylus">
@import '@/styles/widget.styl';
@import '@/styles/DropDown.css';
@import '@/styles/Icon.css';
@import '@/styles/Notificacion.css';
</style>
<style lang="scss">
$mdc-theme-primary: #2196f3;
$mdc-theme-secondary: black;
$mdc-theme-background: #f5f5f5;
@import "material-components-vue/dist/theme/styles";
@import "material-components-vue/dist/button/styles";
@import "material-components-vue/dist/menu/styles";
@import "material-components-vue/dist/list/styles";
@import "material-components-vue/dist/card/styles";
@import "material-components-vue/dist/icon-button/styles";
@import "material-components-vue/dist/tabs/styles";
@import "material-components-vue/dist/snackbar/styles";
@import "material-components-vue/dist/checkbox/styles";
@import "material-components-vue/dist/text-field/styles";
@import "material-components-vue/dist/floating-label/styles";
@import "material-components-vue/dist/line-ripple/styles";
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
