<template>
  <div>
    <b-list-group>
      <b-list-group-item> Hola </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import store from "../store";
import { BListGroup, BListGroupItem } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  store,
  name: "CurrentWeather",
  components: {
    BListGroup,
    BListGroupItem,
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    },
  },
  data() {
    return {
      weather: {},
    };
  },
};
</script>
