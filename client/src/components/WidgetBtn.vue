<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
      rel="stylesheet"
    />
    <b-btn @click="hola"> Y que pasa </b-btn>

    <BButton @click="push" variant="outline-primary"> push</BButton>
    <li v-for="(element, index) in elements" :key="index">
      {{ element }}
    </li>
    {{ ditto.name }}
    <img :src="ditto.sprites.back_default" alt="" />
    <img :src="ditto.sprites.front_default" alt="" />
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import { BButton } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  props: ["msg"],
  store,
  components: { BButton },
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
  },
};
</script>