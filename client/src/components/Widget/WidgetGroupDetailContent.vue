<template>
  <a>
    <!--Chat -->
    <v-tab-item>
      <v-card>
        {{ realGroup.modules }}
        <ChatView></ChatView>
      </v-card>
    </v-tab-item>
    <!--Activity -->
    <v-tab-item>
      <v-card>
        <ChatView></ChatView>
      </v-card>
    </v-tab-item>
    <!--Bookmarks-->
    <v-tab-item>
      <v-card>
        <ChatView></ChatView>
      </v-card>
    </v-tab-item>
    <!--Snippets-->
    <v-tab-item>
      <v-card>
        <ChatView></ChatView>
      </v-card>
    </v-tab-item>
    <!--Documents -->
    <v-tab-item>
      <v-card>
        <ChatView></ChatView>
      </v-card>
    </v-tab-item>
    <!--People -->
    <v-tab-item>
      <v-card>
        <GroupPeople :group="group"></GroupPeople>
      </v-card>
    </v-tab-item>
    <!--Setting -->
    <v-tab-item>
      <v-card>
        <GroupSettings :groupR="group" :mode="'widget'"></GroupSettings>
      </v-card>
    </v-tab-item>
  </a>
</template>
<script>
import ChatView from "@/components/Chat/ChatView.vue";
import GroupSettings from "@/components/Group/GroupSettings.vue";
import GroupPeople from "@/components/Group/GroupPeople.vue";
import axios from "axios";
export default {
  props: ["group"],
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
  },
  data: () => ({ realGroup: { modules: { active: true } } }),
  created() {
    let apiURL = `http://localhost:3000/api/group/${this.groupR._id}`;
    axios
      .get(apiURL, {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.realGroup = res.data.group;
      });
  },
};
</script>