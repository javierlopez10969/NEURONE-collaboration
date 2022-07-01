<template>
  <a>
    <!-- Not logged -->
    <v-app-bar v-if="show" app color="primary" dark>
      <h1>Collaboration for NEURONE</h1>
      <v-spacer></v-spacer>
      <v-btn href="/register">
        <span>Register </span>
      </v-btn>
      <v-btn href="/login">
        <span>Login </span>
      </v-btn>
      <v-btn href="/chat">
        <span>Chat room </span>
      </v-btn>
    </v-app-bar>

    <!-- logged -->
    <a v-if="!show">
      <!-- Sidebar -->
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        color="primary"
      >
        <SideBar></SideBar>
      </v-navigation-drawer>

      <!-- Navbar-->
      <v-app-bar color="primary" :clipped-left="clipped" fixed dark app>
        <!-- LEFT SIDE -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn icon href="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <h1>Collaboration for NEURONE</h1>
        <v-spacer />
      </v-app-bar>
      <v-footer :absolute="false" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </a>
  </a>
</template>
<script>
import SideBar from "@/components/User/SideBar.vue";
export default {
  props: ["show", "user"],
  name: "NavBar",
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: false,
    miniVariant: false,
    right: true,
    rightDrawer: false,
  }),
  components: { SideBar },
};
</script>
