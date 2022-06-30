<template>
  <div>
    <div class="dropdown notification">
      <Icon
        :style="{ color: 'black' }"
        icon="mdi:account-group-outline"
        class="drowpdownbtn big-icon"
      />

      <span class="badge">3</span>
      <div class="dropdown-content">
        <!--content -->
        <WidgetCard></WidgetCard>
      </div>
    </div>
  </div>
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
import Menu from "material-components-vue/dist/menu";
import List from "material-components-vue/dist/list";
import Tab from "material-components-vue/dist/tabs";
import Card from "material-components-vue/dist/card";
import IconButton from "material-components-vue/dist/icon-button";
import IconM from "material-components-vue/dist/icon";
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
export default {
  io,
  components: {
    WidgetCard,
    Icon,
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
  store,
  data() {
    return {
      elements: [],
      open: false,
      ditto: {},
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  methods: {
    hola() {
      alert("hello");
    },
    push() {
      this.elements.push("hola");
    },
  },
  computed: {
    apiURL() {
      return this.$store.state.apiURL;
    },
  },
  created() {
    let apiURL = "https://pokeapi.co/api/v2/pokemon/ditto";
    axios.get(apiURL).then((res) => {
      this.ditto = res.data;
    });
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
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

