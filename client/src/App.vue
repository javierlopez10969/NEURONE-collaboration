<template>
  <v-app>
    <NavBar :show="show" :user="user"></NavBar>
    <v-main>
      <router-view :user="user" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/General/NavBar.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      show: true,
      baseURL: "http://localhost:3000/api",
      tamanoRoute: 0,
      user: {},
      token: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    hideMethod() {
      if (localStorage.getItem("token") === null) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.show = this.hideMethod();
    this.token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.user = res.data.user;
        this.$store.commit("updateUser", res.data.user);
      });
  },
};
</script>

