<template>
  <v-app>
    <v-main>
      <div v-if="widgetMode === true"></div>
      <div v-else>
        <NavBar :show="show" :user="user"></NavBar>
        {{ currentRouteName }}
        {{ widgetMode }}
        <v-checkbox
          v-model="checkbox"
          :label="`Checkbox 1: ${checkbox.toString()}`"
        ></v-checkbox>
      </div>

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
      checkbox: true,
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
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    widgetMode() {
      if (this.$route.name == "widget") {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      axios
        .get(this.$store.state.apiURL + "/user", {
          headers: { token: localStorage.getItem("token") },
        })
        .then((res) => {
          this.user = res.data.user;
          this.$store.commit("updateUser", res.data.user);
          //Get the groups
          axios
            .get(
              this.$store.state.apiURL +
                "/group/user/" +
                this.$store.state.user._id
            )
            .then((res) => {
              this.$store.commit("updateGroups", res.data);
              this.$store.commit("socketConnection");
            });
        });
    }
  },
};
</script>

