<!-- Body of the Bookmarks-->
<template>
  <v-container style="height: 250px; overflow: auto" ref="container" fluid>
    <!-- Messages -->
    <div
      v-for="(item, index) in bookmarks"
      :key="index"
      :class="[
        'flex-row align-right',
        item.username == 'You' ? 'justify-end' : null,
      ]"
    >
    <li>
      {{item}}
    </li>
    </div>
  </v-container>
</template>

<script>
export default {
  props : ["bookmarks"],
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
  created(){

  }
};
</script>