<template>
  <v-container>
    <v-row>
      <h1>Welcome back {{ user.name }} {{ user.lastName }}</h1>
      <v-spacer></v-spacer>
      <v-col>
        <UserFormDialog :label="'Create a group'" :mode="1"></UserFormDialog>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <!-- If is ADMIN-->

    <v-row>
      <v-col> <h2>Your Groups :</h2> </v-col>
    </v-row>
    <v-row>
      <GroupsUser></GroupsUser>
    </v-row>
  </v-container>
</template>
<script>
import UserFormDialog from "@/components/User/UserFormDialog";

import GroupsUser from "@/components/User/GroupsUser";
export default {
  data() {
    return {};
  },
  components: {
    UserFormDialog,
    GroupsUser,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    //user is not authorized
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>