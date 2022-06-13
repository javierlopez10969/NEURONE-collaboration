<template>
  <div>
    <v-btn outlined rounded text @click="hola"> Y que pasa </v-btn>
    <v-btn @click="push" variant="outline-primary"> push</v-btn>
    <li v-for="(element, index) in elements" :key="index">
      {{ element }}
    </li>
    <div v-if="ditto"></div>
    <v-color-picker dot-size="25" swatches-max-height="200"></v-color-picker>

    <div class="dropdown">
      <v-btn class="dropbtn" outlined rounded text> Button </v-btn>
      <div class="dropdown-content">
        <v-card height="500" width="350" outlined>
          <v-card-actions>
            <v-btn outlined rounded text> Button </v-btn>
          </v-card-actions>
        </v-card>
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
import "vuetify/dist/vuetify.min.js";
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
    ExampleComponent /*
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
</style>

