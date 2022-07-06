<template>
  <v-app>
    <div v-if="widgetMode === true">
      <router-view :user="user" />
    </div>
    <v-main v-else>
      <NavBar :show="show" :user="user"></NavBar>
      {{ currentRouteName }}
      {{ widgetMode }}
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor" bottom>
        {{ snackText }}
        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>

      <router-view :user="user" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/General/NavBar.vue";
import axios from "axios";
import store from "./store";
import vuetify from "@/plugins/vuetify";
export default {
  store,
  vuetify,
  axios,
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
    snack: {
      get: function () {
        return this.$store.state.snack;
      },
      set: function (value) {
        return value;
      },
    },
    snackText() {
      return this.$store.state.snackText;
    },
    snackColor() {
      return this.$store.state.snackColor;
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
