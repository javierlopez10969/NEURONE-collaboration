<template>
  <div>
    <h1 :style="{ color: group.color }">{{ group.name }}</h1>
    <m-tab-bar v-show="group.modules">
      <m-tab-scroller>
        <!-- chat -->
        <div v-for="(module, index) in group.modules" :key="module.title">
          <button active @click="view = module.title">
            <m-tab
              active
              v-if="
                module.active == true &&
                modules.chat == true &&
                index === 'chat'
              "
            >
              {{ module.title }}
            </m-tab>
            <m-tab
              v-if="
                module.active == true &&
                findModule(index) == true &&
                index != 'chat'
              "
            >
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

    <div v-show="view == 'Snippets'"></div>
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
export default {
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
    BookmarkView,
    Activity,
    DocumentView,
  },
  data() {
    return {
      tab: null,
      view: "Group Chat",
    };
  },
  created() {
    this.group = this.$store.state.group;
  },
  computed: {
    group: {
      // getter
      get() {
        return this.$store.state.group;
      },
      // setter
      set(newValue) {
        return newValue;
      },
    },
    modules() {
      return this.$store.state.modules;
    },
  },
  methods: {
    findModule(module) {
      return this.modules[module];
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
