<template>
  <m-card class="mx-auto" max-width="300" tile>
    <v-list flat>
      <v-subheader>People</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in group.users" :key="i">
          <v-list-item-content>
            {{ item.name }}{{ item.lastName }} {{ item.email }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </m-card>
</template>
<script>
export default {
  props: ["group"],
  created() {},
  data: () => ({
    selectedItem: 1,
  }),
};
</script>
