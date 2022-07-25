<template>
  <div>
    <h1 :style="{ color: group.color }">{{ group.name }}</h1>
    <m-tab-bar v-show="group.modules">
      <m-tab-scroller>
        <!-- chat -->
        <div v-for="(module, index) in group.modules" :key="module.title">
          <button
            active
            @click="(view = module.title), cleanNotification(index)"
          >
            <m-tab
              active
              v-if="
                module.active == true &&
                modules.chat == true &&
                index === 'chat'
              "
            >
              <div
                v-if="notifications.modules[index].total != 0"
                class="notification"
              >
                <span class="badge2">
                  {{ notifications.modules[index].total }}</span
                >
              </div>
              {{ module.title }}
            </m-tab>
            <m-tab
              v-if="
                module.active == true &&
                findModule(index) == true &&
                index != 'chat'
              "
            >
              <div
                v-if="notifications.modules[index].total != 0"
                class="notification"
              >
                <span class="badge2">
                  {{ notifications.modules[index].total }}</span
                >
              </div>
              {{ module.title }}
            </m-tab>
          </button>
        </div>
      </m-tab-scroller>
    </m-tab-bar>
    <!--Content-->
    <v-container style="overflow: auto" fluid v-if="view == 'Group Chat'">
      <ChatView></ChatView>
    </v-container>

    <div v-show="view == 'Activity'">
      <Activity></Activity>
    </div>
    <div v-show="view == 'Bookmarks'">
      <v-container style="height: 350px; overflow: auto" fluid>
        <BookmarkView></BookmarkView>
      </v-container>
    </div>

    <div v-show="view == 'Snippets'">
      <SnippetView></SnippetView>
    </div>
    <div v-show="view == 'Feed'">
      <FeedView></FeedView>
    </div>
    <div v-show="view == 'Tasks'">
      <TaskView></TaskView>
    </div>
    <div v-show="view == 'Documents'">
      <DocumentView></DocumentView>
    </div>
    <div v-show="view == 'People'">
      <GroupPeople :group="group"></GroupPeople>
    </div>
    <div v-if="view == 'Settings'">
      <v-container style="height: 350px; overflow: auto" fluid>
        <GroupSettings :groupR="group" :mode="'widget'"></GroupSettings>
      </v-container>
    </div>
  </div>
</template>

<script>
import ChatView from "@/components/Chat/ChatView.vue";
import Activity from "@/components/Group/GroupActivity.vue";
import BookmarkView from "@/components/Bookmark/BookmarkView.vue";
import GroupSettings from "@/components/Group/GroupSettings.vue";
import GroupPeople from "@/components/Group/GroupPeople.vue";
import DocumentView from "@/components/Document/DocumentView.vue";
import TaskView from "@/components/Task/TaskView.vue";
import FeedView from "@/components/Feed/FeedView.vue";
import SnippetView from "@/components/Snippet/SnippetView.vue";
import axios from "axios";
export default {
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
    BookmarkView,
    Activity,
    DocumentView,
    SnippetView,
    TaskView,
    FeedView,
  },
  data() {
    return {
      tab: null,
      view: "Group Chat",
      group: {},
    };
  },
  created() {
    this.group = this.$store.state.group;
  },
  computed: {
    modules() {
      return this.$store.state.modules;
    },
    notifications() {
      const id = this.$store.state.group._id;
      const notifications = this.$store.state.notifications.notifications;
      return notifications.find((element) => element.group === id);
    },
  },
  methods: {
    findModule(module) {
      return this.modules[module];
    },
    async cleanNotification(module) {
      if (this.notifications.modules[module].total != 0) {
        var newNotifications = this.notifications;
        newNotifications.total =
          newNotifications.total - newNotifications.modules[module].total;
        newNotifications.modules[module].total = 0;
        console.log(newNotifications);
        await axios.post(
          this.$store.state.apiURL + "/notification/" + newNotifications._id,
          newNotifications
        );
      }
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
