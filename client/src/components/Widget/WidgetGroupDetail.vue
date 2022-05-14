<template>
  <v-container fluid>
    <v-row>
      <v-col></v-col>
      <v-col>
        <h4></h4>
      </v-col>
      <v-col>
        <v-btn icon>
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-tabs
      v-model="tab"
      show-arrows
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab v-for="(item, i) in items" :key="i">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">
              {{ item.icon }}
            </v-icon>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <WidgetGroupDetailContent :group="group"></WidgetGroupDetailContent>
    </v-tabs-items>
  </v-container>
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