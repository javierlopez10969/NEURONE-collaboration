<template>
  <a>
    <!--Chat -->
    <v-tab-item>
      <ChatView></ChatView>
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
        <BookmarkView></BookmarkView>
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
      <GroupSettings :groupR="group" :mode="'widget'"></GroupSettings>
    </v-tab-item>
  </a>
</template>
<script>
import ChatView from "@/components/Chat/ChatView.vue";
import BookmarkView from "@/components/Bookmark/BookmarkView.vue";
import GroupSettings from "@/components/Group/GroupSettings.vue";
import GroupPeople from "@/components/Group/GroupPeople.vue";
export default {
  props: ["group"],
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
    BookmarkView,
  },
};
</script>