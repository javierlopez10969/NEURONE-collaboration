<template>
  <v-list nav dense>
    <IconProfile :user="user"></IconProfile>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        dark
        class="white--text"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list-item bottom>
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
        icon: "mdi-account-group",
        title: "My groups",
        to: "/home",
      },

      {
        icon: "mdi-account-group-outline",
        title: "Administer your Groups",
        to: "/my-groups",
      },
      {
        icon: "mdi-account",
        title: "Edit Profile",
        to: "/editprofile",
      },
    ],
  }),
};
</script>