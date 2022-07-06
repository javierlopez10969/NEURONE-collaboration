<!-- Body of the Bookmarks-->
<template>
  <div style="height: 250px; overflow: auto" ref="container">
    <!-- Messages -->
    <div
      v-for="(item, index) in bookmarks"
      :key="index"
      :class="[
        'flex-row align-right',
        item.username == 'You' ? 'justify-end' : null,
      ]"
    >
      <m-card>
        <m-card-media style="color: black" square>
          Title
          <p></p>
          URL : {{ item.URL }}
          <p></p>
          Page Title : {{ item.pageTitle }}
          <p></p>
          Notes : {{ item.notes }}
          <p></p>
          Date :
        </m-card-media>
      </m-card>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
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
