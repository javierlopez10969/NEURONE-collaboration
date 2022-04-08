<template>
  <v-list nav dense>
    <IconProfile :user="user"></IconProfile>
    <v-list-item link href="#">
      <v-list-item-icon>
        <v-icon color="white" small>mdi-lightbulb</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="title">Blue</v-list-item-title>
    </v-list-item>
    <v-list-item link href="#">
      <v-btn @click="logout"> <span>Logout </span></v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
import IconProfile from "./IconProfile";
export default {
  components: { IconProfile },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("updateUser", {});
      if (window.location.pathname == "/") {
        location.reload();
      } else {
        this.$router.push("/");
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "My groups",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [{ title: "List Item" }],
        title: "Education",
      },
    ],
  }),
};
</script>