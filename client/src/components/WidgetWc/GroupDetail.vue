<template>
  <div>
    <m-tab-bar v-show="group.modules">
      <m-tab-scroller>
        <!-- Feed-->
        <!-- chat -->
        <button active @click="view = group.modules[0].title">
          <m-tab
            active
            v-if="group.modules[0].active == true && modules.chat == true"
          >
            {{ group.modules[0].title }}
          </m-tab>
        </button>
        <!-- activity  -->
        <button @click="view = group.modules[1].title">
          <m-tab
            v-if="group.modules[1].active == true && modules.activity == true"
          >
            {{ group.modules[1].title }}
          </m-tab>
        </button>
        <!-- Bookmark-->
        <button @click="view = group.modules[2].title">
          <m-tab
            v-if="group.modules[2].active == true && modules.bookmarks == true"
          >
            {{ group.modules[2].title }}
          </m-tab>
        </button>
        <!-- Documents-->
        <button @click="view = group.modules[3].title">
          <m-tab
            v-if="group.modules[3].active == true && modules.documents == true"
          >
            {{ group.modules[3].title }}
          </m-tab>
        </button>
        <!-- People-->
        <button @click="view = group.modules[4].title">
          <m-tab
            v-if="group.modules[4].active == true && modules.people == true"
          >
            {{ group.modules[4].title }}
          </m-tab>
        </button>
        <!-- Settings-->
        <button @click="view = group.modules[5].title">
          <!-- To DO : admin verification-->
          <m-tab
            v-if="group.modules[5].active == true && modules.settings == true"
          >
            {{ group.modules[5].title }}
          </m-tab>
        </button>
        <button @click="view = group.modules[6].title">
          <m-tab v-if="group.modules[6].active == true">
            {{ group.modules[6].title }}
          </m-tab>
        </button>
      </m-tab-scroller>
    </m-tab-bar>
    <!--Content-->
    <v-container style="overflow: auto" fluid v-if="view == 'Group Chat'">
      <ChatView></ChatView>
    </v-container>

    <div v-show="view == 'Activity'"></div>
    <div v-show="view == 'Bookmarks'">
      <v-container style="height: 350px; overflow: auto" fluid>
        <BookmarkView></BookmarkView>
      </v-container>
    </div>

    <div v-show="view == 'Snippets'"></div>
    <div v-show="view == 'Document'"></div>
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
import BookmarkView from "@/components/Bookmark/BookmarkView.vue";
import GroupSettings from "@/components/Group/GroupSettings.vue";
import GroupPeople from "@/components/Group/GroupPeople.vue";
export default {
  components: {
    ChatView,
    GroupSettings,
    GroupPeople,
    BookmarkView,
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
