<template>
  <div>
    <div class="dropdown notification">
      <Icon icon="mdi:account-group-outline" class="drowpdownbtn big-icon" />

      <span class="badge">3</span>
      <div class="dropdown-content">
        <!--content -->
        <WidgetCard></WidgetCard>
      </div>
    </div>
    <m-menu-surface fixed></m-menu-surface>
    <m-icon-button icon="favorite"></m-icon-button>
  </div>
</template>
<script>
import axios from "axios";
import store from "@/store";
import WidgetCard from "./WidgetWc/WidgetCard.vue";
import { Icon } from "@iconify/vue2";
import { io } from "socket.io-client";
import Button from "material-components-vue/dist/button";
import Menu from "material-components-vue/dist/menu";
import IconButton from "material-components-vue/dist/icon-button";
import Vue from "vue";
Vue.use(Button);
Vue.use(Menu);
Vue.use(IconButton);
export default {
  io,
  components: {
    WidgetCard,
    Icon,
  },
  props: ["msg", "chat", "bookmark"],
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
@import "material-components-vue/dist/icon-button/styles";
</style>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

