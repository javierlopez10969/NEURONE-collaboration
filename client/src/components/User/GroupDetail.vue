<template>
  <v-card color="basil">
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 basil--text">{{ group.name }}</h1>
        </v-card-title>
      </v-col>
      <v-col>
        <v-btn icon>
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">
        <v-icon>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card color="basil" flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  props: ["group"],
  data() {
    return {
      tab: null,
      text: "hola",
      items: [
        {
          icon: "mdi-chat",
          title: "Activity",
          to: "/home",
        },
        {
          icon: "mdi-chat",
          title: "My groups",
          to: "/home",
        },

        {
          icon: "mdi-account-group-outline",
          title: "People",
          to: "/my-groups",
        },
        {
          icon: "mdi-account",
          title: "Edit Profile",
          to: "/editprofile",
        },
      ],
    };
  },
};
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>