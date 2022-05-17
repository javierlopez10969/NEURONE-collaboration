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
      <v-tab v-for="(item, i) in group.modules" :key="i">
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
  data() {
    return {
      tab: null,
      text: "hola",
    };
  },
  computed: {
    groups() {
      return this.$store.state.groups;
    },
    group() {
      return this.$store.state.group;
    },
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