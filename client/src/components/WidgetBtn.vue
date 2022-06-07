<template>
  <div>
    <v-btn :attach="$parent.$el" @click="hola"> Y que pasa </v-btn>

    <v-btn @click="push" variant="outline-primary"> push</v-btn>
    <li v-for="(element, index) in elements" :key="index">
      {{ element }}
    </li>
    {{ ditto.name }}
    <img :src="ditto.sprites.back_default" alt="" />
    <img :src="ditto.sprites.front_default" alt="" />
    <v-menu></v-menu>
    <v-card></v-card>
    <v-tooltip></v-tooltip>
    <v-btn @click="push"> COLLABORATION </v-btn>
    <v-icon large :attach="$parent.$el"> mdi-account-group-outline </v-icon>
    <v-badge></v-badge>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import { VMenu, VBtn, VBadge, VIcon, VCard, VTooltip } from "vuetify/lib";
export default {
  components: {
    VMenu,
    VBtn,
    VBadge,
    VIcon,
    VCard,
    VTooltip,
  },
  props: ["msg"],
  store,
  data() {
    return {
      elements: [],
      ditto: {},
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
    this.$store.commit("");
  },
};
</script>
 <style>
@import "vuetify/dist/vuetify.min.css";
@import "@mdi/font/css/materialdesignicons.css";
@import "typeface-roboto/index.css";
</style> 