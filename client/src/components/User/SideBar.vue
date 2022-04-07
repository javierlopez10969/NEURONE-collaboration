<template>
  <v-list nav dense>
    <IconProfile></IconProfile>
    <v-list-item link href="#">
      <v-list-item-icon>
        <v-icon color="white" small>mdi-lightbulb</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="title">Blue</v-list-item-title>
    </v-list-item>
    <v-list-item link href="#">
      <v-btn @click="logout"> <v-span>Logout </v-span></v-btn>
    </v-list-item>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="child in item.items" :key="child.title">
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import IconProfile from "./IconProfile";
export default {
  components: { IconProfile },
  methods: {
    logout() {
      localStorage.clear();
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
        title: "Attractions",
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