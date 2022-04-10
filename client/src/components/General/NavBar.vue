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
        <v-btn icon @click.stop="fixed = !fixed">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn icon href="/home">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <h1>Collaboration for NEURONE</h1>
        <v-spacer />
        <!-- RIGHT SIDE -->

        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- RIGHT SIDEBAR-->
      <v-navigation-drawer
        v-model="rightDrawer"
        :right="right"
        permanent
        fixed
        app
      >
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light> mdi-repeat </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer :absolute="!fixed" app>
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
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("updateUser", {});
      this.$router.push("/login");
    },
  },
};
</script>