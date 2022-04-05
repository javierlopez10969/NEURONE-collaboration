<template>
  <a>
    <!-- Not logged -->
    <v-app-bar v-if="show" app color="primary" dark>
      <h1>Collaboration for NEURONE</h1>
      <v-spacer></v-spacer>
      <v-btn href="/register">
        <v-span>Register </v-span>
      </v-btn>
      <v-btn href="/login">
        <v-span>Login </v-span>
      </v-btn>
      <v-btn href="/chat">
        <v-span>Chat room </v-span>
      </v-btn>
    </v-app-bar>

    <!-- logged -->
    <a v-if="!show">
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <h1>Collaboration for NEURONE</h1>
        <v-spacer></v-spacer>
        <v-btn href="/">
          <v-span>Logout </v-span>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer color="primary" permanent app>
        <v-divider></v-divider>
        <SideBar></SideBar>
      </v-navigation-drawer>
    </a>
  </a>
</template>
<script>
import SideBar from "@/components/User/SideBar.vue";
export default {
  props: ["show", "user"],
  name: "NavBar",
  data: () => ({}),
  components: { SideBar },
};
</script>