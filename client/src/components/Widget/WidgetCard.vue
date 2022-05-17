<template>
  <v-card height="500" width="350" color="basil">
    <!-- Windows -->
    <v-window v-model="step">
      <!--home-->
      <v-window-item :value="1">
        <!-- Menu -->
        <v-list color="basil" dense>
          <v-subheader>My groups</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in groups" :key="i">
              <v-list-item-icon :color="item.color">
                <v-icon> mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-btn
                  @click="selectItem"
                  class="white--text"
                  :color="item.color"
                >
                  {{ item.name }}
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-window-item>
      <!--Group Detail-->
      <v-window-item :value="'group'">
        <!-- Groups -->
        <v-btn @click="step = 1"> Back</v-btn>
        <WidgetGroupDetail :group="group"></WidgetGroupDetail>
      </v-window-item>
    </v-window>
  </v-card>
</template>
<script>
export default {
  props: ["expand"],
  data() {
    return {
      tab: null,
      text: "hola",
      step: 1,
      selectedItem: 0,
    };
  },
  computed: {
    groups() {
      return this.$store.state.groups;
    },
    group() {
      return this.groups[this.selectedItem];
    },
  },
  methods: {
    selectItem() {
      this.$store.commit("updateGroup", this.selectedItem);
      this.step = "group";
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