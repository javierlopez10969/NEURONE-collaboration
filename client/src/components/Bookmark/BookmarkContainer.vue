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
      <a v-if="item.username === 'system'"
        ><div v-bind:class="item.color + '--text text-center'">
          <h1>{{ item.message }}</h1>
        </div>
      </a>
      <a v-if="item.username !== 'system'">

</a>
    </div>
  </v-container>
</template>

<script>
export default {
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