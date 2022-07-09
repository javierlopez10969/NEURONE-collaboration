<template>
  <m-card style="max-height: 500px; max-width: 350px" class="basil">
    <!--Multiples views-->
    <!--Main-->
    <!--If user is not logged-->
    <v-container>
      <div v-if="user === 'none'">
        <Form></Form>
      </div>
      <div v-if="user != 'none'">
        <div>
          <v-col v-if="view == 'normal'">
            Welcome
            {{ user.email }}
            <v-subheader>My groups</v-subheader>
            <v-list-item-group v-model="selectedGroup" color="primary">
              <v-list-item v-for="(item, i) in groups" :key="i">
                <v-list-item-icon :color="item.color">
                  <v-icon> mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <m-button
                    raised
                    @click="selectGroup(i), (view = 'group')"
                    class="white--text"
                    :style="{ 'background-color': item.color }"
                  >
                    {{ item.name }}
                  </m-button>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-col>
              <!--Edit porfile-->
              <m-button
                raised
                style="color: black; background-color: white"
                @click="view = 'editProfile'"
              >
                Edit Your Profile
              </m-button>
            </v-col>
            <v-col v-if="user.role == 'ADMIN'">
              <!--Create a group if is admin-->
              <m-button
                raised
                style="color: white; background-color: green"
                @click="view = 'createGroup'"
              >
                Create Group
              </m-button>
            </v-col>

            <v-col>
              <!--Logout-->
              <m-button
                style="color: black; background-color: red"
                @click="logout()"
                unelevated
              >
                Log out
              </m-button>
            </v-col>
          </v-col>
        </div>
        <v-container v-if="view == 'group'">
          <div style="font-size: 10px">
            <m-button
              raised
              style="color: black; background-color: white"
              @click="view = 'normal'"
            >
              Back
            </m-button>
            Use the click,arrows and enter to move.
          </div>

          <GroupDetail></GroupDetail>
        </v-container>

        <v-container v-if="view == 'editProfile'">
          <v-container style="height: 350px; overflow: auto" fluid>
            <m-button
              raised
              style="color: black; background-color: white"
              @click="view = 'normal'"
            >
              Back
            </m-button>
            <UserForm></UserForm>
          </v-container>
        </v-container>

        <div v-if="view == 'createGroup'">
          <v-container
            style="height: 500px; max-width: 300px; overflow: auto"
            fluid
          >
            <m-button
              raised
              style="color: black; background-color: white"
              @click="view = 'normal'"
            >
              Back
            </m-button>
            <p></p>
            <GroupForm :mode="'widget'"></GroupForm>
          </v-container>
        </div>
      </div>
    </v-container>
  </m-card>
</template>

<script>
import Form from "@/components/UI/FormUI";
import GroupDetail from "./GroupDetail";
import UserForm from "../User/UserForm.vue";
import GroupForm from "../Group/GroupCreate.vue";
import axios from "axios";
export default {
  components: { Form, GroupDetail, UserForm, GroupForm },
  data() {
    return { selectedView: 0, selectedGroup: 0, view: "normal", step: 1 };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      axios
        .get(this.$store.state.apiURL + "/user", {
          headers: { token: localStorage.getItem("token") },
        })
        .then((res) => {
          this.$store.commit("updateUser", res.data.user);
          //Get the groups
          axios
            .get(
              this.$store.state.apiURL +
                "/group/user/" +
                this.$store.state.user._id
            )
            .then((res) => {
              this.$store.commit("updateGroups", res.data);
              this.$store.commit("socketConnection");
            });
        });
    }
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
@import '@/styles/Icon.css';
</style>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
  color: black !important;
}
</style>
