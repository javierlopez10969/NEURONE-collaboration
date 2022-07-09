<!-- Body of the Bookmarks-->
<template>
  <div style="height: 250px; overflow: auto" ref="container">
    <!-- Messages -->
    <div
      v-for="(bookmark, index) in bookmarks"
      :key="index"
      :class="[
        'flex-row align-right',
        bookmark.username == 'You' ? 'justify-end' : null,
      ]"
    >
      <Bookmark :bookmark="bookmark"></Bookmark>
      <p></p>
    </div>
  </div>
</template>

<script>
import Bookmark from "./BookmarkElement";
export default {
  components: {
    Bookmark,
  },
  props: ["bookmarks"],
  updated() {
    //Scroll to the bottom
    this.scrollToBottom();
  },
  methods: {
    //Put the message in the bottom
    scrollToBottom() {
      const container = this.$refs.container;
      container.scrollTop = container.scrollHeight;
    },
  },
  created() {},
};
</script>
