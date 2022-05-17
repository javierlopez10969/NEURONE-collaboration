<template>
  <v-card color="basil" fluid>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card-title class="text-center justify-center">
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
      <v-tab v-for="(item, i) in group.modules" :key="i">
        <v-icon>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <GroupDetailContent :group="group"></GroupDetailContent>
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