<template>
  <div>
    <div class="dropdown">
      <Icon icon="mdi-light:home" class="drowpdownbtn big-icon" />
      <div class="dropdown-content">
        <!--content -->
        <WidgetCard></WidgetCard>
      </div>
    </div>

    <ExampleComponent></ExampleComponent>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

<script>
import axios from "axios";
import store from "@/store";
import ExampleComponent from "./UI/ExampleComponent.vue";
import WidgetCard from "./WidgetWc/WidgetCard.vue";
import "vuetify/dist/vuetify.min.js";
import { Icon } from "@iconify/vue2";
import {
  VBtn,
  VColorPicker,
  VCard,
  VCardActions,
  /*
  VMenu,
  VList,
  VListItem,
  VListItemTitle,*/
} from "vuetify/lib";

export default {
  components: {
    VBtn,
    VColorPicker,
    VCard,
    VCardActions,
    ExampleComponent,
    WidgetCard,
    Icon /*
    VMenu 
    VList,
    VListItem,
    VListItemTitle,*/,
  },
  props: ["msg"],
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

