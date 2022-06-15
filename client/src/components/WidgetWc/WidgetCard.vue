<template>
  <v-card height="400" width="350" outlined>
    <!--Multiples views-->
    <!--Main-->
    <!--If user is not logged-->

    <div v-show="user === 'none'">
      <Form></Form>
    </div>
    <div v-show="user != 'none'">
      Welcome
      {{ user.email }}
      {{ view }}
      <div v-show="view == 'normal'">
        <v-subheader>My groups</v-subheader>
        <v-list-item-group v-model="selectedGroup" color="primary">
          <v-list-item v-for="(item, i) in groups" :key="i">
            <v-list-item-icon :color="item.color">
              <v-icon> mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-btn
                @click="selectGroup(i), (view = 'group')"
                class="white--text"
                :color="item.color"
              >
                {{ item.name }}
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-btn @click="view = 'editProfile'"> Edit Your Profile </v-btn>
      </div>
      <div v-show="view == 'group'">
        <v-btn @click="view = 'normal'">Back</v-btn>
        Grupito UwU
      </div>
      <div v-show="view == 'editProfile'">
        <v-btn @click="view = 'normal'">Back</v-btn>
        Grupito UwU
      </div>
      <v-btn class="red" @click="logout()">Log out</v-btn>
    </div>
  </v-card>
</template>

<script>
import Form from "@/components/UI/FormUI";
import { VBtn } from "vuetify/dist/vuetify.min.js";
export default {
  components: { VBtn, Form },
  data() {
    return { selectedView: 0, selectedGroup: 0, view: "normal" };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    groups() {
      return this.$store.state.groups;
    },
    group() {
      if (this.group != []) {
        return this.groups[this.selectedItem];
      }
      return "none";
    },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("updateUser", "none");
    },
    selectGroup(index) {
      this.selectedGroup = index;
      this.$store.commit("updateGroup", this.selectedGroup);
      this.view = "group";
    },
  },
};
</script>

<style lang="stylus">
@import '@/styles/widget.styl';
@import '@/styles/Icon.css';
</style>
