<template>
  <v-container>
    <h1>Hola</h1>
    {{ group }}
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    group: {},
  }),
  created() {
    let apiURL = `http://localhost:3000/api/group/${this.$route.params.id}`;
    axios
      .get(apiURL, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.group = res.data;
      });
  },
};
</script>