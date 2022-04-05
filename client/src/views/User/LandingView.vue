<template>
  <v-container>
    <h1>Welcome</h1>
    {{ user }}
  </v-container>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      i: 0,
    };
  },
  created() {
    //user is not authorized
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>