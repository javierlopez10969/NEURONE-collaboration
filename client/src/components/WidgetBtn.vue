<template>
  <div>
    <div class="dropdown">
      <Icon icon="mdi:account-group-outline" class="drowpdownbtn big-icon" />
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
import "vuetify/dist/vuetify.min.js";
import { Icon } from "@iconify/vue2";
import { io } from "socket.io-client";
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
</style>

