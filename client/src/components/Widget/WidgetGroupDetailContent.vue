<template>
  <a>
    <!--Chat -->
    <v-tab-item>
      <v-card>
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
export default {
  props: ["group"],
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
  },
};
</script>