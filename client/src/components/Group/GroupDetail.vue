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
      <v-tab v-for="(item, i) in items" :key="i">
        <v-icon>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <GroupDetailContent v-bind:tab="tab"></GroupDetailContent>
    </v-tabs-items>
  </v-card>
</template>
<script>
import GroupDetailContent from "./GroupDetailContent.vue";
export default {
  components: {
    GroupDetailContent,
  },
  props: ["group"],
  data() {
    return {
      tab: null,
      text: "hola",
      items: [
        {
          icon: "mdi-chat",
          title: "Group Chat",
        },
        {
          icon: "mdi-chart-box",
          title: "Activity",
        },
        {
          icon: "mdi-star-outline",
          title: "Bookmarks",
        },
        {
          icon: "mdi-file",
          title: "snippets",
        },
        {
          icon: "mdi-file-document",
          title: "Documents",
        },
        {
          icon: "mdi-account-group-outline",
          title: "People",
        },
        {
          icon: "mdi-cog",
          title: "Settings",
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