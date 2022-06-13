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
    <div>
      <b-list-group>
        <b-list-group-item> Hola </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>




<script>
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import axios from "axios";
import store from "@/store";
import { VBtn } from "vuetify/lib";

export default {
  components: {
    VBtn,
    BListGroup,
    BListGroupItem,
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


 <style scoped>
@import "vuetify/dist/vuetify.min.css";
@import "@mdi/font/css/materialdesignicons.css";
@import "typeface-roboto/index.css";
</style> 

<style lang="stylus">
@import '@/styles/widget.styl';
</style>